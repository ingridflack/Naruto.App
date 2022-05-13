import styled from "styled-components";

export const Title = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.silver};
  padding: 0.75rem 0;
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-bottom: 2rem;
`;
