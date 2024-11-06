import styled from "styled-components";
const mobileSize = 768;

export const FormContainer = styled.form`
  display: flex;
`;
export const SearchInput = styled.input`
  width: 60%;
  height: 50px;
  display: block;
  margin: auto;
  margin-bottom: 1%;
  border-radius: 50px;
  border: none;
  font-size: 30px;
  font-family: sans-serif;
  color: rgba(91, 105, 117, 1);
  background-color: rgba(21, 42, 58, 1);
  padding: 10px;
  @media (max-width: ${mobileSize}px) {
    width: 70%;
    font-size: 16px;
    height: 48px;
  }
`;
