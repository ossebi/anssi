import Banner from '@/components/Banner'
import TemplateLayout from '@/layouts/template-layout'
import { Head } from '@inertiajs/react'
import banner from '../assets/images/background/inner_bg-DzLdov-A.png';

export default function TextNational() {
  return (
    <TemplateLayout>
        <Head title="Authentification des documents"></Head>
        <Banner title="Authentification des documents" backgroundImage={banner} subtitle='Authentification des documents' />
    </TemplateLayout>
  )
}
