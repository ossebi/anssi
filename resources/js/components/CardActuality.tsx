type cardActualityPrpos = {
    publish_at: string;
    title: string;
    imageSrc: string;
};
export default function CardActuality({ publish_at, title, imageSrc }: cardActualityPrpos) {
    return (
        <div className="flex flex-col overflow-hidden bg-white dark:bg-gray-900">
            <a
                href="blog-single.html"
                className="h-40 transform bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-105"
                style={{ backgroundImage: `url(${imageSrc})` }}
            ></a>

            <div className="p-4">
                <div className="mb-2 flex gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>{publish_at}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 hover:underline dark:text-white">
                    <a href="#">{title}</a>
                </h3>
                <p className="mt-3">
                    <a href="#" className="inline-block text-xs bg-sky-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-sky-600">
                        En savoir plus
                    </a>
                </p>
            </div>
        </div>
    );
}
