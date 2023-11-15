import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
  .map{
    width: 100%;

      div {
        width: 100% !important;

        height:100vh;
        ymaps {
          /* width: 100% !important; */

        }
        
       & > ymaps:nth-child(2) {
          display:none;
        }
      }
  }

`;
export {
  Container
};
