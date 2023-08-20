import styled from "styled-components";

const getType = ({typing}) => {
  switch (typing) {
    case "main":
      return {
        border: `1px solid #E6E9EC`,
        textIndent: `20px`,
        padding: "12px 40px",
      };
    case "login":
      return {
        border: "none",
        borderBottom: "2px solid #E6E9EC",
        padding: "12px 0px",
      };

    default:
      return{
        border: `1px solid #E6E9EC`,
        textIndent: `20px`,
        padding: "12px 40px",
      }
  }
};
const Container = styled.input`
  margin-top: ${({ mt }) => (mt ? `${mt}px` : "10px")};
  gap: ${({ gap }) => (gap ? `${gap}px` : "10px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  border-radius: 20px;
  &:not(:nth-child(2)){
    margin-left: ${({ ml}) => (ml ? `${ml}px` : "20px")};
  };
  outline: none;
  :focus{
    border-bottom:${({typing})=> typing ? '2px solid var(--colorIcons)' : '' } 
  };
  ${getType};
`;

export { Container };
