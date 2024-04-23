import React from "react";
import { Container, Content, Wrapper } from "./style";
import carImage from "../../assets/img/car.jpg";

const AutoSanoat = () => {
  return (
    <Container>
      <Content>
        <h2>Auto Sanoat</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          urna vel nisi volutpat ultricies. In hac habitasse platea dictumst.
          Nullam ut mauris in turpis posuere viverra.
        </p>
        <Wrapper>
          <div>
            <img src={carImage} alt="Car" style={{ width: "300px" }} />
            <p>Image source: Unsplash</p>
          </div>
          <div>
            <h3>About Auto Sanoat</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod urna vel nisi volutpat ultricies. In hac habitasse platea
              dictumst. Nullam ut mauris in turpis posuere viverra.
            </p>
            <p>
              Integer ut pharetra enim. Duis ut eros velit. Quisque pharetra
              sapien et leo laoreet tempor.
            </p>
          </div>
        </Wrapper>
        <div className="line"></div>
        <h3>Benefits of Auto Sanoat</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Sed euismod urna vel nisi volutpat ultricies</li>
          <li>Integer ut pharetra enim</li>
        </ul>
      </Content>
    </Container>
  );
};

export default AutoSanoat;
