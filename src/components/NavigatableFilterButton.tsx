interface Props {
  children: string;
  onClick: () => void;
}

function FilterButton({ children, onClick }: Props) {
  return (
    <button
      type="button"
      className={"btn btn-outline-secondary filter-button"}

      {...(onClick != null && { onClick: onClick })}
    >
      {children}
    </button>
  );
}

export default FilterButton;
