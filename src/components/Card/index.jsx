import React from "react";
import { Container } from "./style";

const Card = ({ value }) => {
  console.log(value, 'valuess');
  return (
    <Container>
      <img src={value.url} width={'100%'} height={'200px'} alt="" />
      <h4>{value.title}</h4>
      <p>{value.text}</p>
    </Container>
  );
};

export default Card;
