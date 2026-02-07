"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            {/* Abstract Backgrounds */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/40 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full"
            >
                <div className="flex justify-center mb-8">
                    <div className="h-24 w-24 bg-white rounded-3xl shadow-xl shadow-rose-100 flex items-center justify-center -rotate-2 border border-rose-100">
                        <AlertTriangle className="h-10 w-10 text-rose-500" strokeWidth={1.5} />
                    </div>
                </div>

                <h1 className="text-xl font-bold text-slate-800 mb-2 uppercase tracking-widest">
                    Production Halted
                </h1>
                <p className="text-slate-500 mb-10 leading-relaxed font-light">
                    We encountered an unexpected error in the protocol. Our engineers have been notified.
                </p>

                <div className="flex justify-center">
                    <button
                        onClick={reset}
                        className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200/50 gap-2"
                    >
                        <RefreshCw className="h-4 w-4" />
                        Restart Protocol
                    </button>
                </div>

                {error.digest && (
                    <p className="mt-8 text-[10px] text-slate-400 font-mono bg-slate-100 px-3 py-1 rounded-full inline-block">
                        Error ID: {error.digest}
                    </p>
                )}
            </motion.div>
        </div>
    );
}
