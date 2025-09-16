"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#F7F3E6]  pt-2">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="grid items-center gap-2 md:grid-cols-2">
          {/* Left */}
          <div className="space-y-2">
            <h3 className="text-left text-xl md:text-2xl font-extrabold text-[#4b1d1d]">
              Remember, you don’t have to face everything alone.
            </h3>
            <h3 className="text-left text-xl md:text-2xl font-extrabold text-[#4b1d1d]">
              We’re here to listen, support, and guide you — anytime you need.
            </h3>
          </div>

          {/* Right */}
          <div className="flex justify-center md:justify-end">
            <div className="flex justify-center md:justify-end">
              <Image
                src="/footer.png"
                alt="Supportive illustration used in the footer"
                width={375}
                height={513}
                className="h-auto w-[80px] sm:w-[100px] md:w-[140px] lg:w-[188px] rounded-3xl object-cover"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 140px, 188px"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
