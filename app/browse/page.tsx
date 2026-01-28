"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Filter, ChevronDown, Search, Check, SlidersHorizontal, ArrowRight } from "lucide-react";
import SupplierCard from "../components/SupplierCard";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "../components/Animators";

export default function BrowseSuppliers() {
    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="mx-auto max-w-7xl px-6">
                    {/* Page Header */}
                    <div className="mb-16">
                        <FadeIn>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tightest uppercase mb-6 leading-none">
                                Verified <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600">Suppliers.</span>
                            </h1>
                            <p className="text-xl text-slate-400 font-light max-w-2xl">
                                Access the highest-tier manufacturers in India. Every partner listed is audited for quality and scale.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Filters Sidebar */}
                        <aside className="lg:col-span-1">
                            <FadeIn delay={0.1}>
                                <div className="p-8 rounded-[40px] bg-white/[0.03] border border-white/5 sticky top-32">
                                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400 mb-8 flex items-center gap-2">
                                        <SlidersHorizontal className="h-4 w-4" /> Filter By
                                    </h3>

                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4 ml-1">Categories</h4>
                                            <div className="space-y-3">
                                                {['Textiles', 'Electronics', 'Footwear', 'Consumer Goods', 'Raw Materials'].map((category) => (
                                                    <label key={category} className="flex items-center gap-3 cursor-pointer group">
                                                        <div className="relative flex items-center">
                                                            <input type="checkbox" className="peer h-5 w-5 appearance-none rounded-lg border border-white/10 bg-white/5 checked:bg-cyan-500 checked:border-cyan-500 transition-all cursor-pointer" />
                                                            <Check className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-950 opacity-0 peer-checked:opacity-100 pointer-events-none stroke-[3]" />
                                                        </div>
                                                        <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">{category}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-8 border-t border-white/5">
                                            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4 ml-1">Industrial Hubs</h4>
                                            <div className="space-y-3">
                                                {['Gujarat Cluster', 'Tamil Nadu Belt', 'Maharashtra Hub', 'Punjab Industrial'].map((loc) => (
                                                    <label key={loc} className="flex items-center gap-3 cursor-pointer group">
                                                        <div className="relative flex items-center">
                                                            <input type="checkbox" className="peer h-5 w-5 appearance-none rounded-lg border border-white/10 bg-white/5 checked:bg-indigo-500 checked:border-indigo-500 transition-all cursor-pointer" />
                                                            <Check className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none stroke-[3]" />
                                                        </div>
                                                        <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">{loc}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <button className="w-full mt-10 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                                        Reset All
                                    </button>
                                </div>
                            </FadeIn>
                        </aside>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {/* Search Header */}
                            <FadeIn delay={0.2}>
                                <div className="mb-10 flex flex-col sm:flex-row gap-6 items-center justify-between">
                                    <div className="relative w-full max-w-xl group">
                                        <div className="pointer-events-none absolute inset-y-0 left-6 flex items-center">
                                            <Search className="h-5 w-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Search by company, product, or GST..."
                                            className="block w-full rounded-2xl border border-white/5 bg-white/5 py-4 pl-14 pr-6 text-sm text-white placeholder-slate-600 outline-none focus:bg-white/10 focus:border-cyan-500/50 transition-all"
                                        />
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/5 p-1 rounded-xl border border-white/5">
                                        <button className="px-4 py-2 bg-white/10 text-white rounded-lg text-xs font-bold uppercase tracking-widest">Grid</button>
                                        <button className="px-4 py-2 text-slate-500 rounded-lg text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">List</button>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Suppliers Grid */}
                            <StaggerContainer className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {[
                                    { id: 1, name: 'Sai Textiles Ltd', category: 'Textiles', location: 'Surat, GJ', rating: 4.8, reviews: 124, verified: true, tags: ['Cotton', 'Silk', 'Bulk'] },
                                    { id: 2, name: 'ElectroCore India', category: 'Electronics', location: 'Bangalore, KA', rating: 4.5, reviews: 89, verified: true, tags: ['PCB', 'Resistors', 'BETA'] },
                                    { id: 3, name: 'IndoFarm Grains', category: 'Consumer Goods', location: 'Nashik, MH', rating: 4.9, reviews: 210, verified: true, tags: ['Rice', 'Tea', 'Exports'] },
                                    { id: 4, name: 'MetalX Industrial', category: 'Raw Materials', location: 'Pune, MH', rating: 4.2, reviews: 56, verified: true, tags: ['Steel', 'Aluminum'] },
                                    { id: 5, name: 'Global ChemSystems', category: 'Raw Materials', location: 'Vadodara, GJ', rating: 4.6, reviews: 140, verified: true, tags: ['Solvents', 'Industrial'] },
                                    { id: 6, name: 'Jaipur Prints Hub', category: 'Textiles', location: 'Jaipur, RJ', rating: 4.7, reviews: 95, verified: true, tags: ['Prints', 'Dyes'] },
                                ].map((supplier) => (
                                    <StaggerItem key={supplier.id}>
                                        <SupplierCard supplier={supplier} />
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>

                            {/* Pagination Placeholder */}
                            <div className="mt-20 flex justify-center">
                                <button className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                                    Load More Suppliers <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
