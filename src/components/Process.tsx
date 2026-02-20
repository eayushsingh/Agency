"use client"

import { motion } from "framer-motion"

const steps = [
    {
        number: "01",
        title: "Discovery",
        desc: "We start by understanding your goals, audience, and market landscape."
    },
    {
        number: "02",
        title: "Strategy",
        desc: "Developing a tailored roadmap to achieve your growth objectives."
    },
    {
        number: "03",
        title: "Execution",
        desc: "Bringing the strategy to life with precision and creativity."
    },
    {
        number: "04",
        title: "Results",
        desc: "Analyzing data and optimizing for continuous improvement."
    }
]

export default function Process() {
    return (
        <section className="py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-24">
                    <span className="text-[#C8F000] font-syne font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
                        How We Work
                    </span>
                    <h2 className="text-4xl md:text-6xl font-syne font-bold tracking-tight">
                        Our Simple 4-Step Process
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-[1px] border-t border-dashed border-white/20 hidden lg:block -translate-y-1/2"></div>

                    {/* Vertical Line (Mobile) */}
                    <div className="absolute top-0 left-8 md:left-12 w-[1px] h-full border-l border-dashed border-[#C8F000]/30 lg:hidden"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative flex lg:flex-col items-start gap-8 lg:gap-0 bg-[#0a0a0a] group z-10"
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-[#0a0a0a] border border-[#C8F000]/50 rounded-2xl flex items-center justify-center text-2xl font-syne font-bold text-[#C8F000] mb-8 group-hover:bg-[#C8F000] group-hover:text-[#0a0a0a] transition-all duration-500 shadow-[0_0_20px_rgba(200,240,0,0.1)]">
                                    {step.number}
                                </div>

                                <div className="flex flex-col">
                                    <h3 className="text-2xl font-syne font-bold mb-4 text-white group-hover:text-[#C8F000] transition-colors">{step.title}</h3>
                                    <p className="text-white/40 font-outfit leading-relaxed max-w-xs">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
