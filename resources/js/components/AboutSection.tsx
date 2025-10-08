import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Globe2, ArrowRight, Play } from "lucide-react";
import vision_image from '../assets/images/background/about-img-CQ1XVK3x.png';
import icon_image from '../assets/images/background/icon.svg';
import { Page } from "@/types";

interface AboutSectionProps {
    pagesData: Page[];
    link: boolean;
}

export default function AboutSection({ pagesData, link }: AboutSectionProps) {

    const aboutContent = pagesData.find(page => page.slug.toLowerCase() === "about");

    if (!aboutContent) {
        return null;
    }

    return (
        <section className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-20 overflow-hidden">
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-500/10" />
            <div className="container mx-auto px-14">
                <div className="flex flex-wrap -mx-4">

                    <div className="w-full lg:w-1/2 px-4">
                        <div className="mb-4 flex items-center gap-4">
                            <h2 className="font-semibold text-orange-500 text-2xl">
                                A Propos de Nous
                            </h2>
                            <img
                                src={icon_image}
                                alt="icon"
                                className="w-6 h-6"
                            />
                        </div>
                        <h2 className="text-3xl lg:text-3xl font-bold mb-4 text-blue-950 leading-tight tracking-wider">
                            {aboutContent.title}
                        </h2>
                        <p className="mb-14 text-gray-700 dark:text-gray-300">
                            <div dangerouslySetInnerHTML={{ __html: aboutContent.description ?? "" }} />
                        </p>

                        {
                            link && (
                                <a
                                    href='/a-propos'
                                    className="inline-flex items-center gap-2 border border-dashed border-sky-500 text-sky-700 px-6 py-3 rounded hover:bg-sky-700 hover:text-white hover:border-transparent transition"
                                >
                                    En savoir plus <ArrowRight />
                                </a>
                            )
                        }
                    </div>

                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 relative">
                        <div className="relative rounded overflow-hidden">
                            <img
                                src={vision_image}
                                alt="About"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
