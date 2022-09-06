import React from 'react';
import classes from './Footer.module.css';

/*icons*/ 
import vkIcon from '../../assets/images/socials/vk.png';
import viberIcon from '../../assets/images/socials/viber.png';
import whatsappIcon from '../../assets/images/socials/whatsapp.png';
import yandexIcon from '../../assets/images/socials/yandex.png';
import rbkIcon from '../../assets/images/socials/rbk.svg';
import googleMapsIcon from '../../assets/images/socials/google-maps.png';
import gisIcon from '../../assets/images/socials/2gis.svg';
import phoneIcon from '../../assets/images/phone.png';
import locationIcon from '../../assets/images/location-pin.png';
import emailIcon from '../../assets/images/email.png';
import tgIcon from '../../assets/images/socials/telegram.png';

const Footer = () => {
    return (
        <footer className={classes.wrapper}>
            <h2>Наши соцсети</h2>
            <div className={classes.socials}>
                <a href="https://vk.com/74beer" className={classes.social}><img src={vkIcon} alt="" /></a>
                <a href="viber://chat/?number=79525267600" className={classes.social}><img src={viberIcon} alt="" /></a>
                <a href="https://wa.me/79525267600" className={classes.social}><img src={whatsappIcon} alt="" /></a>
                <a href="https://companies.rbc.ru/id/1217400044718-ooo-barbarian/" className={classes.social}><img src={rbkIcon} alt="" /></a>
            </div>
            <div className={classes.maps}>
                <div className={classes.footerItem}> <img src={yandexIcon} alt="Barbarian yandex" /> <a href="https://yandex.ru/maps/org/barbarian_beer_/56271332734/?ll=60.679733%2C55.758068&z=16">Yandex карты</a></div>
                <div className={classes.footerItem}> <img src={googleMapsIcon} alt="Barbarian google карты" /> <a href="https://www.google.com/maps/place/Barbarian+%C2%AE+(Barbarian+LLC)/@55.7576747,60.6710064,15z/data=!4m12!1m6!3m5!1s0x0:0xcbbbeeb9abea33cf!2sBarbarian+%C2%AE+(Barbarian+LLC)!8m2!3d55.7576747!4d60.6797611!3m4!1s0x0:0xcbbbeeb9abea33cf!8m2!3d55.7576747!4d60.6797611">Google карты</a></div>
                <div className={classes.footerItem}> <img src={gisIcon} alt="Barbarian 2ГИС" /> <a href="https://2gis.ru/firm/70000001057822118">2ГИС</a></div>
            </div>
            <a className={classes.footerItem} href="tel: 79525267600"><img src={phoneIcon} alt="Barbarian номер"/> +7 (952) 526-76-00</a>
            <div className={classes.footerItem}><img src={locationIcon} alt="" />Челябинская обл. г. Озерск ул. Матросова 26 Б (Завод, бутик и лаборатория)</div>
            <div className={classes.footerItem} style={{color: 'var(--font-yellow)'}}><img src={emailIcon} alt="" />74beer@bk.ru (бутик) <br /> BeerRF@vk.com (завод, лаборатория, КВХ )</div>
            <div className={classes.footerItem}><img src="" alt="" />Разработчик сайта: <img src={tgIcon} alt="" style={{marginLeft: '5px'}}/> <a href="https://telegram.me/nero1773">@nero1773</a></div>
        </footer>
    );
}

export default Footer;
