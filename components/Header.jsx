import React, { useEffect, useState } from 'react';
import { HiMoon, HiOutlineSun } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <div className="z-50 fixed top-0 left-0 right-0 w-full h-16 FCenter bg-white dark:bg-[#0f172a] shadow-xl dark:shadow-black/20">
      <div className="Container FBetween">
        {/* Logo */}
        <div>
          <h1 className="Logo text-[20px] font-bold tracking-widest">
            DevelopedByUfuk
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex gap-5">
          {theme === 'dark' ? (
            <div onClick={() => setTheme('light')}>
              <HiMoon size={25} />
            </div>
          ) : (
            <div onClick={() => setTheme('dark')}>
              <HiOutlineSun size={25} />
            </div>
          )}

          <motion.a
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 500 }}
            className="px-2 text-white font-semibold select-none cursor-pointer tracking-wide rounded-md bg-gradient-to-r from-blue-600 to-cyan-500"
          >
            Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Header;
