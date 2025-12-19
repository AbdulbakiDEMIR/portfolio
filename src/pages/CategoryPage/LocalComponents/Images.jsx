import React from 'react'

export const Images = () => {
    return (
        <section className="flex flex-col gap-6 bg-surface-dark/30 rounded-2xl p-6 md:p-8 border border-[#234248]">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-primary/80 text-xs font-bold uppercase tracking-widest">
                        <span className="material-symbols-outlined text-sm">landscape</span>
                        Project 01
                    </div>
                    <h2 className="text-white text-2xl font-bold leading-tight">Mountain Landscape Series</h2>
                </div>
                <button className="hidden sm:flex text-[#92c0c9] hover:text-white items-center gap-1 text-sm font-medium transition-colors">
                    View Details 
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 px-1">
                    <span className="material-symbols-outlined text-[#ef4444] text-xl">history</span>
                    <h3 className="text-white/70 text-sm font-bold uppercase tracking-wide">Before / Düzenlenmemiş</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-800">
                        <div className="absolute inset-0 bg-cover bg-center opacity-70 grayscale-[30%]" data-alt="Raw photo of misty green mountains with flat lighting" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAaaS6hmZLEzxqCDMgP9vlnJTU6D8uTFVLsDGMfe_TpOSDIIMZjfuUu7jNEPm1xbWh4KhaK9ZX3QoEKV3b-MJjJHjTXZHniyjcUyeTfpQRZKd6EJk5AixKVO4IjymnmYbOfHso2IcOjHqry6bj44FY_KP7B90pTUSPnrk70vJ0OMfIvzjoA6cEmB6GCUszp24V0InNqOvaUReZzic6hYevoc_B3VRkQOU0Nq2zdkch-63La-bZvUMRmwHvoABS1LOD5JMNzaSmF_yI')"}}></div>
                    </div>
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-800">
                        <div className="absolute inset-0 bg-cover bg-center opacity-70 grayscale-[30%]" data-alt="Unedited photo of mountain peaks with dull sky colors" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQwSiKmr3v5dvB3v09OCVFRC_18GFBANUDJ1w-i3xTnTr6w_TkhGg3nNzFau75b5BNyHmGpyy_oFwSfuR56R1lxPtCYtZCMj0NLjlLt9xC5n99CiHHK6ht94193-yeai5eBSCNCuxEAQkBAKpKOioIPClIxXzn1vHqbMaUBW-BqhRqrVQwlS_ThqDDZTPpQgPKfsQw3VGWv46XYTnSWIK0XecTuKirTaF9vaM-lJdDWSJ_nCO1qQ3t9_5BXtoABJciZ9lCf3_5xvQ')"}}></div>
                    </div>
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-800">
                        <div className="absolute inset-0 bg-cover bg-center opacity-70 grayscale-[30%]" data-alt="Original photo of a hiker looking at mountains with low contrast" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD89jM5bQ1iy7qZjXBzJLFx2ngnOBxqC-XzWx2uaVKYbx-y_IgnTbFr7olHZp0-po0q-6Xd1vRaCsTWziSBot22gry8wMyGkB6ymRPVpX2ls1UzMc98IQWUYfJ8wObVCvXc-MtKs9RNo2E8rh3V3d5geCsS4-LsEcaWCzwnmtG8H8w24vfDyWDz0x0F4Kat_wtVzGIKXf3LuohReLnYjdNMAVFrDYlDwUifZDYfvRIB4k8NgPLcNXdW7bhDTHg71WHO7bhLFzYwS1E')"}}></div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center -my-2 relative z-10">
                <div className="bg-[#234248] rounded-full p-1.5 border-4 border-background-dark">
                    <span className="material-symbols-outlined text-[#92c0c9]">arrow_downward</span>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 px-1">
                    <span className="material-symbols-outlined text-primary text-xl">auto_fix_high</span>
                    <h3 className="text-primary text-sm font-bold uppercase tracking-wide">After / Düzenlenmiş</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg shadow-black/50 ring-1 ring-primary/20 hover:ring-primary transition-all duration-300">
                        <div className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700" data-alt="Edited vibrant photo of misty green mountains with high contrast" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKVnWKvsnI5O54HMO_foboaQkM8XT2F-wqoieRGkTpq_DV71jYrHR-LIZv-8meCTYEZLHXRM--pMpfUg2rzLERuSfITIA9hy3zN1a0c7ybWCq3Zn-N35yC-N5QH9PAxagFXEgnayEcR-UTMG0-sSR0kkF_8T9lAhS1SlnrTi4bYeEUI_Z0RQphDWEoH8JgMZGcUGqOrxwagCjLr4GiTQ6WB9FWzRL7LFJld3mR0Bd7k373RLim-bijWxXSpd7E7m43JpFCLgisEH0')", filter: "contrast(1.2) saturate(1.3)"}}></div>
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-sm font-medium">Color Grading &amp; Dehaze</p>
                        </div>
                    </div>
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg shadow-black/50 ring-1 ring-primary/20 hover:ring-primary transition-all duration-300">
                        <div className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700" data-alt="Retouched mountain peaks with deep blue sky and sharp details" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAU___Cjei1YbV4IN5jUT2p9N0M84wejAq24q9DIXRLT0Lf_upubVuNEe6mTl_jaCrovzqgkBfeG3fFGwBsKBZ1HowIYfQ8AablrTFIs-s0-aT9hmpCDsJn6ThMjz4X-RSoSYogY-ZIeNm6rtYg8NE3cV5d9ZAgWAVDggktDPPBK67a47rhIjJmylWybJdgzhc0e_0CZRmm1AX1g8VO9JcTQ7bexStekDE7GY8A3xuqG-nNdR5AZaTeU4tpxlGIa5MKuozAVNR8EAQ')", filter: "contrast(1.1) saturate(1.4) brightness(1.1)"}}></div>
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-sm font-medium">Sky Replacement</p>
                        </div>
                    </div>
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg shadow-black/50 ring-1 ring-primary/20 hover:ring-primary transition-all duration-300">
                        <div className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700" data-alt="Enhanced photo of hiker with warm tones and sharp shadows" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvdLkSRsAViaX8FHzyBcxAh4UdwDbEd7xp37k53U9QmZKS20Oqyw0iy6L6y2nrFrbotTJ-gWGvz19usCIywlQClQcEFeUXvDUoJO4n6iYfAmKgnq4AYbPhXAFxPF0Aj9CYdIxoum71AKgAMMO9Vt05KdbfEpvMYVkxBfqJ1YLVsEqCx-TQBv_RxPviknpf8hLT4ZWb11HWAfHig0uIPdyl3g-NJlr7PGPO5XBa8XpOZsx0WFu4XYbxOT_BX99s_9bAfvLCQQoNDe4')", filter: "contrast(1.25) saturate(1.1)"}}></div>
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-sm font-medium">Subject Isolation</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
