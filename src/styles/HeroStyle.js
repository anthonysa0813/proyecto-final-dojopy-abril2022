import styled from "styled-components";

export const HeroComponent = styled.div`
  background-color: var(--background-hero);
  padding-block: 24px;
  & .headerContainer {
    display: flex;
    column-gap: 24px;
    color: var(--color-white);
    & h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 34.6016px;
      line-height: 126.5%;
    }
  }
  & a {
    color: var(--color-white);
  }
  & .firstProduct {
    flex: 1 0 50%;
    padding: 1rem;
    background: linear-gradient(105.15deg, #5465ff 0%, #b654ef 100%);
  }
  & .secondProduct {
    flex: 1 0 50%;
    padding: 1rem;
    background: linear-gradient(105.15deg, #4e5aff 0%, #5d8dff 100%);
  }
  & .firstProduct,
  .secondProduct {
    display: flex;
    align-items: center;
  }
`;
