interface Props {
  children: string;

  onClick: () => void;
}

function FilterButton({ children, onClick }: Props) {
  return (
    <button
      type="button"
      className={"btn btn-success"}
      //style="--btn-border-width: .25rm;"
      {...(onClick != null && { onClick: onClick })}
    >
      {children}
    </button>
  );
}

export default FilterButton;
