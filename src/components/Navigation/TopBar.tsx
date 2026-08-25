import { useNavigate } from "react-router-dom";
import Button from "./NavigatableButton";

interface Props {
  buttonLinks?: string[];
  buttonImages?: string[];
  buttonText?: string[];
  pageName?: string;
  font?: string;
}

const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

function TopBar({
  buttonLinks = [],
  buttonText = [],
  buttonImages = [],
  pageName = "",
  font,
}: Props) {
  let nav = useNavigate();
  return (
    <div className="top-bar-wrapper">
      <div className="return-button-wrapper">
        <div className="internal-button">

          <Button onClick={() => nav("/")}>Home</Button>
        </div>
        {!["Projects", "About", "Contact"].includes(pageName) && (
          <div className="internal-button">
            <Button onClick={() => nav("/Projects")}>
              Return to Projects
            </Button>
          </div>
        )}
        {pageName === "Contact" && (
          <div className="internal-button">
            <Button
              onClick={() =>
                openLink("https://www.linkedin.com/in/shawn-neal-621028319/")
              }
              colour="secondary"
              imageFile="linkedinlogo"
            >
              LinkedIn
            </Button>
          </div>
        )}

        {buttonLinks.map((link, i) => (
          <div className={"external-button"} key={"external-button-" + i}>
            <Button
              colour="secondary"
              key={i}
              onClick={() => openLink(link)}
              imageFile={buttonImages[i]}
              font={font}
            >
              {buttonText[i]}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBar;
