"use client"

import { motion } from "framer-motion"
import {
    Palette,
    Code2,
    TrendingUp,
    Mail,
    Search,
    BarChart3
} from "lucide-react"

const services = [
    {
        title: "Design Strategy",
        desc: "Crafting visually stunning and effective design systems that define your brand identity.",
        icon: Palette,
        emoji: "🎨"
    },
    {
        title: "Web Development",
        desc: "Building high-performance, responsive websites using the latest technologies and best practices.",
        icon: Code2,
        emoji: "💻"
    },
    {
        title: "Performance Marketing",
        desc: "Data-driven marketing campaigns focused on ROI and sustainable business growth.",
        icon: TrendingUp,
        emoji: "📈"
    },
    {
        title: "Email Marketing",
        desc: "Personalized email strategies that nurture leads and convert them into loyal customers.",
        icon: Mail,
        emoji: "✉️"
    },
    {
        title: "SEO & Content",
        desc: "Optimizing your digital presence to rank higher and attract organic high-intent traffic.",
        icon: Search,
        emoji: "🔍"
    },
    {
        title: "Analytics & CRO",
        desc: "Deep diving into data to optimize conversion paths and maximize user value.",
        icon: BarChart3,
        emoji: "📊"
    }
]

export default function Services() {
    return (
        <section id="services" className="py-24 md:py-32 bg-[#0a0a0a]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <span className="text-white font-syne font-bold tracking-widest text-sm">
                            Our Expertise
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-syne font-bold max-w-2xl leading-tight tracking-tight"
                        style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                    >
                        The Best <span className="bg-[#C8F000] text-[#0a0a0a] px-4 py-1 rounded-sm ml-2">Services</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#C8F000]/50 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Hover Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8F000]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="mb-6 relative">
                                <div className="w-16 h-16 bg-[#C8F000]/10 rounded-2xl flex items-center justify-center text-[#C8F000] group-hover:bg-[#C8F000] group-hover:text-[#0a0a0a] transition-colors duration-300">
                                    <service.icon size={32} />
                                </div>
                                <span className="absolute -bottom-2 -right-2 text-2xl">{service.emoji}</span>
                            </div>

                            <h3 className="text-2xl font-syne font-bold mb-4 group-hover:text-[#C8F000] transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-white/60 leading-relaxed font-outfit">
                                {service.desc}
                            </p>

                            <motion.div
                                className="mt-8 flex items-center gap-2 text-[#C8F000] font-bold text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                Learn More <span>→</span>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
