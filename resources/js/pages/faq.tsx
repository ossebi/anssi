import Banner from '@/components/Banner'
import TemplateLayout from '@/layouts/template-layout'
import { Head } from '@inertiajs/react'
import banner from '../assets/images/background/inner_bg-DzLdov-A.png';
import Faq from '@/components/Faq';
import ContactSection from '@/components/ContactSection';
import { Page } from '@/types';

export interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Quelles sont les missions principales de l’ANSSI ?",
    answer:
      "L’ANSSI est chargée d’assurer la sécurité des systèmes d’information de l’État, de protéger les infrastructures critiques et d’accompagner les administrations et les entreprises dans leur cybersécurité."
  },
  {
    question: "Comment l’ANSSI peut-elle aider mon organisation ?",
    answer:
      "L’ANSSI propose des recommandations, des audits, des formations et peut accompagner les structures dans la mise en place de plans de cybersécurité adaptés."
  },
  {
    question: "Comment signaler un incident de cybersécurité à l’ANSSI ?",
    answer:
      "Vous pouvez signaler tout incident majeur via la plateforme nationale de signalement ou contacter directement le centre opérationnel de l’ANSSI disponible 24h/24."
  },
  {
    question: "L’ANSSI propose-t-elle des formations en cybersécurité ?",
    answer:
      "Oui, l’ANSSI met à disposition des formations et des ateliers destinés aux agents publics et aux partenaires privés pour renforcer leurs compétences en sécurité informatique."
  },
  {
    question: "L’ANSSI collabore-t-elle avec le secteur privé ?",
    answer:
      "Oui, l’ANSSI travaille en étroite collaboration avec les entreprises et les opérateurs d’importance vitale pour renforcer la sécurité nationale et développer un écosystème cybersécurisé."
  }
];
export interface FaqProps {
  pageData: Page;
}

export default function Aggrement({ pageData }: FaqProps) {
  return (
    <TemplateLayout>
      <Head title="Foire aux questions"></Head>
      <Banner title="FAQ" backgroundImage={banner} subtitle='FAQ' />
      <div className='container px-14 py-10 mx-auto'>
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">{pageData?.subtitle}</h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">{pageData?.description}</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-14'>
          <div className='col-span-7'>
            <Faq faqs={faqData} />
          </div>
          <div className='col-span-5'>
            <img src='/images/faq-left-img-DGpeLH8M.png' />
          </div>
        </div>
      </div>
      <ContactSection />
    </TemplateLayout>
  )
}
