interface Props {
  text: string;
  subheader: string;
}

function CustomHeader({ text, subheader = "" }: Props) {
  return (
    <div className="header-wrapper">
      <h1 className="custom-header text header-text">{text}</h1>;
      <h3 className="sub-header text header-text">{subheader}</h3>
    </div>
  );
}

export default CustomHeader;
