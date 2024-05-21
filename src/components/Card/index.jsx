import React from "react";
import { useSpring, animated } from 'react-spring';
import { Container } from "./style";

const Card = ({ value }) => {
  const props = useSpring({ 
    opacity: 1, 
    from: { opacity: 0 }, 
    delay: 200 
  });

  return (
    <animated.div style={props}>
      <Container>
        <img src={value.url} width={'100%'} height={'200px'} alt="" />
        <h4>{value.title}</h4>
        <p>{value.text}</p>
      </Container>
    </animated.div>
  );
};

export default Card;
