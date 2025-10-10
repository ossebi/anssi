import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Faq as Question } from "@/types";


interface FaqProps {
    faqDatas: Question[];
}


export default function Faq({ faqDatas }: FaqProps) {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="space-y-6">
                {faqDatas.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                        {/* Question */}
                        <button
                            onClick={() => toggle(index)}
                            className="flex w-full items-center justify-between text-left focus:outline-none"
                        >
                            <h2 className="text-gray-700 dark:text-gray-200 font-semibold">
                                {item.question}
                            </h2>
                            <span
                                className={`transition-transform ${activeIndex === index ? "rotate-180" : "rotate-0"
                                    }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-blue-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                            </span>
                        </button>

                        {/* Réponse animée */}
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="mt-4 text-gray-500 dark:text-gray-300">
                                        <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
