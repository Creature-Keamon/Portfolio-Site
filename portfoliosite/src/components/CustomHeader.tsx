import Button from "./Button";

interface Props {
  text: string;
  subheader: string;
  font: string;
  textColor: string;
  relevantLinks: string[];
}

function CustomHeader({
  text,
  subheader = "",
  font,
  textColor,
  relevantLinks,
}: Props) {
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
      {relevantLinks?.length > 0 && (
        <div className="external-buttons">
          {relevantLinks.map((item: string) => (
            <Button colour="secondary">{item}</Button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomHeader;
