import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-radius: 0.5rem;

    height: 253px;
    padding: 1rem;
    border: 1px solid transparent;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      border-color: ${theme.colors.primary};
      box-shadow: rgba(149, 157, 165, 0) 0px 8px 24px;
      cursor: pointer;

      .image-effect {
        opacity: 1;
      }
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    border-radius: 50%;
    display: flex;
    overflow: hidden;
    position: relative;

    .image-effect {
      background-color: rgba(255, 139, 56, 0.8);
      color: ${theme.colors.background};
      display: flex;
      font-size: ${theme.fontSize.medium};

      align-items: center;
      justify-content: center;
      opacity: 0;
      left: 0;
      top: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      transition: opacity 0.3s ease;

      svg {
        margin-right: 0.25rem;
      }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    margin-top: 0.5rem;

    .character-name {
      text-align: center;
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
