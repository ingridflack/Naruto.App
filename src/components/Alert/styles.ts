import styled from "styled-components";

export const Container = styled.div`
  border-radius: 1rem;
  background-color: #f7b804;
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.medium};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 0.25rem;
  }
`;
