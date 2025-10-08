import Banner from '@/components/Banner'
import TemplateLayout from '@/layouts/template-layout'
import { Head } from '@inertiajs/react'
import banner from '../assets/images/background/inner_bg-DzLdov-A.png';
import ActualitySection from '@/components/ActualitySection';

export default function Article() {
  return (
    <TemplateLayout>
        <Head title="Actualité & publication"></Head>
        <Banner title="Actualités & publications" backgroundImage={banner} subtitle='Actualités & publications' />
        <ActualitySection />

    </TemplateLayout>
  )
}
