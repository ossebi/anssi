import AppLayout from '@/layouts/app-layout';
import admin from '@/routes/admin';
import { Page, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeft, Edit, Eye, Trash } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Liste > section',
        href: '/articles',
    },
];

interface SectionProps {
    pageData: Page
}

export default function Index({ pageData }: SectionProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Section" />
            <div className="flex justify-between rounded-xl p-4">
                <Link className='cursor-pointer px-3 py-1 text-xs text-blue-500 rounded border border-blue-500 hover:bg-blue-800 hover:text-white transition-colors duration-500 flex items-center max-w-20'
                    href={admin.pages.about()}>
                    <ChevronLeft />
                    <span>Retour</span>
                </Link>
                <Link className='cursor-pointer px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded hover:bg-blue-800'
                    href={admin.sections.create(pageData.slug)}>
                    Ajouter une section
                </Link>
            </div>
            <div className="overflow-hidden bg-white p-4">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Titre</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Image</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageData.section?.map((item) => (
                            <tr key={item.id} className="border-t">
                                <td className="px-4 py-2 text-sm font-semibold">
                                    <Link href={admin.sections.edit([pageData.slug, item.id])}>{item.title}</Link>
                                </td>
                                <td className="px-4 py-2 text-sm">
                                    {item.img_path ? (
                                        <img
                                            src={`/storage/${item.img_path}`}
                                            alt={item.title}
                                            className="h-12 w-12 object-cover rounded"
                                        />
                                    ) : (
                                        <span className="text-gray-400">Aucune image</span>
                                    )}
                                </td>

                                <td className="px-4 py-2 text-sm">
                                    <div className='flex gap-x-1'>
                                        <Link href={admin.sections.show(item.id)} className="mr-2 text-blue-600 hover:underline" title='Voir'>
                                            <Eye className='w-5' />
                                        </Link>
                                        <Link href={admin.sections.edit([pageData.slug, item.id])} className="mr-2 text-green-600 hover:underline" title='Modifier'>
                                            <Edit className='w-5' />
                                        </Link>
                                        <Link
                                            as="button"
                                            method="delete"
                                            href={admin.sections.destroy.url(item.id)}
                                            className="text-red-600 hover:underline"
                                            title='Supprimer'
                                        >
                                            <Trash className='w-5' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {pageData.section?.length === 0 && (
                            <tr>
                                <td colSpan={5} className="flex items-center justify-center py-4 text-center text-gray-500">
                                    <span>Aucune section enregistrée.</span>

                                    <div className="rounded-xl p-4">
                                        <Link className='cursor-pointer px-3 py-2 text-xs font-medium text-white bg-sky-700 rounded hover:bg-blue-800'
                                            href={admin.sections.create(pageData.slug)}>
                                            Créez en une
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
