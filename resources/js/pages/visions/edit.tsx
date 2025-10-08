import ArticleForm from '@/components/ArticleForm';
import VisionForm from '@/components/VisionForm';
import AppLayout from '@/layouts/app-layout';
import vision from '@/routes/vision';
import { EditProps, EditVisionProps, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Modifier > Vision',
        href: vision.create.url()
    },
];

export default function Edit({ editVision }: EditVisionProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Modifier la vision" />
            <div className='p-7'>
                <Link className='cursor-pointer px-3 py-1 text-xs text-blue-500 rounded border border-blue-500 hover:bg-blue-800 hover:text-white transition-colors duration-500 flex items-center max-w-20'
                    href={vision.index()}>
                    <ChevronLeft />
                    <span>Retour</span>
                </Link>
            </div>
            <div className="mx-auto container px-14 pb-8">
                <h1 className="mb-6 text-2xl font-bold">Modifier la vision</h1>
                <VisionForm item={editVision} />
            </div>
        </AppLayout>
    );
}
