import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white text-slate-900 border-t border-slate-200" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>

            {/* Pre-footer CTA */}
            <div className="border-b border-slate-200 bg-slate-50">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between flex-col text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Ready to grow your business?
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Join thousands of Indian businesses already trading securely on bechoHub. Sign up is free.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="#"
                            className="rounded-md bg-slate-900 px-8 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                        >
                            Create Free Account
                        </Link>
                        <Link href="#" className="text-sm font-semibold leading-6 text-slate-600 border border-slate-300 px-8 py-3 rounded-md hover:bg-slate-100 transition-colors">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </div>


            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <div className="flex items-center gap-2">
                            <Link href="/" className="text-2xl font-bold text-slate-900 font-heading">
                                bechoHub
                            </Link>
                        </div>
                        <p className="text-sm leading-6 text-slate-500">
                            Empowering Indian MSMEs with technology. Connect, source, and grow with India&apos;s most trusted B2B marketplace.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="#" className="text-slate-400 hover:text-cyan-600 transition-colors">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-6 w-6" aria-hidden="true" />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-pink-600 transition-colors">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-6 w-6" aria-hidden="true" />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-6 w-6" aria-hidden="true" />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-blue-700 transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-6 w-6" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-slate-900">Platform</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-cyan-600 transition-colors">Browse Suppliers</Link></li>
                                    <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-cyan-600 transition-colors">Post RFQ</Link></li>
                                    <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-cyan-600 transition-colors">Pricing</Link></li>
                                    <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-cyan-600 transition-colors">Success Stories</Link></li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-slate-900">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-cyan-600 transition-colors">Help Center</Link></li>
                                    <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-cyan-600 transition-colors">Trust & Safety</Link></li>
                                    <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-cyan-600 transition-colors">Seller Policies</Link></li>
                                    <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-cyan-600 transition-colors">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-slate-900">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-cyan-600 transition-colors">About Us</Link></li>
                                    <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-cyan-600 transition-colors">Careers</Link></li>
                                    <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-cyan-600 transition-colors">Press</Link></li>
                                    <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-cyan-600 transition-colors">Terms of Service</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-slate-200 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs leading-5 text-slate-500">&copy; 2025 bechoHub. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-xs leading-5 text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-xs leading-5 text-slate-500 hover:text-slate-900 transition-colors">Terms of Use</Link>
                        <Link href="#" className="text-xs leading-5 text-slate-500 hover:text-slate-900 transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
