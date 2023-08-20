import React from "react";
import Button from "../../Generics/Button";
import logo from "../../assets/img/Rectangle 56.png";
import youtube from "../../assets/icons/youtube.png";
import telegram from "../../assets/icons/telegram.png";
import instagram from "../../assets/icons/instagram.png";
import { Container } from "./style";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Container>
        {/* logo */}
        <div>
          <img src={logo} alt="" />
        </div>

        <div>
          <ul>
            <li>
              <a href="#"> {t('service')}</a>
            </li>
            <li>
              <a href="#"> {t('about')}</a>
            </li>
            <li>
              <a href="#"> {t('team')}</a>
            </li>
            <li>
              <a href="#"> {t('contact')}</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <a href="#"> {t('phone')}</a>
              <p>333000057</p>
            </li>
            <li>
              <a href="#"> {t('address')}</a>
              <p>Сергили 5 , 33</p>
            </li>
          </ul>
        </div>
        <div className="social">
          <div className="icons-wrap">
            <img className="icons" src={youtube} alt="" />
            <img className="icons" src={instagram} alt="" />
            <img className="icons" src={telegram} alt="" />
          </div>
          <Button type={'primary'} width={'280'} height={'70'}> {t('contact')}</Button>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
