import styled from "styled-components";
const mobileSize = 768;
export const CardContainer = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${mobileSize}px) {
    width: 164px;
    height: 192px;
  }
`;

export const CardImg = styled.img`
  width: 250px;
  height: 252px;
  background-color: white;
  border-radius: 50%;
  @media (max-width: ${mobileSize}px) {
    width: 120px;
    height: 122px;
  }
`;

export const CardTitle = styled.h1`
  margin: 1px;
  color: white;
  @media (max-width: ${mobileSize}px) {
    font-size: 14px;
  }
`;

export const CardText = styled.h3`
  margin: 1px;
  font-family: sans-serif;
  color: ${(props) =>
    props.variant === "Alive"
      ? "rgba(67, 208, 73, 1)"
      : "rgba(235, 87, 87, 1)"};
  @media (max-width: ${mobileSize}px) {
    font-size: 10px;
  }
`;
