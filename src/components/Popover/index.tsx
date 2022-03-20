import { HTMLAttributes } from "react";
import { Container, Text } from "./styles";

interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

const Popover = ({ text, ...props }: PopoverProps) => {
  return (
    <Container {...props}>
      <Text>{text}</Text>
    </Container>
  );
};

export default Popover;
