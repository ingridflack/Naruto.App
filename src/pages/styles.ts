import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > main {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    flex: 1;
  }
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
