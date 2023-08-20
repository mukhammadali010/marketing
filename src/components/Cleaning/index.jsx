import React from "react";
import Button from "../../Generics/Button";
import img from "../../assets/img/Group 8.png";
import { Container, Content } from "./style";
import { useTranslation } from 'react-i18next';

const Cleaning = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Container>
          <img src={img} alt="" />
          <Content>
            <Button type={"secondary"} width={"550"} height={"135"} mb={"20"}>
            {t('btnCleaning')}
            </Button>
            <p className="text">
            {t('cleanText1')}
            </p>
            <p className="text">{t('cleanText2')}</p>
            <Button type={'primary'} width={'300'} height={'80'} mt={'103'}>{t('contact')}</Button>
          </Content>
      </Container>
    </div>
  );
};

export default Cleaning;
