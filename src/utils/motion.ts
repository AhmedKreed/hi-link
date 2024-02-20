export const ulVarient = {
  open: {
    clipPath: "inset(0% 0% 0% 0% )",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(0 0 100% 0)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};
export const liVariants = (durations: number) => {
  return {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: 0.3 + durations,
        duration: 0.2,
      },
    },
    closed: { opacity: 0, y: 5, transition: { duration: 0.1 } },
  };
};
