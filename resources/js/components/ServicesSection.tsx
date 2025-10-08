import React from "react";
import { motion } from "framer-motion";
import bg_image from '../assets/images/background/featured-bg-iQEUJqQ1.png';
import {
  ShieldCheck,
  Monitor,
  Server,
  Globe2,
  Key,
  Puzzle,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

interface ServicesSectionProps {
  heading?: string;
  subheading?: string;
  services?: ServiceItem[];
}

export default function ServicesSection({
  heading = "Nos Missions & Pouvoirs",
  subheading = "Découvrez nos offres pour renforcer la sécurité numérique nationale",

  services = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-sky-500" />,
      title: "Audit & Veille",
      description: "Assurer, pour le compte de l’Etat, le contrôle et le suivi des activités liées à la sécurité des systèmes d’information et des réseaux de communications électroniques.",
      link: "/services/audit",
    },
    {
      icon: <Server className="w-8 h-8 text-sky-500" />,
      title: "Protection d’infrastructures",
      description: "Garantir la protection du cyberespace national",
      link: "/services/infrastructures",
    },
    {
      icon: <Monitor className="w-8 h-8 text-sky-500" />,
      title: "Surveillance 24/7",
      description: "Analyse en temps réel et alertes pour les incidents.",
      link: "/services/surveillance",
    },
    {
      icon: <Key className="w-8 h-8 text-sky-500" />,
      title: "Gestion des accès",
      description: "Authentification, contrôle d’accès, identités sécurisées.",
      link: "/services/identite",
    },
    {
      icon: <Puzzle className="w-8 h-8 text-sky-500" />,
      title: "Formation & Sensibilisation",
      description: "Programmes éducatifs pour institutions et citoyens.",
      link: "/services/formation",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-sky-500" />,
      title: "Coopération internationale",
      description: "Partenariats et échanges pour renforcer la cybersécurité régionale.",
      link: "/services/coop",
    },
  ],
  

}: ServicesSectionProps) {
  return (
    <section
      className="py-20 bg-white dark:bg-slate-900 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg_image})`,}}
    >
      <div className="container mx-auto px-14 bg-white/70 dark:bg-slate-900/70 p-8 rounded-xl">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-semibold text-orange-500 text-2xl mb-10"
          >
            {heading}
          </motion.h2> 
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-3xl lg:text-4xl font-semibold mb-4 text-blue-900 tracking-wider"
          >
            {subheading}
          </motion.p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group bg-white dark:bg-slate-800 p-6 rounded-xl transition-all border border-slate-100 dark:border-slate-700"
            >
              <div className="mb-5 flex items-center justify-center w-12 h-12 bg-sky-50 dark:bg-sky-500/10 rounded-md">
                {svc.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">
                {svc.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {svc.description}
              </p>
              {svc.link && (
                <a
                  href={svc.link}
                  className="inline-flex items-center gap-2 text-orange-500 hover:text-sky-700 text-xs transition"
                >
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
