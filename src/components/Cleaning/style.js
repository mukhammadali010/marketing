import styled from "styled-components";
import { ReactComponent as like } from "../../assets/icons/Vector.svg";

const Container = styled.div`
  width: 100%;
  padding: var(--padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:#F0FFFA; 
`;


const Content = styled.div`
width: 480px;
display: flex;
align-items: flex-end;
justify-content: flex-end;
flex-direction:column;
.text:nth-child(3){
  margin-top:50px;
}
`

export { Container  , Content };
