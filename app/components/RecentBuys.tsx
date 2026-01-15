"use client";

import Link from "next/link";
import { Clock, MapPin, Tag } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from "./Animators";

export default function RecentBuys() {
    const requirements = [
        {
            title: "Bulk Cotton Fabric Rolls",
            qty: "2000 Meters",
            location: "Surat, Gujarat",
            time: "2h ago",
            tags: ["Textiles"],
            tagColor: "bg-orange-100 text-orange-700",
            id: 1,
        },
        {
            title: "PCB Boards (Custom Design)",
            qty: "500 Units",
            location: "Bangalore, Karnataka",
            time: "4h ago",
            tags: ["Electronics"],
            tagColor: "bg-blue-100 text-blue-700",
            id: 2,
        },
        {
            title: "Organic Spices (Export Quality)",
            qty: "100 kg",
            location: "Kochi, Kerala",
            time: "5h ago",
            tags: ["Agriculture"],
            tagColor: "bg-green-100 text-green-700",
            id: 3,
        },
        {
            title: "Steel Bearings (Series 6000)",
            qty: "1000 Pcs",
            location: "Ludhiana, Punjab",
            time: "6h ago",
            tags: ["Industrial"],
            tagColor: "bg-slate-100 text-slate-700",
            id: 4,
        },
    ];

    return (
        <div className="bg-white py-24 border-t border-slate-100 relative">
            <div className="absolute inset-0 bg-white/50"></div>
            {/* Subtle Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
                    <div className="text-center sm:text-left mb-8 sm:mb-0">
                        <FadeIn>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2 font-heading">Live Market Demands</h2>
                            <p className="text-slate-600 text-lg">Real-time requirements from verified buyers.</p>
                        </FadeIn>
                    </div>
                    <Link href="#" className="hidden sm:inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition-all">
                        View All Requests
                    </Link>
                </div>

                <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {requirements.map((req) => (
                        <StaggerItem key={req.id}>
                            <ScaleOnHover className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-blue-500/5 relative group transition-all h-full cursor-pointer">
                                {/* Gradient Border Effect */}
                                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-cyan-400 group-hover:via-blue-500 group-hover:to-fuchsia-500 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute inset-[1px] bg-white rounded-[15px] -z-10"></div>

                                <div className="flex justify-between items-start mb-4">
                                    <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200 group-hover:ring-cyan-500/30 transition-all">
                                        {req.tags[0]}
                                    </span>
                                    <span className="text-xs text-slate-500 flex items-center gap-1 font-medium bg-slate-50 px-2 py-1 rounded-full border border-slate-100">
                                        <Clock className="h-3 w-3" />
                                        {req.time}
                                    </span>
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-2 line-clamp-2 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all">
                                    {req.title}
                                </h3>
                                <p className="text-sm text-slate-600 mb-6 font-medium">Qty: {req.qty}</p>

                                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mt-auto pt-4 border-t border-slate-100">
                                    <MapPin className="h-3.5 w-3.5 text-slate-400" />
                                    {req.location}
                                </div>
                            </ScaleOnHover>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <div className="mt-12 text-center sm:hidden">
                    <Link href="#" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition-all">
                        View All Requests
                    </Link>
                </div>
            </div>
        </div>
    );
}
