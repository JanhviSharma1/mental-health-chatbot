import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Support from "../components/Support";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#FFF7D9] via-[#F6F9E9] to-[#EAF8D9]">
      <Navbar />
      <Hero />
      <Support />
    </div>
  );
}
