import { TASKS, EXPERIENCE, EDUCATION } from '@/constants';
import React from 'react'
import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";

const About = () => {

    return (
        <div id='about' className='sm:p-16 p-4 pt-20'>

            <div className='text-slite rounded-2xl overflow-hidden bg-halfDark sm:p-7 p-5 shadow-3xl mx-3'>
                <p className="lg:text-lg text-sm"><span className='text-red'>//</span> Introduction</p>
                <h2 className="lg:text-4xl text-3xl pb-4">Overview</h2>
                <p className='md:text-base text-sm text-justify'>I`m Mariam Ekizashvili, a 20-year-old Frontend developer with a two-year journey in the field. Specializing in React over the past year, I stay dedicated to the forefront of modern web development. Engaging in many valanteur projects, I`ve showcased effective collaboration, solid coding principles, and a knack for tackling diverse challenges. Motivated and quick to adapt, I stay ahead of tech shifts, implementing cutting-edge solutions. Beyond technical prowess, I bring a disciplined, results-driven mindset. This approach ensures I deliver high-quality solutions within tight timelines, consistently exceeding expectations. My commitment to professionalism is evident in my work ethic. Embracing straightforward communication and a focus on tangible results, I`m more than a coder; I`m a problem solver. Eager to contribute precision, efficiency, and innovation to projects, I`m always seeking new challenges for continuous growth in the coding realm.</p>
                <div>
                    <a href='/resume' target='_blank' className='block mt-4 w-36 text-center border rounded-full py-2 border-slite text-base font-semibold hover:text-black hover:bg-slite transition-all duration-300'>View Resume</a>
                </div>
            </div>

            <div className='py-20'>

                <div className='rounded-2xl overflow-hidden bg-halfDark text-red p-5 mx-3 mb-4 shadow-3xl'>

                    <p className="lg:text-lg text-sm text-slite"><span className='text-red px-3'>//</span> What Can I do?</p>
                    <h2 className="lg:text-4xl text-3xl text-slite px-3">Services</h2>
                </div>

                <div className='flex flex-wrap justify-center'>
                    {TASKS.map((item, index) => (
                        <div key={index} className='p-3 flex xl:w-1/4 sm:w-1/2 w-full h-52'>
                            <div className='border-2 border-red rounded-2xl overflow-hidden bg-halfDark text-red flex justify-center flex-col items-center gap-4 p-7 h-full grow shadow-3xl'>
                                <Image src={item.image} alt={item.title} width={80} height={80} />
                                <h2 className='text-center xl:text-base md:text-lg sm:text-base text-sm font-bold'>{item.title}</h2>
                            </div>
                        </div>

                    ))}
                </div>

            </div>

            <div>

                <div className='rounded-2xl overflow-hidden bg-halfDark text-red p-5 mx-3 mb-4 shadow-3xl'>

                    <p className="lg:text-lg text-sm text-slite"><span className='text-red px-3'>//</span> Where have I worked?</p>
                    <h2 className="lg:text-4xl text-3xl text-slite px-3">Experience</h2>
                </div>

                <div className='flex flex-wrap justify-center'>
                    {EXPERIENCE.map((item, index) => (
                        <div key={index} className='p-3 flex lg:w-1/2 w-full'>
                            <div className='rounded-2xl overflow-hidden bg-halfDark text-red flex justify-center flex-col items-center gap-4 p-7 h-full grow shadow-3xl'>

                                <div className='flex sm:flex-row flex-col sm:items-center w-full gap-8'>
                                    <div className="w-[90px] aspect-square bg-white flex justify-center items-center rounded-full overflow-hidden">
                                        <Image src={item.image} alt={item.title} width={60} height={60} />
                                    </div>
                                    <div className='sm:w-auto w-full'>

                                        <h2 className='sm:text-base text-sm text-red'>{item.company_name}</h2>

                                        <h2 className='xl:text-4xl lg:text-2xl md:text-4xl sm:text-2xl text-xl py-1 font-bold text-white'>{item.title}</h2>

                                        <h2 className='sm:text-base text-sm text-slite'>{item.place}</h2>
                                    </div>
                                </div>




                                <div className='text-white sm:text-base text-sm'>
                                    <hr className='bg-slite border-0 h-[1px] mt-5 mb-7' />
                                    <p className='text-red pb-3'>{item.date}</p>
                                    {item.points.map((point) => (
                                        <p className='py-1'>{point}</p>
                                    ))}
                                </div>

                            </div>
                        </div>

                    ))}
                </div>

            </div>

            <div className='py-20'>
                <div className='rounded-2xl overflow-hidden bg-halfDark text-red p-5 mx-3 mb-4 shadow-3xl'>

                    <p className="lg:text-lg text-sm text-slite"><span className='text-red px-3'>//</span> What have I Learned?</p>
                    <h2 className="lg:text-4xl text-3xl text-slite px-3">Education</h2>
                </div>

                <div className='flex flex-wrap justify-center'>
                    {EDUCATION.map((item, index) => (
                        <div key={index} className='p-3 flex lg:w-1/2 w-full'>
                            <div className='rounded-2xl overflow-hidden bg-halfDark text-red flex flex-col items-start gap-4 p-7 h-full grow shadow-3xl'>

                                <div className='flex sm:flex-row flex-col w-full gap-8'>
                                    <div className='sm:w-auto w-full'>

                                        <h2 className='sm:text-base text-sm text-red'>{item.date}</h2>

                                        <h2 className='sm:text-2xl text-xl py-3 font-bold text-white'>{item.name}</h2>

                                        <h2 className='sm:text-base text-sm text-slite'>{item.description}</h2>
                                    </div>
                                </div>

                            </div>
                        </div>

                    ))}
                </div>
            </div>

            <div>

                <div className='rounded-2xl overflow-hidden bg-halfDark text-red p-5 mx-3 mb-4 shadow-3xl'>

                    <p className="lg:text-lg text-sm text-slite"><span className='text-red px-3'>//</span> What am I skilled at?</p>
                    <h2 className="lg:text-4xl text-3xl text-slite px-3">Skills</h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-7 text-5xl text-red pt-5">
                    <div className='bg-halfDark rounded-full p-5 overflow-hidden'>
                        <FaHtml5 />
                    </div>
                    <div className='bg-halfDark rounded-full p-5 overflow-hidden'>
                        <FaCss3Alt />
                    </div>
                    <div className='bg-halfDark rounded-full p-5 overflow-hidden'>
                        <SiTailwindcss />
                    </div>
                    <div className='bg-halfDark rounded-full p-5 overflow-hidden'>
                        <FaBootstrap />
                    </div>
                    <div className='bg-halfDark rounded-full p-5 overflow-hidden'>
                        <IoLogoJavascript />
                    </div>
                    <div className='bg-halfDark rounded-full p-5 overflow-hidden'>
                        <FaReact />
                    </div>
                    <div className='bg-halfDark rounded-full p-5 overflow-hidden'>
                        <TbBrandNextjs />
                    </div>
                    <div className='bg-halfDark rounded-full p-5 overflow-hidden'>
                        <FaGithub />
                    </div>
                    <div className='bg-halfDark rounded-full p-5 overflow-hidden'>
                        <FaGitAlt />
                    </div>
                </div>

            </div>

        </div>

    )
}

export default About;