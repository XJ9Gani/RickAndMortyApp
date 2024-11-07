import styled from "styled-components";
const mobileSize = 768;
export const OpImg = styled.img`
  object-fit: coverl;
  width: 50%;
  margin: auto;
  display: block;
  @media (max-width: ${mobileSize}px) {
    width: 100%;
  }
`;
