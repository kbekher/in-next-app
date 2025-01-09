"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { blurRevealText } from '@/utils/motion';

const BlurText = ({ text, index }) => {
  return (
    <div>
        {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          {...blurRevealText(10, 0.05, 0.5 * index + 0.05 * i)}
        >
          {word}{" "}
        </motion.span>
      ))}
    </div>
  )
}

export default BlurText
