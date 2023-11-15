import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: var(--padding);
  margin-top: 50px;

  .task {
    color: var(--foundation-white-white-50, #fefefe);
    font-family: Mulish;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top:20px;
    margin-bottom:36px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
 
`;
const CardsWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap:wrap;
`

export { Container, Content , CardsWrap };
