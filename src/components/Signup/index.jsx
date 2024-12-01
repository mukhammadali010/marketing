import React from "react";
import Button from "../../Generics/Button";
import { Container } from "./style";
// import google from "../../assets/img/google.png";
// import facebook from "../../assets/img/facebook.png";
import Input from "../../Generics/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()
  const onSignin=()=>{
   navigate('/signin')
  }
  return (
    <Container>
      <h2>Sign Up</h2>
      {/* <Button type={"third"} width={""} br={"5"}>
        <img src={google}  alt={'google'}/> Continue with Google
      </Button>
     
      <div className="wrap">
        <div className="line"></div>
        <p>OR</p>
        <div className="line"></div>
      </div> */}
      <form action="">
        <label htmlFor="">First name</label>
        <Input
          br={"6"}
          mb={'16'}
          mt={'4'}
          name='name'
          onChange={onChange}
          typing={"register"}
          placeholder={"Enter your firstname"}
        />
         <label htmlFor="">Last name</label>
        <Input
          br={"6"}
          mb={'16'}
          mt={'4'}
          name='name'
          onChange={onChange}
          typing={"register"}
          placeholder={"Enter your lastname"}
        />
         <label htmlFor="">Username</label>
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
        <label htmlFor="">Your Password</label>
        <Input
        type={'password'}
          br={"6"}
          mb={'16'}
          mt={'4'}
          name='key'
          onChange={onChange}
          typing={"register"}
          placeholder={"Enter your username"}
        />
         <label htmlFor="">Confirm your Password</label>
        <Input
        type={'password'}
          br={"6"}
          mb={'16'}
          mt={'4'}
          name='key'
          onChange={onChange}
          typing={"register"}
          placeholder={"Confirm your password"}
        />
      </form>
        <Button type={'primary'} br={'6'} onclick={()=>onSubmit()}>Sign Up</Button>
        <p onClick={()=>onSignin()}>Already signed up? <span>Go to sign in.</span></p>
    </Container>
  );
};

export default SignUp;
