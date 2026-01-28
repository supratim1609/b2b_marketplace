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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-950 overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero Section - Clean Light */}
        <section className="relative pt-20 pb-20 sm:pt-32 sm:pb-32 px-6 overflow-hidden">
          {/* Ambient Backgrounds - Lightened */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">The New Standard for B2B</span>
              </div>

              <h1 className="text-[44px] sm:text-7xl md:text-8xl lg:text-[120px] font-black tracking-tightest leading-[1] sm:leading-[0.85] mb-10 font-heading text-slate-950">
                The Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700">Indian B2B.</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                Connect directly with the next generation of verified manufacturers.
                Full-stack infrastructure built for global scale.
              </p>

              <div className="flex justify-center mb-24">
                <Link
                  href="/signup"
                  className="group px-16 py-6 bg-slate-950 text-white rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-slate-800 transition-all active:scale-95 shadow-2xl shadow-slate-200 flex items-center justify-center gap-3"
                >
                  Get Started <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Trust Strip */}
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-slate-100">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="h-10 w-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-4 border border-cyan-100">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Verified Factories</h3>
                  <p className="text-sm text-slate-500 font-light">Direct access to audited manufacturing clusters across India.</p>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 border border-blue-100">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Secure Escrow</h3>
                  <p className="text-sm text-slate-500 font-light">Protection for high-value orders through our secure payment bridge.</p>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 border border-indigo-100">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Built for Scale</h3>
                  <p className="text-sm text-slate-500 font-light">Scale production seamlessly from prototyping to bulk export.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Dynamic Activity Strip */}
        <section className="py-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 whitespace-nowrap text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] px-10"
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

        {/* Final CTA - Ultra Minimal */}
        <section className="pt-32 pb-32 px-6">
          <FadeIn>
            <div className="max-w-6xl mx-auto p-12 md:p-32 rounded-[64px] bg-slate-950 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
              <h2 className="text-4xl md:text-9xl font-black tracking-tightest uppercase mb-12 leading-[0.8]">Build the <br /> Future.</h2>
              <div className="flex justify-center">
                <Link href="/signup" className="px-16 py-6 bg-white text-slate-950 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all active:scale-95 shadow-2xl">
                  Get Started Now
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
