import Banner from '@/components/Banner'
import TemplateLayout from '@/layouts/template-layout'
import { Head } from '@inertiajs/react'
import banner from '../assets/images/background/inner_bg-DzLdov-A.png';
import ContactSection from '@/components/ContactSection';
import { Faq as Question, Page } from '@/types';
import Faq from '@/components/Faq';


export interface FaqProps {
  pageData: Page;
  faqDatas: Question[];
}

export default function Aggrement({ pageData, faqDatas }: FaqProps) {

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
            <Faq faqDatas={faqDatas} />
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
