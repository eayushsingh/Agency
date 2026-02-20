import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] py-20 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Logo & Tagline */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="relative w-8 h-8 grid grid-cols-2 grid-rows-2 gap-1 bg-[#C8F000]/10 p-1.5 rounded-md group-hover:bg-[#C8F000]/20 transition-colors">
                                <div className="bg-[#C8F000] rounded-[1px]"></div>
                                <div className="bg-[#C8F000] rounded-[1px] opacity-60"></div>
                                <div className="bg-[#C8F000] rounded-[1px] opacity-40"></div>
                                <div className="bg-[#C8F000] rounded-[1px] opacity-80"></div>
                            </div>
                            <span className="text-2xl font-syne font-bold tracking-tight group-hover:text-[#C8F000] transition-colors">VELLIX</span>
                        </Link>
                        <p className="text-white/40 font-outfit leading-relaxed max-w-xs">
                            Transforming businesses through innovative digital solutions. Digital Agency For Growth.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-syne font-bold text-sm tracking-widest mb-6 underline decoration-[#C8F000] underline-offset-8 decoration-2">Services</h4>
                        <ul className="space-y-4 text-white/50 text-sm font-medium">
                            <li><a href="#" className="hover:text-[#C8F000] transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-[#C8F000] transition-colors">Performance Marketing</a></li>
                            <li><a href="#" className="hover:text-[#C8F000] transition-colors">Email Strategy</a></li>
                            <li><a href="#" className="hover:text-[#C8F000] transition-colors">SEO & Content</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-syne font-bold text-sm tracking-widest mb-6 underline decoration-[#C8F000] underline-offset-8 decoration-2">Company</h4>
                        <ul className="space-y-4 text-white/50 text-sm font-medium">
                            <li><a href="#" className="hover:text-[#C8F000] transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-[#C8F000] transition-colors">Our Work</a></li>
                            <li><a href="#" className="hover:text-[#C8F000] transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-[#C8F000] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-syne font-bold text-sm tracking-widest mb-6 underline decoration-[#C8F000] underline-offset-8 decoration-2">Social</h4>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#C8F000] hover:text-[#0a0a0a] hover:border-[#C8F000] transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                        <p className="mt-8 text-white/40 text-xs font-medium tracking-widest leading-loose">
                            Aziznagar Hyderabad, <br />
                            500075
                        </p>
                    </div>

                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/20 text-xs font-bold tracking-widest">
                        &copy; 2025 Vellix Agency. All Rights Reserved.
                    </p>
                    <div className="flex gap-8 text-white/20 text-[10px] font-bold tracking-[0.2em]">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
