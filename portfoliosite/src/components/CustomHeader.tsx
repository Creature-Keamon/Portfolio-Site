import Button from "./Button";

interface Props {
  text: string;
  subheader: string;
  font: string;
  textColor: string;
  buttonLinks: string[];
  buttonImages: string[];
  buttonText: string[];
}

function CustomHeader({
  text,
  subheader = "",
  font,
  textColor,
  buttonLinks,
  buttonText,
  buttonImages,
}: Props) {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
