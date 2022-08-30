import React from "react";
import classes from './Navbar.module.css'
import pedestal from "../../assets/images/pedestal.png";
import scrollArrow from "../../assets/images/scroll_arrow.png";
import {motion} from "framer-motion/dist/framer-motion";
import { linkArrowsShake } from "../../animations";

const NavbarLink = (props) => {
  return (
    <div className={classes.link}>
      <div className={`${classes.linkTitle} text-shadow`}>
        {props.children}
      </div>
      <div className={classes.linkImage}>
        <img src={pedestal} alt="Barbarian" />
      </div>
      
      <motion.div
        animate={linkArrowsShake}
        transition={{repeat: Infinity, duration: 1.5}}
      >
        <div className={classes.linkArrow}>
          <img src={scrollArrow} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default NavbarLink;
