import styled from "styled-components";
const mobileSize = 768;
export const NotFoundImg = styled.img`
  margin: auto;
  display: block;
  width: 15%;
  height: 15%;
  @media (max-width: ${mobileSize}px) {
    width: 50%;
    height: 50%;
  }
`;
