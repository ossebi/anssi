import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import admin from '@/routes/admin';
import { Faq, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeft, Edit, Eye, Trash } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Foire aux questions',
        href: dashboard.url()
    },
];

interface FaqProps {
    faqDatas: Faq[];
}

export default function Index({ faqDatas }: FaqProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Section" />
            <div className="flex justify-between rounded-xl p-4">
                <Link className='cursor-pointer px-3 py-1 text-xs text-blue-500 rounded border border-blue-500 hover:bg-blue-800 hover:text-white transition-colors duration-500 flex items-center max-w-20'
                    href={dashboard.url()}>
                    <ChevronLeft />
                    <span>Retour</span>
                </Link>
                <Link className='cursor-pointer px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded hover:bg-blue-800'
                    href={admin.faqs.create()}>
                    Ajouter une qustion
                </Link>
            </div>
            <div className="overflow-hidden bg-white p-4">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Titre</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {faqDatas.map((item) => (
                            <tr key={item.id} className="border-t">
                                <td className="px-4 py-2 text-sm font-semibold">
                                    <Link href={admin.faqs.edit(item.id)}>{item.question}</Link>
                                </td>

                                <td className="px-4 py-2 text-sm">
                                    <div className='flex gap-x-1'>
                                        <Link href={admin.faqs.show(item.id)} className="mr-2 text-blue-600 hover:underline" title='Voir'>
                                            <Eye className='w-5' />
                                        </Link>
                                        <Link href={admin.faqs.edit(item.id)} className="mr-2 text-green-600 hover:underline" title='Modifier'>
                                            <Edit className='w-5' />
                                        </Link>
                                        <Link
                                            as="button"
                                            method="delete"
                                            href={admin.faqs.destroy.url(item.id)}
                                            className="text-red-600 hover:underline"
                                            title='Supprimer'
                                        >
                                            <Trash className='w-5' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
