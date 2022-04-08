import styled from "styled-components";

export const ProductsContainer = styled.div``;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr auto;
  column-gap: 1.5rem;
  & .cardImage img {
    width: 100%;
    object-fit: cover;
  }
  & .pricesScore {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  & .cardActions {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    row-gap: 1.5rem;
  }
`;
