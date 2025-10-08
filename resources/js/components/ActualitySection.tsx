import { Link } from '@inertiajs/react'
import { ArrowRight, Calendar, Clock, Search, User } from 'lucide-react'
import React from 'react'

export default function ActualitySection() {
    return (
        <div className="pt-30 pb-30">
            <div className="container mx-auto px-14">

                <h2 className="text-3xl font-bold mb-4 text-blue-900 border-b pb-4 pl-10">
                    <a href="/blog-single">Derniers articles, nouvelles et mises à jour</a>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8">
                    <div className="col-span-8">
                        <div className="">
                            <div className="mb-10 border rounded-lg">
                                <div className="relative">
                                    <Link href="/blog-single">
                                        <img src="/images/blog-6-BfkXSsnr.jpg" alt="" className='rounded-t-lg h-[300px] lg:h-[500px] object-cover w-full' />
                                    </Link>
                                    <div className="absolute py-2 px-4 text-gray-200 bg-gradient-to-r from-orange-600 to-yellow-600 rounded left-24 -bottom-5">
                                        <div className='flex gap-x-18'>
                                            <div className='inline-flex items-center gap-x-4'>
                                                <Calendar size={18} />
                                                <span>March 17, 2023</span>
                                            </div>
                                            <div className='inline-flex items-center gap-x-4'>
                                                <Clock size={18} />
                                                <span>March 17, 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-14 px-8">
                                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-blue-950 leading-tight">
                                        <a href="/blog-single">10 reliable sources to learn about it solution</a>
                                    </h2>
                                    <p>
                                        Podcasting operational change management inside of workflows to establish a framework.
                                        Taking seamless key performance indicators offline to maximise the long tail. Keeping
                                        your eye on the ball...
                                    </p>
                                    <div className="border inline-flex px-4 py-3 mt-10 rounded text-blue-950 font-semibold gap-x-2 hover:bg-gradient-to-r hover:from-yellow-700 hover:to-orange-600 hover:text-white transition-all duration-300">
                                        <a className="main-btn-2" href="/blog-single">En savoir plus </a>
                                        <ArrowRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 border p-4 rounded">
                        <div className='bg-gray-50 p-10'>
                            <label htmlFor="hs-trailing-button-add-on-with-icon" className="sr-only">Label</label>
                            <div className="flex rounded-lg">
                                <input type="text" id="hs-trailing-button-add-on-with-icon" placeholder='Recherche'
                                    className="py-2.5 sm:py-3 px-4 block w-full border bg-white rounded-s-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                <button type="button"
                                    className="size-11.5 shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-gradient-to-r from-orange-600 to-yellow-600 text-white focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    <Search size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 mt-14">
                            <h4 className="text-xl font-bold mb-8 text-blue-950 leading-tight">Catégories</h4>
                            <ul className='flex flex-col gap-4'>
                                <li className='bg-white px-4 py-3 rounded flex justify-between'><a href="/blog-single">Application </a><ArrowRight size={18} /></li>
                                <li className='bg-white px-4 py-3 rounded flex justify-between'><a href="/blog-single">Application </a><ArrowRight size={18} /></li>
                                <li className='bg-white px-4 py-3 rounded flex justify-between'><a href="/blog-single">Application </a><ArrowRight size={18} /></li>
                                <li className='bg-white px-4 py-3 rounded flex justify-between'><a href="/blog-single">Application </a><ArrowRight size={18} /></li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-4 mt-14">
                            <h4 className="text-xl font-bold mb-8 text-blue-950 leading-tight">Recent Posts</h4>
                            <div className="flex mb-25 items-center gap-10">
                                <div className="rs-thumb">
                                    <a href="/blog-single">
                                        <img
                                            className='rounded'
                                            src="data:image/jpeg;base64,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"
                                            alt="" />
                                    </a>
                                </div>
                                <div className="rs-content">
                                    <h5 className="font-bold mb-4 text-blue-950 leading-tight">
                                        <a href="/blog-single">10 reliable sources to learn about it
                                            solution
                                        </a>
                                    </h5>
                                    <span className='inline-flex items-center space-x-3'><Calendar size={18} className='text-yellow-600' /> <span>March 21, 2023</span> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
