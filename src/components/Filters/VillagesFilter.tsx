import { Villages } from "../../pages";

const VillagesFilter = ({ villages }: Villages) => {
  return (
    <div>
      <select>
        <option>Choose a village</option>

        {villages.map((option) => (
          <option key={option._id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default VillagesFilter;
