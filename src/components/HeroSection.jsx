import React, { useState } from 'react';
import img1 from '../../public/img1.png';
import img2 from '../../public/img2.png';
import img3 from '../../public/img3.png';
import design from '../../public/design.png';
import compass from '../../public/mdi_compass.png';
import backBtn from '../../public/backBtn.png';
import nextBtn from '../../public/nextBtn.png';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);


const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(img1);
    const [isAnimating, setIsAnimating] = useState(false);

    const images = [img1, img2, img3];

    const nextImage = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        const currentIndex = images.indexOf(currentImage);
        const nextIndex = (currentIndex + 1) % images.length;

        const timeline = gsap.timeline();

        timeline.from(".left-container .content", {
            y: -100,
            opacity: 0,
            duration: 0.5,
            stagger: 0.25,
        }, "anim1")


        timeline.to("#backImage", {
            duration: 1,
            x: 5000,
            y: -5000,
            opacity: 0,
            onComplete: () => {
                setCurrentImage(images[nextIndex]);

                gsap.set("#backImage", { opacity: 1, x: "0", y: "0" });

                gsap.to("#backImage", {
                    duration: 0,
                    x: 0,
                    y: 0,
                    opacity: 1,
                    onComplete: () => {
                        setIsAnimating(false);
                    }
                });
            }
        }, "anim1");
    };

    const prevImage = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        const currentIndex = images.indexOf(currentImage);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;

        const timeline = gsap.timeline();

        timeline.from(".left-container .content", {
            y: 100,
            opacity: 0,
            duration: 0.5,
            stagger: 0.25,
        }, "anim2")

        timeline.to("#backImage", {
            duration: 1,
            opacity: 0,
            x: -5000,
            y: 5000,
            onComplete: () => {
                setCurrentImage(images[prevIndex]);

                gsap.set("#backImage", { opacity: 1, x: "0", y: "0" });


                gsap.to("#backImage", {
                    duration: 0,
                    x: 0,
                    y: 0,
                    opacity: 1,
                    onComplete: () => {
                        setIsAnimating(false);
                    }
                });
            }
        }, "anim2");
    };

    useGSAP(() => {
        gsap.from("#container", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 3.25,
        })
    })


    return (
        <div id='container' className='mt-10 h-[500px] flex items-center overflow-hidden'>
            <div className='left-container w-[50%] h-full flex flex-col justify-center transition-all'>
                <h1 className='content text-2xl font-semibold'>DB-PULSE</h1>
                <h3 className='content text-4xl font-bold py-7'>The ultimate listening experience</h3>
                <p className='content text-md pb-7'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus arcu lobortis magna tempus
                    placerat. In consectetur turpis at interdum facilisis. Nam sagittis neque id suscipit dapibus. Quisque
                    imperdiet est sit amet libero auctor, ut convallis tortor egestas.
                </p>
                <div className='content'>
                    <div>
                        <h6 className='flex justify-between gap-10 relative'>
                            <div className='basis-1/2'>
                                <a className='text-5xl opacity-15'>01 - </a>
                                <h6 className='absolute -bottom-[8px] font-semibold'>Active Noise Cancellation</h6>
                            </div>
                            <div className='basis-1/2'>
                                <a className='text-5xl opacity-15'>02 - </a>
                                <h6 className='absolute -bottom-[8px] font-semibold'>40H Battery Life</h6>
                            </div>
                        </h6>
                    </div>
                    <div className='w-[200px] bg-gradient-to-r from-[#EA0E68] to-[#F31220] flex gap-3 justify-center rounded-full mt-7 px-6 py-4 cursor-pointer hover:scale-95 transition-all duration-300'>
                        <button>Explore</button>
                        <img src={compass} />
                    </div>
                </div>
            </div>
            <div className='right-container w-[50%] h-full flex items-center justify-center relative'>
                <div
                    className='w-full h-full relative overflow-hidden'
                    style={{
                        backgroundImage: `url(${design})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >

                    <img
                        id='backImage'
                        className={`absolute transition-all duration-500 ease-in-out`}
                        src={currentImage}
                        alt="Displayed"
                        style={{
                        }}
                    />
                </div>
                <div className='absolute right-0 bottom-0 flex gap-5'>
                    <div
                        className='w-[40px] h-[40px] bg-gray-300 rounded-full flex items-center justify-center cursor-pointer'
                        onClick={prevImage}
                    >
                        <img src={backBtn} alt="Back" />
                    </div>
                    <div
                        className='w-[40px] h-[40px] bg-gray-300 rounded-full flex items-center justify-center cursor-pointer'
                        onClick={nextImage}
                    >
                        <img src={nextBtn} alt="Next" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
