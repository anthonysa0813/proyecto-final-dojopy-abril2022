import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.form`
  padding: 2rem;
  width: 500px;
  background-color: var(--color-white);
  & .headerLogin {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .field {
    margin-top: 1.5rem;
  }

  & input {
    width: 100%;
    padding: 1rem;
    border: none;
  }
`;
