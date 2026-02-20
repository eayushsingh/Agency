import { Mail } from "lucide-react"

export default function TopBar() {
    return (
        <div className="bg-[#C8F000] text-[#0a0a0a] py-2 px-4 text-xs font-bold uppercase tracking-wider">
            <div className="container mx-auto flex justify-between items-center">
                <p className="animate-pulse">"We Will Grow Your Business To The Next Level"</p>
                <div className="hidden md:flex items-center gap-6">
                    <a href="mailto:ayushsinghe07@gmail.com" className="flex items-center gap-1.5 hover:underline decoration-2 underline-offset-4">
                        <Mail size={12} />
                        ayushsinghe07@gmail.com
                    </a>
                </div>
            </div>
        </div>
    )
}
