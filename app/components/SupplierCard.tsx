import { Star, MapPin, BadgeCheck, Clock, ShieldCheck } from "lucide-react";
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
        <ScaleOnHover className="flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm hover:border-cyan-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden group h-full">
            <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{supplier.name}</h3>
                        <div className="flex items-center gap-1 mt-1 text-sm text-slate-500">
                            <MapPin className="h-3.5 w-3.5" />
                            {supplier.location}
                        </div>
                    </div>
                    <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md border border-green-100">
                        <Star className="h-3.5 w-3.5 fill-green-600 text-green-600" />
                        <span className="text-xs font-bold text-green-700">{supplier.rating}</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {supplier.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs font-medium bg-slate-50 text-slate-600 rounded-md border border-slate-100">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex gap-3 text-xs text-slate-500 font-medium">
                        {supplier.verified && (
                            <span className="flex items-center gap-1 text-blue-600">
                                <ShieldCheck className="h-3.5 w-3.5" /> Verified
                            </span>
                        )}
                        <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" /> {supplier.responseTime || '1h avg'}
                        </span>
                    </div>
                    <button className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors px-3 py-1.5 rounded-md hover:bg-blue-50">
                        View Profile
                    </button>
                </div>
            </div>
        </ScaleOnHover>
    );
}
