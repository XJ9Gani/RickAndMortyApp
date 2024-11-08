import styled from "styled-components";
const mobileSize = 768;

export const BackPick = styled.div`
  height: 40vh;
  background-image: url(${(props) => props.src});
  background-size: contain;
  filter: blur(3px);
  @media (max-width: ${mobileSize}px) {
    height: 30vh;
    background-size: cover;
    filter: blur(0px);
  }
`;

export const LocationBody = styled.div`
  border: 5px solid
    ${(props) => (props.state === "light" ? "white" : "rgba(11, 30, 45, 1)")};
  position: relative;
  background-color: inherit;
  top: -20px;
  z-index: 0;
  min-height: 100vh;
  border-radius: 26px;
`;
export const LocationImg = styled.img`
  display: block;
  width: 310px;
  height: 210px;
  margin: auto;
  transform: translateY(-40%);
  border-radius: 20px;
  border: 5px solid
    ${(props) => (props.state === "light" ? "white" : "rgba(11, 30, 45, 1)")};
  @media (max-width: ${mobileSize}px) {
    display: none;
  }
`;

export const LocationName = styled.h1`
  margin: 0;
  text-align: center;
  font-family: sans-serif;
  font-size: 34px;
  font-weight: 400;
  line-height: 40px;
  color: ${(props) => (props.state === "light" ? "black" : "white")};
  @media (max-width: ${mobileSize}px) {
    text-align: start;
  }
`;

export const LocationDimension = styled.h3`
  text-align: center;
  font-family: sans-serif;
  color: rgba(91, 105, 117, 1);
  @media (max-width: ${mobileSize}px) {
    font-size: 12px;
    text-align: start;
  }
`;

export const LocationDecription = styled.h2`
  font-weight: 400;
  font-size: 30px;
  color: ${(props) => (props.state === "light" ? "black" : "white")};
  font-family: sans-serif;
  font-size: 20px;
  padding: 20px;
  @media (max-width: ${mobileSize}px) {
    font-size: 13px;
  }
`;

export const ResidentsContainer = styled.div`
  max-height: 80vh;
  overflow-x: hidden;
  overflow-y: auto;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: ${mobileSize}px) {
    grid-template-columns: 1fr;
  }
`;

export const ResidentsCardContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${mobileSize}px) {
    flex-direction: row;
  }
`;

export const ResidentsImg = styled.img`
  width: 150px;
  height: 152px;
  background-color: white;
  border-radius: 50%;
  @media (max-width: ${mobileSize}px) {
    width: 74px;
    height: 74px;
  }
`;

export const ResidentsName = styled.h1`
  text-align: center;
  margin: 1px;
  color: ${(props) => (props.state === "light" ? "black" : "white")};
  font-family: sans-serif;
  @media (max-width: ${mobileSize}px) {
    font-size: 15px;
    width: 151px;
    text-align: start;
  }
`;

export const ResidentsBody = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;
export const ResidentsStatus = styled.h3`
  text-align: center;
  font-family: sans-serif;
  margin: 1px;
  color: ${(props) =>
    props.variant === "Alive"
      ? "rgba(67, 208, 73, 1)"
      : "rgba(235, 87, 87, 1)"};
  @media (max-width: ${mobileSize}px) {
    font-size: 10px;
    text-align: start;
  }
`;

export const ResidentsTitle = styled.h1`
  position: sticky;
  top: 0;
  left: 10px;
  margin: 1px;
  color: ${(props) => (props.state === "light" ? "black" : "white")};
  font-family: sans-serif;
  @media (max-width: ${mobileSize}px) {
    font-size: 24px;
    width: 151px;
  }
`;

export const ResidentInfo = styled.h4`
  text-align: center;
  font-size: 25px;
  color: rgba(110, 121, 140, 1);
  font-family: sans-serif;
  margin: 1px;
  @media (max-width: ${mobileSize}px) {
    text-align: start;
    font-size: ${(props) => props.size || "24px"};
    width: $ ${(props) => props.width || "100vw"};
  }
`;
