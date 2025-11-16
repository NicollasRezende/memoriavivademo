import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import MemoryTimeline from "@/components/MemoryTimeline";
import AICompanion from "@/components/AICompanion";
import SocialCircles from "@/components/SocialCircles";
import EventsMap from "@/components/EventsMap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <MemoryTimeline />
      <AICompanion />
      <SocialCircles />
      <EventsMap />
      <Footer />
    </main>
  );
}
