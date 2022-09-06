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

import ph1 from "../../assets/images/photos/beer/Пиво-1.webp";
import ph2 from "../../assets/images/photos/beer/Пиво-2.webp";
import ph3 from "../../assets/images/photos/beer/пиво-3.webp";
import ph4 from "../../assets/images/photos/factory/завод 1.jpg";
import ph5 from "../../assets/images/photos/factory/завод 2.JPG";
import ph6 from "../../assets/images/photos/factory/завод 3.JPG";
import ph7 from "../../assets/images/photos/factory/завод 4.jpg";
import ph8 from "../../assets/images/photos/factory/завод5.JPG";
import ph9 from "../../assets/images/photos/factory/завод6.JPG";
import ph10 from "../../assets/images/photos/factory/завод7.JPG";

const sliderImages = [ph4, ph5, ph6, ph7, ph8, ph9, ph10];

const Brewery = () => {
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

          <h1 className="page-header">
            Частная крафтовая пивоварня "Barbarian Brewery"
          </h1>
          <SlickGallery images={sliderImages} />
          <SectionText>
            Частная крафтовая пивоварня «Barbarian Brewery», специализируется на
            производстве высококачественных брендированных слабоалкогольных
            напитков сегмента HoReCа. Уникальность предприятия в особой
            рецептуре напитков, разработанных путем лабораторных исследований и
            Высокотехнологическом процессе на всех этапах производства: от
            водоподготовки и до выпуска конечного продукта.
            Организационно-правовая форма бизнеса «ООО», дата создания 2021 год.
            Структурно входит в группу компаний «Barbarian».
          </SectionText>
          <ScrollArrow style={{ marginTop: 20 }} />
        </div>

        <div className="secondSection">
          <PhotoAndText photoSrc={ph1}>
            "Barbarian Czech Whait" - Светлый нефильтрованный лагер класса
            "Premium", светло-жёлтого янтарного цвета (EBC-2), в напитке
            реализован купаж из 70% ячменного и 30% пшеничного солода;
            <br />
            ABV - 4,7-4,9% об; <br />
            IBU - 11; <br />
            OG - 10.
            <p></p>
            <b>История:</b> "Barbarian Czech Whait", был сварен специально для
            участия бренда "Barbarian" в качестве "Спонсора" мирового рекорда,
            "Книги Гиннеса" Российской Федерации. Который должен был проходить в
            Москве. Уникальная запатентованная рецептура пива не имеющая
            зарубежных аналогов, включает в себя специальную технологию "сухого"
            охмеления для биотрансформации "группы" дрожжей и хмеля.
            Исключительный технологический процесс варки и дображивания
            премиального пива "Barbarian Czech Whait" происходит на
            индивидуально-разработанном оборудовании, производства России,
            Германии, США, Южной Кореи. Объемы производства - "Barbarian Czech
            Whait" - лимитированы и входят в премиально -брендированную линейку
            "Barbarian". Вся премиально - брендированная линейка "Barbarian" это
            высококачественный и эколого-чистый сегмент продукции "HoReCa",
            который поставляется только в одну из "тысяч" точек продаж на всей
            территории субъекта или города Федерального значения Российской
            Федерации.
          </PhotoAndText>
          <PhotoAndText photoSrc={ph2} reverse="true">
            "Barbarian(r) Wit blanche" - Светлый нефильтрованный эль класса
            "Premium", темно желтого - янтарного цвета (EBC-4) <br />
            ABV - 4,9% об. <br />
            IBU - 10; <br />
            OG - 12; <br />
            <p></p>
            <b>История: </b>
            «Barbarian® Wit blanche», был сварен для участия бренда
            «Barbarian®», приглашенного на встречу приуроченную к открытию музея
            пива и выставочного павильона российских пивоваренных компаний на
            ВДНХ при поддержке Правительства Москвы. Который проходил 29.04.2022
            г. в Москве. Рецептура пива, включает в себя специальную технологию
            «сухого» охмеления для биотрансформации «группы» дрожжей и хмеля.
            Исключительный технологический процесс варки и дображивания
            премиального пива «Barbarian® Wit blanche» происходит
            на индивидуально-разработанном оборудовании, производства России,
            Германии, США, Южной Кореи. Объемы производства - «Barbarian® Wit
            blanche» - лимитированы и входят в премиально
            -брендированную линейку «Barbarian®». Вся премиально
            - брендированная линейка «Barbarian» это высококачественный и
            эколого-чистый сегмент продукции «HoReCa», который поставляется
            только в одну из «тысяч» точек продаж на всей территории субъекта
            или города Федерального значения Российской Федерации.
          </PhotoAndText>
          <PhotoAndText photoSrc={ph3}>
            «Barbarian® Black Stout» <br />
            <b>
              ABV- 7,3% об; IBU- 26; <br />
              OG- 18 <br />
              EBC- 57 <br />
            </b>
            <p></p>
            «Barbarian® Black Stout» - сварен на основе светлых солодов с
            добавлением купажа карамельных, шоколадных и жженых солодов. Хмель
            из Англии. Вода подготовленная с азотированием и ультрафиолетовой
            стерилизацией. <br />
            <p></p>
            <b>История:</b> <br />
            «Barbarian® Black Stout», был сварен для участия бренда «Barbarian®»
            во втором конгрессе ответственного бизнеса "ESG–(Р) «Эволюция»,
            который будет проходить в Москве 29 сентября 2022 года. Рецептура
            пива, включает в себя специальную технологию «сухого» охмеления для
            биотрансформации «группы» дрожжей и хмеля. Исключительный
            технологический процесс варки и дображивания премиального пива
            «Barbarian® Wit blanche» происходит
            на индивидуально-разработанном оборудовании, производства России,
            Германии, США, Южной Кореи. Объемы производства - ««Barbarian® Black
            Stout» - лимитированы и входят в премиально -брендированную линейку
            «Barbarian®». Вся премиально - брендированная линейка «Barbarian»
            это высококачественный и эколого-чистый сегмент продукции «HoReCa»,
            который поставляется только в одну из «тысяч» точек продаж на всей
            территории субъекта или города Федерального значения Российской
            Федерации.
          </PhotoAndText>
        </div>
      </div>
    </motion.div>
  );
};

export default Brewery;
