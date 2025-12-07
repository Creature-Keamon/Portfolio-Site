import Button from "./Button";

interface Props {
  Navigate: (item: string) => void;
  buttonLinks?: string[];
  buttonImages?: string[];
  buttonText?: string[];
}

const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

function TopBar({
  Navigate,
  buttonLinks = [],
  buttonText = [],
  buttonImages = [],
}: Props) {
  return (
    <div className="top-bar-wrapper">
      <div className="return-button-wrapper">
        <div className="internal-button">
          <Button onClick={() => Navigate("Home")}>Open</Button>
        </div>
        <div className="internal-button">
          <Button onClick={() => Navigate("Projects")}>
            Return to Projects
          </Button>
        </div>

        {buttonLinks.map((link: string, i: number) => (
          <div className="external-button">
            <Button
              colour="secondary"
              key={i}
              onClick={() => openLink(link)}
              imageFile={buttonImages[i]}
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
