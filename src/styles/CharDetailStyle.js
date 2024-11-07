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
  border: 5px solid rgba(11, 30, 45, 1);
  position: relative;
  z-index: 0;
  min-height: 100vh;
`;
export const CharacterImg = styled.img`
  display: block;
  margin: auto;
  transform: translateY(-40%);
  border-radius: 50%;
  border: 10px solid rgba(11, 30, 45, 1);
  @media (max-width: ${mobileSize}px) {
    width: 166px;
    height: 166px;
  }
`;
export const CharacterName = styled.h1`
  margin: 0;
  text-align: center;
  font-family: Roboto;
  font-size: 34px;
  font-weight: 400;
  line-height: 40px;
  color: white;
`;
export const CharacterStatus = styled.h3`
  text-align: center;
  font-family: Roboto;
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
  font-weight: 400;
  font-size: 30px;
  color: rgba(255, 255, 255, 1);
  font-family: sans-serif;
  @media (max-width: ${mobileSize}px) {
    font-size: 13px;
  }
`;
export const CharacterInfoText = styled.h2`
  color: rgba(255, 255, 255, 1);
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
