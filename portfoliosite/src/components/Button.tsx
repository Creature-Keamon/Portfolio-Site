interface Props {
  children: React.ReactNode;
  colour?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
  imageFile: string;
}

function Button({
  children,
  onClick = () => {},
  colour = "primary",
  imageFile,
}: Props) {
  return (
    <button
      type="button"
      className={"btn btn-" + colour}
      //style="--btn-border-width: .25rm;"
      onClick={onClick}
    >
      <img src={imageFile} />
      {children}
    </button>
  );
}

export default Button;
