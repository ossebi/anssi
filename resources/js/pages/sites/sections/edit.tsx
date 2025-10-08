import SectionPageForm from '@/components/SectionPageForm';
import AppLayout from '@/layouts/app-layout';
import admin from '@/routes/admin';
import { Page, Section, SectionPage, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';


interface SectionProps {
    sectionData: SectionPage;
    pageData: Page;
}

export default function Edit({ sectionData, pageData}: SectionProps) {

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Modifier > Section',
            href: admin.sections.create.url(pageData.slug)
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Modifier la section" />
            <div className='p-7'>
                <Link className='cursor-pointer px-3 py-1 text-xs text-blue-500 rounded border border-blue-500 hover:bg-blue-800 hover:text-white transition-colors duration-500 flex items-center max-w-20'
                    href={admin.sections.index(pageData.slug)}>
                    <ChevronLeft />
                    <span>Retour</span>
                </Link>
            </div>
            <div className="mx-auto container px-14 pb-8">
                <h1 className="mb-6 text-2xl font-bold">Modifier la section</h1>
                <SectionPageForm item={sectionData} pageId={pageData.id} />
            </div>
        </AppLayout>
    );
}
