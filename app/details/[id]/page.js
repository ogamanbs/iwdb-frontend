'use client'
import React, { use, useEffect } from 'react';
import data from '@/components/LandingPageComponents/WebsiteData';
import Menu from '@/components/LandingPageComponents/Menu';
import Footer from '@/components/LandingPageComponents/Footer';
import Details from '@/components/DetailsPageComponents/Details';
import { RiArrowLeftLine } from '@remixicon/react';
import { useRouter } from 'next/navigation';


export default function DetailsPage({params}) {
    const p = use(params);
    const router = useRouter();
    const website = data.find((site) => site.id.toString() === p.id);
    const handleReturnClick = () => {
        router.replace('/');
    }

    return (
        <div className="min-h-screen w-full bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition delay-300 ease-in-out">
            <Menu />
            <div className="h-[7vh] w-full"></div>
            <div onClick={handleReturnClick} className="fixed mt-2 ml-5 h-10 w-10 bg-neutral-200 dark:bg-neutral-800 rounded-[13px] flex items-center justify-center cursor-pointer ">
                <RiArrowLeftLine height={20} width={20}/>
            </div>
            <div className="h-10"></div>
            <Details website={website} />
            <Footer />
        </div>
    )
}
