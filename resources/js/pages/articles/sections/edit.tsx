import ArticleForm from '@/components/ArticleForm';
import SectionForm from '@/components/SectionForm';
import VisionForm from '@/components/VisionForm';
import AppLayout from '@/layouts/app-layout';
import article from '@/routes/article';
import sections from '@/routes/sections';
import vision from '@/routes/vision';
import { Article, EditProps, EditVisionProps, Section, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';


interface SectionProps {
    articleData: Article;
    sectionArticle: Section;
}

export default function Edit({ articleData, sectionArticle}: SectionProps) {

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Modifier > Section',
            href: sections.articles.create.url(articleData.slug)
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Modifier la section" />
            <div className='p-7'>
                <Link className='cursor-pointer px-3 py-1 text-xs text-blue-500 rounded border border-blue-500 hover:bg-blue-800 hover:text-white transition-colors duration-500 flex items-center max-w-20'
                    href={sections.articles.index(articleData.slug)}>
                    <ChevronLeft />
                    <span>Retour</span>
                </Link>
            </div>
            <div className="mx-auto container px-14 pb-8">
                <h1 className="mb-6 text-2xl font-bold">Modifier la section</h1>
                <SectionForm item={sectionArticle} articleId={articleData.id} />
            </div>
        </AppLayout>
    );
}
