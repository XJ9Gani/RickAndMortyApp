import styled from "styled-components";
const mobileSize = 768;
export const EpisodeContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  flex-direction: column;
  width: 80%;
  max-height: 100vh;
  margin: auto;
  margin-top: 50px;
  overflow-x: hidden;

  overflow-y: auto;
  @media (max-width: ${mobileSize}px) {
    grid-template-columns: 1fr;
  }
`;

export const EpisodesCardContainer = styled.div`
  width: 200px;
  height: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${mobileSize}px) {
    flex-direction: row;
    height: 100px;
  }
`;

export const EpisodesImg = styled.img`
  width: 150px;
  height: 152px;
  background-color: white;
  object-fit: cover;
  border-radius: 10px;
  @media (max-width: ${mobileSize}px) {
    width: 74px;
    height: 74px;
  }
`;

export const EpisodesBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const EpisodesCount = styled.h3`
  width: 40vw;
  text-align: center;
  font-family: sans-serif;
  color: rgba(235, 87, 87, 1);
  @media (max-width: ${mobileSize}px) {
    font-size: 12px;
  }
`;

export const EpisodesName = styled.h1`
  margin: 1px;
  color: white;
  text-align: center;
  font-family: sans-serif;
  @media (max-width: ${mobileSize}px) {
    font-size: 18px;
    width: 151px;
  }
`;
