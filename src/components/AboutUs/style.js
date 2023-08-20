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
  .shar{
    position: absolute;
    top:0;
    left: 520px;
  }
`;
const Content = styled.div`
  width: 560px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  .text {
    margin: 50px 0;
  }
  
`;
const Gallery = styled.div`
  display: grid;

  grid-template-columns: auto auto auto auto;
  z-index:111;

  
  .item1 {
    grid-row: 1/3;
    grid-column:1/3;
    width:100%;
    height:100%
  }
  img{
    width: 90px;
  }
`;
export { Container, Gallery, ImgWraper, Content };
