interface Props {
  children: string;
  onClick?: () => void;
}

function FilterButton({ children, onClick }: Props) {
  return (
    <button
      type="button"
      className={"filter-button project-page-filter-button " + (onClick != null ? " project-page-clickable" : " ")}

      {...(onClick != null && { onClick: onClick })}
    >
      {children}
    </button>
  );
}

export default FilterButton;
