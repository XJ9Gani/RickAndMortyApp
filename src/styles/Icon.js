import styled from "styled-components";
export const HeaderStyleIconStyle = styled.span`
  @media (max-width: 768px) {
    margin: auto;
    border: 1px solid white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 10px;
    margin-bottom: 15px;
    background-color: ${(props) =>
      props.variant === "active" ? "red" : "white"};
  }
  @media (min-width: 769px) {
    margin: auto;
    border: 1px solid white;
  }
`;

export const CharacterPageIconStyle = styled.span`
  @media (max-width: 768px) {
    position: absolute;
    top: 0%;
    left: 80%;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;
