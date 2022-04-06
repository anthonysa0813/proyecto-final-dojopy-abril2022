import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding-block: 24px;
  & .menu {
    column-gap: 3rem;
    display: flex;
    align-items: center;
    padding-inline-end: 3rem;
    & ul {
      display: flex;
      column-gap: 3rem;
      & li {
        list-style-type: none;
      }
    }
  }
  & .headerMenu {
    display: flex;
  }
  & form {
    width: 100%;
    display: flex;
    align-items: center;
  }
  & input {
    width: 90%;
    padding: 0.5rem;
  }
  & button {
    padding: 10px 15px;
    border: none;
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`;
