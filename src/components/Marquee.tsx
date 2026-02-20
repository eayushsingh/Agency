export default function Marquee() {
    const items = [
        "Digital Marketing",
        "Web Development",
        "Performance Marketing",
        "SEO Strategy",
        "Brand Identity",
        "Growth Hacking",
        "UI/UX Design",
    ]

    return (
        <div className="bg-black border-y border-white/10 py-8 overflow-hidden marquee-container pause-hover">
            <div className="marquee-content whitespace-nowrap">
                {/* Repeat items multiple times for seamless loop */}
                {[...Array(6)].map((_, i) => (
                    <span key={i} className="inline-flex items-center">
                        {items.map((item, index) => (
                            <span key={index} className="inline-flex items-center text-3xl md:text-5xl font-syne font-bold tracking-tight mx-8 md:mx-12">
                                <span className="text-white">{item}</span>
                                <span className="text-[#C8F000] ml-8 md:ml-12">✦</span>
                            </span>
                        ))}
                    </span>
                ))}
            </div>
        </div>
    )
}
