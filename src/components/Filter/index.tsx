import { ChangeEvent, useState } from "react";
import { Filters, useFilter } from "../../contexts/filter";
import { Container, Label, Select } from "./styles";

interface FilterOption {
  _id: string;
  name: string;
}

interface FilterProps {
  data: FilterOption[];
  labelText: string;
}

const Filter = ({ data, labelText }: FilterProps) => {
  const [filterValue, setFilterValue] = useState("");

  const { setFilters } = useFilter();

  const handleFilterChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const filterValue = e.target.value;

    setFilterValue(filterValue);
    setFilters(
      (prev: Filters = { name: "", village: "", rank: "", page: 1 }) => ({
        ...prev,
        [labelText]: filterValue,
      })
    );
  };

  return (
    <Container>
      <Label htmlFor={labelText}>Filter by {labelText}</Label>
      <Select id={labelText} onChange={handleFilterChange} value={filterValue}>
        <option>Choose a {labelText}</option>

        {data.map((option) => (
          <option key={option._id}>{option.name}</option>
        ))}
      </Select>
    </Container>
  );
};

export default Filter;
