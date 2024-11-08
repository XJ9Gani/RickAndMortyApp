import styled from "styled-components";
const mobileSize = 768;

export const LocationListContainer = styled.div`
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

export const CardContainer = styled.div`
  overflow: hidden;
  width: 400px;
  height: 350px;
  border-radius: 10px;
  box-shadow: 0 0 6px 1px black;
  border: ${(props) => (props.state === "light" ? "1px solid black" : "none")};
  background-color: ${(props) =>
    props.state === "light" ? "white" : "rgba(21, 42, 58, 1)"};
  @media (max-width: ${mobileSize}px) {
    margin: auto;
    width: 343px;
    height: 260px;
    flex-direction: "column";
  }
`;

export const CardHeader = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  height: 70%;
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: center;
  padding: 10px;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 30px;
  font-family: sans-serif;
  color: ${(props) => (props.state === "light" ? "black" : "white")};
  @media (max-width: ${mobileSize}px) {
    font-size: 25px;
  }
`;

export const CardText = styled.h4`
  margin-top: 5px;
  width: 80vw;
  font-size: 18px;
  font-family: sans-serif;
  color: rgba(110, 121, 140, 1);
  @media (max-width: ${mobileSize}px) {
    font-size: 12px;
  }
`;
