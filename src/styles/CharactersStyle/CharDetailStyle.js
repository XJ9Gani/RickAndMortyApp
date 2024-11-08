import styled from "styled-components";
const mobileSize = 768;
export const BlurredPick = styled.div`
  height: 40vh;

  background-image: url(${(props) => props.src});
  background-size: contain;
  opacity: 0.3;
  filter: blur(3px);
  @media (max-width: ${mobileSize}px) {
    height: 30vh;
    background-size: cover;
  }
`;

export const CharacterBody = styled.div`
  background-color: ${(props) =>
    props.state === "light" ? "white" : "rgba(11, 30, 45, 1)"};
  position: relative;
  z-index: 0;
  min-height: 100vh;
`;
export const CharacterImg = styled.img`
  display: block;
  margin: auto;
  transform: translateY(-40%);
  border-radius: 50%;
  border: 10px solid
    ${(props) => (props.state === "light" ? "white" : "rgba(11, 30, 45, 1)")};
  @media (max-width: ${mobileSize}px) {
    width: 166px;
    height: 166px;
  }
`;
export const CharacterName = styled.h1`
  margin: 0;
  text-align: center;
  font-family: sans-serif;
  font-size: 34px;
  font-weight: 400;
  transition: 0.4s;
  color: ${(props) => (props.state === "light" ? "black" : "white")};
`;
export const CharacterStatus = styled.h3`
  text-align: center;
  font-family: sans-serif;
  color: ${(props) =>
    props.variant === "Alive"
      ? "rgba(67, 208, 73, 1)"
      : "rgba(235, 87, 87, 1)"};
  @media (max-width: ${mobileSize}px) {
    font-size: 24px;
  }
`;

export const CharacterInfo = styled.div`
  height: 40vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: ${mobileSize}px) {
    flex-direction: column;
    justify-content: start;
  }
`;
export const CharacterDecription = styled.h2`
  color: ${(props) => (props.state === "light" ? "black" : "white")};
  font-weight: 400;
  font-size: 30px;
  font-family: sans-serif;
  @media (max-width: ${mobileSize}px) {
    font-size: 13px;
  }
`;
export const CharacterInfoText = styled.h2`
  color: ${(props) => (props.state === "light" ? "black" : "white")};

  font-family: sans-serif;
`;
export const CharacterInfoSubText = styled.span`
  display: block;
  font-family: sans-serif;
  color: rgba(91, 105, 117, 1);
  font-weight: 400;
  @media (max-width: ${mobileSize}px) {
    font-size: 20px;
  }
`;

export const ActedEpisodContainer = styled.div`
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

export const ActedEpisodCardContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${mobileSize}px) {
    flex-direction: row;
  }
`;

export const ActedEpisodImg = styled.img`
  width: 150px;
  height: 152px;
  background-color: white;
  border-radius: 50%;
  @media (max-width: ${mobileSize}px) {
    width: 74px;
    height: 74px;
  }
`;

export const ActedEpisodName = styled.h1`
  margin: 1px;
  color: ${(props) => (props.state === "light" ? "black" : "white")};
  text-align: center;
  font-family: sans-serif;
  @media (max-width: ${mobileSize}px) {
    font-size: 18px;
    width: 151px;
  }
`;

export const ActedEpisodBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;
