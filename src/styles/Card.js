import styled from "styled-components";
const mobileSize = 768;

export const SimpleText = styled.h4`
  padding-left: 10px;
  font-size: 25px;
  color: ${(props) =>
    props.state === "light" ? "black" : "rgba(110, 121, 140, 1)"};
  font-family: sans-serif;
  margin: 1px;
  @media (max-width: ${mobileSize}px) {
    font-size: ${(props) => props.size || "24px"};
    width: $ ${(props) => props.width || "100vw"};
    margin: 1px;
  }
`;
