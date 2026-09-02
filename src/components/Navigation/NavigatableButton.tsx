import githublogo from "../../assets/githublogo.svg";
import youtubelogo from "../../assets/youtubelogo.svg";
import itchiologo from "../../assets/itchiologo.svg";
import link from "../../assets/link.svg";
import linkedinlogo from "../../assets/linkedinlogo.svg";

interface Props {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
  imageFile?: string;
  font?: string;
  tags?: string;
  buttonColour?: string;
  textColour?: string;
}

function Button({
  font,
  children,
  onClick = () => { },
  type = "primary",
  imageFile,
  tags,
  buttonColour,
  textColour,
}: Props) {
  return (
    <button
      type="button"
      className={"filter-button " + tags}
      onClick={onClick}
      style={{color:textColour, backgroundColor: buttonColour}}
    >
      {type === "secondary" ? (
        <div className="button-grid-wrapper">
          <div className="button-grid-item">
            {imageFile === "githublogo" && (
              <img className="button-image" src={githublogo} />
            )}
            {imageFile === "youtubelogo" && (
              <img className="button-image" src={youtubelogo} />
            )}
            {imageFile === "itchiologo" && (
              <img className="button-image" src={itchiologo} />
            )}
            {imageFile === "link" && (
              <img className="button-image" src={link} />
            )}
            {imageFile === "linkedinlogo" && (
              <img className="button-image" src={linkedinlogo} />
            )}
          </div>
          <div className="button-grid-item button-text">{children}</div>
        </div>
      ) : (
        <div className="button-text" style={{ fontFamily: font }}>
          {children}
        </div>
      )}
    </button>
  );
}

export default Button;
