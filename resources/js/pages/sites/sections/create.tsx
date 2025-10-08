import SectionPageForm from '@/components/SectionPageForm';
import AppLayout from '@/layouts/app-layout';
import admin from '@/routes/admin';
import { Page, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';


interface SectionProps {
    pageData: Page
}

export default function Create({ pageData }: SectionProps) {

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Créer > Section',
            href: admin.sections.create.url(pageData.slug)
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Section" />
            <div className="rounded-xl p-4">
                <Link className='cursor-pointer px-3 py-1 text-xs text-blue-500 rounded border border-blue-500 hover:bg-blue-800 hover:text-white transition-colors duration-500 flex items-center max-w-20'
                    href={admin.sections.index(pageData.slug)}>
                    <ChevronLeft />
                    <span>Retour</span>
                </Link>

                <SectionPageForm pageId={pageData.id} />
            </div>
        </AppLayout>
    );
}
