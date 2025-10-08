import { ShieldCheck, Server, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface HeroBannerProps {
    title?: string;
    subtitle?: string;
    ctaPrimaryText?: string;
    ctaPrimaryLink?: string;
    ctaSecondaryText?: string;
    ctaSecondaryLink?: string;
    imageUrl?: string;
}

export default function HeroBanner({
    title = "Agence Nationale de Sécurité des Systèmes d’Information",
    subtitle = "Protéger, détecter et répondre aux menaces numériques. Solutions nationales pour renforcer la résilience du pays.",
    ctaPrimaryText = "Découvrir",
    ctaPrimaryLink = "/a-propos",
    ctaSecondaryText = "Signaler un incident",
    ctaSecondaryLink = "/contact",
    imageUrl = "/images/hero-illustration.jpg",
}: HeroBannerProps) {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/70 to-blue-900/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent" />

            <svg className="pointer-events-none absolute -left-40 -top-20 opacity-20 w-96 h-96" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <g transform="translate(300,300)">
                    <path d="M120,-160C160,-120,180,-60,170,-8C160,44,120,88,80,120C40,152,-4,172,-54,166C-104,160,-160,128,-184,84C-208,40,-200,-16,-174,-66C-148,-116,-104,-158,-56,-184C-8,-210,44,-220,96,-204C148,-188,80,-200,120,-160Z" fill="#20c997"></path>
                </g>
            </svg>

            <div className="mx-auto max-w-7xl px-4 relative top-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4">
                    {/* Left: copy */}
                    <div className="lg:col-span-6">
                        <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.9 }}>
                            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
                                <span className="block bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white text-gray-100">
                                    {title}
                                </span>
                            </h1>

                            <p className="mt-6 text-base md:text-lg text-white/90 max-w-2xl">
                                {subtitle}
                            </p>

                            <div className="mt-8 gap-3 sm:items-center">


                                <a
                                    href={ctaSecondaryLink}
                                    className="inline-flex items-center gap-2 bg-orange-500 rounded-md border border-white/20 text-white px-4 py-2 text-sm hover:bg-white/5 transition"
                                >
                                    {ctaSecondaryText}
                                </a>
                            </div>

                            {/* Feature chips */}
                            <div className="mt-8 flex flex-wrap gap-3">
                                <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-2 text-sm text-white/95">
                                    <ShieldCheck className="w-4 h-4 text-white/90" />
                                    <span>Veille & alertes</span>
                                </div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-2 text-sm text-white/95">
                                    <Server className="w-4 h-4 text-white/90" />
                                    <span>Protection des infrastructures</span>
                                </div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-2 text-sm text-white/95">
                                    <Globe className="w-4 h-4 text-white/90" />
                                    <span>Certification électronique</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: image / illustration */}
                    <div className="lg:col-span-6 flex items-center justify-center">
                        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.9 }} className="relative w-full max-w-2xl">
                            {/* Image card with glass effect */}
                            <div className="relative overflow-hidden">
                                {/* Actual image */}
                                <img src="/images/background/banner-lady-CgWSH3UV.png" alt="Illustration sécurité" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* bottom wave (decorative) */}
            {/* <div className="-mt-6">
                <svg viewBox="0 0 1440 80" className="w-full block" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0,32 C240,80 480,0 720,32 C960,64 1200,16 1440,48 L1440 80 L0 80 Z" fill="rgba(255,255,255,0.03)"></path>
                </svg>
            </div> */}
        </section>
    );
}
