import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-surface-dark flex-1 w-full flex justify-center">
            <div className="w-full max-w-[1280px] flex flex-col py-12 px-4 md:px-10 mt-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <Link to={"/"} className="flex items-center gap-2 text-white">
                        <div className="size-6 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-xl">compare</span>
                        </div>
                        <span className="font-bold text-lg tracking-tight">Portfolyo</span>
                    </Link>
                    <div className="flex gap-6 text-white/60">
                        <Link className="hover:text-primary transition-colors text-sm" to="/">Ana Sayfa</Link>
                        <Link className="hover:text-primary transition-colors text-sm" to="#">Projeler</Link>
                        <Link className="hover:text-primary transition-colors text-sm" to="#">Hakkımızda</Link>
                        <Link className="hover:text-primary transition-colors text-sm" to="#">Gizlilik</Link>
                    </div>
                    <div className="flex gap-4">
                        <Link className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all" to="#">
                            <span className="material-symbols-outlined text-xl">thumb_up</span>
                        </Link>
                        <Link className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all" to="#">
                            <span className="material-symbols-outlined text-xl">photo_camera</span>
                        </Link>
                        <Link className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all" to="#">
                            <span className="material-symbols-outlined text-xl">mail</span>
                        </Link>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5 text-center text-white/40 text-xs">
                    © 2024 Portfolyo. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>

    )
}
