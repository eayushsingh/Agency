import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VELLIX | Digital Agency For Growth",
  description: "VELLIX is a premier digital agency dedicated to growing your business through innovative design, development, and marketing strategies.",
  keywords: ["Digital Marketing", "Web Development", "Growth Agency", "Performance Marketing", "SEO", "Brand Identity"],
  openGraph: {
    title: "VELLIX | Digital Agency For Growth",
    description: "Digital Agency For Growth. We Will Grow Your Business To The Next Level.",
    type: "website",
    locale: "en_US",
    url: "https://vellix.agency",
    siteName: "VELLIX Agency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${outfit.variable} font-outfit antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
