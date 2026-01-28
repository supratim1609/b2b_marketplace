"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Building2,
  Users2,
  ChevronRight,
  Menu,
  X,
  Plus,
  Zap,
  Star,
  Globe,
  ArrowUpRight
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./components/Animators";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero Section - Immersive Dark */}
        <section className="relative pt-20 pb-20 sm:pt-32 sm:pb-32 px-6 overflow-hidden">
          {/* Ambient Backgrounds */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">The New Standard for B2B</span>
              </div>

              <h1 className="text-[44px] sm:text-7xl md:text-8xl lg:text-[120px] font-black tracking-tightest leading-[1] sm:leading-[0.85] mb-10 font-heading text-white">
                The Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600">Indian B2B.</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                Connect directly with the next generation of verified manufacturers.
                Full-stack infrastructure built for global scale.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-24">
                <Link
                  href="/signup"
                  className="group px-12 py-6 bg-white text-slate-950 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all active:scale-95 shadow-2xl shadow-cyan-500/10 flex items-center justify-center gap-3"
                >
                  Get Started <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="group px-12 py-6 bg-white/5 border border-white/10 text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center gap-3"
                >
                  View Workflow
                </Link>
              </div>

              {/* Trust Strip */}
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/5">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="h-10 w-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/20">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Verified Factories</h3>
                  <p className="text-sm text-slate-500 font-light">Direct access to audited manufacturing clusters across India.</p>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/20">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Secure Escrow</h3>
                  <p className="text-sm text-slate-500 font-light">Protection for high-value orders through our secure payment bridge.</p>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 border border-indigo-500/20">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Built for Scale</h3>
                  <p className="text-sm text-slate-500 font-light">Scale production seamlessly from prototyping to bulk export.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Dynamic Activity Strip */}
        <section className="py-6 bg-white/[0.02] border-y border-white/5 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 whitespace-nowrap text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] px-10"
          >
            <div className="flex gap-4 items-center">NETWORK: 24 FACTORIES VERIFIED IN SURAT CLUSTER</div>
            <div className="flex gap-4 items-center">LOGISTICS: NEW DELHI-NCR TRADE LANE ACTIVE</div>
            <div className="flex gap-4 items-center">QUALITY: ISO-9001 COMPLIANCE PORTAL UPDATED</div>
            <div className="flex gap-4 items-center">RFQ: 120CR+ QUOTES PROCESSED THIS WEEK</div>
            {/* Duplicates */}
            <div className="flex gap-4 items-center">NETWORK: 24 FACTORIES VERIFIED IN SURAT CLUSTER</div>
            <div className="flex gap-4 items-center">LOGISTICS: NEW DELHI-NCR TRADE LANE ACTIVE</div>
            <div className="flex gap-4 items-center">QUALITY: ISO-9001 COMPLIANCE PORTAL UPDATED</div>
          </motion.div>
        </section>

        {/* Feature Sections */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <FadeIn className="p-12 rounded-[56px] bg-white/[0.03] border border-white/5 group hover:bg-white/[0.06] transition-all">
                <Users2 className="h-14 w-14 text-cyan-400 mb-8" />
                <h2 className="text-4xl font-black mb-6 uppercase tracking-tightest">For <span className="text-cyan-400">Buyers.</span></h2>
                <p className="text-slate-400 text-lg mb-10 font-light leading-relaxed">
                  Source with precision. Access the deepest manufacturing network in Bharat with full-stack quality assurance.
                </p>
                <Link href="/signup?type=buyer" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-cyan-400 group-hover:gap-4 transition-all">
                  Register as Buyer <ArrowRight className="h-4 w-4" />
                </Link>
              </FadeIn>

              <FadeIn delay={0.2} className="p-12 rounded-[56px] bg-white/[0.03] border border-white/5 group hover:bg-white/[0.06] transition-all">
                <Building2 className="h-14 w-14 text-indigo-400 mb-8" />
                <h2 className="text-4xl font-black mb-6 uppercase tracking-tightest">For <span className="text-indigo-400">Sellers.</span></h2>
                <p className="text-slate-400 text-lg mb-10 font-light leading-relaxed">
                  Scale your floor. Get your industrial capacity verified and reach high-intent global and domestic buyers.
                </p>
                <Link href="/signup?type=supplier" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-400 group-hover:gap-4 transition-all">
                  Join as Seller <ArrowRight className="h-4 w-4" />
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pb-32 px-6">
          <FadeIn>
            <div className="max-w-6xl mx-auto p-12 md:p-24 rounded-[64px] bg-white text-slate-950 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
              <h2 className="text-4xl md:text-8xl font-black tracking-tightest uppercase mb-12 leading-[0.85]">Shape the <br /> Future.</h2>
              <div className="flex justify-center flex-col sm:flex-row gap-4">
                <Link href="/signup" className="px-12 py-6 bg-slate-950 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-800 transition-all active:scale-95 shadow-2xl">
                  Join the Network
                </Link>
                <Link href="/rfq" className="px-12 py-6 bg-slate-100 text-slate-950 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-200 transition-all active:scale-95 flex items-center justify-center gap-3">
                  Post an RFQ <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}
