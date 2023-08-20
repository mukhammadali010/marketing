import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: var(--padding);
 display: grid;
 grid-template-columns:auto auto auto auto;
  background-color: var(--footerColor);
  padding:48px 130px;
  ul{
    list-style:none;
    display: flex;
    justify-content: center;
    flex-direction:column;
    gap:16px;
    a{
      text-decoration:none;
      color: #000;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
    }
  }
  .social{
    display: flex;
    align-items: center;
    flex-direction:column;
  }
  .icons-wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
  }
  .icons{
    width: 40px;
  }
`;

export { Container };
