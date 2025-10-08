import React from "react";
import { motion } from "framer-motion";
import { Megaphone } from "lucide-react";

interface LaunchBannerProps {
  message?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function LaunchBanner({
  message = "Nous sommes heureux d’annoncer le lancement officiel de l’ANSSI. Notre mission : protéger le pays contre les menaces numériques !",
  ctaText = "En savoir plus",
  ctaLink = "/about",
}: LaunchBannerProps) {
  return (
    <section className="relative bg-gradient-to-r from-sky-700 to-sky-900 text-white py-4 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
      
      {/* Icône */}
      <div className="flex items-center gap-3">
        <Megaphone className="w-6 h-6 text-white" />
        <motion.p 
          initial={{ x: -20, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="text-sm sm:text-base font-medium"
        >
          {message}
        </motion.p>
      </div>

      {/* Bouton CTA */}
      <motion.a
        href={ctaLink}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-flex items-center gap-2 bg-white text-sky-900 px-4 py-2 rounded-md font-semibold shadow hover:bg-gray-100 transition"
      >
        {ctaText}
      </motion.a>
    </section>
  );
}
