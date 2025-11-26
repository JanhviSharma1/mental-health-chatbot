import torch
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import AutoTokenizer, AutoModelForCausalLM
import logging
from contextlib import asynccontextmanager

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="AI Therapist Bot",
    version="1.0.0"
)

MODEL_NAME = "Gurpreet24/therapist_model"
# HF_TOKEN ="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"

tokenizer = None
model = None

class UserMessage(BaseModel):
    message: str

class ModelResponse(BaseModel):
    reply: str

@asynccontextmanager
async def lifespan(app: FastAPI):
    global tokenizer, model
    try:
        logger.info("Loading tokenizer and model...")
        
        tokenizer = AutoTokenizer.from_pretrained(
            MODEL_NAME,
            token=HF_TOKEN,
            trust_remote_code=True
        )
        
    
        if tokenizer.pad_token is None:
            tokenizer.pad_token = tokenizer.eos_token

        model = AutoModelForCausalLM.from_pretrained( 
            MODEL_NAME,
            torch_dtype=torch.float16,
            device_map="auto",
            token=HF_TOKEN,
            trust_remote_code=True
        )
        
        logger.info("Model and tokenizer loaded successfully!")
        
    except Exception as e:
        logger.error(f"Error loading model: {str(e)}")
        raise e

@app.post("/chat", response_model=ModelResponse)
async def generate_reply(req: UserMessage):
    """Generate a therapeutic response"""
    try:
        if model is None or tokenizer is None:
            raise HTTPException(status_code=503, detail="Model not loaded")
        
        user_input = req.message.strip()
        
        if not user_input:
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        
      
        prompt = f"<s>[INST] {user_input} [/INST]"
        
     
        inputs = tokenizer(
            prompt,
            return_tensors="pt",
            truncation=True,
            max_length=1024,
            padding=True
        ).to(model.device)
        
       
        with torch.no_grad():
            output = model.generate(
                **inputs,
                max_new_tokens=300,
                temperature=0.7,
                top_p=0.9,
                do_sample=True,
                pad_token_id=tokenizer.eos_token_id,
                repetition_penalty=1.1
            )
        
      
        response = tokenizer.decode(output[0], skip_special_tokens=True)
        
        if "[/INST]" in response:
            response = response.split("[/INST]")[-1].strip()
        
       
        response = response.replace("<s>", "").replace("</s>", "").strip()
        
        return {"reply": response}
        
    except Exception as e:
        logger.error(f"Error generating response: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@app.get("/")
async def root():
    return {"message": "Therapist Model API Running Successfully!"}

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    status = "healthy" if model and tokenizer else "unhealthy"
    return {"status": status, "model_loaded": model is not None}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        app, 
        host="0.0.0.0", 
        port=8000,
        log_level="info",
        timeout_keep_alive=60
    )