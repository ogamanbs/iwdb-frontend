'use client'
import About from '@/components/AboutPageComponents/About';
import Guide from '@/components/GuidePageComponents/Guide';
import Footer from '@/components/LandingPageComponents/Footer';
import Menu from '@/components/LandingPageComponents/Menu';
import { RiArrowLeftLine } from '@remixicon/react';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function AboutPage() {
    const router = useRouter();
    const handleReturnClick = () => {
        router.back();
    }
    return (
        <div className="min-h-screen w-full bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition delay-300 ease-in-out">
            <Menu />
            <div className="h-[7vh] w-full"></div>
            <div onClick={handleReturnClick} className="fixed mt-2 ml-5 h-10 w-10 bg-neutral-200 dark:bg-neutral-800 rounded-[13px] flex items-center justify-center cursor-pointer ">
                <RiArrowLeftLine height={20} width={20}/>
            </div>
            <div className="h-[7vh] w-full flex items-center justify-center">
                <h1 className="text-2xl md:text-3xl font-black text-neutral-400 select-none">User Guide</h1>
            </div>
            <Guide />
            <Footer />
        </div>
    );
}