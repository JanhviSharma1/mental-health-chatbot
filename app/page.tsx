import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Support from "@/components/Support";
import Service from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#FFF7D9] via-[#F6F9E9] to-[#EAF8D9]">
      <Navbar />
      <Hero />
      <Support />
      <Service />
      <Footer />
    </div>
  );
}
