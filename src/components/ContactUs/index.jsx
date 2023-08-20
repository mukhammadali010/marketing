import React from "react";
import Button from "../../Generics/Button";
import img from '../../assets/img/young-housewife-is-wearing-yellow-gloves-while-cleaning-with-product-clean-white-wall 1.png'
import uz from '../../assets/img/twemoji_flag-uzbekistan.png'
import shar from '../../assets/img/pngwing.com - 2023-08-16T122930 5.png'
import { Container, Content, ImgWraper } from "./style";
import Input from "../../Generics/Input";
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Container>
        <Button type={"secondary"} width={"420"} height={"84"}>
        {t('contact')}
        </Button>
        <ImgWraper>
        <img className="shar" src={shar} alt="" />
          <Content>
            <form action="#">
             <div className="form">
             <label htmlFor=""> {t('name')}*</label> 
              <Input type={'main'} width={'384'} height={'73'} placeholder={'Имя'}/>
             </div>
             <div className="form">
             <label htmlFor=""> {t('surname')}*</label> 
              <Input type={'main'} width={'384'} height={'73'} placeholder={'Фамилия'}/>
             </div>
             <div className="form">
             <label htmlFor="">  {t('phone')}*</label> 
              <Input type={'main'} width={'384'} height={'73'} placeholder={'(90) 177 - 77 - 77'}/>
              <img className="uz" src={uz} alt="" />
             </div>
             <Button type={'secondary'} width={'384'} height={'79'} br={'20'}> {t('submit')}</Button>
            </form>
          </Content>
          <img className="shar2" src={shar} alt=""/>
          <img className="img" src={img} alt="" />
        </ImgWraper>
      </Container>
    </div>
  );
};

export default ContactUs;
