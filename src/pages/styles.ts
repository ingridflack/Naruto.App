import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1020px;
  padding: 2rem;
  width: 100%;
`;

export const FiltersContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;

  div + div {
    margin-left: 1rem;
  }
`;

export const CharactersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 200px));
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
