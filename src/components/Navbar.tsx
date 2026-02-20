"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import GetStartedModal from "./GetStartedModal"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Services", href: "/#services" },
        { name: "Work", href: "/work" },
        { name: "Contact", href: "/#contact" },
    ]

    return (
        <nav
            className={`fixed top-[40px] md:top-[36px] left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className={`
          relative flex items-center justify-between bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3
          transition-all duration-300 ${isScrolled ? "shadow-lg shadow-black/20" : ""}
        `}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="38" height="38">
                            <rect width="100" height="100" rx="20" fill="#111" />
                            <line x1="15" y1="22" x2="50" y2="76" stroke="#C8F000" strokeWidth="10" strokeLinecap="round" />
                            <line x1="85" y1="22" x2="50" y2="76" stroke="#C8F000" strokeWidth="10" strokeLinecap="round" />
                            <circle cx="50" cy="76" r="4" fill="#C8F000" />
                            <circle cx="15" cy="22" r="3" fill="#C8F000" />
                            <circle cx="85" cy="22" r="3" fill="#C8F000" />
                        </svg>
                        <span className="text-xl font-syne font-bold tracking-tight group-hover:text-[#C8F000] transition-colors">VELLIX</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-white/70 hover:text-[#C8F000] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-[#C8F000] text-[#0a0a0a] hover:bg-[#b0d400] rounded-full font-bold group"
                        >
                            Get Started
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 top-0 bg-[#0a0a0a] z-40 md:hidden flex flex-col items-center justify-center gap-8 pt-20"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-3xl font-syne font-bold hover:text-[#C8F000] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button
                            onClick={() => {
                                setMobileMenuOpen(false)
                                setIsModalOpen(true)
                            }}
                            className="bg-[#C8F000] text-[#0a0a0a] rounded-full font-bold mt-4 px-8 py-6 text-lg"
                        >
                            Get Started <ArrowRight className="ml-2" />
                        </Button>
                        <button
                            className="absolute top-8 right-8 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </nav>
    )
}
