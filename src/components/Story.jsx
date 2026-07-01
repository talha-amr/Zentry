import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: 'power1.inOut'
    })
  }

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: 'power1.inOut'
    })
  }

  return (
    <section id="story" className='min-h-dvh w-screen bg-black text-blue-50 -mt-1'>
      <div className="flex size-full flex-col items-center pt-30  md:py-[10vw]">
        <p className='font-general text-sm uppercase md:text-[10px]'>the multiverse of ip world</p>

        <div className="relative size-full">
          <AnimatedTitle
            title={"The St<b>o</b>ry of <br /> a Hidden Real<b>m</b>"}
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 text-center flex flex-col items-center w-full !text-5xl md:!text-[3.7rem]"
          />

          <div className="story-img-container relative mt-10 md:-mt-10 h-[50vh] w-[90vw] md:h-[75vh] md:w-[80vw] mx-auto">
            <div className="story-img-mask story-clip relative size-full rounded-3xl"
              ref={frameRef}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseLeave}
              onMouseEnter={handleMouseLeave}
              onMouseMove={handleMouseMove}
              style={{ filter: 'url("#flt_tag")' }} // Apply the rounding filter
            >
              <div className="story-img-content size-full">
                <img
                  src="/img/entrance.webp"
                  alt="entrance"
                  className="size-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          <svg className="invisible absolute size-0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="flt_tag">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
                <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
              </filter>
            </defs>
          </svg>
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}

export default Story
