"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, TrendingUp, Users } from "lucide-react"
import GetStartedModal from "./GetStartedModal"

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    } as const

    return (
        <section id="home" className="relative pt-40 pb-20 md:pt-60 md:pb-40 overflow-hidden bg-grid">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#C8F000]/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[#C8F000]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-8"
                    >
                        <motion.div variants={itemVariants} className="flex items-center gap-2 bg-white/5 border border-white/10 w-fit px-4 py-1.5 rounded-full">
                            <span className="w-2 h-2 bg-[#C8F000] rounded-full animate-pulse"></span>
                            <span className="text-[10px] font-syne font-bold tracking-[0.2em] text-[#C8F000] uppercase">Welcome to Vellix</span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="font-syne text-white leading-[1.05] tracking-[-0.02em]"
                            style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", textTransform: "none" }}
                        >
                            <span className="font-bold">Digital Agency For</span> <br />
                            <span className="font-bold text-[#C8F000]">Growth</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-white/40 text-lg md:text-xl max-w-lg leading-relaxed font-outfit">
                            We help brands scale through data-driven strategies and disruptive design. Transform your digital presence into a growth engine.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                            <Button
                                onClick={() => setIsModalOpen(true)}
                                size="lg"
                                className="bg-[#C8F000] text-[#0a0a0a] hover:bg-[#b0d400] rounded-full font-bold px-8 h-14 text-sm tracking-wide group transition-all duration-300 transform active:scale-95"
                            >
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Link href="/work">
                                <Button variant="outline" size="lg" className="border-white/10 hover:bg-white/5 rounded-full font-bold px-8 h-14 text-sm tracking-wide transition-all duration-300 transform active:scale-95 text-white">
                                    View Our Work
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
                            {[
                                { val: "200+", label: "Projects" },
                                { val: "89%", label: "Retention" },
                                { val: "15+", label: "Years" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <motion.h4
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + (i * 0.1), type: "spring", stiffness: 100 }}
                                        className="text-3xl font-syne font-bold text-white mb-1"
                                    >
                                        {stat.val}
                                    </motion.h4>
                                    <p className="text-[10px] font-medium text-white/40 tracking-[0.1em] uppercase">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Floating Cards */}
                    <div className="relative h-[400px] md:h-[600px] hidden lg:block">
                        {/* Main Image Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl overflow-hidden border border-white/10"
                        >
                            <img
                                src="https://picsum.photos/id/42/800/800"
                                alt="Digital Agency"
                                className="w-full h-full object-cover mix-blend-overlay opacity-60"
                            />
                        </motion.div>

                        {/* Floating Card: ROAS */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 -left-10 bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#C8F000] rounded-xl flex items-center justify-center text-[#0a0a0a]">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs font-syne font-bold">Average ROAS</p>
                                    <p className="text-2xl font-syne font-bold text-[#C8F000]">8.4x</p>
                                </div>
                            </div>
                            <div className="mt-4 flex gap-1 items-end h-8">
                                {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                                    <div key={i} style={{ height: `${h}%` }} className="w-2 bg-[#C8F000]/60 rounded-t-[2px]"></div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Floating Card: Traffic */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-20 -right-5 bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                    <Users size={24} className="text-[#C8F000]" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs font-syne font-bold">Monthly Traffic</p>
                                    <p className="text-2xl font-syne font-bold leading-none">24.6k</p>
                                    <p className="text-[10px] text-[#C8F000] font-bold">+12% from last month</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Small Floating Card: Rating */}
                        <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 -right-12 bg-[#C8F000] text-[#0a0a0a] px-4 py-2 rounded-lg font-bold flex items-center gap-2 shadow-xl"
                        >
                            <Star size={16} fill="#0a0a0a" />
                            <span>4.9 ★ Rating</span>
                        </motion.div>
                    </div>

                </div>
            </div>

            <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}
