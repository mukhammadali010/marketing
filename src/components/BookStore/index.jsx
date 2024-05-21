import React from "react";

import {Container,} from "./style";
import Footer from "../Footer";
import MapComponent from "../YandexData";
import Axborot from "../Axborot";
import Malumotlar from "../Malumotlar";

const BookStore = () => {

  return (
    <>
    <Container>
      <MapComponent/>
      <Axborot/>
      <Malumotlar/>
      <Footer/>
    </Container>
    </>
  );
};

export default BookStore;
