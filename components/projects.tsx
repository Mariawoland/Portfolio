import { PROJECTS } from '@/constants';
import React from 'react'
import Image from 'next/image';

const Projects = () => {
    return (
        <div id='projects' className='sm:p-16 px-4'>

            <div className='py-3'>

                <div className='rounded-2xl overflow-hidden bg-halfDark text-red p-5 mx-3 mb-4 shadow-3xl'>

                    <p className="lg:text-lg text-sm text-slite"><span className='text-red px-3'>//</span> My Projects</p>
                    <h2 className="lg:text-4xl text-3xl text-slite px-3">Porfolio</h2>
                </div>

                <div className='flex flex-wrap justify-center'>
                    {PROJECTS.map((item, index) => (
                        <div key={index} className='p-3 flex w-full z-[300]'>
                            <div className='rounded-2xl overflow-hidden bg-halfDark text-red flex flex-col items-start p-7 h-full grow shadow-3xl relative'>

                                <div className='flex lg:flex-row flex-col w-full gap-8'>

                                    <div className='lg:w-1/2 w-full'>
                                        <a href={item.link} target='_blank' className='w-full h-full block'>
                                            <img src={item.image} className='w-full h-full rounded-2xl object-fill' />
                                        </a>

                                    </div>

                                    <div className='lg:w-1/2 w-full'>

                                        <h2 className='sm:text-base text-sm text-red'>{item.work}</h2>

                                        <a href={item.link} target='_blank' className='sm:text-2xl text-xl py-3 font-bold text-white hover:text-red transition-all duration-300 block'>{item.name}</a>

                                        <h2 className='sm:text-base text-sm text-slite text-justify'>{item.description}</h2>

                                        <div className="flex flex-wrap gap-4 pt-4">
                                            {item.icons.map((icon) => (
                                                <Image width={25} height={25} alt='Use' src={icon} />
                                            ))}
                                        </div>
                                    </div>

                                </div>

                                <div className='bg-halfDark p-3 rounded-2xl absolute right-0 top-0 flex gap-3 items-center opacity-70 hover:opacity-100 transition-all duration-300'>
                                    <a href={item.gitlink} target="_blank">
                                        <img src='/projects/img7.png' width={22} height={22} alt='Links' />
                                    </a>
                                </div>

                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects