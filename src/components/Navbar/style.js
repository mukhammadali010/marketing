import styled from "styled-components";
import {ReactComponent as logo} from '../../assets/icons/bi_cloud-check.svg'
import {ReactComponent as search} from '../../assets/icons/search-refraction.svg'
import {ReactComponent as bell} from '../../assets/icons/bell.svg'
const Container = styled.div`
  width: 100%;
  padding: var(--padding);
  background-image: url("../../assets/img/bgimage.png");
  background-size: cover;
  background-position: center;
  position:sticky;
  top:0;
  background-color:skyblue 
`;

const Nav = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between !important;
`;
Nav.Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
 

 
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
const Logo = styled(logo)`
/* margin-top:10px; */
`
const Search= styled(search)`
/* position:absolute; */
/* left:170px; */
`
const Bell= styled(bell)`
`
const Avatar = styled.div`
display: flex;
padding: 3px;
flex-direction: column;
align-items: center;
justify-content: center;
width: 40px;
height:40px;
border-radius: 50%;
border: 2px solid #FD648E;
background: var(--gradient, conic-gradient(from 180deg at 50% 50%, #FD648E 0deg, #884CB2 178.1249964237213deg, #FD648E 360deg));
backdrop-filter: blur(15px);
`
export {Container, Nav , Content , Wrapper , Logo , Search , Bell , Avatar};
