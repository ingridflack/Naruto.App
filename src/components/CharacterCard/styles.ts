import styled, { css } from "styled-components";

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
    position: relative;
    height: 100%;

    padding: 2rem 1rem 1rem;
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
    flex-shrink: 0;

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

export const Popover = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.small};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.background};
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
    font-size: 11px;
    pointer-events: none;

    /* display: none; */
    opacity: 0;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    transition: opacity 300ms ease;

    &::before {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: 5px solid transparent;
      border-top-color: ${theme.colors.primary};
    }
  `}
`;

export const Button = styled.button`
  border: none;
  padding: 0.5rem;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.3);
  }

  &:hover {
    ${Popover} {
      opacity: 1;
    }
  }
`;
