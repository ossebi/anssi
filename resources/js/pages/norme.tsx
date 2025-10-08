import Banner from '@/components/Banner'
import TemplateLayout from '@/layouts/template-layout'
import { Head } from '@inertiajs/react'
import banner from '../assets/images/background/inner_bg-DzLdov-A.png';

export default function Norme() {
  return (
    <TemplateLayout>
        <Head title="Normes & standards"></Head>
        <Banner title="Normes & standards" backgroundImage={banner} subtitle='Normes & standards' />
    </TemplateLayout>
  )
}
