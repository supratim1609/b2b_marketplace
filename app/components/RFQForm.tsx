"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, UploadCloud } from "lucide-react";
import { FadeIn, SlideUp } from "./Animators";

export default function RFQForm() {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep((s) => Math.min(s + 1, 3));
    const prevStep = () => setStep((s) => Math.max(s - 1, 1));

    const steps = [
        { id: 1, name: "Product Details" },
        { id: 2, name: "Specifications" },
        { id: 3, name: "Contact Info" },
    ];

    return (
        <div className="bg-slate-900 rounded-2xl shadow-xl shadow-black/50 border border-white/10 overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-black/20 px-6 py-4 border-b border-white/5">
                <div className="flex items-center justify-between">
                    {steps.map((s, i) => (
                        <div key={s.id} className="flex items-center relative">
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm transition-colors duration-300
                            ${step >= s.id ? 'bg-teal-500 text-white' : 'bg-white/10 text-slate-500'}
                         `}>
                                {step > s.id ? <Check className="h-5 w-5" /> : s.id}
                            </div>
                            <span className={`ml-3 text-sm font-medium hidden sm:block
                            ${step >= s.id ? 'text-white' : 'text-slate-500'}
                         `}>
                                {s.name}
                            </span>
                            {i < steps.length - 1 && (
                                <div className={`hidden sm:block w-12 h-0.5 mx-4
                                ${step > s.id ? 'bg-teal-500' : 'bg-white/10'}
                             `}></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Form Content */}
            <div className="p-8">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-2">Product Name</label>
                                <input type="text" placeholder="e.g. Cotton Yarn 40s" className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-950 text-white placeholder-slate-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-300 mb-2">Category</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-950 text-white focus:ring-2 focus:ring-teal-500 outline-none">
                                        <option>Select Category</option>
                                        <option>Textiles</option>
                                        <option>Electronics</option>
                                        <option>Agriculture</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-300 mb-2">Quantity</label>
                                    <input type="text" placeholder="e.g. 500 kg" className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-950 text-white placeholder-slate-500 focus:ring-2 focus:ring-teal-500 outline-none" />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-2">Detailed Requirements</label>
                                <textarea rows={4} placeholder="Describe material specs, packaging needs, etc." className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-950 text-white placeholder-slate-500 focus:ring-2 focus:ring-teal-500 outline-none resize-none"></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-2">Upload Reference Image (Optional)</label>
                                <div className="border-2 border-dashed border-white/10 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors cursor-pointer group">
                                    <div className="p-3 bg-teal-500/10 text-teal-500 rounded-full mb-3 group-hover:scale-110 transition-transform">
                                        <UploadCloud className="h-6 w-6" />
                                    </div>
                                    <p className="text-sm font-medium text-slate-300">Click to upload or drag and drop</p>
                                    <p className="text-xs text-slate-500 mt-1">SVG, PNG, JPG or GIF (max. 5MB)</p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-950 text-white focus:ring-2 focus:ring-teal-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-300 mb-2">Company Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-950 text-white focus:ring-2 focus:ring-teal-500 outline-none" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-2">Business Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-white/10 bg-slate-950 text-white focus:ring-2 focus:ring-teal-500 outline-none" />
                            </div>
                            <div className="flex items-center gap-2 mt-4">
                                <input type="checkbox" id="terms" className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500 border-white/20 bg-slate-900" />
                                <label htmlFor="terms" className="text-sm text-slate-400">I agree to the <span className="text-teal-400 underline">Terms of Service</span></label>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/5">
                    <button
                        onClick={prevStep}
                        disabled={step === 1}
                        className={`px-6 py-2 rounded-lg font-medium text-slate-400 hover:bg-white/5 transition-colors
                        ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                    `}
                    >
                        Back
                    </button>

                    {step < 3 ? (
                        <button
                            onClick={nextStep}
                            className="px-8 py-3 bg-teal-500 text-white rounded-lg font-bold shadow-lg shadow-teal-500/20 hover:bg-teal-400 hover:shadow-teal-500/30 transition-all flex items-center gap-2"
                        >
                            Next Step <ChevronRight className="h-4 w-4" />
                        </button>
                    ) : (
                        <button
                            className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-bold shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 hover:shadow-emerald-500/30 transition-all flex items-center gap-2"
                        >
                            Submit Request <Check className="h-4 w-4" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
