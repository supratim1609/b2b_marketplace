"use client";

import Link from "next/link";
import { ArrowLeft, SearchX, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            {/* Abstract Backgrounds */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full"
            >
                <div className="flex justify-center mb-8">
                    <div className="h-24 w-24 bg-white rounded-3xl shadow-xl shadow-slate-200 flex items-center justify-center rotate-3 border border-slate-100">
                        <SearchX className="h-10 w-10 text-cyan-600" strokeWidth={1.5} />
                    </div>
                </div>

                <h1 className="text-8xl font-black text-slate-900 tracking-tighter mb-4 select-none">404</h1>

                <h2 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-widest">
                    Page Not Found
                </h2>

                <p className="text-slate-500 mb-10 leading-relaxed font-light">
                    The supply route you are looking for has been moved, deleted, or never existed in our manifest.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200/50 gap-2"
                    >
                        <Home className="h-4 w-4" />
                        Return to Hub
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-slate-900 border border-slate-200 font-bold text-sm hover:bg-slate-50 transition-all active:scale-95 gap-2"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Go Back
                    </button>
                </div>
            </motion.div>

            {/* Footer Branding */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-300 font-black text-xs uppercase tracking-[0.3em]">
                bechoHub
            </div>
        </div>
    );
}
