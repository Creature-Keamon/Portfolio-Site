import FilterButton from "./FilterButton";
import Filters from "../assets/data/FiltersList";

interface Props {
  filterItem: (filter: string) => void;
}

export default function FilterWrapper({ filterItem }: Props) {
  return (
    <div className="filter-wrapper text">
      <h3 className="filter-header text header-text">FILTERS</h3>
      {Filters.map((item, index) => (
        <FilterButton onClick={() => filterItem(item)} key={index}>
          {item}
        </FilterButton>
      ))}
    </div>
  );
}
