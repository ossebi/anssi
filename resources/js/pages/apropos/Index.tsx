import Banner from '@/components/Banner'
import TemplateLayout from '@/layouts/template-layout'
import { Head } from '@inertiajs/react'
import banner from '../../assets/images/background/inner_bg-DzLdov-A.png';
import { Page } from '@/types';


interface AboutProps {
  pageData: Page;
}

export default function Index({ pageData }: AboutProps) {
  return (
    <TemplateLayout>
      <Head title="A propos"></Head>
      <Banner title="A propos" backgroundImage={banner} subtitle='Qui nous sommes ?' />
      {
        pageData.section?.map((item, index) => (
          <div className='container px-14 py-10 mx-auto'>
            <div className='col-span-7'>
              <div className="max-w-6xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">

                <div className="space-y-5 md:space-y-8">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
                      {item.title}
                    </h2>

                    <p className="text-lg text-gray-800 dark:text-neutral-200">
                      <div dangerouslySetInnerHTML={{ __html: item.content || '' }}></div>
                    </p>
                  </div>

                  {
                    item.img_path &&
                    <figure>
                      <img className="w-full object-cover rounded-xl"
                        src={`/Storage/${item.img_path}`}
                        alt={item?.img_path || ''} />
                      <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                        {item.title}
                      </figcaption>
                    </figure>
                  }

                </div>
              </div>

            </div>
          </div>
        ))
      }

    </TemplateLayout>
  )
}
