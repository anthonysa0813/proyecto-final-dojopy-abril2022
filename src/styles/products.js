import styled from "styled-components";

export const ProductsContainer = styled.div``;

export const Card = styled.div`
  display: grid;
  margin-top: 1rem;
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

export const ItemContainer = styled.div`
  & .ItemContent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  & .picturesGrid {
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-template-rows: repeat(3, 150px);
    gap: 0.5rem;
  }
  & .picturesGrid figure:nth-child(1) {
    grid-column: 1/2;
    grid-row: 1/2;
    border: 3px solid brown;
  }
  & .picturesGrid figure:nth-child(2) {
    grid-row: 2/3;
  }
  & .picturesGrid figure:nth-child(3) {
    grid-row: 3/-1;
  }
  & .picturesGrid figure:last-of-type {
    grid-column-start: 2;
    grid-column-end: -1;
    grid-row-start: 1;
    grid-row-end: -1;
  }
`;
