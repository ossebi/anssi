import Banner from '@/components/Banner'
import TemplateLayout from '@/layouts/template-layout'
import { Head } from '@inertiajs/react'
import banner from '../assets/images/background/inner_bg-DzLdov-A.png';
import { vision } from '@/types';


export default function Vision({ vision }: vision) {
    return (
        <TemplateLayout>
            <Head title="Vision"></Head>
            <Banner title={vision.title} backgroundImage={banner} subtitle={`Vision`} />
            <div className='container px-14 py-10 mx-auto'>
                <div className='col-span-7'>
                    <div className="max-w-6xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                                <div className="shrink-0">
                                    <img className="size-12 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                </div>

                                <div className="grow">
                                    <div className="flex justify-between items-center gap-x-2">
                                        <div>
                                            <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                                                <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                                                    <span className="font-semibold text-gray-800 dark:text-neutral-200">
                                                        Leyla Ludic
                                                    </span>

                                                    <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl dark:bg-neutral-950 dark:divide-neutral-700" role="tooltip">
                                                        <div className="p-4 sm:p-5">
                                                            <div className="mb-2 flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                                                                <div className="shrink-0">
                                                                    <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                                                </div>

                                                                <div className="grow">
                                                                    <p className="text-lg font-semibold text-gray-200 dark:text-neutral-200">
                                                                        Leyla Ludic
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <p className="text-sm text-gray-400 dark:text-neutral-400">
                                                                Leyla is a Customer Success Specialist at Preline and spends her time speaking to in-house recruiters all over the world.
                                                            </p>
                                                        </div>

                                                        <div className="flex justify-between items-center px-4 py-3 sm:px-5">
                                                            <ul className="text-xs space-x-3">
                                                                <li className="inline-block">
                                                                    <span className="font-semibold text-gray-200 dark:text-neutral-200">56</span>
                                                                    <span className="text-gray-400 dark:text-neutral-400">articles</span>
                                                                </li>
                                                                <li className="inline-block">
                                                                    <span className="font-semibold text-gray-200 dark:text-neutral-200">1k+</span>
                                                                    <span className="text-gray-400 dark:text-neutral-400">followers</span>
                                                                </li>
                                                            </ul>

                                                            <div>
                                                                <button type="button" className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                                                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                                        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                                                    </svg>
                                                                    Follow
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="text-xs text-gray-500 dark:text-neutral-500">
                                                <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                                                    Jan 18
                                                </li>
                                                <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                                                    8 min read
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <button type="button" className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                                <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                                Tweet
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-5 md:space-y-8">
                            <div className="space-y-3">
                                <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Announcing a free plan for small teams</h2>

                                <p className="text-lg text-gray-800 dark:text-neutral-200">At preline, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow.</p>
                            </div>

                            <p className="text-lg text-gray-800 dark:text-neutral-200">We're proud to be a part of creating a more open culture and to continue building a product that supports this vision.</p>

                            <figure>
                                <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                                <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                                    A woman sitting at a table.
                                </figcaption>
                            </figure>

                            <p className="text-lg text-gray-800 dark:text-neutral-200">As we've grown, we've seen how Preline has helped companies such as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their designers closer together to create amazing things. We've also learned that when the culture of sharing is brought in earlier, the better teams adapt and communicate with one another.</p>

                            <p className="text-lg text-gray-800 dark:text-neutral-200">That's why we are excited to share that we now have a <a className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500" href="#">free version of Preline</a>, which will allow individual designers, startups and other small teams a chance to create a culture of openness early on.</p>

                            <blockquote className="text-center p-4 sm:px-7">
                                <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
                                    To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.
                                </p>
                                <p className="mt-5 text-gray-800 dark:text-neutral-200">
                                    Nicole Grazioso
                                </p>
                            </blockquote>

                            <figure>
                                <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
                                <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                                    A man and a woman looking at a cell phone.
                                </figcaption>
                            </figure>

                            <div className="space-y-3">
                                <h3 className="text-2xl font-semibold dark:text-white">Bringing the culture of sharing to everyone</h3>

                                <p className="text-lg text-gray-800 dark:text-neutral-200">We know the power of sharing is real, and we want to create an opportunity for everyone to try Preline and explore how transformative open communication can be. Now you can have a team of one or two designers and unlimited spectators (think PMs, management, marketing, etc.) share work and explore the design process earlier.</p>
                            </div>

                            <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">
                                <li className="ps-2">Preline allows us to collaborate in real time and is a really great way for leadership on the team to stay up-to-date with what everybody is working on," <a className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500" href="#">said</a> Stewart Scott-Curran, Intercom's Director of Brand Design.</li>
                                <li className="ps-2">Preline opened a new way of sharing. It's a persistent way for everyone to see and absorb each other's work," said David Scott, Creative Director at <a className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500" href="#">Eventbrite</a>.</li>
                            </ul>

                            <p className="text-lg text-gray-800 dark:text-neutral-200">Small teams and individual designers need a space where they can watch the design process unfold, both for themselves and for the people they work with – no matter if it's a fellow designer, product manager, developer or client. Preline allows you to invite more people into the process, creating a central place for conversation around design. As those teams grow, transparency and collaboration becomes integrated in how they communicate and work together.</p>

                            <div>
                                <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                                    Plan
                                </a>
                                <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                                    Web development
                                </a>
                                <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                                    Free
                                </a>
                                <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                                    Team
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </TemplateLayout>
    )
}
