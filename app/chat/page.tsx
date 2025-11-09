"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi there, I’m here to listen. How are you feeling today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/therapy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const reply = data.reply || "I'm here with you. Could you tell me more?";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I’m sorry — something went wrong while connecting.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#FFF7D9] via-[#F6F9E9] to-[#EAF8D9] relative z-0">
      <Navbar />

      {/* Chat Section */}
      <div className="flex-1 overflow-y-auto px-4 lg:py-25 sm:px-8 py-10 flex justify-center pb-28">
        {/* added pb-28 so last messages aren't hidden behind input bar */}
        <div className="w-full max-w-3xl space-y-5">
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: msg.role === "user" ? 20 : -10,
                  x: msg.role === "user" ? 40 : -40,
                }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-5 py-3 rounded-2xl max-w-[85%] sm:max-w-[70%] md:max-w-[65%] leading-relaxed text-[15px] shadow-sm ${
                    msg.role === "user"
                      ? "bg-[#B0D4B8] text-gray-800 rounded-br-none"
                      : "bg-[#F2F2F2] text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Fixed Input Section */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white/50 backdrop-blur-sm px-3 sm:px-6 py-3 flex justify-center z-10">
        <div className="flex items-center space-x-3 w-full max-w-3xl">
          <textarea
            rows={1}
            className="flex-1 resize-none border border-gray-300 rounded-full px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#A0C6A8] text-gray-800 placeholder-gray-500 bg-white/70"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" &&
              !e.shiftKey &&
              (e.preventDefault(), sendMessage())
            }
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={sendMessage}
            disabled={loading}
            className="bg-[#A0C6A8] hover:bg-[#92B89B] text-gray-800 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium transition disabled:opacity-50"
          >
            {loading ? "..." : "Send"}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
