import ArticleForm from '@/components/ArticleForm';
import TexteForm from '@/components/TexteForm';
import AppLayout from '@/layouts/app-layout';
import admin from '@/routes/admin';
import { Page, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';

export default function Create({page}:{page: Page}) {

    const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Créer > Texte ou loi',
        href: admin.textes.create.url(page.slug)
    },
];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Textes & lois" />
            <div className="rounded-xl p-4">
                 <Link className='cursor-pointer px-3 py-1 text-xs text-blue-500 rounded border border-blue-500 hover:bg-blue-800 hover:text-white transition-colors duration-500 flex items-center max-w-20'
                 href={admin.textes.index(page.slug)}>              
                    <ChevronLeft /> 
                    <span>Retour</span>
                 </Link>

                <TexteForm page={page} />
               
            </div>
        </AppLayout>
    );
}
