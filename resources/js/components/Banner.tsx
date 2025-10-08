import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "@inertiajs/react";

interface BannerProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
}

const Banner: React.FC<BannerProps> = ({
    title,
    subtitle,
    backgroundImage,
}) => {
    return (
        <div
            className={`relative w-full h-[70vh] flex items-center justify-center`}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-blue-950/30" />

            {/* Texte animé */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center text-gray-200 px-4"
            >
                <h1 className="text-3xl md:text-5xl font-bold text-orange-500 max-w-4xl leading-tight">{title}</h1>

                <div className="flex items-center justify-center py-4 overflow-x-auto whitespace-nowrap mt-14 opacity-90">
                    <Link href="#" className="text-gray-300 dark:text-gray-200">
                        <Home />
                    </Link>

                    <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                        <Link href="/" className="text-gray-300 dark:text-gray-200 hover:underline">
                            Accueil
                        </Link>
                    </span>

                    <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                        <ChevronRight />
                    </span>

                    {subtitle && (
                        <span className="text-orange-400 dark:text-blue-400 hover:underline">
                            {subtitle}
                        </span>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default Banner;
