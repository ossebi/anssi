import AppLayout from '@/layouts/app-layout';
import admin from '@/routes/admin';
import { Page, Textes, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Edit, Trash } from 'lucide-react';

interface TextesProps {
    pageData: Page
}

export default function Index({ pageData }: TextesProps) {

    const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Liste > textes & lois',
        href: admin.textes.index.url(pageData.slug)
    },
];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="textes & lois" />
            <div className="rounded-xl p-4">
                <Link className='cursor-pointer px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded hover:bg-blue-800'
                    href={admin.textes.create(pageData.slug)}>
                    Ajouter un texte ou une loi
                </Link>
            </div>
            <div className="overflow-hidden bg-white p-4">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Titre</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Description</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageData.textes?.map((item) => (
                            <tr key={item.id} className="border-t">
                                <td className="px-4 py-2 text-sm font-semibold"> {item.title} </td>
                                <td className="px-4 py-2 text-sm font-semibold"> {item.description} </td>
                                <td className="px-4 py-2 text-sm">
                                    <div className='flex gap-x-1'>
                                        <Link href={admin.textes.edit(item.id)} className="mr-2 text-green-600 hover:underline" title='Modifier'>
                                            <Edit className='w-5' />
                                        </Link>
                                        <Link
                                            as="button"
                                            method="delete"
                                            href={admin.textes.destroy.url(item.id)}
                                            className="text-red-600 hover:underline"
                                            title='Supprimer'
                                        >
                                            <Trash className='w-5' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {pageData.textes?.length === 0 && (
                            <tr>
                                <td colSpan={2} className="flex items-center justify-center py-4 text-center text-gray-500">
                                    <span>Aucun texte enregistré.</span>

                                    <div className="rounded-xl p-4">
                                        <Link className='cursor-pointer px-3 py-2 text-xs font-medium text-white bg-sky-700 rounded hover:bg-blue-800'
                                            href={admin.textes.create(pageData.slug)}>
                                            Créer un texte ou une loi
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="my-8 flex justify-center">
                    {/* <nav className="flex gap-2">
                        {pageData.textes?.links.map((link, index) => (
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
                    </nav> */}
                </div>
            </div>
        </AppLayout>
    );
}
