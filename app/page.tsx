"use client";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { useState, useEffect } from "react";
import '@/app/globals.css';
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import "@/app/globals.css";

export default function Home() {
  const [isScrolled, setScrolled] = useState(false);
  const [isPageMounted, setPageMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > window.innerHeight - 5);
    };

    window.addEventListener('scroll', handleScroll);
    const simulateAsyncOperation = () => {
      setTimeout(() => {
        setPageMounted(true);
      }, 1000);
    };

    simulateAsyncOperation();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {!isPageMounted ? (
        <div className="w-full h-screen flex items-center justify-center bg-black">
          <img src="/smallLogo.svg" className="w-20 pulsing" alt="small Logo" />
        </div>
      ) : (
        <>
          <Header />
          <Hero />
          <div className={`background2 ${isScrolled ? 'scrolled' : ''}`}>
            <About />
            <Projects />
            <Contact />
          </div>
        </>
      )}
    </>
  );
}
