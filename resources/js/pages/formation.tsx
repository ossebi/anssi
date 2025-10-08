import Banner from '@/components/Banner'
import TemplateLayout from '@/layouts/template-layout'
import { Head } from '@inertiajs/react'
import banner from '../assets/images/background/inner_bg-DzLdov-A.png';

export default function Formation() {
  return (
    <TemplateLayout>
        <Head title="Formations"></Head>
        <Banner title="Formations" backgroundImage={banner} subtitle='Formations' />
    </TemplateLayout>
  )
}
