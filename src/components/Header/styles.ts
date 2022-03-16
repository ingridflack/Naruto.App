import styled, { css } from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.gray.dark};

  .input-wrapper {
    position: relative;
    width: 400px;

    svg {
      position: absolute;
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
      color: ${({ theme }) => theme.colors.gray.silver};
      font-size: ${({ theme }) => theme.fontSize.normal};
    }
  }
`;

export const Input = styled.input`
  border-radius: 1rem;
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
  border: 2px solid transparent;
  outline: none;
  transition: border 0.3s ease;

  width: 100%;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Menu = styled.nav`
  width: 200px;
  a {
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.fontSize.medium};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  a + a {
    margin-left: 1rem;
  }
`;
