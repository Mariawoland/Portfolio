import React from 'react';
import '@/app/globals.css';
import Link from 'next/link';


const Hero = () => {


    return (
        <>
            <div className='h-screen flex flex-col'>

                <img src="/background/bg1.gif" className='absolute inset-0 w-full h-full  object-cover object-bottom -z-[200]' />

                <div className='w-full h-full flex flex-col justify-center p-[8%] text-slite'>

                    <h1 className='xl:text-7xl lg:text-6xl md:text-5xl  sm:text-3xl text-2xl z-50 sm:pb-4 pb-2'>Hi, my name is Mariam</h1>
                    <h1 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-sm text-xs z-50'>and I'm a Designer and Developer of all my projects.</h1>

                </div>

            </div>

        </>
    );
};

export default Hero;