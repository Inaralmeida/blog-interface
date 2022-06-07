import styled from "styled-components";
import { DefaultTheme } from "../../Style/Theme";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 300px;
  height: 70%;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${DefaultTheme.gray};
  border-radius: 15px;
  > h2 {
    color: ${DefaultTheme.primary};
    font-weight: bold;
  }
  > fieldset {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    border: none;

    > label {
      text-transform: uppercase;
    }
    > label::after {
      content: ":";
    }
    > input {
      width: 100%;
      height: 35px;
      font-size: 1.3rem;
      padding-left: 5px;
    }
  }

  > button {
    width: 80%;
    height: 40px;
    background-color: ${DefaultTheme.primary};
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
`;
