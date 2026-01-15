import { Hexagon, Globe2, Box, ShieldCheck, Radio } from "lucide-react";

export default function TrustStrip() {
    return (
        <div className="bg-white py-8 border-y border-slate-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6 font-heading">
                    Trusted by leading businesses & partners
                </p>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-5 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

                    <div className="flex items-center gap-2 font-bold text-xl text-slate-400">
                        <div className="bg-slate-700 rounded-full h-8 w-8"></div>
                        AcmeCorp
                    </div>

                    <div className="flex items-center gap-2 font-bold text-xl text-slate-400">
                        <Hexagon className="h-8 w-8 text-slate-500 fill-current" />
                        LogiTech
                    </div>

                    <div className="flex items-center gap-2 font-bold text-xl text-slate-400">
                        <Globe2 className="h-8 w-8 text-slate-500" />
                        GlobalTrade
                    </div>

                    <div className="flex items-center gap-2 font-bold text-xl text-slate-400">
                        <Box className="h-8 w-8 text-slate-500" />
                        IndoFab
                    </div>

                    <div className="flex items-center gap-2 font-bold text-xl text-slate-400">
                        <ShieldCheck className="h-8 w-8 text-slate-500" />
                        SecurePay
                    </div>

                </div>
            </div>
        </div>
    );
}
