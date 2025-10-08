import { Link } from '@inertiajs/react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import communication from '../assets/images/illustration/10237996.jpg';
import conformity from '../assets/images/illustration/6505028.jpg';
import potection from '../assets/images/illustration/6534502.jpg';
import MissionCard from './MissionCard';

export default function Mission() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (document.documentElement.classList.contains('dark')) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, [theme]);

    return (

        <div className="mx-auto my-7 flex flex-col items-center dark:bg-none">
            <div className="flex flex-col">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <span className="mb-7 block text-3xl tracking-wide text-sky-700 uppercase text-center font-semibold">Notre vision</span>

                    <h1 className="max-w-2xl text-3xl font-semibold tracking-wide uppercase lg:max-w-6xl text-center mx-auto lg:text-3xl dark:text-white">
                        <span className="bg-gradient-to-r from-blue-800 to-blue-300 bg-clip-text text-transparent">
                            Protéger, défendre et garantir la cyber-résilience nationale
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mt-7 max-w-6xl font-light text-gray-700 dark:text-gray-400 mx-auto"
                >
                    L’ANSSI œuvre pour un espace numérique sûr et résilient. Elle protège le cyberespace national, accompagne les acteurs publics
                    et privés dans leurs démarches de sécurité et sensibilise la société aux enjeux du numérique.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mt-10 flex grid-cols-2 flex-col md:grid"
                >
                    <MissionCard
                        imageSrc={potection}
                        title="Protéger"
                        paragraph="Assurer la défense et la résilience du cyberespace national."
                    />
                    
                    <MissionCard
                        imageSrc={communication}
                        title="Défendre"
                        paragraph="Former, informer et promouvoir les bonnes pratiques en cybersécurité."
                    />
                    
                    <MissionCard
                        imageSrc={conformity}
                        title="Garentir"
                        paragraph="Garantir le respect des normes et la confiance dans les systèmes d’information."
                    />
                </motion.div>

                <div className="mt-7 inline-flex items-center justify-center gap-7">
                    <Link
                        href='#'
                        className="w-full transform bg-gradient-to-r from-blue-700 to-blue-400 px-6 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-colors duration-300 hover:from-blue-800 hover:to-blue-500 focus:outline-none lg:w-auto"
                    >
                        Découvrir l’ANSSI
                    </Link>
                </div>
            </div>
        </div>

    );
}
