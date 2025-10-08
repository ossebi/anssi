import { ShieldCheck, Target, Users, Globe2, ArrowRight, Play } from "lucide-react";
import vision_image from '../assets/images/background/about-image-_dytNOmx.png';
import icon_image from '../assets/images/background/icon.svg';
import { Visions } from "@/types";
import { Link } from "@inertiajs/react";
import page from "@/routes/page";


export default function VisionSection({ visionsProps }: Visions) {
    return (
        <section className="py-32">
            <div className="max-w-7xl mx-auto px-14">
                <div className="flex flex-wrap -mx-4">

                    <div className="px-4">
                        <div className="mb-4 flex items-center gap-2">
                            <img
                                src={icon_image}
                                alt="icon"
                                className="w-6 h-6"
                            />
                            <h2 className="font-semibold text-orange-500 text-2xl">
                                Notre Vision
                            </h2>
                        </div>
                        <h2 className="max-w-4xl text-2xl lg:text-3xl mb-4 text-blue-950 leading-tight">
                            Construire un cyberespace fiable, sécurisé et résilient, pour une société numérique souveraine grâce aux activités de :
                        </h2>

                        <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 lg:grid-cols-3">
                            {
                                visionsProps.data.map((item) => (
                                    <div key={item.id} className="px-6 py-4 transition-colors duration-300 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 border">

                                        <h4 className="mt-2 text-2xl font-semibold text-blue-900 dark:text-gray-100">{item.title}</h4>

                                        <p className="mt-4 text-gray-500 dark:text-gray-300">For most businesses that want to optimaize web queries.</p>

                                        <div className="mt-8 space-y-8">
                                            <div className='service' dangerouslySetInnerHTML={{ __html: item.description }} />
                                        </div>

                                        <Link 
                                            href={page.showVision(item.slug)}
                                            className="inline-block px-4 py-2 mt-10 font-medium text-white transition-colors duration-300 transform bg-gradient-to-r from-blue-500 to-blue-300 hover:to-blue-600 focus:outline-none focus:bg-blue-600">
                                            En savoir plus
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
                <div className="flex justify-center mt-14">
                    <a
                        href="/about"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded hover:to-yellow-400 transition w-52"
                    >
                        En savoir plus <ArrowRight />
                    </a>
                </div>
            </div>
        </section>
    );
}


