"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Building2,
  Users2,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./components/Animators";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900 overflow-x-hidden">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
      </div>

      {/* Modern Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-slate-900">
            bechoHub
          </Link>

          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-500">
            <Link href="#how-it-works" className="hover:text-slate-900 transition-colors">How it works</Link>
            <Link href="#onboarding" className="bg-slate-900 text-white px-7 py-3 rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-200">
              Get Started
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section - The "Good Marketing" Impact */}
        <section className="relative pt-32 pb-40 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center relative">
            <FadeIn>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/[0.03] border border-slate-900/5 text-[11px] font-bold text-slate-500 uppercase tracking-[0.25em] mb-12 animate-fade-in">
                India&apos;s Premiere B2B Network
              </div>

              <h1 className="text-6xl md:text-[120px] font-black tracking-tightest leading-[0.85] mb-12 font-heading text-slate-900">
                Sourcing made <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600">frictionless.</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                Connect with verified Indian manufacturers. <br className="hidden md:block" />
                Zero guesswork, secured escrow, guaranteed fulfillment.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link href="#onboarding" className="group w-full sm:w-auto px-12 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all hover:scale-[1.05] active:scale-95 shadow-2xl shadow-slate-200 flex items-center justify-center gap-3">
                  Launch Growth
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#how-it-works" className="w-full sm:w-auto px-12 py-5 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all active:scale-95">
                  The Process
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Activity Ticker - Social Proof */}
          <div className="mt-32 max-w-full overflow-hidden border-y border-slate-100 py-6 bg-slate-50/50">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 whitespace-nowrap text-[10px] font-bold text-slate-400 uppercase tracking-widest px-8"
            >
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-cyan-500" /> ORDER: INDUSTRIAL BEARINGS (12K UNITS) TO PUNE</div>
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-blue-500" /> RFQ: MEDICAL TEXTILES (50 TONS) FROM SURAT</div>
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-indigo-500" /> PAYMENT: BANGALORE MSME HUB (₹12,40,000)</div>
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-cyan-500" /> ORDER: PRECISION GEARS (5K UNITS) TO GURUGRAM</div>
              {/* Duplicate for seamless scroll */}
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-cyan-500" /> ORDER: INDUSTRIAL BEARINGS (12K UNITS) TO PUNE</div>
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-blue-500" /> RFQ: MEDICAL TEXTILES (50 TONS) FROM SURAT</div>
              <div className="flex gap-4 items-center"><span className="h-2 w-2 rounded-full bg-indigo-500" /> PAYMENT: BANGALORE MSME HUB (₹12,40,000)</div>
            </motion.div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <StaggerContainer className="grid md:grid-cols-3 gap-20">
              <StaggerItem className="space-y-6">
                <div className="h-14 w-14 rounded-3xl bg-cyan-50 flex items-center justify-center text-cyan-600 shadow-inner">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Vetted Supply</h3>
                <p className="text-slate-500 leading-relaxed text-lg font-light">Every entity is GST-verified. Trade with India&apos;s most reliable manufacturers, zero guesswork.</p>
              </StaggerItem>
              <StaggerItem className="space-y-6">
                <div className="h-14 w-14 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-inner">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Escrow Safeguard</h3>
                <p className="text-slate-500 leading-relaxed text-lg font-light">Your capital is protected. Funds are held and only released upon your quality approval.</p>
              </StaggerItem>
              <StaggerItem className="space-y-6">
                <div className="h-14 w-14 rounded-3xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-inner">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Logistics Engine</h3>
                <p className="text-slate-500 leading-relaxed text-lg font-light">From factory output to warehouse delivery. Real-time tracking with optimized fulfillment.</p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* The Simple Flow */}
        <section id="how-it-works" className="py-40 px-6 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-24 text-center tracking-tight">Built for scale.</h2>
            </FadeIn>
            <div className="space-y-32">
              <div className="flex flex-col md:flex-row items-start gap-16">
                <div className="flex-1">
                  <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] mb-4 block">Engine 01</span>
                  <h3 className="text-3xl font-bold mb-6">Describe your need</h3>
                  <p className="text-slate-500 text-xl font-light leading-relaxed">Post requirements with technical specs. Our matching engine selects the top 5 manufacturers instantly.</p>
                </div>
                <div className="flex-1 w-full bg-white p-12 rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100">
                  <div className="space-y-4">
                    <div className="h-3 w-3/4 bg-slate-100 rounded-full" />
                    <div className="h-3 w-1/2 bg-slate-100 rounded-full" />
                    <div className="h-8 w-full bg-cyan-50 rounded-2xl flex items-center px-4 border border-cyan-100">
                      <div className="h-2 w-1/3 bg-cyan-500/20 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-start gap-16">
                <div className="flex-1">
                  <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-4 block">Engine 02</span>
                  <h3 className="text-3xl font-bold mb-6">Secure the deal</h3>
                  <p className="text-slate-500 text-xl font-light leading-relaxed">Compare verified quotes. Negotiate terms and initiate escrow payment in one click.</p>
                </div>
                <div className="flex-1 w-full bg-white p-12 rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100 flex gap-4">
                  <div className="h-32 w-full bg-slate-50 rounded-3xl border border-slate-100 animate-pulse" />
                  <div className="h-32 w-full bg-slate-50 rounded-3xl border border-slate-100" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-16">
                <div className="flex-1">
                  <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em] mb-4 block">Engine 03</span>
                  <h3 className="text-3xl font-bold mb-6">Quality Control</h3>
                  <p className="text-slate-500 text-xl font-light leading-relaxed">Goods are inspected at dispatch. Capital is released only when quality standards are met.</p>
                </div>
                <div className="flex-1 w-full bg-white p-12 rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100 flex items-center justify-center">
                  <ShieldCheck className="w-20 h-20 text-slate-200" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Onboarding Bridge */}
        <section id="onboarding" className="py-40 px-6 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[160px] -z-10" />
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <FadeIn>
                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Ready to scale?</h2>
                <p className="text-slate-400 text-xl font-light">Select your point of entry into the network.</p>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <FadeIn delay={0.1}>
                <Link href="/signup?type=buyer" className="group block bg-white/[0.03] border border-white/5 hover:border-cyan-500/40 p-12 rounded-[48px] transition-all hover:bg-white/[0.06] relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 group-hover:text-cyan-400 transition-all transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                    <ArrowRight className="h-10 w-10 -rotate-45" />
                  </div>
                  <Users2 className="h-14 w-14 text-cyan-400 mb-8" />
                  <h3 className="text-3xl font-bold mb-6 tracking-tight">I am a Buyer</h3>
                  <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">Source high-volume industrial goods with guaranteed quality and payment security.</p>
                  <div className="inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-cyan-400 gap-2">
                    Start Sourcing <ChevronRight className="h-4 w-4" />
                  </div>
                </Link>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Link href="/signup?type=supplier" className="group block bg-white/[0.03] border border-white/5 hover:border-indigo-500/40 p-12 rounded-[48px] transition-all hover:bg-white/[0.06] relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 group-hover:text-indigo-400 transition-all transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                    <ArrowRight className="h-10 w-10 -rotate-45" />
                  </div>
                  <Building2 className="h-14 w-14 text-indigo-400 mb-8" />
                  <h3 className="text-3xl font-bold mb-6 tracking-tight">I am a Seller</h3>
                  <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">Expose your manufacturing capacity to verified buyers and grow your order book.</p>
                  <div className="inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-indigo-400 gap-2">
                    Begin Selling <ChevronRight className="h-4 w-4" />
                  </div>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-24 border-t border-slate-100 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-2xl font-black tracking-tighter text-slate-900">bechoHub</div>
          <div className="flex gap-12 text-sm font-bold text-slate-400">
            <Link href="#" className="hover:text-slate-900 transition-colors uppercase tracking-widest">Privacy</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors uppercase tracking-widest">Terms</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors uppercase tracking-widest">Support</Link>
          </div>
          <div className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
            &copy; 2025 BECHOHUB GLOBAL. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
