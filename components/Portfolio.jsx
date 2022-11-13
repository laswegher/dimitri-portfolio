import React from 'react';
import portfolio_data from '../data/portfolio_data';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <div className="my-20">
      <div className="Container">
        <h1 className="text-4xl border-b border-cyan-500 max-w-max pb-2 mb-5">
          Portfolio
        </h1>
        <p className="tracking-wide mb-5 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cupiditate veritatis, numquam iste possimus hic ab natus
          maxime asperiores fugiat odit inventore quas ipsa,
          voluptatem quod voluptatum distinctio! Quidem, adipisci
          tempore.
        </p>
        <p className="tracking-wide mb-5 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Saepe, commodi!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolio_data.map((el, index) => {
            return (
              <motion.div
                key={index}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="cursor-pointer"
              >
                <Image
                  src={el}
                  alt="/"
                  className="w-full h-full object-cover rounded-xl"
                  priority
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
