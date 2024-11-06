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
  }
`;

export const CharacterPageIconStyle = styled.span`
  @media (max-width: 768px) {
    padding: 5px;
    border-radius: 50%;
    position: absolute;
    top: -75px;
    left: 95%;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

export const SimpleIcon = styled.span``;
