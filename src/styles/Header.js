import styled from "styled-components";

const mobileSize = 768;
export const HeaderStyle = styled.header`
  margin: 0;
  transition: 0.4s;
  padding: 10px;
  z-index: 2;
  background-color: ${(props) =>
    props.state === "light" ? "white" : "rgba(21, 42, 58, 1)"};
  color: white;
  box-shadow: 0 0 10px 1px #1a1a1a;
  text-aling: center;
  @media (max-width: ${mobileSize}px) {
    width: 100%;
    margin-top: 100px;
    position: fixed;
    bottom: 0;
    heiht: 60px;
  }

  @media (min-width: 769px) {
    position: sticky;
    top: 0;
    height: 10vh;
  }
`;

export const NavContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 5px;
    justify-content: center;
    margin: 0;
  }
`;
export const NavItem = styled.span`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  aling-items: center;
  margin: auto;
  @media (max-width: ${mobileSize}px) {
    font-size: 12px;
    width: 88px;
    height: 40px;
  }

  @media (min-width: 769px) {
    font-size: 25px;
  }
`;
