import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { MobileShowcase } from "@/components/sections/MobileShowcase";
import { Coverage } from "@/components/sections/Coverage";
import { WhyOralPath } from "@/components/sections/WhyOralPath";
import { TechPipeline } from "@/components/sections/TechPipeline";
import { Disclaimer } from "@/components/sections/Disclaimer";
import { Beta } from "@/components/sections/Beta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative bg-background">
        <Hero />
        <Problem />
        <HowItWorks />
        <MobileShowcase />
        <Coverage />
        <WhyOralPath />
        <TechPipeline />
        <Disclaimer />
        <Beta />
      </main>
      <Footer />
    </>
  );
}
