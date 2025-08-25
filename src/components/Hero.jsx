import React, { useRef, useState,useEffect } from 'react'
import { TiLocationArrow } from 'react-icons/ti'
import Button from './Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  const [hasClicked, setHasClicked] = useState(false)
  const [loadedVideos, setLoadedVideos] = useState(0)
  const [loading, setLoading] = useState(true)
  const totalVideos = 4
  const nextVidRef=useRef(null)
    useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);
 useGSAP(() => {
  if (hasClicked) {
    gsap.set("#next-video", { visibility: "visible" });
    gsap.to("#next-video", {
    transformOrigin: "center center",
    scale: 1,  
    width: "100%",
    height: "100%",
    ease: "power1.inOut",
    duration: 1,
    onStart: () => {
      nextVidRef.current.play();
    },
  });
    gsap.from("#current-video", {
      transformOrigin: "center center",
      scale: 0,
      duration: 1.5,
      ease: "power1.inOut",
    });
  }
}, {
  dependencies: [activeIndex],
  revertOnUpdate: true,
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#video-frame",
    scrub: true,
    start: "top top",
    end: "bottom 30%",
  },
});

tl.fromTo(
  "#video-frame",
  {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    borderRadius: "0% 0% 0% 0%",
  },
  {
    clipPath: "polygon(0 0, 83% 0, 93% 70%, 13% 93%)",
    borderRadius: "0% 0% 30% 40%",
    ease: "power1.inOut",
  }
);

  const handleMiniVideo = () => {
    setHasClicked(true)
    setActiveIndex((prev) => (prev % totalVideos) + 1) // loops 1→2→3→4→1
  }

  const handleLoadedVideos = () => {
    setLoadedVideos((prev) => prev + 1)
  }

const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    
    <section id='hero' className='h-dvh w-screen relative overflow-x-hidden'>
       {loading && (
        <div className="flex justify-center items-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div className="relative h-dvh overflow-hidden w-screen rounded-lg bg-blue-75" id="video-frame">
        <div>        <div className="size-64 overflow-hidden rounded-lg z-50 absolute-center">
          <div
            onClick={handleMiniVideo}
            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            id="minivideo"
          >
            <video
              id='current-video'
              src={getVideoSrc((activeIndex % totalVideos) + 1)} 
              ref={nextVidRef}
              loop
              muted
              className="scale-150 origin-center size-64 object-cover object-center"
              onLoadedData={handleLoadedVideos}
            />
          </div>
        </div> 

        {/* for effect */}
        <video
          id='next-video'
          ref={nextVidRef}
            src={getVideoSrc(activeIndex)} 
          loop
          muted
          preload="metadata"
          className="absolute-center size-64 z-20 absolute invisible object-cover object-center"
          onLoadedData={handleLoadedVideos}
        />
        <video
            src={getVideoSrc(1)}
          loop
          muted
          autoPlay
          preload="metadata"  
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleLoadedVideos}
        />
        </div>

        <h1 className='special-font absolute bottom-5 right-5 text-blue-75 z-40 hero-heading'>
          G<b>A</b>MING
        </h1>
        <div className="absolute left-0 top-0 size-full z-40">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className='hero-heading max-w-64 special-font text-blue-100'>Redefi<b>N</b>e</h1>
            <p className='mb-4 font-robert-regular text-blue-100'> Enter the Metagame Layer<br/>Unleash the Play Economy</p>
            <Button title= "watch-trailer" id="hero-btn" leftIcon={<TiLocationArrow/>} containerClass="!bg-yellow-300 flex justify-between items-center"/>
          </div>
        </div>
      </div> 
      <h1 className='special-font absolute bottom-5 right-5 text-black z-[-1]  hero-heading'>
          G<b>A</b>MING
      </h1>
    </section>
  )
}

export default Hero
