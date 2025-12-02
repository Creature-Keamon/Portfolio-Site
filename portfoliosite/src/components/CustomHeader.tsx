import Button from "./Button";

interface Props {
  text: string;
  subheader?: string;
  font?: string;
  textColor?: string;
  buttonLinks: string[];
  buttonImages?: string[];
  buttonText?: string[];
}

function CustomHeader({
  text,
  subheader = "",
  font,
  textColor,
  buttonLinks = [],
  buttonText = [],
  buttonImages = [],
}: Props) {
  return (
    <div className="header-wrapper">
      <div className="header-grid">
        <h3
          className="sub-header text header-text"
          style={{ fontFamily: font, color: textColor }}
        >
          {subheader}
        </h3>
        <h1
          className="custom-header text header-text"
          style={{ fontFamily: font, color: textColor }}
        >
          {text}
        </h1>
      </div>

      {buttonLinks?.length > 0 && (
        <div className="external-buttons">
          {buttonLinks.map((link: string, i: number) => (
            <Button
              colour="secondary"
              key={i}
              onClick={() => openLink(link)}
              imageFile={buttonImages[i]}
            >
              {buttonText[i]}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomHeader;
