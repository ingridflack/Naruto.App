import { Clan, Village } from "../../pages";

import { Container, Label, Select } from "./styles";

interface FilterProps {
  data: Clan[] | Village[];
  labelText: string;
}

const Filter = ({ data, labelText }: FilterProps) => {
  return (
    <Container>
      <Label htmlFor={labelText}>Filter by {labelText}</Label>
      <Select id={labelText}>
        <option>Choose a {labelText}</option>

        {data.map((option) => (
          <option key={option.name}>{option.name}</option>
        ))}
      </Select>
    </Container>
  );
};

export default Filter;
