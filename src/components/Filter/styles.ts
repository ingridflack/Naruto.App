import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const Select = styled.select`
  padding: 0.4rem;
  text-transform: capitalize;
  width: 200px;
`;
