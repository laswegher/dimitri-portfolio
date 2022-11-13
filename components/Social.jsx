import React from 'react';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Social = () => {
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between cursor-pointer text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500 }}
        >
          <FaTwitter />
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500 }}
        >
          <FaFacebook />
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500 }}
        >
          <FaGithub />
        </motion.div>
      </div>
    </div>
  );
};

export default Social;
