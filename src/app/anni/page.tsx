"use client";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Countdown from "@/components/Countdown";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import MenuBox from "@/components/MenuBox";
import { menuBoxes } from "@/constants/menus";
import { MusicProvider } from "@/contexts/MusicContext";

export default function Anni() {
  return (
    <MusicProvider>
      <main>
        <Hero />
        <Countdown />
        <About />
        <Hobbies />
        <CTA />
      </main>
    </MusicProvider>
  );
}
