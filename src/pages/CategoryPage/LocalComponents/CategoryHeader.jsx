import React from 'react'

export const CategoryHeader = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#234248]">
            <div className="flex flex-col gap-3 max-w-2xl">
                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                    Nature Photography
                </h1>
                <p className="text-[#92c0c9] text-lg font-normal leading-relaxed">
                        Bringing the outdoors to life through meticulous color correction, dynamic range optimization, and atmospheric retouching.
                </p>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-[#92c0c9] text-sm font-medium">Sort by:</span>
                <button className="flex items-center gap-1 text-white bg-[#234248] hover:bg-[#2c525a] px-3 py-1.5 rounded text-sm font-medium transition-colors">
                    Newest
                    <span className="material-symbols-outlined text-base">keyboard_arrow_down</span>
                </button>
            </div>
        </div>
    )
}
