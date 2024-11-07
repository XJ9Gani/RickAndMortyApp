import styled from "styled-components";
const mobileSize = 768;

export const ButtonContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
  bottom: 2%;
  @media (max-width: ${mobileSize}px) {
    bottom: 10%;
  }
`;

export const Button = styled.button`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 2px solid rgb(22, 29, 44);
  background-color: rgb(35, 50, 82);
  color: white;
  font-size: 24px;
  @media (max-width: ${mobileSize}px) {
    width: 50px;
    height: 50px;
  }
`;

export const ChangeThemeButton = styled.button`
  position: fixed;
  z-index: 3;
  top: 15%;
  left: 5%;
  border: 5px solid black;
  background-color: gray;
  width: 100px;
  height: 50px;
  border-radius: 50px;
  @media (max-width: ${mobileSize}px) {
    top: 5%;
  }
`;
