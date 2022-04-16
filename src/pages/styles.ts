import styled, { css } from "styled-components";

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

interface CharactersWrapperProps {
  isFlex?: boolean;
}

export const CharactersWrapper = styled.div<CharactersWrapperProps>`
  ${({ isFlex }) => css`
    display: ${isFlex ? "flex" : "grid"};
  `}

  grid-template-columns: repeat(auto-fill, minmax(200px, 200px));
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const PaginationContainer = styled.div`
  .pagination {
    font-size: 14px;
    color: #000;
    margin: 35px auto;
    display: flex;
    list-style: none;
    outline: none;
    width: 100%;
    justify-content: center;
  }

  .pagination > .active > a {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .pagination > li > a {
    border: none;
    display: block;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
    border: 1px solid transparent;
    margin-right: 0.15rem;
  }

  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    border-radius: 6px;
    min-width: 32px;
    padding: 5px 10px;
    font-style: normal;
    line-height: 20px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
  }

  .pagination a:hover {
    background-color: rgba(255, 139, 56, 0.4);
    border-radius: 6px;

    padding: 5px 10px;
    font-style: normal;
    line-height: 20px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
  }

  .pagination > li > a,
  .pagination > li > span {
    color: ${({ theme }) => theme.colors.primary};
  }

  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
  }

  @media (max-width: 768px) {
    .pagination > li:not(.next):not(.previous) {
      display: none;
    }
  }
`;
