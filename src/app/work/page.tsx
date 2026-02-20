import { Metadata } from "next"
import WorkClient from "./WorkClient"

export const metadata: Metadata = {
    title: "Our Work | Vellix Agency",
    description: "Explore the disruptive projects and results we've delivered as a digital growth agency for brands like Ravi Capitals.",
    openGraph: {
        title: "Our Work | Vellix Agency",
        description: "Explore the disruptive projects and results we've delivered as a digital growth agency.",
        url: "https://vellix.agency/work",
        siteName: "VELLIX Agency",
        type: "website",
    },
}

export default function WorkPage() {
    return <WorkClient />
}
