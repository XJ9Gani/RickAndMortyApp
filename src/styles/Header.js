import styled from "styled-components";
const bgCol = "background-color";

export const HeaderStyle = styled.header`
  margin: 0;
  padding: 10px;
  background-color: ${(props) =>
    props.variant === "dark" ? "rgba(21, 42, 58, 1)" : "white"};
  color: white;
  text-aling: center;
  @media (max-width: 768px) {
    margin-top: 100px;
    position: fixed;
    bottom: 0;
    height: 60px;
  }

  @media (min-width: 769px) {
    position: sticky;
    top: 0;
    height: 10vh;
  }
`;

export const NavContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 5px;
    justify-content: center;
  }
`;
export const NavItem = styled.span`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  aling-items: center;
  margin: auto;
  @media (max-width: 768px) {
    font-size: 12px;
    width: 88px;
    height: 40px;
  }

  @media (min-width: 769px) {
    font-size: 25px;
  }
`;

export const IconStyle = styled.span`
  @media (max-width: 768px) {
    margin: auto;
    border: 1px solid white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 10px;
    margin-bottom: 10px;
    background-color: ${(props) =>
      props.variant === "active" ? "red" : "white"};
  }
  @media (min-width: 769px) {
    margin: auto;
    border: 1px solid white;
  }
`;
