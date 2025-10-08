import Banner from '@/components/Banner'
import TemplateLayout from '@/layouts/template-layout'
import { Head } from '@inertiajs/react'
import banner from '../assets/images/background/inner_bg-DzLdov-A.png';

export default function Referentiel() {
  return (
    <TemplateLayout>
        <Head title="Référentiels"></Head>
        <Banner title="Référentiels" backgroundImage={banner} subtitle='Référentiels' />     
    </TemplateLayout>
  )
}
