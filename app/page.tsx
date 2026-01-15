import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import RecentBuys from "./components/RecentBuys";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans text-slate-50 selection:bg-teal-500 selection:text-white">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Features />
      <HowItWorks />
      <RecentBuys />
      <Footer />
    </main>
  );
}
