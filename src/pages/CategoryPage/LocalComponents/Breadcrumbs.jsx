import React from 'react'
import { Link } from 'react-router-dom'

export const Breadcrumbs = ({items}) => {
    return (
        <div className="flex flex-wrap items-center gap-2 text-sm">
            {items.map((item,index)=>{
                return(
                    <>
                        {
                            index !== 0 && <span className="text-[#557076] material-symbols-outlined text-base">chevron_right</span>
                        }
                        {

                            item.link ? (
                                <Link className="text-[#92c0c9] hover:text-white transition-colors font-medium" to={item.link}>{item.value}</Link>
                            ):(
                                <span className="text-white font-semibold">{item.value}</span>
                            )
                        }
                    </>
                )
            })}
        </div>
        
    )
}
