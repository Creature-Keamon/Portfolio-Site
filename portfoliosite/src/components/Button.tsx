import githublogo from "../assets/githublogo.svg";
import youtubelogo from "../assets/youtubelogo.svg";

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
    <div className="single-button">
      <button
        type="button"
        className={"btn btn-" + colour}
        //style="--btn-border-width: .25rm;"
        onClick={onClick}
      >
        <div className="button-grid-wrapper">
          <div className="button-grid-item">
            {imageFile === "githublogo" && (
              <img className="button-image" src={githublogo}></img>
            )}
            {imageFile === "youtubelogo" && (
              <img className="button-image" src={youtubelogo}></img>
            )}
          </div>
          <div className="button-grid-item button-text">{children}</div>
        </div>
      </button>
    </div>
  );
}

export default Button;
