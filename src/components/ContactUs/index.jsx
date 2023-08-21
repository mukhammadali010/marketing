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
  function Submit(e){
    const formEle = document.querySelector('form')
    e.preventDefault()
    const formData = new FormData(formEle)
    fetch("https://script.google.com/macros/s/AKfycbxdMcE6rZ0clS1Ify-5EBgCyql1JbQ0JS9CdngV_SYeyCAWt3MI4M2NYTGLuRnAYVKz/exec" , {
      method:"POST",
      body:formData
    })
  }

  return (
    <div>
      <Container>
        <Button type={"secondary"} width={"420"} height={"84"}>
        {t('contact')}
        </Button>
        <ImgWraper>
        <img className="shar" src={shar} alt="" />
          <Content>
            <form onSubmit={(e)=>Submit(e)} >
             <div className="form">
             <label htmlFor=""> {t('name')}*</label> 
              <Input type={'main'} width={'384'} height={'73'} placeholder={'Имя'} name={'Name'}/>
             </div>
             <div className="form">
             <label htmlFor=""> {t('surname')}*</label> 
              <Input type={'main'} width={'384'} height={'73'} placeholder={'Фамилия'} name={'Surname'}/>
             </div>
             <div className="form">
             <label htmlFor="">  {t('phone')}*</label> 
              <Input type={'main'} width={'384'} height={'73'} placeholder={'(90) 177 - 77 - 77'} name={'Phone'}/>
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
