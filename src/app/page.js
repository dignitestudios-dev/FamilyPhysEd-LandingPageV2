"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Purpose } from "@/components/Purpose";
import { Sessions } from "@/components/Sessions";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyUs } from "@/components/WhyUs";
import { AppDownload } from "@/components/AppDownload";
import { Testimonials } from "@/components/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <Purpose />
        <Sessions />
        <HowItWorks />
        <WhyUs />
        <AppDownload />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
