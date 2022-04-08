import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding-block: 24px;
  position: sticky;
  top: 0;
  background-color: var(--color-white);
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
  & .icon-shopping-cart {
    position: relative;
  }
  & .cartCircle {
    position: absolute;
    top: -10px;
    right: -10px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fb2448;
    color: white;
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 2px;
    width: 12px;
    height: 12px;
  }
`;
