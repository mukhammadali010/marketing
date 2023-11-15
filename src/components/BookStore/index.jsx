import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../Generics/Button";

import Input from "../../Generics/Input";
import Card from "../Card";
import {Container, Content , CardsWrap} from "./style";

const BookStore = () => {

  const [data ,setData] = useState('')
  console.log('value', data)
  const onChange=({target:{value}})=>{
    
  }
  
  useEffect(()=>{
      fetch(`http://api.weatherapi.com/v1/current.json?key=ee0a9a61f60e4c29b72161609231411&q=London` , {
        
      }).then((res)=>res.json()).then((res)=> setData(res))
    } ,[])

 
  return (
    <>
    <Container>
      <Content>
        <h1>ALL INFORMATION ABOUT WEATHER AND ECOLOGICAL CONDITIONS</h1>
        <div>
          <Input width={'320'} onChange= {onChange} placeholder = {'Enter location'} br={'6'}/>
          <Button width={'180'} type={'primary'} br={'6'}>Submit</Button>
        </div>
      </Content>
      <p className="task">Today's weather</p>
      <CardsWrap>
        <Card/>
      </CardsWrap>
    </Container>
    </>
  );
};

export default BookStore;
