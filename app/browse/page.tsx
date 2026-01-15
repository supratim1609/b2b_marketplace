"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Filter, ChevronDown, Search, Check } from "lucide-react";
import SupplierCard from "../components/SupplierCard";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "../components/Animators";

export default function BrowseSuppliers() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            <main className="pt-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl font-bold font-heading text-slate-900">Browse Suppliers</h1>
                            <p className="text-slate-600 mt-1">Discover top-rated manufacturers and suppliers.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Filters Sidebar */}
                        <aside className="lg:col-span-1 space-y-8">
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                    <Filter className="h-4 w-4" /> Filters
                                </h3>
                                <div className="space-y-3">
                                    {['Fabrics', 'Yarn', 'Chemicals', 'Machinery', 'Packaging'].map((category) => (
                                        <label key={category} className="flex items-center gap-3 cursor-pointer group">
                                            <div className="relative flex items-center">
                                                <input type="checkbox" className="peer h-4 w-4 appearance-none rounded border border-slate-300 bg-white checked:bg-cyan-500 checked:border-cyan-500 transition-all" />
                                                <Check className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                                            </div>
                                            <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{category}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold text-slate-900 mb-4">Location</h3>
                                <div className="space-y-3">
                                    {['Gujarat', 'Maharashtra', 'Tamil Nadu', 'Punjab'].map((loc) => (
                                        <label key={loc} className="flex items-center gap-3 cursor-pointer group">
                                            <div className="relative flex items-center">
                                                <input type="checkbox" className="peer h-4 w-4 appearance-none rounded border border-slate-300 bg-white checked:bg-cyan-500 checked:border-cyan-500 transition-all" />
                                                <Check className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                                            </div>
                                            <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{loc}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {/* Search Header */}
                            <SlideUp delay={0.2} className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
                                <div className="relative w-full max-w-lg">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Search className="h-5 w-5 text-slate-500" aria-hidden="true" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search suppliers by name, product, or GST..."
                                        className="block w-full rounded-md border border-slate-300 bg-white py-3 pl-10 pr-3 text-sm text-slate-900 placeholder-slate-500 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-slate-600">Sort by:</span>
                                    <select className="block w-full rounded-md border-slate-300 bg-white py-1.5 pl-3 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-cyan-500 sm:text-sm sm:leading-6">
                                        <option>Relevance</option>
                                        <option>Rating: High to Low</option>
                                        <option>Newest First</option>
                                    </select>
                                </div>
                            </SlideUp>

                            {/* Suppliers Grid */}
                            <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {[
                                    { id: 1, name: 'Sai Textiles', category: 'Textiles', location: 'Surat, Gujarat', rating: 4.8, reviews: 124, verified: true, tags: ['Cotton', 'Silk', 'Bulk'] },
                                    { id: 2, name: 'TechTronix', category: 'Electronics', location: 'Bangalore, KA', rating: 4.5, reviews: 89, verified: true, tags: ['PCB', 'Resistors', 'Sensors'] },
                                    { id: 3, name: 'Green Farms', category: 'Agriculture', location: 'Nashik, MH', rating: 4.9, reviews: 210, verified: true, tags: ['Organic', 'Export', 'Fresh'] },
                                    { id: 4, name: 'MetalWorks India', category: 'Industrial', location: 'Pune, MH', rating: 4.2, reviews: 56, verified: false, tags: ['Steel', 'Aluminum', 'Parts'] },
                                    { id: 5, name: 'ChemCo Ltd', category: 'Chemicals', location: 'Vadodara, Gujarat', rating: 4.6, reviews: 140, verified: true, tags: ['Solvents', 'Industrial', 'Bulk'] },
                                    { id: 6, name: 'Fab India Exp', category: 'Textiles', location: 'Jaipur, RJ', rating: 4.7, reviews: 95, verified: true, tags: ['Prints', 'Cotton', 'Dyes'] },
                                ].map((supplier) => (
                                    <StaggerItem key={supplier.id}>
                                        <SupplierCard supplier={supplier} />
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
