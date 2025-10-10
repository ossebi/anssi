import banner from '../assets/images/background/background-shape-BR5p4TLF.png';
import { ArrowRight } from "lucide-react";
import { Article } from "@/types";
import { Link } from "@inertiajs/react";
import article from "@/routes/article";


export interface NewsListProps {
    newsList: Article[];
}

const NewsAlerts = ({ newsList }: NewsListProps) => {
    return (
        <section className="news-alerts py-32 bg-gray-50 relative overflow-hidden"
            style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container mx-auto px-14">
                {/* Titre */}
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-2 text-orange-500 font-semibold">
                        <svg width="24" height="24" fill="none">
                            <path
                                d="M9 7.5L15 21.5L18.7 13H23V11H17.3L15 16.5L9 2.5L5.3 11H1V13H6.7L9 7.5Z"
                                fill="#f24c1a"
                            />
                        </svg>
                        <span className="font-semibold text-orange-500 text-2xl">Actualité & Alertes</span>
                        <svg width="24" height="24" fill="none">
                            <path
                                d="M9 7.5L15 21.5L18.7 13H23V11H17.3L15 16.5L9 2.5L5.3 11H1V13H6.7L9 7.5Z"
                                fill="#f79c53"
                            />
                        </svg>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-blue-950 leading-tight tracking-wider mt-4 max-w-4xl mx-auto">
                        Restez informés des dernières alertes et actualités en cybersécurité.
                    </h2>
                </div>

                {/* Grille des news */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsList.map((news, index) => (
                        <div
                            key={index}
                            className="bg-white rounded shadow hover:shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1"
                        >
                            <img
                                src={`/Storage/${news.image}`}
                                alt={news.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <div className="text-sm text-orange-500 font-medium mb-2 uppercase">
                                    {news.tag}
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-sky-950">
                                    <a href={news.slug} className="hover:underline">
                                        {news.title}
                                    </a>
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    <div dangerouslySetInnerHTML={{ __html: news.description || '' }}></div>
                                </p>
                                <div className="flex items-center justify-between text-sm">
                                    <Link
                                        href={news.slug}
                                        className="text-orange-500 font-semibold hover:underline flex items-center gap-1"
                                    >
                                        En savoir plus <ArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Link
                    href={article.index()}
                    className="inline-flex items-center justify-center gap-2 mt-14 border-sky-500 px-6 py-3 rounded bg-sky-700 text-white transition hover:bg-sky-700/80"
                >
                    Voir toutes les actualités <ArrowRight />
                </Link>
            </div>
        </section>
    );
};

export default NewsAlerts;



interface Alert {
    id: number;
    title: string;
    description: string;
    date: string;
    link?: string;
}

interface NewsAlertsProps {
    alerts: Alert[];
}

