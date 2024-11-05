import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const mobileSize = 768;
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0; 
  }
`;

export const BackContainer = styled.div`
  background-color: rgba(11, 30, 45, 1);
`;

export const ListContainer = styled.div`
  margin-bottom: 55px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: ${mobileSize}px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const ListItem = styled.div``;
