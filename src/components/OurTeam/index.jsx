import React from "react";
import Button from "../../Generics/Button";
import img1 from "../../assets/img/Rectangle 33.png";
import img2 from "../../assets/img/Rectangle 36.png";
import img3 from "../../assets/img/Rectangle 35.png";
import img4 from "../../assets/img/Rectangle 35 (1).png";
import { Card, Container, ImgWraper } from "./style";
import { useTranslation } from 'react-i18next';

const imgs = [img1, img2, img3, img4];
const OurTeam = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Container>
        <Button type={"secondary"} width={"365"} height={"84"}>
        {t('team')}
        </Button>
        <ImgWraper>
          {imgs.map((value , index) => {
            return (
              <Card key={index}>
                <img src={value} alt="" />
                <Button type={"primary"} width={"193"} height={"77"}>
                {t('qualityCard1')}
                </Button>
              </Card>
            );
          })}
        </ImgWraper>
      </Container>
    </div>
  );
};

export default OurTeam;
