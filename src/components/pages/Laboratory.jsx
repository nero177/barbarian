import React, {useEffect} from "react";
import classes from "./Pages.module.css";
import logo from "../../assets/images/justlogo.png";
import SlickGallery from "../SlickGallery";
import SectionText from "../SectionText";
import ScrollArrow from "../ScrollArrow";
import PhotoAndText from "../PhotoAndText";
import { motion } from "framer-motion/dist/framer-motion";
import { fade, transition } from "../../animations";
import GoToMain from "../GoToMain";

import ph1 from "../../assets/images/photos/laboratory/колбы 1.jpeg";
import ph2 from "../../assets/images/photos/laboratory/Лаболатория4.webp";
import ph3 from "../../assets/images/photos/laboratory/лаборатория-2.webp";
import ph4 from "../../assets/images/photos/laboratory/дрожжи5.jpg";
import ph5 from "../../assets/images/photos/laboratory/дрозжи3.webp";

const images = [ph1, ph2, ph3, ph4, ph5];

const Laboratory = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 800) 
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

          <h1 className="page-header">"Barbarian Laboratory"</h1>
          <SlickGallery images={images}/>
          <SectionText date="2022">
            Лаборатория начала свою работу в 2021 году, при частной крафтовой
            пивоварне «Barbarian Brewery». Специализируется на разведении чистой
            культуры дрожжей как верхового так и низового брожения. Для
            улучшения характеристик напитков, ведется работа по выращиванию
            новых штаммов.
          </SectionText>
          <ScrollArrow style={{ marginTop: 20 }} />
        </div>

        <div className="secondSection">
          <PhotoAndText photoSrc={ph4}>
            ДРОЖЖИ ВЕРХОВОГО БРОЖЕНИЯ - Такие дрожи иначе называют элевыми. Они
            работают в верхней части сусла. В результате ферментации образуется
            плотная шапка из пены. Грибы лучше размножаются при температуре от
            10 до 25 оС.
          </PhotoAndText>
          <PhotoAndText photoSrc={ph5} reverse="true">
            ДРОЖЖИ НИЗОВОГО БРОЖЕНИЯ - Это лагерные дрожжи, которые ферментируют
            в нижней части сусла. Для жизнедеятельности грибов необходимо
            поддерживать температуру в диапазоне 1–15 оС. При холодном брожении
            получают меньше побочных вкусов. Лагеры известны чистым вкусом и
            ароматом, который во многом зависит от используемого хмеля и солода.
          </PhotoAndText>
          <PhotoAndText photoSrc={ph1}>
            Материально-техническое обеспечение
            лаборатории позволяет эффективно и без перебоев выращивать новые
            штаммы.
          </PhotoAndText>
        </div>
      </div>
    </motion.div>
  );
};

export default Laboratory;
