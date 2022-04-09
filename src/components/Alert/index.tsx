import { ReactNode } from "react";
import { Container } from "./styles";
import { FiAlertTriangle } from "react-icons/fi";

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
