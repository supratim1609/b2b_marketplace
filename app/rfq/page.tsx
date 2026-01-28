"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RFQForm from "../components/RFQForm";
import { FadeIn } from "../components/Animators";
import { Sparkles } from "lucide-react";

export default function PostRFQ() {
    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
            <Navbar />

            <main className="pt-32 pb-24 px-6 relative">
                {/* Visual Ambient */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="mx-auto max-w-3xl relative z-10">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                                <Sparkles className="h-4 w-4 text-cyan-400" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">Next Gen Sourcing</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black tracking-tightest uppercase mb-6 leading-none">
                                Broadcast <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600">Your Quote.</span>
                            </h1>
                            <p className="text-lg text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
                                Get direct manufacturing bids within 24 hours. No middlemen, no hidden fees. Just direct factory access.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <RFQForm />
                    </FadeIn>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/5 pt-12">
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">Direct</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-600">Factory Access</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">Secure</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-600">Escrow Bridge</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">Verified</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-600">Indian Tech</div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
