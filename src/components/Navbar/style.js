import styled from "styled-components";


const MainWrapper = styled.div`
position: relative;
.fon{
  position: absolute;
  top:0;
  left: 0;
  z-index:-111;

}
.fon1{
  position: absolute;
  top:0;
  right:0;
  z-index:-111;
}
`
const Container = styled.div`
  width: 100%;
  padding: var(--padding);
`;

const Nav = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
Nav.Column = styled.div`
  display: flex;
  align-items: center;
  width: ${({ logo }) => logo && "200px"} ;
  gap: 10px;
  gap: ${({ menu }) => menu && "64px"};
  cursor: ${({ logo }) => logo && "pointer"};
  justify-content: ${({ menu }) => menu && "center"};
  justify-content: ${({ button }) => button && "flex-end"};
  @media (max-width: 834px) {
    justify-content: ${({ menu }) => menu && "center"};
    gap: 10px;
    cursor: pointer;
  }


  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    li {
      a {
        text-decoration: none;
        color: #000;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
  }
`;
const Content = styled.div`
width: 550px;
display: flex;
flex-direction:column;
gap:40px;


`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`
export {MainWrapper, Container, Nav , Content , Wrapper};
