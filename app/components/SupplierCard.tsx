import { Star, MapPin, ShieldCheck, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ScaleOnHover } from "../components/Animators";

interface SupplierProps {
    id: number;
    name: string;
    category: string;
    location: string;
    rating: number;
    reviews: number;
    verified: boolean;
    tags: string[];
    responseTime?: string;
}

export default function SupplierCard({ supplier }: { supplier: SupplierProps }) {
    return (
        <ScaleOnHover className="flex flex-col bg-white/[0.03] rounded-[32px] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden group h-full">
            <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black uppercase tracking-widest text-cyan-400">
                                {supplier.category}
                            </div>
                            {supplier.verified && (
                                <ShieldCheck className="h-4 w-4 text-cyan-400" />
                            )}
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">{supplier.name}</h3>
                        <div className="flex items-center gap-1.5 mt-2 text-xs font-medium text-slate-500">
                            <MapPin className="h-3.5 w-3.5" />
                            {supplier.location}
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5">
                        <Star className="h-3.5 w-3.5 fill-cyan-400 text-cyan-400" />
                        <span className="text-sm font-bold text-white">{supplier.rating}</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                    {supplier.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-white/[0.02] text-slate-400 rounded-lg border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        <span className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" /> {supplier.responseTime || '1h'}
                        </span>
                    </div>
                    <button className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-cyan-400 hover:text-white transition-colors">
                        View Profile <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                </div>
            </div>
        </ScaleOnHover>
    );
}
