import styled from "styled-components";

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.gray.platinum};
`;

export const HeaderWrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: max-content;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.background};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.3s ease;

  svg {
    margin-right: 0.25rem;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;

  .character-info {
    display: flex;
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSize.medium};
    ${({ theme }) => theme.colors.gray.silver};
    margin: 0.5rem 0;
  }
`;

export const Content = styled.div`
  h4,
  .text {
    line-height: 1.5rem;
  }
  h4 {
    font-size: 18px;
  }
  p {
    margin-bottom: 1rem;
  }
`;
