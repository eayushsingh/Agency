"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, MessageSquare, Calendar, ClipboardList } from "lucide-react"

interface GetStartedModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
    const scrollToContact = () => {
        onClose()
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    ></motion.div>

                    {/* Modal Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden"
                    >
                        {/* Decorative Background Element */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#C8F000]/10 blur-[60px] rounded-full"></div>

                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-syne font-bold text-white mb-2 leading-tight">
                                How would you like <br />
                                <span className="text-[#C8F000]">to connect?</span>
                            </h3>
                            <p className="text-white/40 text-sm font-outfit mb-8">Choose your preferred way to start your growth journey with us.</p>

                            <div className="space-y-4">
                                <button
                                    onClick={scrollToContact}
                                    className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#C8F000]/50 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#C8F000]/10 flex items-center justify-center text-[#C8F000] group-hover:bg-[#C8F000] group-hover:text-[#0a0a0a] transition-all duration-300">
                                        <ClipboardList size={22} />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-white text-sm">Fill Contact Form</p>
                                        <p className="text-[10px] text-white/40 uppercase tracking-widest">Get a custom quote</p>
                                    </div>
                                </button>

                                <a
                                    href="https://wa.me/919876543210?text=Hi%20Vellix!%20I%20want%20to%20grow%20my%20business%20digitally."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#C8F000]/50 transition-all duration-300 group opacity-40 blur-[1px] pointer-events-none cursor-not-allowed"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                                        <MessageSquare size={22} />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-white text-sm">Chat on WhatsApp</p>
                                        <p className="text-[10px] text-white/40 uppercase tracking-widest">Instant response</p>
                                    </div>
                                    <span className="ml-auto text-[10px] bg-[#ffffff15] text-[#888] px-2 py-1 rounded-full border border-[#333]">
                                        Coming Soon
                                    </span>
                                </a>

                                <a
                                    href="https://calendly.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#C8F000]/50 transition-all duration-300 group opacity-40 blur-[1px] pointer-events-none cursor-not-allowed"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                        <Calendar size={22} />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-white text-sm">Book a Call</p>
                                        <p className="text-[10px] text-white/40 uppercase tracking-widest">15-min discovery session</p>
                                    </div>
                                    <span className="ml-auto text-[10px] bg-[#ffffff15] text-[#888] px-2 py-1 rounded-full border border-[#333]">
                                        Coming Soon
                                    </span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
