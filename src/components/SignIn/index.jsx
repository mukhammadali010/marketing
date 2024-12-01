import React, { useState } from "react";
import Button from "../../Generics/Button";
import { Container } from "./style";
// import google from "../../assets/img/google.png";
// import facebook from "../../assets/img/facebook.png";
import Input from "../../Generics/Input";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  // const { REACT_APP_BASE_URL: url } = process.env;

  const [data, setData] = useState({
    name:'',
    key:'',
    email:'',
    secret: "",
  });
  console.log(data, 'dataaaa');
  const onChange = ({ target: { value, name } }) => {
    setData({ ...data, [name]: value });
  };
  const CryptoJS = require('crypto-js');

  const method = 'GET';
  const urlPath = '/myself';
  const body = JSON.stringify(data); 
  const userSecret = `${data.secret}`;
  const stringToSign = method + urlPath + body + userSecret;
  const sign = CryptoJS.MD5(stringToSign).toString();
  console.log(sign);
  const onSubmit = ()=>{
   
    fetch(`https://0001.uz/myself` , {
      method:"GET",
      headers:{
        // 'Key': `${data.key}`,
        'Sign': sign,
      },     
      redirect: 'follow'
    }).then((res)=>res.json()).then((res)=>console.log(res , 'resss'))
  }
  const navigate = useNavigate()
  const onSignUp =()=>{
    navigate('/signup')
  }
  return (
    <Container>
      <h2>Sign in</h2>
      {/* <Button type={"third"} width={""} br={"5"}>
        <img src={google}  alt={'google'}/> Continue with Google
      </Button>
      <Button type={"third"} width={""} br={"5"}>
        <img src={facebook} alt={'facebook'} /> Continue with Google
      </Button>
      <div className="wrap">
        <div className="line"></div>
        <p>OR</p>
        <div className="line"></div>
      </div> */}
      <form action="">
       
        <label htmlFor="">Your email</label>
        <Input br={"6"}
        mb={'16'}
        mt={'4'}
        name={'email'}
        onChange={onChange} typing={"register"} placeholder={"Enter your email"} />
        <label htmlFor="">Your password</label>
        <Input
        type={'password'}
          br={"6"}
          mb={'16'}
          mt={'4'}
          name={'secret'}
          onChange={onChange}
          typing={"register"}
          placeholder={"Enter your password"}
        />
      </form>
        <Button type={'primary'} br={'6'} onclick={onSubmit}>Button</Button>
        <p onClick={()=>onSignUp()}>Already signed up? <span>Go to sign up.</span></p>
    </Container>
  );
};

export default SignIn;
