import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import RecentBuys from "./components/RecentBuys";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-cyan-200 selection:text-cyan-900">
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
