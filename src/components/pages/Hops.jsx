import React from "react";
import classes from "./Pages.module.css";
import logo from "../../assets/images/justlogo.png";
import SlickGallery from "../SlickGallery";
import SectionText from "../SectionText";
import ScrollArrow from "../ScrollArrow";
import PhotoAndText from "../PhotoAndText";
import { motion } from "framer-motion/dist/framer-motion";
import { fade, transition } from "../../animations";
import GoToMain from "../GoToMain";

import ph1 from "../../assets/images/photos/hops/1.webp";
import ph2 from "../../assets/images/photos/hops/2.webp";
import ph3 from "../../assets/images/photos/hops/3.webp";
import ph4 from "../../assets/images/photos/hops/4.webp";

const images = [ph1, ph2, ph3, ph4];

const Hops = () => {
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

          <h1 className="page-header">"Barbarian Hops"</h1>
          <SlickGallery images={images} />
          <SectionText>
            Крестьянское (фермерское) хозяйство "Барбариан Хопс"
            специализируется на выращивании и селекции хмеля в Челябинской
            области. Планируемая дата создания 2023 год. Организационно-правовая
            форма бизнеса - КФХ, дата создания 2023 год. Структурно входит в
            группу компаний "Barbarian".
          </SectionText>
          <ScrollArrow style={{ marginTop: 20 }} />
        </div>

        <div className="secondSection">
          <PhotoAndText photoSrc={ph2}>
            На ферме хмель женского пола высаживается в виде ризом. Новые ризомы
            получают путём отделения части корневища от уже имеющегося растения.
            Во время высадки размер высаживаемого корневища может не превышать
            длины и ширины человеческого пальца. Затем они постепенно
            разрастаются.
          </PhotoAndText>
          <PhotoAndText photoSrc={ph1} reverse="true">
            Новые сорта хмеля мы создаем путём скрещивания женского растения
            хмеля и мужского растения с желательной характеристикой. Когда
            появляются женские цветки, они изолируются от случайного попадания
            пыльцы. Пыльца с мужских цветков собирается и наносится на женские
            цветки, в результате чего образуются семена.
          </PhotoAndText>
        </div>
      </div>
    </motion.div>
  );
};

export default Hops;
