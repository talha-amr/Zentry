import React from 'react';
import BentoCard from './BentoCard';

const Features = () => {
  return (
    <section className="min-h-dvh w-screen bg-black">
      <div className="container mx-auto w-full pt-20 md:pt-40 px-4 md:px-35">
        <div className="max-w-90 mb-12 md:mb-20">
          <p className="font-circular text-blue-50 text-base md:text-lg">Explore the Zentry Universe</p>
          <p className="font-circular text-blue-50 opacity-50 mt-2 text-sm md:text-base">
            Immerse yourself in an IP-rich product universe where players, agentic AI and blockchain lead the new economic paradigm.
          </p>
        </div>

        {/* Top full-width video card */}
        <div className="mb-6 md:mb-6 h-80 md:h-[60vh] lg:md:h-[70vh]">
          <BentoCard
            title="Radiant"
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            video="/videos/feature-1.mp4"
            className="w-full border border-white/20"
          />
        </div>

        {/* Second layout - Mobile: flex column, Desktop: grid (unchanged) */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-5 md:h-[100vh]">
          {/* Left big card */}
          <div className="h-96 md:row-span-2 md:h-full">
            <BentoCard
              title="ZIGMA"
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
              video="/videos/feature-2.mp4"
              className="w-full border border-white/20"
            />
          </div>

          {/* Top right card */}
          <div className="h-72 md:h-full">
            <BentoCard
              title="NEXUS"
              description="Anime and gaming-inspired NFT collection..."
              video="/videos/feature-3.mp4"
              className="w-full  border border-white/20"
            />
          </div>

          {/* Bottom right card */}
          <div className="h-72 md:h-full">
            <BentoCard
              title="AZUBL"
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              video="/videos/feature-4.mp4"
              className="w-full border border-white/20"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-6 mt-8 md:mt-10 justify-center items-stretch w-full">
          {/* Wrapper for the first card */}
          <div className="w-full md:w-1/2 h-[200px] md:h-70">
            <BentoCard
              title="MORE COMING SOON"
              className="bg-blue-950 border border-white/20"
            />
          </div>
          {/* Wrapper for the second card */}
          <div className="w-full md:w-1/2 h-[200px] md:h-70">
            <BentoCard
              video="videos/feature-5.mp4"
              className="border border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;