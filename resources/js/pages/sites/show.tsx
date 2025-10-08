import PageForm from '@/components/PageForm';
import AppLayout from '@/layouts/app-layout';
import admin from '@/routes/admin';
import { Page, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { PlusCircle } from 'lucide-react';


interface PageProps {
    pageData: Page
}

export default function Show({ pageData }: PageProps) {

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Page > ' + pageData?.name || 'Non définie',
            href: 'abouts.index',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="A propos" />
            <div className='flex justify-between'>
                {pageData && (
                    <div className="rounded-xl p-4">
                        <Link className='flex items-center gap-x-4 max-w-48 cursor-pointer px-2 py-1 text-xs  text-blue-500 rounded border border-blue-500 hover:bg-blue-800 hover:text-white transition-colors duration-500'
                            href={admin.sections.index(pageData.slug)}>
                            <PlusCircle />
                            <span>Ajouter une section</span>
                        </Link>
                    </div>
                )}
                {pageData.slug === 'textes-nationaux' && (
                    <div className="rounded-xl p-4">
                        <Link className='flex items-center gap-x-1 max-w-64 cursor-pointer px-2 py-1 text-xs rounded bg-blue-800 text-white transition-colors duration-500'
                            href={admin.textes.index(pageData.slug)}>
                            <PlusCircle />
                            <span>Ajouter un texte ou une loi</span>
                        </Link>
                    </div>
                )}
            </div>
            <div className="overflow-hidden bg-white p-4">
                <PageForm item={pageData} />
            </div>
        </AppLayout>
    );
}
