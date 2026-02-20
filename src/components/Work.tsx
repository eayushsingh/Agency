"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const projects = [
    {
        title: "EcoSmart Solutions",
        category: "Web Development",
        image: "https://picsum.photos/id/1/800/600",
    },
    {
        title: "Nebula Brand Identity",
        category: "Branding",
        image: "https://picsum.photos/id/2/800/600",
    },
    {
        title: "Quant Performance",
        category: "Marketing",
        image: "https://picsum.photos/id/3/800/600",
    }
]

const partners = [
    {
        name: "Ravi Capitals",
        industry: "Finance & Investment",
        results: "Brand Identity + Social Media",
        outcome: "2x Brand Awareness",
        logo: "/logos/ravi-capitals.png"
    }
]

export default function Work() {
    return (
        <section id="work" className="py-24 md:py-32 bg-[#0a0a0a]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-[#C8F000] font-syne font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
                            Recent Works
                        </span>
                        <h2
                            className="font-syne font-bold leading-tight tracking-tight"
                            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                        >
                            Some of Our Best Projects
                        </h2>
                    </div>
                    <button className="text-[#C8F000] border border-[#C8F000]/30 hover:bg-[#C8F000] hover:text-[#0a0a0a] transition-all px-8 py-4 rounded-full font-bold text-sm">
                        View All Projects
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative cursor-pointer"
                        >
                            <div className="overflow-hidden rounded-3xl aspect-[4/5] md:aspect-[3/4] mb-6">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-[#C8F000]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-8">
                                    <div className="text-[#0a0a0a] text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="font-bold tracking-widest text-sm mb-2">{project.category}</p>
                                        <h3 className="text-3xl font-syne font-bold mb-6">{project.title}</h3>
                                        <div className="inline-flex items-center gap-2 border-b-2 border-[#0a0a0a] pb-1 font-bold text-sm">
                                            View Project <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="text-[#C8F000] font-bold text-xs tracking-widest mb-1 uppercase opacity-60">{project.category}</p>
                                <h3 className="text-2xl font-syne font-bold group-hover:text-[#C8F000] transition-colors">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Partners Section */}
                <div>
                    <div className="mb-16">
                        <span className="text-[#C8F000] font-syne font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
                            Our Partners
                        </span>
                        <h2
                            className="font-syne font-bold leading-tight tracking-tight"
                            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                        >
                            Premium Collaborations
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 sm:gap-16">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Circle Logo */}
                                <div className="w-36 h-36 rounded-full bg-white flex items-center justify-center mx-auto mb-5 shadow-xl border-4 border-[#1e1e1e] group-hover:border-[#C8F000] group-hover:scale-105 transition-all duration-300">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        width={100}
                                        height={100}
                                        className="object-contain rounded-full"
                                    />
                                </div>

                                {/* Company Name */}
                                <h3 className="text-white font-bold text-xl font-syne mb-2">
                                    {partner.name}
                                </h3>

                                {/* Industry Tag */}
                                <span className="text-xs px-3 py-1 rounded-full bg-[#C8F000]/10 text-[#C8F000] border border-[#C8F000]/20 mb-3">
                                    {partner.industry}
                                </span>

                                {/* Results */}
                                <p className="text-[#888] text-sm mb-2">
                                    {partner.results}
                                </p>
                                <p className="text-[#C8F000] font-bold text-sm">
                                    {partner.outcome}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
