import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: var(--padding);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f0fffa;
`;

const ImgWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top:70px;
  position: relative;
  
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`
  
export { Container, ImgWraper , Card };
