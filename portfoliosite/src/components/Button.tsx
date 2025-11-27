interface Props {
  children: React.ReactNode;
  colour?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
}

function Button({ children, onClick = () => {}, colour = "primary" }: Props) {
  return (
    <button
      type="button"
      className={"btn btn-" + colour}
      //style="--btn-border-width: .25rm;"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
