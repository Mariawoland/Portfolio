"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { MdMenu } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import "@/app/globals.css";

const Header = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(prev => !prev);
    };


    return (
        <>
            <header className={`absolute inset-0 w-full flex justify-between items-center transition-all duration-300 md:px-10 px-4 h-[80px] z-[200]`}>

                <Link href='/'>
                    <Image src='/logo.svg' width={120} height={70} alt={'Logo'} />
                </Link>

                <button className='md:hidden flex text-slite text-[40px] ' onClick={handleClick}>
                    <MdMenu />
                </button>

                <div className={`text-base font-semibold md:flex hidden gap-7 items-center transition-all duration-300 md:flex-row flex-col lg:items-center lg:gap-9 lg:p-0 p-4 tracking-wide ms-auto text-slite`}>

                    <Link href='/#about' className='transition-all duration-300 underline-ani'>About</Link>

                    <Link href='/#projects' className='transition-all duration-300 underline-ani'>Projects</Link>

                    <Link href='/#contact' className='transition-all duration-300 underline-ani'>Contact</Link>

                </div>

            </header>

            <div className={`z-[300] bg-dark text-white fixed top-0 right-0 font-semibold flex flex-col gap-6 p-5 transition-all duration-300 h-screen text-base ${clicked === true ? 'translate-x-0' : 'translate-x-[100%]'}`}>

                <div className='flex gap-14 items-center'>

                    <Link href='/'>
                        <Image src='/smallLogo.svg' className='brightness-75' width={45} height={45} alt={'Logo'} />
                    </Link>

                    <button className='md:hidden flex text-slite text-[40px]' onClick={handleClick}>
                        <IoIosClose />
                    </button>

                </div>

                <Link href='/#about'>About</Link>

                <Link href='/#projects'>Projects</Link>

                <Link href='/#contact'>Contact</Link>

            </div>
        </>
    )
}

export default Header;