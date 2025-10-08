import React, { useState } from "react";
import { FileText } from "lucide-react";
import { Page } from "@/types";


export default function TextsNationaux({ pageData }: {pageData: Page}) {

    const [search, setSearch] = useState("");

    const filteredTextes = pageData.textes?.filter((texte) =>
        texte.title.toLowerCase().includes(search.toLowerCase()) ||
        (texte.description && texte.description.toLowerCase().includes(search.toLowerCase()))
    ) || [];

     return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-4xl py-12 px-14 mx-auto ">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-6">
                    {pageData.subtitle}
                </h2>

                {/* Champ de recherche */}
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Rechercher un texte..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full md:w-1/2 px-4 py-2 border dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>

                {/* Liste filtrée */}
                <ul className="space-y-6">
                  {filteredTextes.length > 0 ? (
                    filteredTextes.map((texte, index) => (
                        <li key={index} className="border-b pb-4">  
                            <a
                                href={`/storage/${texte.path}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4 hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-lg transition"
                            >
                                <FileText className="w-6 h-6 text-blue-600" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        {texte.title}
                                    </h3>
                                    {texte.description && (
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {texte.description}
                                        </p>
                                    )}
                                </div>
                            </a>
                        </li>
                    ))
                    ) : (   
                        <p className="text-gray-600 dark:text-gray-400">Aucun texte trouvé.</p>
                    )}
                </ul>
            </div>
        </section>
    );
}
