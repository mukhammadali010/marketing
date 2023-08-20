import styled from "styled-components";
import { ReactComponent as like } from "../../assets/icons/Vector.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding:var(--padding);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    width: 500px;
    text-align: center;
  }
`;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
  border-radius: 50px;
  background: #faf9fe;
  backdrop-filter: blur(10px);
  padding:46px 150px;
  .text {
    width: 800px;
  }
  .cards{
    display: flex;
      justify-content: space-between;
    width: 100%;
    margin-top:50px;
  }

`;

const Card = styled.div`
  width: 167px;
  height: 192px;
  border-radius: 20px;
  /* border: 1px solid var(--colorPrimary); */
  background: #fff;
  box-shadow: 1px 1px 3px var(--colorPrimary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  transition:all 1s ease-in-out;
  &:hover{
  box-shadow: 1px 1px 3px var(--colorSecondary);
  .cardText{
    color:var(--colorSecondary);
  }
  }
  .footerCard{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding:0 13px;
  }
`;

const Like = styled(like)``;
export { Container, CardWrapper, Card, Like };
