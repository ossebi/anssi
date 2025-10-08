import Banner from '@/components/Banner'
import TemplateLayout from '@/layouts/template-layout'
import { Head } from '@inertiajs/react'
import banner from '../../assets/images/background/inner_bg-DzLdov-A.png';
import AboutSection from '@/components/AboutSection';
import { Page } from '@/types';


interface AboutProps {
  pagesData: Page[];
}

export default function Index({ pagesData }: AboutProps) {
  return (
    <TemplateLayout>
      <Head title="A propos"></Head>
      <Banner title="A propos" backgroundImage={banner} subtitle='Qui nous sommes ?' />
      <AboutSection pagesData={pagesData} link={false} />
    </TemplateLayout>
  )
}
