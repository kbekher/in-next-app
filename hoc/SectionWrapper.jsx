import { motion } from "framer-motion";

import { staggerContainer } from '../utils/motion';

// TODO: maybe delete
const SectionWrapper = (Component, idName) =>
  function HOC() {

    return (
      // <motion.section
      //   variants={staggerContainer()}
      //   initial="hidden"
      //   whileInView="show"
      //   viewport={{ once: true, amount: 0.25 }}
      // >
      //   <span className="hash-span" id={idName}>
      //     {" "}
      //   </span>
      //   <Component />
      // </motion.section>

      <section >
        <span className="hash-span" id={idName}>
        {" "}
        </span>
        <Component />
      </section >
    )
  }

export default SectionWrapper;