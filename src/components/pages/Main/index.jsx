import React from "react";
import logoImage from "../../../assets/images/logo.png";
import classes from "./Main.module.css";
import Navbar from "../../Navbar";
import SectionText from "../../SectionText";
import { motion } from "framer-motion/dist/framer-motion";
import { fade, transition } from "../../../animations";

const Main = () => {
  return (
    <motion.div
      initial="in"
      animate="out"
      variants={fade}
      transition={transition}
    >
      <main className={classes.wrapper}>
        <div className={classes.logo}>
          <img src={logoImage} alt="Barbarian" />
        </div>
        <div className="date text-shadow">2021</div>

        <SectionText>
          <span>«Барбариан»</span> (прим. лат Barbarian) - группа предприятий
          полного цикла Челябинской области, созданное в рамках государственной
          стратегии импортозамещения в 2021 г. <br />
          Специализируется на выпуске высококачественных брендированных
          слабоалкогольных напитков сегмента <span>HoReCa</span>
        </SectionText>

        <Navbar />
      </main>
    </motion.div>
  );
};

export default Main;
