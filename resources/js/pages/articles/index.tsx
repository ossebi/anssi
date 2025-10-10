import AppLayout from '@/layouts/app-layout';
import admin from '@/routes/admin';
import sections from '@/routes/sections';
import { Articles, Visions, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Edit, Eye, PlusCircle, Trash } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Liste > article',
        href: '/articles',
    },
];

export default function Index({ articlesProps }: Articles) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Visions" />
            <div className="rounded-xl p-4">
                <Link className='cursor-pointer px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded hover:bg-blue-800'
                    href={admin.articles.create()}>
                    Ajouter un article
                </Link>
            </div>
            <div className="overflow-hidden bg-white p-4">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Titre</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Tag</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Image</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articlesProps.data.map((item) => (
                            <tr key={item.id} className="border-t">
                                <td className="px-4 py-2 text-sm font-semibold">
                                    <div dangerouslySetInnerHTML={{ __html: item.title }} />
                                </td>
                                <td className="px-4 py-2 text-sm capitalize">{item.tag}</td>
                                <td className="px-4 py-2 text-sm">
                                    {item.image ? (
                                        <img src={`/Storage/${item.image}`} alt={item.title} className="h-12 w-12 object-cover" />
                                    ) : (
                                        <span>Aucune image</span>
                                    )}
                                </td>

                                <td className="px-4 py-2 text-sm">
                                    <div className='flex gap-x-1'>
                                        <Link href={sections.articles.index(item.slug)} className="mr-2 text-blue-600 hover:underline" title='Ajouter une section'>
                                            <PlusCircle className='w-5' />
                                        </Link>
                                        <Link href={admin.articles.edit(item.id)} className="mr-2 text-green-600 hover:underline" title='Modifier'>
                                            <Edit className='w-5' />
                                        </Link>
                                        <Link
                                            as="button"
                                            method="delete"
                                            href={admin.articles.destroy.url(item.id)}
                                            className="text-red-600 hover:underline"
                                            title='Supprimer'
                                        >
                                            <Trash className='w-5' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {articlesProps.data.length === 0 && (
                            <tr>
                                <td colSpan={2} className="flex items-center justify-center py-4 text-center text-gray-500">
                                    <span>Aucun article enregistré.</span>

                                    <div className="rounded-xl p-4">
                                        <Link className='cursor-pointer px-3 py-2 text-xs font-medium text-white bg-sky-700 rounded hover:bg-blue-800'
                                            href={admin.articles.create()}>
                                            Créer un article
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="my-8 flex justify-center">
                    <nav className="flex gap-2">
                        {articlesProps.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url || "#"}
                                className={`px-3 py-1 rounded ${link.active
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </nav>
                </div>
            </div>
        </AppLayout>
    );
}
