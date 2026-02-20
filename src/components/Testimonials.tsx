"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
    {
        name: "John Miller",
        role: "CEO, TechFlow",
        text: "VELLIX transformed our digital presence. Our conversion rate increased by 40% in just three months. They truly understand growth.",
        rating: 5
    },
    {
        name: "Sarah Jenkins",
        role: "Founder, Bloom",
        text: "The team at VELLIX is incredibly creative and data-driven. They didn't just build a website; they built a revenue engine for us.",
        rating: 5
    },
    {
        name: "David Chen",
        role: "Marketing Director, Aura",
        text: "Professional, responsive, and innovative. Their design strategy gave our brand the premium look we were aiming for.",
        rating: 5
    }
]

export default function Testimonials() {
    return (
        <section className="py-24 md:py-32 bg-[#0a0a0a]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex flex-col items-center text-center mb-20">
                    <span className="text-[#C8F000] font-syne font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
                        What Clients Say
                    </span>
                    <h2 className="text-4xl md:text-5xl font-syne font-bold max-w-2xl tracking-tight">
                        Real Results, Real Clients
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/[0.03] border border-white/10 p-10 rounded-[2.5rem] relative hover:bg-white/[0.05] transition-colors"
                        >
                            <div className="flex gap-1 mb-8">
                                {[...Array(t.rating)].map((_, index) => (
                                    <Star key={index} size={14} fill="#C8F000" className="text-[#C8F000]" />
                                ))}
                            </div>

                            <p className="text-xl text-white mb-10 font-outfit leading-relaxed">
                                "{t.text}"
                            </p>

                            <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/10">
                                    <img src={`https://picsum.photos/seed/${t.name}/80/80`} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="font-syne font-bold text-sm tracking-wide text-white">{t.name}</p>
                                    <p className="text-[#C8F000] text-[10px] font-bold uppercase tracking-widest mt-1 opacity-70">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
