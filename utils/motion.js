export const textVariant = (direction = "up", isSingle = true) => {
  const directionsMap = {
    up: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
  };

  const { initial, animate } = directionsMap[direction] || directionsMap.up;

  return {
    initial,
    whileInView: animate,
    viewport: { once: isSingle, amount: 0.3 },
    transition: { duration: 0.7, ease: "easeOut" },
  };
};

export const scaleIn = (size, isSingle = true) => {
  return {
    initial: { scale: size, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: isSingle, amount: 0.3 },
    transition: { duration: 0.7, ease: "easeOut" },
  };
}

export const fadeIn = (direction, type, delay, duration, isSingle = true) => {
  return {
    initial: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
    viewport: { 
      once: isSingle, 
      amount: "all"
    },
  };
};

export const blurRevealText = (blur, stagger, delay) => {
  return {
    initial: {
      opacity: 0,
      filter: `blur(${blur}px)`,
    },
    whileInView: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        staggerChildren: stagger,
        delay: delay,
        ease: "easeOut",
      },
    },
    viewport: { once: true, amount: "all"},
  };
};

export const scrollFadeIn = (isShrunk, isScrollingDown) => ({
  initial: { opacity: 1 },
  animate: { opacity: isShrunk ? 0 : 1 },
  transition: {
    type: "easeOut",
    duration: 0.1,
    delay: isScrollingDown ? 0 : 0.3,
  },
  viewport: { once: true, amount: "all"},
});


export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};