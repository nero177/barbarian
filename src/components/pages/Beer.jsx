import React from "react";
import classes from "./Pages.module.css";
import logo from "../../assets/images/justlogo.png";
import SlickGallery from "../SlickGallery";
import SectionText from "../SectionText";
import ScrollArrow from "../ScrollArrow";
import PhotoAndText from "../PhotoAndText";
import { motion } from "framer-motion/dist/framer-motion";
import { fade, transition } from "../../animations";

import ph1 from "../../assets/images/photos/brewery/бутик-1.webp";
import ph2 from "../../assets/images/photos/brewery/бутик-2.webp";
import ph3 from "../../assets/images/photos/brewery/Бутик3.webp";
import ph4 from "../../assets/images/photos/brewery/бутик4.webp";
import ph5 from "../../assets/images/photos/brewery/бутик5.webp";

const images = [ph1, ph2, ph3, ph4, ph5];

const Beer = () => {
  return (
    <motion.div
      initial="in"
      animate="out"
      variants={fade}
      transition={transition}
    >
      <div className={classes.wrapper}>
        <div className={classes.idleSection}>
          <div className={classes.logo}>
            <img src={logo} alt="Barbarian" />
          </div>

          <h1 className="page-header">
            "Barbarian Beer"
          </h1>
          <SlickGallery images={images}/>
          <SectionText>
          Первый BEER-БУТИК в городе Озёрск Челябинской области. Специализируется на розничной продаже слабоалкогольных разливных напитков сегмента HoReCa. Необычный интерьер в древнеримском стиле, классическая музыка и 16 сортов премиальных разливных напитков то немногое что порадует даже самого искушённого ценителя. Организационно-правовая форма бизнеса - ИП, дата создания 2019 год. Структурно входит в группу компаний "Barbarian".
          </SectionText>
          <ScrollArrow style={{ marginTop: 20 }} />
        </div>

        <div className="secondSection" >
          <PhotoAndText photoSrc={ph2}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium explicabo optio quisquam. Soluta impedit vel dolorum
            fugiat, exercitationem assumenda non.
          </PhotoAndText>
          <PhotoAndText photoSrc={ph1} reverse="true">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium explicabo optio quisquam. Soluta impedit vel dolorum
            fugiat, exercitationem assumenda non.
          </PhotoAndText>
        </div>
      </div>
    </motion.div>
  );
};

export default Beer;
