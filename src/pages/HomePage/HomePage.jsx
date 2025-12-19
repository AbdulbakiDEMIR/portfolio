import React from 'react'
import { HeroSection } from './LocalComponents/HeroSection'
import { CategoriesSection } from './LocalComponents/CategoriesSection'


export const HomePage = () => {
    return (
        <>
            <main className="flex-1 w-full flex justify-center">
                <div className="w-full max-w-[1280px] flex flex-col">
                    <HeroSection/>
                    <CategoriesSection/>
                </div>
            </main>
        </>
    )
}
