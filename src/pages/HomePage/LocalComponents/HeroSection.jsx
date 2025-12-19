import React from 'react'

export const HeroSection = () => {
    return (
        <section className="@container w-full px-4 md:px-10 py-12 md:py-20">
            <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
                <div className="flex flex-col gap-6 flex-1 text-center lg:text-left items-center lg:items-start">
                    <div className="flex flex-col gap-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit mx-auto lg:mx-0">
                            <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                            <span className="text-primary text-xs font-bold uppercase tracking-wider">Değişimi Keşfet</span>
                        </div>
                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em]">
                            Dönüşüme <span className="text-primary">Tanık Olun</span>
                        </h1>
                        <h2 className="text-white/70 text-base md:text-lg font-normal leading-relaxed max-w-xl">
                            Profesyonel dokunuşlarla hayalleri gerçeğe dönüştürüyoruz. Eski ve yeni arasındaki farkı keşfedin ve kendi projeniz için ilham alın.
                        </h2>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start w-full">
                        <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 transition-all text-background-dark text-base font-bold shadow-[0_0_20px_rgba(19,200,236,0.3)] hover:shadow-[0_0_30px_rgba(19,200,236,0.5)]">
                            <span className="truncate">Projeleri Gör</span>
                            <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                        </button>
                        <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-surface-dark border border-white/10 hover:bg-white/5 transition-all text-white text-base font-bold">
                            <span className="truncate">Bize Ulaşın</span>
                        </button>
                    </div>
                    <div className="flex items-center gap-4 pt-4 justify-center lg:justify-start">
                        <div className="flex -space-x-3">
                            <div className="size-10 rounded-full border-2 border-background-dark bg-gray-500 overflow-hidden" data-alt="User avatar 1" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0P8QHGAJgfgd0qkEaSn-fmtgtppyxwINZSuPii04mKZPm1QDIubOHnYimtgFzvw4Ngo0x3-BFBl4QreQLl7bAfgmFGRi3VxX6ysqrvyBD7CR148Nb8LjiNretAU4TTpwCN0VdshKx2TVdD2EtFpLVNMzGk4vjuONTXeLJ_EnhBpmCgQISZJ1QS0iYsiClUVLqtzZWOH68bBxOeunlaXdularSA-LDww-lqcJDlzA1aIM1enO8k-s3Xnna1GkkbtkbijXPMwzELGc")', backgroundSize: 'cover'}}></div>
                            <div className="size-10 rounded-full border-2 border-background-dark bg-gray-500 overflow-hidden" data-alt="User avatar 2" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQ4wu0YE7FaCXcbTbxE9-a3C2O4NLRY6NnxDyS29ZIsRQ4-5IC3Lbtj_aXGBIv2VrNq3gM30ItU9la7R8tTRWS927dHsA5tZY0uEoCJ8ihztad6UsCM7hY59-xaIjdFBtnIH0zbF2x3nLnfsK0euMiieLJCq0FlgJOKz60nDbnGqyxOZTrKMW7RW6oYA8xHs1gEqD0VM7wcCfqvRUCt1BM0jPmlG1NYN1xp4rBwVTRp6t8nRQJIJlu8a8hn5QxfYvsA-U77WBWI5I")', backgroundSize: 'cover'}}></div>
                            <div className="size-10 rounded-full border-2 border-background-dark bg-gray-500 overflow-hidden" data-alt="User avatar 3" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsJu3Jtuzj0cjE4R6TYAK5xPw0ofsPGOnddrCaUgFMvvVlSBRFYQ870YkvlOYW8JHRMsB1xIL4DDVzMbHEGdeGOvVH-BwE9OQzsEKqrAJ4FE9ICFz2lELqhJezRFN-YOqoLMD8AzfmjDfGQKYXcUPaZYMfS9uvxy14dYD9MiGljgpYKoMPF0UKFHNvNuhRV3BgULHto2J4SseXbGfEDC7AI0UBvJCWRb6NMxjoqOYD0NK9M95t_70azdlldLCwfLajKXF5w-SpWYE")', backgroundSize: 'cover'}}></div>
                        </div>
                        <div className="text-white/60 text-sm">
                            <span className="text-white font-bold">500+</span> Mutlu Müşteri
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-3/5 aspect-video md:aspect-[16/9] lg:aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 group">
                    <div className="grid grid-cols-2 h-full w-full relative">
                        <div className="relative h-full overflow-hidden border-r border-white/20">
                            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[30%] brightness-75 scale-105" data-alt="An old, cluttered living room before renovation" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4XRLAITuS5mvTDmkIYLHPjS8rmU_xFQqI9bF219IiAy5J-M8yNRZoT89kGeFRSL6OvAQhHVE1js6Ny9xWBgXZmpdWqoKCo0THUhWoB3jTmeja6BBiskrlSbZ1xmuBMPQekk_LvHqm88KDAg1udAliVCYAHFL-Bz9mop2_vXTwMn-5Ut-3ThYw5KhZ7z1o8p6b5PIfbHwoBNg9zhj4E1zEhCSLkevDSxT4k96SMjaDWLZFkThK01Wq5b_LuVBs8PS4YvbCJYGFFTY")'}}></div>
                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-white uppercase tracking-wider border border-white/10">Öncesi</div>
                        </div>
                        <div className="relative h-full overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105" data-alt="A modern, bright living room after renovation" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdoieCqA2FTKAOgOrRHCKWVkfs8HASd0ZdR-abhUlQHy-e9K1X-7ZG-pdZPry-nhbfdqMlzXsPXCHQOSpZXhxQPWXxyT9WoEDeVP8sNLNc3vxd0MkpChTY51tIiwHnkVhMaT6xNeHgeHOX4WhUdZlJcLCIRrxh9JdU3RSJeHI3J2FCTLblEj6J-_nvBqXx0aEOdrO_OCFZc8YMXAwLPussy__5_SWdPXwADzRh-xIkzuJ7YKEGtXKiDAoQ4LycJkKsI80Uaj_LYvE")'}}></div>
                            <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-md text-xs font-bold text-background-dark uppercase tracking-wider shadow-lg">Sonrası</div>
                        </div>
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 flex items-center justify-center -ml-0.5">
                            <div className="size-8 bg-white rounded-full flex items-center justify-center shadow-lg text-primary">
                                <span className="material-symbols-outlined text-base font-bold">code</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
