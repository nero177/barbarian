import React from "react";
import scrollArrow from "../../assets/images/scroll_arrow.png";
import { motion } from "framer-motion/dist/framer-motion";
import { linkArrowsShake } from "../../animations";
import classes from './ScrollArrow.module.css'

const ScrollArrow = (props) => {
  return (
    <motion.div
      animate={linkArrowsShake}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <div className={classes.linkArrow} {...props}>
        <img src={scrollArrow} alt="" />
      </div>
    </motion.div>
  );
};

export default ScrollArrow;
