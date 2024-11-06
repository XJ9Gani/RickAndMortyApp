import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const mobileSize = 768;
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0; 
  }
`;

export const SimpleContainer = styled.div`
  @media (max-width: 768px) {
    position: relative;
    margin: auto;
    width: ${(props) => props.width || "24px"};
    height: ${(props) => props.height || "24px"};
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

export const BackContainer = styled.div`
  background-color: rgba(11, 30, 45, 1);
`;

export const ListContainer = styled.div`
  margin-bottom: 55px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  @media (max-width: ${mobileSize}px) {
    width: 300px;
    grid-template-columns: ${(props) =>
      props.order === "byOne" ? "1fr" : "1fr 1fr"};
    margin: auto;
  }
`;
export const ListItem = styled.div``;
