import styled from "styled-components";

export const ButtonFill = styled.button`
  width: 100%;
  display: block;
  padding: 8px 42px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  outline: none;
`;

export const ButtonUnFill = styled.button`
  width: 100%;
  display: block;
  padding: 8px 42px;
  color: var(--color-primary);
  background-color: var(--color-white);
  border: 1px solid var(--color-primary);
  outline: none;
`;
