import styled, { css } from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.gray.dark};
`;

export const Input = styled.input`
  border-radius: 1.5rem;
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
  border: 2px solid transparent;
  outline: none;
  transition: border 0.3s ease;

  width: 100%;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Navbar = styled.div`
  position: relative;
`;

export const ToggleMenuButton = styled.button`
  border: none;
  color: #fff;
  padding: 10px;

  @media (min-width: 992px) {
    display: none;
  }
`;

interface IMenu {
  show?: boolean;
}

export const Menu = styled.nav<IMenu>`
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

  @media (max-width: 991px) {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: ${({ theme }) => theme.colors.background};
    display: ${({ show }) => (show ? "flex" : "none")};
    padding: 10px;
    flex-direction: column;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);

    a {
      padding: 10px;
      min-width: 100px;
      color: ${({ theme }) => theme.colors.gray.dark};
    }

    a + a {
      margin-left: 0;
    }
  }

  @media (min-width: 992px) {
    display: flex;
  }
`;

export const HeaderWrapper = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */

  display: grid;
  align-items: flex-end;
  grid-template-areas: "logo navbar" "input input";
  row-gap: 20px;

  @media (min-width: 569px) {
    align-items: center;
    grid-template-areas: "logo input navbar";
  }

  ${Navbar} {
    grid-area: navbar;
    justify-self: flex-end;
  }

  .image-wrapper {
    cursor: pointer;
    grid-area: logo;
  }

  .input-wrapper {
    grid-area: input;
    position: relative;

    @media (min-width: 569px) {
      max-width: 400px;
    }

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
