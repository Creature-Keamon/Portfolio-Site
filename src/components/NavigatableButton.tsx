import githublogo from "../assets/githublogo.svg";
import youtubelogo from "../assets/youtubelogo.svg";
import itchiologo from "../assets/itchiologo.svg";
import link from "../assets/link.svg";
import linkedinlogo from "../assets/linkedinlogo.svg";

interface Props {
  children: React.ReactNode;
  colour?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
  imageFile?: string;
  font?: string;
}

function Button({
  font,
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
      {colour === "secondary" ? (
        <div className="button-grid-wrapper">
          <div className="button-grid-item">
            {imageFile === "githublogo" && (
              <img className="button-image" src={githublogo}></img>
            )}
            {imageFile === "youtubelogo" && (
              <img className="button-image" src={youtubelogo}></img>
            )}
            {imageFile === "itchiologo" && (
              <img className="button-image" src={itchiologo}></img>
            )}
            {imageFile === "link" && (
              <img className="button-image" src={link}></img>
            )}
            {imageFile === "linkedinlogo" && (
              <img className="button-image" src={linkedinlogo}></img>
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
