import React from 'react'
import { Link } from 'react-router-dom';

export const Card = ({url,symbol,category,title,description, to = "/"}) => {
    return (
        <Link to={to} className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/5 bg-surface-dark shadow-md hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Modern living room interior design with grey sofa" style={{backgroundImage: `url("${url}")`}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col gap-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0">
                    <span className="material-symbols-outlined text-sm">{symbol}</span>
                    <span className="text-xs font-bold uppercase tracking-wider">{category}</span>
                </div>
                <h3 className="text-white text-xl font-bold leading-tight">{title}</h3>
                <p className="text-white/70 text-sm line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {description}
                </p>
            </div>
        </Link>
    )
}
