import styled from "styled-components";

export const LoginContainer = styled.form`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & form {
    border-radius: 1rem;
    background-color: var(--color-white);
    padding: 3rem;
    & .field {
      margin-top: 1rem;
    }
    & input {
      width: 100%;
      padding: 1rem;
      border-radius: 0.5rem;
      outline: none;
      border: none;
      border-bottom: 1px solid #e1e1e1;
    }
    & .field-button {
      display: flex;
      justify-content: center;
    }
    & .btn-primary {
      width: 50%;
      margin-top: 1rem;
      padding: 1rem;
      outline: none;
      border: none;
      border-radius: 0.5rem;

      color: white;
      background-color: #2e6cf0;
    }
  }
`;
