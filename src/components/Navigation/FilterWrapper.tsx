import FilterButton from "./NavigatableFilterButton";
import Filters from "../../data/FiltersList";

interface Props {
  filterItem: (filter: string) => void;
}

export default function FilterWrapper({ filterItem }: Props) {
  return (
    <div className="text filter-container">
      <h3 className="filter-header text header-text">FILTERS</h3>
      <div className="filter-wrapper ">
        {Filters.map((item, index) => (
          <FilterButton onClick={() => filterItem(item)} key={index}>
            {item}
          </FilterButton>
        ))}
      </div>

    </div>
  );
}
