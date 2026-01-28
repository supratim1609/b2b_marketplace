"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/Animators";
import { Search, ShoppingCart, Truck, CreditCard, Factory, UploadCloud, BadgeCheck, DollarSign, ChevronDown, ChevronUp } from "lucide-react";

export default function HowItWorksPage() {
    const [userType, setUserType] = useState<'buyer' | 'supplier'>('buyer');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (id: number) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    const buyerSteps = [
        {
            id: 1,
            title: "Post Your Requirement",
            description: "Tell us what you need, including quantity, specifications, and target price.",
            icon: Search,
            color: "bg-blue-100 text-blue-600",
        },
        {
            id: 2,
            title: "Receive Quotes",
            description: "Verified suppliers submit competitive bids within 24 hours.",
            icon: DollarSign,
            color: "bg-green-100 text-green-600",
        },
        {
            id: 3,
            title: "Secure Payment",
            description: "Pay into our secure escrow account. Funds are released only after delivery.",
            icon: CreditCard,
            color: "bg-purple-100 text-purple-600",
        },
        {
            id: 4,
            title: "Delivery & Feedback",
            description: "Track your shipment and rate your supplier to build trust.",
            icon: Truck,
            color: "bg-orange-100 text-orange-600",
        },
    ];

    const supplierSteps = [
        {
            id: 1,
            title: "Create Profile",
            description: "Sign up and complete your business profile with GST and certifications.",
            icon: Factory,
            color: "bg-teal-100 text-cyan-500",
        },
        {
            id: 2,
            title: "Browse Leads",
            description: "Access thousands of verified buy requirements from across the country.",
            icon: Search,
            color: "bg-indigo-100 text-indigo-600",
        },
        {
            id: 3,
            title: "Submit Quotes",
            description: "Send your best offers directly to buyers without intermediaries.",
            icon: UploadCloud,
            color: "bg-pink-100 text-pink-600",
        },
        {
            id: 4,
            title: "Get Paid Fast",
            description: "Receive payments securely upon successful delivery of goods.",
            icon: BadgeCheck,
            color: "bg-yellow-100 text-yellow-600",
        },
    ];

    const currentSteps = userType === 'buyer' ? buyerSteps : supplierSteps;

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-cyan-200 selection:text-cyan-900">
            <Navbar />
            <main className="pt-24 pb-16">
                {/* Hero Section */}
                <section className="relative px-6 lg:px-8 py-16 lg:py-24 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-fuchsia-200/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-200/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>

                    <div className="mx-auto max-w-4xl text-center relative z-10">
                        <FadeIn>
                            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl mb-6 font-heading">
                                How <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-fuchsia-600">bechoHub</span> Works
                            </h1>
                            <p className="text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
                                From request to delivery, we've streamlined every step of the sourcing process.
                                Simple, transparent, and secure.
                            </p>

                            <div className="mt-10 flex justify-center gap-4">
                                <button
                                    onClick={() => setUserType('buyer')}
                                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${userType === 'buyer'
                                        ? 'bg-slate-900 text-white shadow-lg shadow-cyan-500/20'
                                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                        }`}
                                >
                                    For Buyers
                                </button>
                                <button
                                    onClick={() => setUserType('supplier')}
                                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${userType === 'supplier'
                                        ? 'bg-slate-900 text-white shadow-lg shadow-fuchsia-500/20'
                                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                        }`}
                                >
                                    For Suppliers
                                </button>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Steps Section */}
                <section className="px-4 sm:px-6 lg:px-8 py-12">
                    <div className="mx-auto max-w-5xl">
                        <StaggerContainer className="space-y-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-transparent via-slate-200 to-transparent hidden md:block -z-10" />

                            {currentSteps.map((step, index) => (
                                <StaggerItem key={step.id}>
                                    <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="flex-1 w-full relative group">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                                            <div className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                                                <div className="h-12 w-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 text-cyan-600">
                                                    <step.icon className="h-6 w-6" />
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                                <p className="text-slate-600 leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>

                                        <div className="relative flex-shrink-0 z-10 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 border-4 border-white shadow-md font-bold text-slate-400 text-sm">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1 w-full hidden md:block" />
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* FAQ Snippet */}
                <section className="px-4 py-20 bg-slate-50 relative overflow-hidden">
                    <div className="mx-auto max-w-3xl">
                        <FadeIn>
                            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {[
                                    { q: "Is it free to join?", a: "Yes, joining bechoHub is completely free for both suppliers and buyers. We only charge a small transaction fee upon successful deals." },
                                    { q: "How are suppliers verified?", a: "We conduct a rigorous 3-step verification process verifying GST, factory audits, and past performance records." },
                                    { q: "Is my payment secure?", a: "Absolutely. We use an escrow system where funds are only released to the supplier after you verify the goods." }
                                ].map((faq, i) => (
                                    <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-blue-400/30 transition-all">
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                                        <p className="text-slate-600">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-4 py-20 text-center">
                    <FadeIn delay={0.2}>
                        <div className="bg-slate-900 rounded-3xl p-12 max-w-5xl mx-auto relative overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 opacity-50"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to transform your sourcing?</h2>
                                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Join thousands of businesses already using bechoHub to source smarter.</p>
                                <button className="px-8 py-3.5 bg-white text-slate-900 rounded-full font-bold hover:bg-cyan-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                    Get Started Now
                                </button>
                            </div>
                        </div>
                    </FadeIn>
                </section>

            </main>

            <Footer />
        </div>
    );
}
