import { Clans } from "../../pages";

const ClansFilter = ({ clans }: Clans) => {
  return (
    <div>
      <select>
        <option>Choose a clan</option>

        {clans.map((option) => (
          <option key={option.name}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default ClansFilter;
