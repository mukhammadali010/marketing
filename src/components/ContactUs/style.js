import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: var(--padding);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f0fffa;
  padding-top:150px;
`;

const ImgWraper = styled.div`
  display: flex;
  align-items: center;
  margin-top:70px;
  width:100%;
  position: relative;
  .shar{
    position: absolute;
    top:-50px;
    left: -60px;
  }
  .shar2{
    position: absolute;
    top:460px;
    left: 600px;
  }
  .img{
    position: absolute;
    bottom: -5px;
    left: 210px;
    width: 800px;
  }
`;
const Content = styled.div`
  width: 494px;
height: 577px;
padding:34px 29px;
form{
  display: flex;
  align-items: center;
  flex-direction:column;
  gap:36px;

}
border-radius: 20px;
background: var(--formColor);
z-index:111;
margin-left:0;
.form {
  display: flex;
  justify-content: center;
  flex-direction:column;
  position: relative;
  .uz{
    width: 36px;
    height:36px;
    position: absolute;
    top:45px;
    left: 10px;
  }
}
  
`;

export { Container, ImgWraper, Content };
