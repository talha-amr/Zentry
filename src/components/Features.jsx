import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import BentoCard from './BentoCard';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // Add cards to refs array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useGSAP(() => {
    // Set initial 3D transforms for all cards
    gsap.set(cardsRef.current, {
      z: 200,
      rotationX: -15,
      rotationY: 25,
      scale: 0.8,
      opacity: 0,
      transformOrigin: "center center",
      transformStyle: "preserve-3d"
    });

    // Set perspective on the container
    gsap.set(sectionRef.current, {
      perspective: 1000,
      transformStyle: "preserve-3d"
    });

    // Animate each card with staggered timing
    cardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        z: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          scrub: false
        },
        delay: index * 0.15 // Stagger the animations
      });

      // Add hover effect for enhanced 3D interaction
      const handleMouseEnter = () => {
        gsap.to(card, {
          rotationX: -5,
          rotationY: 5,
          z: 20,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          z: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      // Add event listeners for hover effects
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup function
      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    // Animate section title
    gsap.fromTo(".section-title", {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".section-title",
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="min-h-dvh w-screen bg-black overflow-hidden">
      <div className="container mx-auto w-full pt-20 md:pt-40 px-4 md:px-35">
        <div className="max-w-90 mb-12 md:mb-20 section-title">
          <p className="font-circular text-blue-50 text-base md:text-lg">Explore the Zentry Universe</p>
          <p className="font-circular text-blue-50 opacity-50 mt-2 text-sm md:text-base">
            Immerse yourself in an IP-rich product universe where players, agentic AI and blockchain lead the new economic paradigm.
          </p>
        </div>

        {/* Top full-width video card */}
        <div 
          ref={addToRefs}
          className="mb-6 md:mb-6 h-80 md:h-[60vh] lg:h-[70vh] card-3d"
        >
          <BentoCard
            title="Radiant"
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            video="/videos/feature-1.mp4"
            className="w-full border border-white/20 h-full"
          />
        </div>

        {/* Second layout - Mobile: flex column, Desktop: grid */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-5 md:h-[100vh]">
          {/* Left big card */}
          <div 
            ref={addToRefs}
            className="h-96 md:row-span-2 md:h-full card-3d"
          >
            <BentoCard
              title="ZIGMA"
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
              video="/videos/feature-2.mp4"
              className="w-full border border-white/20 h-full"
            />
          </div>

          {/* Top right card */}
          <div 
            ref={addToRefs}
            className="h-72 md:h-full card-3d"
          >
            <BentoCard
              title="NEXUS"
              description="Anime and gaming-inspired NFT collection..."
              video="/videos/feature-3.mp4"
              className="w-full border border-white/20 h-full"
            />
          </div>

          {/* Bottom right card */}
          <div 
            ref={addToRefs}
            className="h-72 md:h-full card-3d"
          >
            <BentoCard
              title="AZUBL"
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              video="/videos/feature-4.mp4"
              className="w-full border border-white/20 h-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-6 mt-8 md:mt-10 justify-center items-stretch w-full">
          {/* Wrapper for the first card */}
          <div 
            ref={addToRefs}
            className="w-full md:w-1/2 h-[200px] md:h-70 card-3d"
          >
            <BentoCard
              title="MORE COMING SOON"
              className="bg-blue-950 border border-white/20 h-full"
            />
          </div>
          {/* Wrapper for the second card */}
          <div 
            ref={addToRefs}
            className="w-full md:w-1/2 h-[200px] md:h-70 card-3d"
          >
            <BentoCard
              video="videos/feature-5.mp4"
              className="border border-white/20 h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;