import React from 'react'

export default function Card1({ image, title, desc }) {
    return (
        <div class= "m-auto ">
        <div class='flex flex-col h-48 w-32 md:h-52 md:w-60  items-center justify-center rounded-md border-2 border-slate-500/50 hover:bg-navbar-backgruond'>
            <div className='bg-[#F7B2BF] p-2 rounded-full'>
                <img className="bg-navbar-backgruond rounded-full p-2 fill-black" src={image} />
            </div>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='font-bold'>{desc}</p>
        </div>
        </div>
    )
}
