interface Props {
  text: string;
  subheader?: string;
  font?: string;
  textColor?: string;
}

function CustomHeader({ text, subheader = "", font, textColor }: Props) {
  return (
    <div className="header-wrapper">
      <div className="header-grid">
        <div className="header-grid-item">
          <h3
            className="sub-header text header-text"
            style={{ fontFamily: font, color: textColor }}
          >
            {subheader}
          </h3>
        </div>

        <h1
          className="custom-header text header-text"
          style={{ fontFamily: font, color: textColor }}
        >
          {text}
        </h1>
      </div>
    </div>
  );
}

export default CustomHeader;
