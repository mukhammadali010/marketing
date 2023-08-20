import React from "react";
import Button from "../../Generics/Button";
import img1 from "../../assets/img/Rectangle 17.png";
import img2 from "../../assets/img/Rectangle 18.png";
import img3 from "../../assets/img/Rectangle 32.png";
import img4 from "../../assets/img/Rectangle 28.png";
import img5 from "../../assets/img/Rectangle 29.png";
import img6 from "../../assets/img/Rectangle 29.png";
import img7 from "../../assets/img/Rectangle 28.png";
import img8 from "../../assets/img/Rectangle 22.png";
import img9 from "../../assets/img/Rectangle 23.png";
import img10 from "../../assets/img/Rectangle 31.png";
import img11 from "../../assets/img/Rectangle 30.png";
import img12 from "../../assets/img/Rectangle 24.png";
import img13 from "../../assets/img/pngwing.com - 2023-08-16T122930 5.png";
import { Container, Content, Gallery, ImgWraper } from "./style";
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Container>
        <Button type={"secondary"} width={"220"} height={"84"}>
        {t('about')}
        </Button>
        <ImgWraper>
          <Content>
            <h3> {t('quality')}</h3>
            <p className="text">
            {t('qualityText')}
            </p>

            <Button type={"primary"} width={"300"} height={"80"} mt={"90"}>
            {t('contact')}
            </Button>
          </Content>
            <img className="shar" src={img13} alt="" />
          <Gallery>
            <img className="item1" src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={img10} alt="" />
            <img src={img11} alt="" />
            <img src={img12} alt="" />
          </Gallery>
        </ImgWraper>
      </Container>
    </div>
  );
};

export default AboutUs;
