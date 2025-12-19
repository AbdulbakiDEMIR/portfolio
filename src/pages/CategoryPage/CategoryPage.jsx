import React from 'react'
import { Breadcrumbs } from './LocalComponents/Breadcrumbs'
import { CategoryHeader } from './LocalComponents/CategoryHeader'
import { Images } from './LocalComponents/Images'

const breadcrumpsItem = [
    {
        value: "Home",
        link: "/"
    },
    {
        value: "Portfolio",
        link: "/"
    },
    {
        value: "Nature Photography",
    }
]

export const CategoryPage = () => {
    return (
        <main className="flex-grow w-full px-4 md:px-10 lg:px-40 py-8 flex justify-center">
            <div className="flex flex-col max-w-[1200px] w-full gap-10">
                <Breadcrumbs items={breadcrumpsItem}/>
                <CategoryHeader/>
                <Images/>
            </div>
        </main>
    )
}
