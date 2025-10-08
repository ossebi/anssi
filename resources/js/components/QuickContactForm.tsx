import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import banner from '../assets/images/background/inner_bg-DzLdov-A.png';

export default function QuickContactForm() {
  return (
    <div
      className="relative w-full  flex items-center justify-center h-96"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-gray-200 px-4 flex flex-col space-y-7 items-center max-w-6xl"
      >
        <h1 className="text-3xl md:text-5xl font-bold"> Avez - vous besoin de plus amples informations ? </h1>

        <p className="mt-2 md:text-2xl opacity-90 text-xl">Restons connectés pour mieux protéger le cyberespace national.</p>
        <a
          href="/about"
          className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition w-52"
        >
          Nous Contactez <ArrowRight />
        </a>

      </motion.div>
    </div>
  );
}