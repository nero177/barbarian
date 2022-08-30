import React from "react";
import classes from "./Columns.module.css";
import leftColumn from "../../assets/images/left_column.png";
import rightColumn from "../../assets/images/right_column.png";
import { motion } from "framer-motion/dist/framer-motion";
import { leftColumnAppear, rightColumnAppear } from "../../animations";

const Columns = () => {
  return (
    <div>
      <motion.div
        initial="in"
        animate="out"
        variants={leftColumnAppear}
        transition={{ duration: 0.6 }}
      >
        <div className={classes.colLeft}>
          <img src={leftColumn} alt="" />
        </div>
      </motion.div>

      <motion.div
        initial="in"
        animate="out"
        variants={rightColumnAppear}
        transition={{ duration: 0.6 }}
      >
        <div className={classes.colRight}>
          <img src={rightColumn} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Columns;
