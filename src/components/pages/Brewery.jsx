import React from "react";
import classes from "./Pages.module.css";
import logo from "../../assets/images/justlogo.png";
import SlickGallery from "../SlickGallery";
import SectionText from "../SectionText";
import ScrollArrow from "../ScrollArrow";
import PhotoAndText from "../PhotoAndText";
import { motion } from "framer-motion/dist/framer-motion";
import { fade, transition } from "../../animations";

import ph1 from "../../assets/images/photos/beer/Пиво-1.webp";
import ph2 from "../../assets/images/photos/beer/Пиво-2.webp";
import ph3 from "../../assets/images/photos/beer/пиво-3.webp";

const images = [ph1, ph2, ph3];

const Brewery = () => {
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
            Частная крафтовая пивоварня "Barbarian Brewery"
          </h1>
          <SlickGallery images={images} />
          <SectionText>
            Barbarian Brewery Частная крафтовая пивоварня «Barbarian Brewery»,
            специализируется на производстве высококачественных брендированных
            слабоалкогольных напитков сегмента HoReCа. Уникальность предприятия
            в особой рецептуре напитков, разработанных путем лабораторных
            исследований и Высокотехнологическом процессе на всех этапах
            производства: от водоподготовки и до выпуска конечного продукта.
            Организационно-правовая форма бизнеса «ООО», дата создания 2021 год.
            Структурно входит в группу компаний «Barbarian».
          </SectionText>
          <ScrollArrow style={{ marginTop: 20 }} />
        </div>

        <div className="secondSection">
          <PhotoAndText photoSrc={ph1}>
            "Barbarian Czech Whait" - Светлый нефильтрованный лагер класса
            "Premium", светло-жёлтого янтарного цвета (EBC-2), в напитке
            реализован купаж из 70% ячменного и 30% пшеничного солода; ABV -
            4,7-4,9% об; IBU - 11; OG - 10. История: "Barbarian Czech Whait",
            был сварен специально для участия бренда "Barbarian" в качестве
            "Спонсора" мирового рекорда, "Книги Гиннеса" Российской Федерации.
            Который должен был проходить в Москве. Уникальная запатентованная
            рецептура пива не имеющая зарубежных аналогов, включает в себя
            специальную технологию "сухого" охмеления для биотрансформации
            "группы" дрожжей и хмеля. Исключительный технологический процесс
            варки и дображивания премиального пива "Barbarian Czech Whait"
            происходит на индивидуально-разработанном оборудовании, производства
            России, Германии, США, Южной Кореи. Объемы производства - "Barbarian
            Czech Whait" - лимитированы и входят в премиально -брендированную
            линейку "Barbarian". Вся премиально - брендированная линейка
            "Barbarian" это высококачественный и эколого-чистый сегмент
            продукции "HoReCa", который поставляется только в одну из "тысяч"
            точек продаж на всей территории субъекта или города Федерального
            значения Российской Федерации.
          </PhotoAndText>
          <PhotoAndText photoSrc={ph2} reverse="true">
          "Barbarian(r) Wit blanche" - Светлый нефильтрованный эль класса "Premium", темно желтого - янтарного цвета (EBC-4)
          </PhotoAndText>
          <PhotoAndText photoSrc={ph3}>
          "Barbarian(r) Czech Whait"
          </PhotoAndText>
        </div>
      </div>
    </motion.div>
  );
};

export default Brewery;
