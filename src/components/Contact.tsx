"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, ArrowRight } from "lucide-react"
import emailjs from '@emailjs/browser'

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [phoneError, setPhoneError] = useState("")

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setFormData({ ...formData, phone: val })
        if (val.length > 0 && val.length < 10) {
            setPhoneError("Please enter a valid phone number")
        } else {
            setPhoneError("")
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (formData.phone.length < 10) {
            setPhoneError("Please enter a valid phone number")
            return
        }

        setLoading(true)

        try {
            await emailjs.sendForm(
                'service_du98yqe',
                'template_tom8j02',
                formRef.current!,
                'JtBsxlOdFyAcbSY7m'
            )

            setSuccess(true)
            setFormData({ name: '', email: '', phone: '', service: '', message: '' })
            setTimeout(() => setSuccess(false), 5000)
        } catch (error) {
            console.error('Email send failed:', error)
            alert('❌ Something went wrong. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className="py-24 md:py-32 bg-[#C8F000] text-[#0a0a0a]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-[2rem] border-2 border-[#0a0a0a] shadow-[8px_8px_0_0_rgba(10,10,10,1)]"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                            {/* Name Field */}
                            <div>
                                <label className="text-xs font-semibold uppercase text-black tracking-widest block mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your Name"
                                    className="w-full px-5 py-4 rounded-2xl border-2 border-black bg-white text-black placeholder:text-gray-400 focus:outline-none focus:border-[#C8F000] transition h-14"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label className="text-xs font-semibold uppercase text-black tracking-widest block mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="your@email.com"
                                    className="w-full px-5 py-4 rounded-2xl border-2 border-black bg-white text-black placeholder:text-gray-400 focus:outline-none focus:border-[#C8F000] transition h-14"
                                />
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label className="text-xs font-semibold uppercase text-black tracking-widest block mb-2">Phone Number *</label>
                                <input
                                    type="tel"
                                    required
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    placeholder="+91 98765 43210"
                                    maxLength={13}
                                    className={`w-full px-5 py-4 rounded-2xl border-2 bg-white text-black placeholder:text-gray-400 focus:outline-none transition h-14 ${phoneError ? 'border-red-500' : 'border-black focus:border-[#C8F000]'}`}
                                />
                                {phoneError && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider mt-1">{phoneError}</p>}
                            </div>

                            {/* Service Dropdown */}
                            <div>
                                <label className="text-xs font-semibold uppercase text-black tracking-widest block mb-2">Service Needed *</label>
                                <select
                                    required
                                    name="service"
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    className="w-full px-5 py-4 rounded-2xl border-2 border-black bg-white text-black focus:outline-none focus:border-[#C8F000] transition h-14 appearance-none"
                                >
                                    <option value="">Select a service</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Performance Marketing">Performance Marketing</option>
                                    <option value="SEO & Content">SEO & Content</option>
                                    <option value="Social Media Marketing">Social Media Marketing</option>
                                    <option value="Email Marketing">Email Marketing</option>
                                    <option value="Brand Strategy">Brand Strategy</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Message Field */}
                            <div>
                                <label className="text-xs font-semibold uppercase text-black tracking-widest block mb-2">Your Message *</label>
                                <textarea
                                    required
                                    rows={5}
                                    name="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tell us about your project..."
                                    className="w-full px-5 py-4 rounded-2xl border-2 border-black bg-white text-black placeholder:text-gray-400 focus:outline-none focus:border-[#C8F000] transition resize-none"
                                />
                            </div>

                            {/* Success Message */}
                            {success && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-[#0a0a0a] text-[#C8F000] px-4 py-3 rounded-2xl font-medium text-center"
                                >
                                    ✅ We'll contact you within 24 hours!
                                </motion.div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#1a1a1a] disabled:opacity-50 transition duration-300 h-14 flex items-center justify-center gap-2"
                            >
                                {loading ? 'Sending...' : (
                                    <>
                                        Send Message <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>

                        </form>
                    </motion.div>

                    {/* Right: Contact Info */}
                    <div className="lg:pt-12">
                        <span className="text-black font-syne font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
                            Contact Us
                        </span>
                        <h2
                            className="font-syne font-bold mb-10 leading-tight tracking-[-0.03em] text-[#0a0a0a]"
                            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", textTransform: "none" }}
                        >
                            Ready To <br />Work With Us?
                        </h2>

                        <div className="space-y-10">
                            {[
                                { icon: Mail, label: "Email Us", val: "ayushsinghe07@gmail.com", href: "mailto:ayushsinghe07@gmail.com" },
                                { icon: MapPin, label: "Visit Us", val: "Aziznagar Hyderabad, 500075", href: "#" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-[#0a0a0a] text-[#C8F000] rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">{item.label}</p>
                                        <a href={item.href} className="text-xl font-bold font-syne hover:underline underline-offset-4 decoration-2">{item.val}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
