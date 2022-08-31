import React, { useEffect } from "react";
import classes from "./PhotoAndText.module.css";
import { motion, useAnimation } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";

const leftAppearing = {
  visible: { opacity: 1, transform: "translateX(0%)" },
  hidden: { opacity: 0, transform: "translateX(-40%)" },
};

const rightAppearing = {
  visible: { opacity: 1, transform: "translateX(0%)" },
  hidden: { opacity: 0, transform: "translateX(40%)" },
};

const transition = {duration: 1};

const PhotoAndText = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={classes.wrapper}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={leftAppearing}
        transition={transition}
        style={props.reverse ? {gridColumn: 2} : ''}
      >
        <img src={props.photoSrc} alt={props.alt} loading="lazy"/>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={rightAppearing}
        transition={transition}
        style={props.reverse ? {gridRow: 1, textAlign: 'right'} : ''}
      >
        <p>
          {props.children}
        </p>
      </motion.div>
    </div>
  );
};

export default PhotoAndText;
