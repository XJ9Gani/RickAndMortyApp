import styled from "styled-components";
const mobileSize = 768;
export const CardContainer = styled.div`
  overflow: hidden;
  width: 400px;
  height: 350px;
  border-radius: 10px;
  background-color: rgba(21, 42, 58, 1);
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

export const CardTitle = styled.h1`
  margin: 0;

  font-size: 30px;
  font-family: sans-serif;
  color: white;
  @media (max-width: ${mobileSize}) {
    font-size: 30px;
  }
`;

export const CardText = styled.h4`
  margin-top: 5px;
  width: 80vw;
  font-size: 20px;
  font-family: sans-serif;
  color: rgba(110, 121, 140, 1);
  @media (max-width: ${mobileSize}) {
    font-size: 12px;
  }
`;
