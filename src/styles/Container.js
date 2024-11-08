import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const mobileSize = 768;
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0; 
  }
    ::-webkit-scrollbar {
   background-color:${(props) => (props.state === "light" ? "grey" : "black")};
}
    ::-webkit-scrollbar-thumb {
   background-color: ${(props) =>
     props.state === "light" ? "white" : "rgb(5, 5, 100)"};
   height:10px;
   
}
`;

export const SimpleContainer = styled.div`
  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    left: 0;
    margin: auto;
    width: ${(props) => props.width || "24px"};
    height: ${(props) => props.height || "24px"};
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

export const BackContainer = styled.div`
  background-color: ${(props) =>
    props.state === "light" ? "white" : "rgba(11, 30, 45, 1)"};

  min-height: 100vh;
`;

export const ListContainer = styled.div`
  margin: auto;
  width: 85%;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  @media (max-width: ${mobileSize}px) {
    width: 90%;
    margin: auto;
    grid-template-columns: ${(props) =>
      props.order === "byOne" ? "1fr" : "1fr 1fr"};
    margin-bottom: 60px;
  }
`;
export const ListItem = styled.div``;

export const EmptyDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
