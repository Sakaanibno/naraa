import React from 'react'
import ShoppingCartSVG from '../assets/shopping_cart.svg'
import ProfileCartSVG from '../assets/icon _profile circled icon_.svg'
import EzgifSVG from '../assets/ezgif 4.svg'
import SideSVG from '../assets/Side Image.svg'
import Hair from '../assets/mingcute_hair-fill.svg'
import Nails from '../assets/nail.svg'
import eye from '../assets/eye.svg'
import vector from '../assets/Vector.svg'
import Men from '../assets/Frame 874.svg'
import Iconi from '../assets/Frame 877.svg'
import Women from '../assets/Frame 875.svg'
import Men2 from '../assets/Frame 876.svg'
import Scroll from '../assets/Frame 883.svg'
import Ant from '../assets/ant.svg'
import fluent from '../assets/fluent.svg'
import ic from '../assets/ic.svg'
import fb from '../assets/facebook.svg'
import insta from '../assets/instagram.svg'
import phone from '../assets/icons8-phone.svg'
import email from '../assets/icons8-email-96.png'
const Nav = () => {
    return (

        <div className='shadow-md w-full'>
            <div className='md:flex bg-navbar-backgruond py-2 justify-center'>
                <div className='font-bold text 2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 mix-blend-lighten'>

                    <img src={EzgifSVG} />
                </div>
                <div class="flex space-x-4 my-auto">
                    <div className="text-white text-sm font-medium uppercase">НҮҮР</div>
                    <div className="text-white text-sm font-medium uppercase">ТУХАЙ</div>
                    <div className="text-white text-sm font-medium uppercase">ЦАГ АВАХ</div>
                    <div className="text-white text-sm font-medium uppercase">ҮЙЛЧИЛГЭЭ</div>
                    <div className="text-white text-sm font-medium uppercase">БҮТЭЭГДЭХҮҮН</div>
                    <div className="text-white text-sm font-medium uppercase">ВЛОГ</div>

                    <img src={ShoppingCartSVG} />
                    <img src={ProfileCartSVG} />
                </div>
            </div>
        </div>
    )
}

export default Nav