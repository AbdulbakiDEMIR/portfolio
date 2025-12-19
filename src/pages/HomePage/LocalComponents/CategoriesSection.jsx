import React from 'react'
import { Card } from './Card'
const categories = [
    {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAzR9TN3KtzeE4r3i9LJwOxPut341W6oX-ULntoTzI4iQPqPmkriNmHNdX4GuzYbG9zHafBwdfmTvaz0CuD-9vgB-XLKOaNsnUptU7a-pn_NF7lyesP1CuKDQ5L-wmm5hUMZJjFs-t6gbMXMm2gJ5RVy8tO0OqSQRkhK_w0cnJj_Wmke-4kcatWS97S7SgiSBjsz3qRo4dwcjjYnenCzlHYE2XEj_iT1JxevI1vmZTBfL2k8p68JizfR4z64D8UJE4V9LDCg7TTCA",
        symbol: "chair",
        category: "Tasarım",
        title: "İç Mimari",
        description: "Modern yaşam alanları için fonksiyonel ve estetik çözümler.",
        to: "category"
    },
    {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn3EzZt00dLAJHWcp2wuvRtf8sslirAQuNZ9j2Ysr8d5yS1_Wf7FYYKrGi0VdXVtd37dtG0BFEuGn2qJQw-PQzIO6a-VoPdijGxRQc1CL2buIiTsrDfLrtjHgWnqikAvRKV1LIjbDJX1XKx-EXuhujbGbrUCHCOVXWEXAnJ3IWoSRECrgQRDQI-pTM4PLM5T8NZA7RsLsTrlp9WJdq_NfJ2kIE9-2EUuDIwYY05mq-vqu1DwnYvXIJpbmY6BwGlwcxYN9EU0IRqh4",
        symbol: "dentistry",
        category: "Sağlık",
        title: "Diş Estetiği",
        description: "Gülüşünüzü değiştiren profesyonel dokunuşlar.",
        to: "category"
    },
    {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjGcdvEaaaYErLhrZkTTZ3SyQfb1H3FhzDmPpcOngoKooHOJQfKNWrD-htRGKpZl2UGGg2osnmki1EJCGvFsle3gTX_Lul5X97FTWxsoVOQ-N-2dm5njLMaZwniOCTaJlkBI-nDySA7PHZP_KLSL0o8UVzGPopJtPHcoKappvemIIwmPh1_trBzwmF3dEy3cOZW6eejlGQ3-0xul8UXF1rBxQsqB8IQWtoTm7hcSROhDh6xHmGmgyGzKWDMftljStmPDYewGxDsHY",
        symbol: "build_circle",
        category: "Otomotiv",
        title: "Araç Restorasyon",
        description: "Klasik araçlarınızı ilk günkü ihtişamına kavuşturuyoruz.",
        to: "category"
    },
    {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvA4ORNbj84QQWfQb1n0GCqpjzDEGm4GZH2QzQXfhxvlYAItJGIrzz6qgr4dHabhw0c_5VeVMUcvrk5njRHSOKHPiPGsHJqi3wYSY0rxtpYBFK1jb1-Cf3PNHnFV4CIoL6rkSP1hFhWlnPn8egDWwh-xRwII27rabLKPuc0N-gZx2uEBiBpj-1Y7tCrbtZK1xn6lMxROdSmLOWqbs_S9vwvaX37vSKylGFZ2KQckIsVV--EPOHUYvqAywbUuZaNiKgtrhxTYOfMNU",
        symbol: "yard",
        category: "Dış Mekan",
        title: "Peyzaj",
        description: "oğayla iç içe, huzurlu bahçe tasarımları.",
        to: "category"
    },
    {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYc15K779S5IBeOYiN8e9ZIYygApgm274BD7pPGdtmjAeDYk5ByxJtg8RTDYfbQS-U5vQQ5srIxqjh16jD6gX_LLV7RJpIe2DAZuuiuImW2DcRGWAqWhlnerBEn4fWjd78EeIOnZnGCdlYAkrc6PqlTYEkw209DDnOodZoL7K-i2AXhMz_Bibtiig5iO8hPe-6wesbgd7V1swY7jOWYlRZXSe4ksRmHZm4TQ46Y9H7WU-jrbD-PNgAiX9jCi-U_f0yfgIXJj5_XOI",
        symbol: "fitness_center",
        category: "Spor",
        title: "Vücut Geliştirme",
        description: "Disiplin ve antrenmanla gelen fiziksel değişimler.",
        to: "category"
    },
    {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGpOYTj9NZotY34E3PE3ivxFO4Hf1hlBYR3ld2LyRbIAP3N-wiHUMUsmwBMKLdW6f-rCVRnZ9189-tRJmJqNI3l34H0o3yGhjj69XK4UA_cVqSvjy8H6EYCofZIciwPVeEfDy6FMd56HVO515-W0upn2-DUV6cJrxBCZmD_J0Zv2-FGg7ebY8KkfXBSFUR6F_UaLN6RdNjvnN__vUR3PoPbW9vgmltEHpz_3lDIYE2HcfAYdOibH72lADNajfNjkU2INbhGx6UY98",
        symbol: "face",
        category: "Estetik",
        title: "Saç Ekimi",
        description: "Kalıcı çözümlerle özgüveninizi tazeleyin.",
        to: "category"
    },
]
export const CategoriesSection = () => {
    return (
        <>
        <section className="py-8 px-4 md:px-10 flex flex-col items-center">
            <h2 className="text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight text-center pb-3">
                Kategoriler
            </h2>
            <p className="text-white/60 text-base md:text-lg font-normal leading-normal text-center max-w-2xl">
                İlham veren değişimleri kategorilere göre inceleyin ve uzmanlık alanlarımızı keşfedin.
            </p>
        </section>
        <section className="px-4 md:px-10 pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((item,index)=>{
                    return(
                        <Card 
                            key={index} 
                            url={item.url} 
                            category={item.category}
                            title={item.title}
                            description={item.description}
                            to={item.to}
                        />
                    )
                })}
            </div>
        </section>
        </>
    )
}
