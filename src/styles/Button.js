import styled from "styled-components";
const mobileSize = 768;

export const ButtonContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
  bottom: 2%;
  @media (max-width: ${mobileSize}px) {
    bottom: 10%;
  }
`;

export const Button = styled.button`
  border-radius: 10px;
  width: 70px;
  height: 70px;
  border: 2px solid rgb(22, 29, 44);
  box-shadow: 0 0 6px 1px black inset;
  border: 2px solid
    ${(props) => (props.state === "light" ? "black" : "rgba(21, 42, 58, 0.4)")};
  background-color: ${(props) =>
    props.state === "light" ? "white" : "rgba(110, 121, 140, 1)"};
  font-size: 24px;
  @media (max-width: ${mobileSize}px) {
    width: 50px;
    height: 40px;
  }
`;

export const ChangeThemeButton = styled.button`
  position: fixed;
  z-index: 3;
  top: 15%;
  left: 1%;
  box-shadow: 0 0 6px 1px black inset;
  transition: 0.2s;
  border: 2px solid
    ${(props) => (props.state === "light" ? "black" : "rgba(21, 42, 58, 0.4)")};
  background-color: ${(props) =>
    props.state === "light" ? "white" : "rgba(110, 121, 140, 1)"};
  width: 100px;
  height: 50px;
  border-radius: 10px;
  @media (max-width: ${mobileSize}px) {
    top: 1%;
    left: 1%;
    width: 50px;
  }
`;
