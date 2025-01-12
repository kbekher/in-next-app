import { motion } from "framer-motion";
import { Element, scroller } from 'react-scroll';

import { staggerContainer } from '../utils/motion';
import { useRef } from "react";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    const ref = useRef(null);

    return (
      <Element>
        <motion.section
          ref={ref}
          id={idName}
          onViewportEnter={() => {
            scroller.scrollTo(ref.current.id, {
              duration: 300,
              smooth: true,
              offset: -50, // Adjust for fixed headers if needed
            });
          }}
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="hash-span" id={idName}>
            {" "}
          </span>
          <Component />
        </motion.section>
      </Element>
    )
  }

export default SectionWrapper;