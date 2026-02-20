"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function About() {
    const stats = [
        { value: "256+", label: "Projects Completed" },
        { value: "89%", label: "Client Growth" },
        { value: "15+", label: "Years Experience" },
        { value: "2k+", label: "Happy Clients" },
    ]

    return (
        <section id="about" className="py-24 md:py-32 bg-[#f5f5f0] text-[#0a0a0a]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image Grid */}
                    <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mt-12 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img src="https://picsum.photos/id/5/600/800" alt="Work" className="w-full h-full object-cover" />
                        </motion.div>
                        <div className="flex flex-col gap-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="rounded-3xl overflow-hidden shadow-2xl h-1/2"
                            >
                                <img src="https://picsum.photos/id/11/600/400" alt="Meeting" className="w-full h-full object-cover" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="rounded-3xl overflow-hidden shadow-2xl h-1/2"
                            >
                                <img src="https://picsum.photos/id/20/600/400" alt="Office" className="w-full h-full object-cover shadow-2xl" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-8"
                    >
                        <div>
                            <span className="text-black bg-[#C8F000] px-4 py-1.5 rounded-full font-bold text-[10px] tracking-[0.2em] mb-6 inline-block uppercase">
                                Get To Know About Us
                            </span>
                            <h2
                                className="font-syne font-bold leading-[1.1] text-[#0a0a0a] tracking-[-0.03em]"
                                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", textTransform: "none" }}
                            >
                                We Are Here to Give You <br />
                                <span className="relative">
                                    Effective Ideas
                                    <span className="absolute bottom-1 left-0 w-full h-3 bg-[#C8F000]/30 -z-10"></span>
                                </span>
                            </h2>
                        </div>

                        <p className="text-[#0a0a0a]/60 text-lg leading-relaxed font-outfit max-w-xl">
                            We're a team of digital enthusiasts passionate about helping brands thrive in the digital landscape. Our approach combines creative storytelling with technical excellence to deliver results that matter.
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                            {[
                                "Strategy & Planning",
                                "Creative Direction",
                                "Digital Performance",
                                "Brand Identity",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-bold font-syne text-sm text-[#0a0a0a]">
                                    <div className="flex-shrink-0 w-5 h-5 bg-[#C8F000] rounded-full flex items-center justify-center">
                                        <CheckCircle2 size={14} className="text-[#0a0a0a]" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-10 border-y border-[#0a0a0a]/5 mt-4">
                            {[
                                { val: "256+", label: "Projects" },
                                { val: "89%", label: "Growth" },
                                { val: "15+", label: "Years" },
                                { val: "2k+", label: "Clients" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <h4 className="text-3xl font-syne font-bold text-[#0a0a0a] mb-1">{stat.val}</h4>
                                    <p className="text-[10px] font-bold text-[#0a0a0a]/40 tracking-widest uppercase">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <Button className="bg-[#0a0a0a] text-white hover:bg-black/90 rounded-full px-10 py-7 h-auto text-sm font-bold tracking-wider group transition-all duration-300">
                                Learn More
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
