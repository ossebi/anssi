import AboutForm from '@/components/AboutForm';
import AppLayout from '@/layouts/app-layout';
import abouts from '@/routes/abouts';
import { About, Article, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeft, Edit, Eye, PlusCircle, Trash } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Liste > A-propos',
        href: 'abouts.index',
    },
];

interface AboutProps {
    aboutData: About
}

export default function Index({ aboutData }: AboutProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="A propos" />
            {aboutData && (
                <div className="rounded-xl p-4">
                    <Link className='flex items-center gap-x-4 max-w-48 cursor-pointer px-2 py-1 text-xs  text-blue-500 rounded border border-blue-500 hover:bg-blue-800 hover:text-white transition-colors duration-500'
                        href={abouts.index()}>
                        <PlusCircle />
                        <span>Ajouter une section</span>
                    </Link>
                </div>
            )}
            <div className="overflow-hidden bg-white p-4">
                <AboutForm item={aboutData} />
            </div>
        </AppLayout>
    );
}
