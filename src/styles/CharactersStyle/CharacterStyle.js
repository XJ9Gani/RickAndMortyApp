import styled from "styled-components";
const mobileSize = 768;

export const CharacterListContainer = styled.div`
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

export const CharacterCardContainer = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${mobileSize}px) {
    width: 164px;
    margin: auto;
    flex-direction: ${(props) => (props.order === "byOne" ? "row" : "column")};
    height: ${(props) => (props.order === "byOne" ? "74px" : "192px")};
  }
`;

export const CharacterImg = styled.img`
  width: 250px;
  height: 252px;
  background-color: white;
  border-radius: 50%;
  @media (max-width: ${mobileSize}px) {
    width: ${(props) => (props.order === "byOne" ? "74px" : "120px")};
    height: ${(props) => (props.order === "byOne" ? "74px" : "122px")};
  }
`;
export const CharacterBody = styled.div`
  text-align: ${(props) => (props.order === "byOne" ? "start" : "center")};
`;

export const CardStatus = styled.h3`
  font-family: sans-serif;
  margin: 0;
  color: ${(props) =>
    props.variant === "Alive"
      ? "rgba(67, 208, 73, 1)"
      : "rgba(235, 87, 87, 1)"};
  @media (max-width: ${mobileSize}px) {
    font-size: 10px;
  }
`;

export const CardTitle = styled.h1`
  transition: 0.4s;
  color: ${(props) => (props.state === "light" ? "black" : "white")};
  font-family: sans-serif;
  @media (max-width: ${mobileSize}px) {
    font-size: 14px;
    width: 151px;
  }
`;

export const CardText = styled.h4`
  font-size: 25px;
  color: rgba(110, 121, 140, 1);
  font-family: sans-serif;

  @media (max-width: ${mobileSize}px) {
    font-size: ${(props) => props.size || "24px"};
    width: $ ${(props) => props.width || "100vw"};
  }
`;
