import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
const About = () => {
  useGSAP(() => {
  const clipAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: '#clip',
      start: 'center center',
      end: '+=800 center',
      scrub: 0.5,
      pin: true,
      pinSpacing: true,
    }
  });
  
  clipAnimation.to('.mask-clip-path', {
    width: '100vw',
    height: '100vh',
    borderRadius: '0% 0% 0% 0%'
  });
},[]);
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-20 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-base">
          Welcome to <span className="font-bold">Zentry</span>
        </h2>

        <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-5xl">
          Disc<b>o</b>ver the world's <br />
          l<b>a</b>rgest shared adventure
        </div>
     

      <div className=" mt-[20rem] about-subtext ">
        <p className='font-bold'>The Game of Games begins — your life, now an epic MMORPG.</p>
        <p className='text-gray-500'>
          <span>Zentry</span> unites every player from countless games and platforms.
        </p>
      </div>
    </div>
    <div className="h-dvh w-screen" id='clip'>
      <div className="mask-clip-path about-image">
        <img src="/img/about.webp" alt="" className='left-0 top-0 size-full object-cover' />
         </div>
    </div>
    </div>
  )
}

export default About
