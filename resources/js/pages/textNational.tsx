import Banner from '@/components/Banner'
import TemplateLayout from '@/layouts/template-layout'
import { Head } from '@inertiajs/react'
import banner from '../assets/images/background/inner_bg-DzLdov-A.png';
import TextsNationaux from '@/components/TextsNationaux';
import { Page } from '@/types';


export interface TexteNational {
  title: string;
  description?: string;
  url: string;
}

const textes: TexteNational[] = [
  {
    title: "Loi nationale sur la cybersécurité (2023)",
    description: "Cadre légal de la cybersécurité et de la protection des infrastructures critiques.",
    url: "/pdfs/loi-cybersecurite-2023.pdf"
  },
  {
    title: "Règlement sur la protection des données personnelles",
    description: "Directive nationale inspirée du RGPD pour la protection des données.",
    url: "/pdfs/reglement-protection-donnees.pdf"
  },
  {
    title: "Plan stratégique national de cybersécurité",
    description: "Document d’orientation définissant les priorités et objectifs nationaux.",
    url: "/pdfs/plan-strategique-cybersecurite.pdf"
  }
];

export default function TextNational({pageData}:{pageData: Page}) {
  return (
    <TemplateLayout>
      <Head title="Textes nationaux"></Head>
      <Banner title="Textes nationaux" backgroundImage={banner} subtitle='Textes nationaux' />
      <TextsNationaux pageData={pageData} />;
    </TemplateLayout>
  )
}
