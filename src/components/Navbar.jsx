import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
            <div className="px-4 md:px-10 py-3 flex items-center justify-between mx-auto max-w-[1280px]">
                <Link to={"/"} className="flex items-center gap-4 text-white cursor-pointer">
                    <div className="size-8 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-3xl">compare</span>
                    </div>
                    <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Portfolyo</h2>
                </Link>
                <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                    <nav className="flex items-center gap-9">
                        <Link className="text-white/80 hover:text-white text-sm font-medium transition-colors" to="#">Projeler</Link>
                        <Link className="text-white/80 hover:text-white text-sm font-medium transition-colors" to="#">Hakkımızda</Link>
                        <Link className="text-white/80 hover:text-white text-sm font-medium transition-colors" to="#">İletişim</Link>
                    </nav>
                    <button className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary hover:bg-primary/90 transition-colors text-background-dark text-sm font-bold leading-normal tracking-[0.015em]">
                        <span className="truncate">Teklif Al</span>
                    </button>
                </div>
                <div className="md:hidden text-white">
                    <span className="material-symbols-outlined">menu</span>
                </div>
            </div>
        </header>
    )
}
