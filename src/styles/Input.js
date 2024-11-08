import styled from "styled-components";
const mobileSize = 768;

export const FormContainer = styled.form`
  display: flex;
`;
export const SearchInput = styled.input`
  box-shadow: 0 0 6px 1px black inset;
  width: 60%;
  height: 50px;
  display: block;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 1%;
  border-radius: 50px;
  border: 1px solid black;
  font-size: 20px;
  font-family: sans-serif;
  color: rgba(91, 105, 117, 1);
  background-color: ${(props) =>
    props.state === "light"
      ? "rgba(242, 242, 242, 1)"
      : " rgba(21, 42, 58, 1)"};
  padding: 10px;
  box-shadow: @media (max-width: ${mobileSize}px) {
    width: 60%;
    height: 50px;
    font-size: 16px;
    height: 48px;
  }

  &:focus {
    font-size: 20px;
    text-align: center;
    margin: 0;
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 0;
    transition: 0.3s;
  }
`;
