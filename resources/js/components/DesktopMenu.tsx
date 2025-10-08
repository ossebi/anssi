import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logos/logo-lg.jpg";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { Menus } from "../utils";
import { home } from "@/routes";
import MobileMenu from "./MobileMenu";

export default function DesktopMenu() {

    const [dark, setDark] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={`absolute top-0 left-0 right-0 container px-4 mx-auto py-5 z-50 ${dark ? "bg-gray-900 text-white" : "bg-transparent text-gray-800"}`}
        >
            <div className="px-4">
                <div className="flex items-center justify-between h-24 w-full">
                    {/* Brand */}
                    <div className="flex items-center gap-4">
                        <Link href={home.url()}>
                            <img
                                src={logo}
                                className="w-20 h-20 md:h-24 md:w-24 rounded-full"
                            />
                        </Link>
                    </div>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {Menus.map((menu, index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* menu sans sous-menu */}
                                {!menu.subMenu ? (
                                    <Link
                                        href={menu.link || "#"}
                                        className="text-sm flex font-semibold items-center gap-1 text-white hover:bg-sky-700 p-2 hover:text-white uppercase rounded transition-all duration-500"
                                    >
                                        {menu.name}
                                    </Link>
                                ) : (
                                    <>
                                        {/* lien principal */}
                                        <div className="inline-flex items-center px-1 transition-all duration-500 text-sm hover:bg-sky-700 hover:text-white rounded cursor-pointer">
                                            <div className="hover:text-white font-semibold p-2 uppercase text-white">
                                                {menu.name}
                                            </div>
                                            <ChevronDown className="w-4 text-white" />
                                        </div>

                                        {/* sous-menu avec animation */}
                                        <AnimatePresence>
                                            {hoveredIndex === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.3 }}
                                                    className={`absolute z-50 left-0 mt-2 grid gap-1 shadow-md px-2 w-[250px] ${dark ? "bg-gray-800" : "bg-white"
                                                        }`}
                                                >
                                                    {menu.subMenu.map((sub, i) => (
                                                        <Link
                                                            key={i}
                                                            href={sub.link || "#"}
                                                            className="flex items-start gap-2 p-2 rounded hover:bg-blue-100"
                                                        >
                                                            <p className="text-sm font-medium w-full">
                                                                {sub.name}
                                                            </p>
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right side controls */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setDark((d) => !d)}
                            aria-label="Basculer thème"
                            className="hidden md:inline-flex items-center gap-2 px-3 py-1 text-sm hover:text-sky-700"
                        >
                            {dark ? (
                                <Sun className="w-5 " />
                            ) : (
                                <Moon className="w-5 text-orange-600" />
                            )}
                        </button>

                        {/* Mobile hamburger */}
                        <div className="flex items-center lg:hidden">
                            <MobileMenu Menus={Menus} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
