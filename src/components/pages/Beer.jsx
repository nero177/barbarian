import React, {useEffect} from "react";
import classes from "./Pages.module.css";
import logo from "../../assets/images/justlogo.png";
import SlickGallery from "../SlickGallery";
import SectionText from "../SectionText";
import ScrollArrow from "../ScrollArrow";
import PhotoAndText from "../PhotoAndText";
import GoToMain from "../GoToMain";
import { motion } from "framer-motion/dist/framer-motion";
import { fade, transition } from "../../animations";

import ph1 from "../../assets/images/photos/brewery/бутик-1.webp";
import ph2 from "../../assets/images/photos/brewery/бутик-2.webp";
import ph3 from "../../assets/images/photos/brewery/Бутик3.webp";
import ph4 from "../../assets/images/photos/brewery/бутик4.webp";
import ph5 from "../../assets/images/photos/brewery/бутик5.webp";
import ph6 from "../../assets/images/barbarian.png";
import ph7 from "../../assets/images/carlsberg.png";
import ph8 from "../../assets/images/efes.jpg";

const images = [ph1, ph2, ph3, ph4, ph5];

const Beer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <motion.div
      initial="in"
      animate="out"
      variants={fade}
      transition={transition}
    >
      <GoToMain/>
      <div className={classes.wrapper}>
        <div className={classes.idleSection}>
          <div className={classes.logo}>
            <a href="/">
              <img src={logo} alt="Barbarian" />
            </a>
          </div>

          <h1 className="page-header">"Barbarian Beer"</h1>
          <SlickGallery images={images} />
          <SectionText date="2019">
            Первый BEER-БУТИК в городе Озёрск Челябинской области.
            Специализируется на розничной продаже слабоалкогольных разливных
            напитков сегмента HoReCa. Необычный интерьер в древнеримском стиле,
            классическая музыка и 16 сортов премиальных разливных напитков то
            немногое что порадует даже самого искушённого ценителя.
            Организационно-правовая форма бизнеса - ИП, дата создания 2019 год.
            Структурно входит в группу компаний "Barbarian".
          </SectionText>
          <ScrollArrow style={{ marginTop: 20 }} />
        </div>

        <div className="secondSection">
          <PhotoAndText photoSrc={ph8} imageContain="true">
            Barbarian Beer является официальным партнером и сотрудничает с 2019
            года с AB InBev Efes российской транснациональной компанией.
          </PhotoAndText>
          <PhotoAndText photoSrc={ph7} reverse="true" imageContain="true">
            Barbarian Beer является официальным партнером и сотрудничает с 2020
            года с Carlsberg Group датской транснациональной компанией.
          </PhotoAndText>
          <PhotoAndText photoSrc={ph6} imageContain="true">
            Barbarian Beer структурно входит в группу компаний с начала создания
            2021 г. в Barbarian® - российская региональная компания.
          </PhotoAndText>
        </div>
      </div>
    </motion.div>
  );
};

export default Beer;
