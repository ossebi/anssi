import Banner from '@/components/Banner'
import TemplateLayout from '@/layouts/template-layout'
import { Head } from '@inertiajs/react'
import banner from '../assets/images/background/inner_bg-DzLdov-A.png';

export default function Aggrement() {
  return (
    <TemplateLayout>
        <Head title="Aggréments et Accréditations"></Head>
        <Banner title="Aggréments & Accréditations" backgroundImage={banner} subtitle='Aggréments et Accréditations' />
    </TemplateLayout>
  )
}
