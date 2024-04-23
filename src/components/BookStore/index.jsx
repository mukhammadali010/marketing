import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../Generics/Button";
import { message } from 'antd';
import Input from "../../Generics/Input";
import Card from "../Card";
import Mycontext from "../context";
import Yandex from "../Yandex";
import {Container, Content , CardsWrap} from "./style";
import Footer from "../Footer";
import ImageManipulation from "../ImgConverter";
import MapComponent from "../YandexData";

const BookStore = () => {
  const api = {
    key: 'd58082d2702339083a04cf97256b417f',
    url:'https://api.openweathermap.org/data/2.5/'
  }

  const {data ,setData} = useContext(Mycontext)
  console.log('data', data)
  const [search ,setSearch] = useState('')
  const onChange=({target:{value}})=>{
    setSearch(value)
  }

  
  const searchPressed =()=>{
    console.log('pressed');
    fetch(`${api.url}weather?q=${search}&units=metric&APPID=${api.key}`).then((res)=>res.json()).then((res)=> setData(res))
  }
  

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {

      event.preventDefault(); 
      openMessage()
      searchPressed();
    }
  };

 

  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Successfully Loaded !!',
        duration: 2,
      });
    }, 1000);
  };
  return (
    <>
    {contextHolder}
    <Container>
      <Content>
        <h1>ALL INFORMATION ABOUT WEATHER AND ECOLOGICAL CONDITIONS in {data?.name}</h1>
        <div>
          <Input width={'320'}  onKeyPress={handleKeyPress} onChange= {onChange} placeholder = {'Enter location'} br={'6'}/>
          <Button width={'180'} type={'primary'} br={'6'}  onclick={searchPressed}>Submit</Button>
        </div>
      </Content>
      <p className="task">Today's weather of {data.name} </p>
      <CardsWrap>
        <Card/>
      </CardsWrap>
      <Yandex/>
      <ImageManipulation/>
      <MapComponent/>
    </Container>
    </>
  );
};

export default BookStore;
