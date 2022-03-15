import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-radius: 0.5rem;

    width: 200px;
    padding: 1rem;
    border: 1px solid transparent;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: border-color 0.2s ease-out, box-shadow 0.2s ease-out;

    &:hover {
      border-color: ${theme.colors.primary};
      box-shadow: rgba(149, 157, 165, 0) 0px 8px 24px;
      cursor: pointer;
    }
  `}
`;

export const ImageContainer = styled.div`
  border-radius: 50%;
  display: flex;
  overflow: hidden;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    margin-top: 0.5rem;

    .character-name {
      svg {
        margin-right: 0.25rem;
      }
    }

    .village {
      text-transform: capitalize;
      color: ${theme.colors.gray.silver};
      font-size: ${theme.fontSize.medium};
      margin: 0.25rem 0;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 0.25rem;
      }
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${theme.fontSize.small};
    margin-top: 0.5rem;
    transition: filter 0.2s;
    color: ${theme.colors.primary};

    &:hover {
      filter: brightness(0.8);
    }

    svg {
      margin-right: 0.25rem;
    }
  `}
`;
