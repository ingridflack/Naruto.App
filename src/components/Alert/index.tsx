import { ReactNode } from "react";
import { FiAlertTriangle } from "react-icons/fi";

import { Container } from "./styles";

interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return (
    <Container>
      <FiAlertTriangle />
      {children}
    </Container>
  );
};

export default Alert;
