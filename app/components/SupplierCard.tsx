import { Star, MapPin, BadgeCheck } from "lucide-react";
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
}

export default function SupplierCard({ supplier }: { supplier: SupplierProps }) {
    return (
        <ScaleOnHover className="flex flex-col bg-white/5 rounded-xl border border-white/10 shadow-lg shadow-black/20 hover:border-teal-500/30 hover:shadow-teal-500/10 transition-all duration-300 overflow-hidden group h-full">
            <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-5">
                    <div className="h-12 w-12 rounded-full bg-white/10 border border-white/5 flex items-center justify-center text-sm font-bold text-white uppercase tracking-wider">
                        {supplier.name.substring(0, 2)}
                    </div>
                    {supplier.verified && (
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                            <BadgeCheck className="h-3.5 w-3.5" /> Verified
                        </div>
                    )}
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-teal-400 transition-colors">{supplier.name}</h3>
                <p className="text-sm text-slate-400 mb-4 font-medium">{supplier.category}</p>

                <div className="flex items-center gap-1.5 mb-5 pb-5 border-b border-white/5">
                    <Star className="h-4 w-4 text-amber-400 fill-current" />
                    <span className="text-sm font-bold text-white">{supplier.rating}</span>
                    <span className="text-sm text-slate-500">({supplier.reviews} reviews)</span>
                </div>

                <div className="flex flex-wrap gap-2">
                    {supplier.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[11px] font-medium bg-white/5 text-slate-300 px-2.5 py-1 rounded-md border border-white/10">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="px-6 py-4 bg-black/20 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                    <MapPin className="h-3.5 w-3.5" /> {supplier.location}
                </div>
                <Link href="#" className="text-sm font-bold text-white hover:text-teal-400 transition-colors flex items-center gap-1">
                    Contact <span className="text-xs">→</span>
                </Link>
            </div>

        </ScaleOnHover>
    );
}
