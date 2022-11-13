import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const ServicesCard = (props) => {
  const { id, image, title, text, subTitle, tools } = props;

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 500 }}
      className="h-[500px] FCenter flex-col justify-between flex-1 py-8 text-center text-[#444] dark:text-white px-4  rounded-lg shadow-xl dark:shadow-black/40 cursor-pointer"
    >
      <div className="w-[80px] h-[80px]">
        <Image
          src={image}
          alt={title}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <h1 className="text-xl mb-3 text-cyan-500 font-bold">
        {title}
      </h1>
      <p className="tracking-wide mb-5">{text}</p>
      <h2 className="text-lg font-semibold mb-3">{subTitle}</h2>
      <div className="">
        {tools.map((tool, index) => (
          <p
            key={id + index}
            className=" tracking-wide border-b border-cyan-300 mb-2 max-w-max mx-auto"
          >
            {tool}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesCard;
