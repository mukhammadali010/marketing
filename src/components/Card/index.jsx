import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {Container, Content} from "./style";

const Card = () => {
  return (
    <>
    <Container>
      <h5>Raspberry Pi User Guide</h5>
      <p className="textCard">Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque varius vestibulum magna in. Tortor quisque nisl congue ut tellus sem id.</p>
      <div className="cardFooter">
        <p>Eben Upton: 2012-year</p>
        <span>211 pages</span>
      </div>
    </Container>
    </>
  );
};

export default Card;
