import Button from "./Button";

interface Props {
  text: string;
  subheader: string;
  font: string;
  textColor: string;
}

function CustomHeader({ text, subheader = "", font, textColor }: Props) {
  return (
    <div className="header-wrapper">
      <h1
        className="custom-header text header-text"
        style={{ fontFamily: font, color: textColor }}
      >
        {text}
      </h1>
      <h3
        className="sub-header text header-text"
        style={{ fontFamily: font, color: textColor }}
      >
        {subheader}
      </h3>
      <Button></Button>
    </div>
  );
}

export default CustomHeader;
