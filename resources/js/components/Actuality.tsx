import { motion } from 'motion/react';
import image_1 from '../assets/images/image_1.jpg';
import image_2 from '../assets/images/image_2.jpg';
import image_3 from '../assets/images/image_3.jpg';
import CardActuality from './CardActuality';
import { ChevronRight } from 'lucide-react';

export default function Actuality() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center bg-sky-100 px-4 py-24 sm:px-12 lg:px-24"
        >
            <div className="mb-10 flex justify-center">
                <div className="max-w-6xl text-center">
                    <span className="text-lg tracking-wide text-cyan-500 uppercase">Actualités & communiqués</span>
                    <p className="mt-2 text-3xl font-bold text-gray-800 dark:text-white">Dernières nouvelles</p>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        Retrouvez ici les dernières informations, communiqués et alertes officielles de l’ANSSI.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <CardActuality publish_at="Oct. 29, 2019" title="Why Lead Generation is Key for Business Growth" imageSrc={image_1} />
                <CardActuality publish_at="Oct. 29, 2019" title="Why Lead Generation is Key for Business Growth" imageSrc={image_2} />
                <CardActuality publish_at="Oct. 29, 2019" title="Why Lead Generation is Key for Business Growth" imageSrc={image_3} />
            </div>

            <div className="mt-14">
                <button className=" flex items-center gap-2 w-full border border-transparent text-sm bg-sky-200 px-6 py-3 text-sky-500 transition-colors duration-300 hover:border-transparent hover:bg-sky-700/70 hover:text-white focus:outline-none lg:w-auto dark:border-gray-400 dark:text-gray-200">
                    <span>Voir toutes les actualités</span>
                    <ChevronRight className='w-4' />
                </button>
            </div>
        </motion.div>
    );
}
