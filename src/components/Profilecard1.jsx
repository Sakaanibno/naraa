import React, { Fragment } from 'react'
import fb from '../assets/facebook.svg'
import insta from '../assets/instagram.svg'


export default function Profilecard1({image, title,disc }) {
    return (
        <div>
          <img src={image} />
          <h1 className='text-2xl font-medium'>{title}</h1>
          <p className='text-base font-thin'>{disc}</p>
          <div className="flex space-x-4">
            <img className=' pt-0.5 w-7 h-7' src={fb} />
            <img className='w-8 h-8' src={insta} />
          </div>
        </div>
       


    )}