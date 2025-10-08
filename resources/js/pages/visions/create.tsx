import VisionForm from '@/components/VisionForm';
import AppLayout from '@/layouts/app-layout';
import vision from '@/routes/vision';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Créer > Vision',
        href: vision.create.url()
    },
];

export default function Create() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Visions" />
            <div className="rounded-xl p-4">
                 <Link className='cursor-pointer px-3 py-1 text-xs text-blue-500 rounded border border-blue-500 hover:bg-blue-800 hover:text-white transition-colors duration-500 flex items-center max-w-20'
                 href={vision.index()}>              
                    <ChevronLeft /> 
                    <span>Retour</span>
                 </Link>

                 <VisionForm />
            </div>
        </AppLayout>
    );
}
