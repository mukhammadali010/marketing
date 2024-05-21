import React from "react";
import Button from "../../Generics/Button";
import { Container } from "./style";
import google from "../../assets/img/google.png";
import facebook from "../../assets/img/facebook.png";
import Input from "../../Generics/Input";
import { useState } from "react";
const SignUp = () => {


  const [data , setData] = useState({
    email:'',
    name:'',
    key:'',
    secret:'parol',

  })

  console.log(data);

  // const { REACT_APP_BASE_URL: url } = process.env;

 

  const onChange=({target:{value , name}})=>{
    setData({...data , [name]:value})
  }

  const onSubmit =()=>{
    fetch('https://0001.uz/signup', {
      method: "POST",
      headers: { 
        'Key': `${data.key}`,
        'Sign': `${data.secret}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("tokenbook", res.authenticationToken || "");
       console.log(res, 'res');
      });
  }
  return (
    <Container>
      <h2>Sign Up</h2>
      <Button type={"third"} width={""} br={"5"}>
        <img src={google}  alt={'google'}/> Continue with Google
      </Button>
      <Button type={"third"} width={""} br={"5"}>
        <img src={facebook} alt={'facebook'} /> Continue with Google
      </Button>
      <div className="wrap">
        <div className="line"></div>
        <p>OR</p>
        <div className="line"></div>
      </div>
      <form action="">
        <label htmlFor="">Your name</label>
        <Input
          br={"6"}
          mb={'16'}
          mt={'4'}
          name='name'
          onChange={onChange}
          typing={"register"}
          placeholder={"Enter your username"}
        />
        <label htmlFor="">Your email</label>
        <Input br={"6"}
        mb={'16'}
        mt={'4'}
        name='email'
        onChange={onChange} typing={"register"} placeholder={"Enter your email"} />
        <label htmlFor="">Your username</label>
        <Input
          br={"6"}
          mb={'16'}
          mt={'4'}
          name='key'
          onChange={onChange}
          typing={"register"}
          placeholder={"Enter your username"}
        />
      </form>
        <Button type={'primary'} br={'6'} onclick={()=>onSubmit()}>Button</Button>
        <p>Already signed up? <span>Go to sign in.</span></p>
    </Container>
  );
};

export default SignUp;
