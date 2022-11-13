import React from 'react';
import Social from './Social';
import profile from '../public/dev-ed-wave.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className=" CenterComponent pt-14 text-[#444] dark:text-white">
      <div className="flex flex-col items-center">
        {/* Text */}
        <div className="text-center">
          <h1 className="text-cyan-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Dimitri Marco
          </h1>
          <h2 className="mt-1 text-xl sm:text-2xl md:text-3xl ">
            Developer and designer
          </h2>
          <p className="tracking-wide md:tracking-widest max-w-[500px] mx-auto mt-5 px-2 font-medium">
            Freelancer providing services for programming and design
            content needs. Join me down below and let`s get cracking!
          </p>
          <div className="max-w-[250px] mx-auto mt-4">
            <Social />
          </div>
        </div>

        {/* Image */}
        <div className="md:w-[320px] md:h-[320px] sm:w-[300px] sm:h-[300px] w-[250px] h-[250px]  mt-8">
          <Image
            className="w-full h-full object-cover rounded-full bg-gradient-to-b from-blue-500 to-cyan-400"
            src={profile}
            alt="dimitri portfolio"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
