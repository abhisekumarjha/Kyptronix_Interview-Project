import React from 'react'
import Logo from '../../public/Logo.png'
import Search from '../../public/search.png'
import Heart from '../../public/ph_heart.png'
import Cart from '../../public/clarity_shopping-cart-line.png'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);



const Navbar = () => {

    useGSAP(() => {
        gsap.from("#navbar .nav-item", {
            y: -100,
            opacity: 0,
            duration: .75,
            delay: 0.5,
            stagger: 0.25
        })
    })

    return (
        <div>
            <div id='navbar' className='flex items-center justify-between gap-10'>
                <div>
                    <img className='nav-item w-[100px] cursor-pointer' src={Logo} />
                </div>
                <div className='flex items-center justify-center gap-10'>
                    {["Home", "Shop", "About Us", "Contact Us", "Blogs"].map((item, index) => {
                        return <div key={index}>
                            <ul>
                                <li className='nav-item cursor-pointer'>{item}</li>
                            </ul>
                        </div>
                    })}
                    <div className='nav-item flex items-center'>
                        <input className='border-1 px-2 py-1 rounded-full outline-none' type="text" placeholder='search' />
                        <img className='-ml-7' src={Search} />
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <img className='nav-item scale-75 cursor-pointer' src={Heart} />
                    <img className='nav-item scale-75 cursor-pointer' src={Cart} />
                    <button className='nav-item px-5 py-2 rounded-full bg-green-700 text-white font-semibold cursor-pointer'>Account</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar