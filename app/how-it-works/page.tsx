"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/Animators";
import {
    Search,
    ShoppingCart,
    Truck,
    CreditCard,
    Factory,
    UploadCloud,
    BadgeCheck,
    DollarSign,
    ChevronDown,
    ChevronUp,
    ArrowRight,
    Target,
    ShieldCheck,
    Zap
} from "lucide-react";
import Link from "next/link";

export default function HowItWorksPage() {
    const [userType, setUserType] = useState<'buyer' | 'supplier'>('buyer');

    const buyerSteps = [
        {
            id: "01",
            title: "Project Definition",
            description: "Define your sourcing needs, material specs, and target landing price. Our engine suggests the best matching clusters.",
            icon: Target,
            color: "text-cyan-400",
        },
        {
            id: "02",
            title: "Quote Aggregation",
            description: "Verified manufacturers submit competitive bids. We normalize these quotes to help you compare apples-to-apples.",
            icon: DollarSign,
            color: "text-blue-400",
        },
        {
            id: "03",
            title: "Escrow Funding",
            description: "Fund your order through our secure payment bridge. Capital is protected until QC reports are approved.",
            icon: ShieldCheck,
            color: "text-indigo-400",
        },
        {
            id: "04",
            title: "Doorstep Logistics",
            description: "Full visibility from factory floor to your warehouse. Customs, duties, and port-clearance handled.",
            icon: Truck,
            color: "text-fuchsia-400",
        },
    ];

    const supplierSteps = [
        {
            id: "01",
            title: "Capacity Listing",
            description: "List your available floor time and machine capabilities. Get verified through our 3-tier audit process.",
            icon: Factory,
            color: "text-cyan-400",
        },
        {
            id: "02",
            title: "Lead Intelligence",
            description: "Access high-intent RFQs that match your specific machine setup and expertise level.",
            icon: Zap,
            color: "text-blue-400",
        },
        {
            id: "03",
            title: "Smart Quoting",
            description: "Use our data-backed pricing tools to submit bids that win without sacrificing your margins.",
            icon: UploadCloud,
            color: "text-indigo-400",
        },
        {
            id: "04",
            title: "Rapid Settlement",
            description: "Payments are triggered automatically upon shipment verification. Zero-delay capital rotation.",
            icon: BadgeCheck,
            color: "text-fuchsia-400",
        },
    ];

    const currentSteps = userType === 'buyer' ? buyerSteps : supplierSteps;

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
            <Navbar />

            <main className="pt-32 pb-20">
                {/* Hero section with high-impact typography */}
                <section className="px-6 relative mb-24 md:mb-40">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <FadeIn>
                            <h1 className="text-5xl md:text-8xl font-black tracking-tightest mb-8 uppercase leading-[0.9]">
                                The Trade <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600">Operating System.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
                                We've engineered every friction point out of the B2B journey. <br className="hidden md:block" />
                                Faster, deeper, and completely verified.
                            </p>

                            <div className="flex justify-center p-1.5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 w-fit mx-auto">
                                <button
                                    onClick={() => setUserType('buyer')}
                                    className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${userType === 'buyer'
                                            ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                                            : 'text-slate-400 hover:text-white'
                                        }`}
                                >
                                    Buyer Path
                                </button>
                                <button
                                    onClick={() => setUserType('supplier')}
                                    className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${userType === 'supplier'
                                            ? 'bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]'
                                            : 'text-slate-400 hover:text-white'
                                        }`}
                                >
                                    Seller Path
                                </button>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Vertical Process Steps */}
                <section className="px-6 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
                        <div className="sticky top-40 hidden md:block">
                            <h2 className="text-6xl font-black tracking-tightest uppercase text-slate-900 border-l-8 border-cyan-500 pl-8">
                                Step by <br /> step.
                            </h2>
                            <p className="text-slate-500 text-lg mt-8 max-w-sm font-light">
                                Our platform handles the complexity so you can focus on building your business.
                            </p>
                        </div>

                        <StaggerContainer className="space-y-12">
                            {currentSteps.map((step, index) => (
                                <StaggerItem key={step.id}>
                                    <div className="group relative p-10 rounded-[40px] bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-white/10 transition-all">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className={`h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center ${step.color} border border-white/5`}>
                                                <step.icon className="h-7 w-7" />
                                            </div>
                                            <span className="text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors">{step.id}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">{step.title}</h3>
                                        <p className="text-slate-400 leading-relaxed font-light">{step.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="mt-40 px-6">
                    <FadeIn>
                        <div className="max-w-6xl mx-auto p-12 md:p-24 rounded-[64px] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-cyan-500/5 blur-[120px] -z-10" />
                            <h2 className="text-4xl md:text-7xl font-black tracking-tightest uppercase mb-12">Ready to <span className="text-cyan-400">Scale?</span></h2>
                            <Link
                                href="/signup"
                                className="inline-flex items-center gap-4 px-12 py-6 bg-white text-slate-950 rounded-full font-black text-xl uppercase tracking-widest hover:bg-slate-200 transition-all hover:scale-105 active:scale-95"
                            >
                                Get Started Now <ArrowRight className="h-6 w-6" />
                            </Link>
                        </div>
                    </FadeIn>
                </section>
            </main>

            <Footer />
        </div>
    );
}
