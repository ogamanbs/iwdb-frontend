'use client'
import React, { useState } from 'react';
import Footer from '@/components/LandingPageComponents/Footer';
import Menu from '@/components/LandingPageComponents/Menu';
import SearchBar from '@/components/LandingPageComponents/SearchBar';
import WebsitesList from '@/components/LandingPageComponents/WebsitesList';
import data from '@/components/LandingPageComponents/WebsiteData';
import { RiArrowRightLine, RiSearchLine } from '@remixicon/react';

export default function Home() {
  const [search, setSearch] = useState('');
  const [isValidLink, setIsValidLink] = useState(false);
  const [link, setLink] = useState('');
  return (
    <div className="min-h-screen w-full bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition delay-300 ease-in-out">
      <Menu />
      <div className="h-[7vh] w-full"></div>
      <SearchBar search={search} setSearch={setSearch} isValidLink={isValidLink} setIsValidLink={setIsValidLink} link={link} setLink={setLink} />
      <div className="h-[10vh] w-full"></div>
      <div className="min-h-[76vh] w-full">
        {data.length > 0 && data.sort((a,b) => a.ranking - b.ranking).filter(website => website.url.includes(search) || website.title.includes(search)).length > 0 && <WebsitesList search={search} data={data} />}
        {data.length > 0 && data.sort((a,b) => a.ranking - b.ranking).filter(website => website.url.includes(search) || website.title.includes(search)).length === 0 && (
          <div className="w-full h-[76vh] flex items-center justify-center px-5">
            <div className="flex flex-col items-center gap-3 select-none">
              {isValidLink ? (
                <>
                  <h1 className="text-center text-2xl font-semibold text-neutral-400 dark:text-neutral-600">{link} has not been processed yet.</h1>
                  <h2 className="text-center text-4xl font-semibold text-neutral-400 dark:text-neutral-600">Please proceed to process this link</h2>
                </>
              ):(
                <>
                  <h1 className="text-center text-2xl font-semibold text-neutral-400 dark:text-neutral-600">Link not found</h1>
                  <h2 className="text-center text-4xl font-semibold text-neutral-400 dark:text-neutral-600">Please enter a valid link to proceed</h2>
                </>
              )}
              {!isValidLink && (<div className="flex items-center gap-10 mt-5">
                <div className="p-3 bg-neutral-200 dark:bg-neutral-700 rounded-[10px]">
                  <RiSearchLine />
                </div>
                <div className="text-neutral-400 dark:text-neutral-600">
                  <RiArrowRightLine height={20} width={20} />
                </div>
                <div className="p-3 bg-neutral-200 dark:bg-neutral-700 rounded-[10px]">
                  <RiArrowRightLine />
                </div>
              </div>)}
            </div>
          </div>
        )}
        {data.length == 0 && (
          <div className="w-full h-[76vh] flex items-center justify-center px-5">
            <div className="flex flex-col items-center gap-3 select-none">
              {isValidLink ? (<>
                  <h1 className="text-center text-2xl font-semibold text-neutral-400 dark:text-neutral-600">This link has not been processed yet.</h1>
                  <h2 className="text-center text-4xl font-semibold text-neutral-400 dark:text-neutral-600">Please proceed to process this link</h2>
                </>):(
                  <>
                    <h1 className="text-center text-2xl font-semibold text-neutral-400 dark:text-neutral-600">No links available</h1>
                    <h2 className="text-center text-4xl font-semibold text-neutral-400 dark:text-neutral-600">Please enter a valid link and proceed</h2>
                  </>
                )
              }
              {!isValidLink && (<div className="flex items-center gap-10 mt-5">
                <div className="p-3 bg-neutral-200 dark:bg-neutral-700 rounded-[10px]">
                  <RiSearchLine />
                </div>
                <div className="text-neutral-400 dark:text-neutral-600">
                  <RiArrowRightLine height={20} width={20} />
                </div>
                <div className="p-3 bg-neutral-200 dark:bg-neutral-700 rounded-[10px]">
                  <RiArrowRightLine />
                </div>
              </div>)}
            </div>
          </div>
        )

        }
      </div>
      <Footer />
    </div>
  );
}
