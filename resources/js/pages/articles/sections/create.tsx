import SectionForm from '@/components/SectionForm';
import VisionForm from '@/components/VisionForm';
import AppLayout from '@/layouts/app-layout';
import sections from '@/routes/sections';
import vision from '@/routes/vision';
import { Article, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';


interface SectionProps {
    articleData: Article
}

export default function Create({ articleData }: SectionProps) {

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Créer > Section',
            href: sections.articles.create.url(articleData.slug)
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Section" />
            <div className="rounded-xl p-4">
                <Link className='cursor-pointer px-3 py-1 text-xs text-blue-500 rounded border border-blue-500 hover:bg-blue-800 hover:text-white transition-colors duration-500 flex items-center max-w-20'
                    href={sections.articles.index(articleData.slug)}>
                    <ChevronLeft />
                    <span>Retour</span>
                </Link>

                <SectionForm articleId={articleData.id} />
            </div>
        </AppLayout>
    );
}
