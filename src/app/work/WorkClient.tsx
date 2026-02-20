"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, TrendingUp, Target, Users, Mail, Phone, MapPin } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function WorkClient() {
    const stats = [
        { val: "5.2x", label: "ROAS", icon: TrendingUp },
        { val: "450%", label: "Lead Growth", icon: Target },
        { val: "₹2Cr+", label: "Ad Spend", icon: Users }
    ]

    return (
        <main className="bg-[#0a0a0a] min-h-screen text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 md:pt-60 md:pb-32 px-4 md:px-8 lg:px-16 overflow-hidden bg-grid relative">
                <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#C8F000]/10 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="container mx-auto">
                    <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-[#C8F000] transition-colors mb-12 group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold text-sm tracking-widest uppercase font-syne">Back to Home</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#C8F000] font-syne font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
                            OUR WORK
                        </span>
                        <h1 className="text-5xl md:text-8xl font-syne font-bold mb-6 tracking-tight leading-tight">
                            Projects We've <br />
                            <span className="text-[#C8F000]">Completed</span>
                        </h1>
                        <p className="text-white/40 text-lg md:text-xl max-w-2xl leading-relaxed font-outfit">
                            See the brands we've helped grow and the results we've delivered through disruptive design and data-driven marketing.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Case Study - Ravi Capitals */}
            <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C8F000]/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2"></div>
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 bg-[#C8F000]/20 blur-[60px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>
                                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white flex items-center justify-center relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-8 border-[#1e1e1e] group-hover:border-[#C8F000] transition-all duration-500">
                                    <Image
                                        src="/logos/ravi-capitals.png"
                                        alt="Ravi Capitals"
                                        width={140}
                                        height={140}
                                        className="object-contain rounded-full transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Case Study Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-8"
                        >
                            <div className="flex flex-col gap-4">
                                <span className="text-[#C8F000] font-bold text-xs uppercase tracking-widest bg-[#C8F000]/10 border border-[#C8F000]/20 px-4 py-1.5 rounded-full w-fit">
                                    Finance & Investment
                                </span>
                                <h2 className="text-4xl md:text-6xl font-syne font-bold">Ravi Capitals</h2>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Our Solutions</h4>
                                <p className="text-xl md:text-2xl font-medium leading-relaxed font-outfit text-white/90">
                                    Brand Identity + Social Media Marketing + Google Ads + Website Development
                                </p>
                            </div>

                            {/* Performance Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 border-y border-white/5">
                                {stats.map((stat, i) => (
                                    <div key={i} className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-[#C8F000]">
                                            <stat.icon size={20} />
                                            <span className="text-3xl font-syne font-bold">{stat.val}</span>
                                        </div>
                                        <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-white/50 text-lg leading-relaxed font-outfit max-w-xl">
                                For Ravi Capitals, we orchestrated a multi-channel growth engine. By refining their digital presence with a premium brand identity and high-performance ad strategies, we achieved a significant ROAS while scaling their lead volume across competitive financial sectors.
                            </p>

                            <Link href="#">
                                <Button className="bg-[#C8F000] text-[#0a0a0a] hover:bg-[#b0d400] rounded-full px-10 py-7 h-auto font-bold text-sm tracking-widest transition-all duration-300 group">
                                    View Full Case Study <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 md:py-40 px-4 md:px-8 lg:px-16 text-center bg-grid relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8F000]/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="container mx-auto relative z-10">
                    <h2 className="text-4xl md:text-7xl font-syne font-bold mb-10 tracking-tight leading-none">
                        Want Similar <br />
                        <span className="text-[#C8F000]">Results?</span>
                    </h2>
                    <Link href="/#contact">
                        <Button className="bg-[#C8F000] text-[#0a0a0a] hover:bg-[#b0d400] rounded-full px-12 py-8 h-auto text-lg font-bold group transition-all duration-500 shadow-[0_0_40px_rgba(200,240,0,0.2)]">
                            Let's Start Your Project
                            <ArrowRight className="ml-2 w-7 h-7 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}
