import Button from "./Button";

interface Props {
  Navigate: (item: string) => void;
}

function TopBar({ Navigate }: Props) {
  return (
    <div className="top-bar-wrapper">
      <div className="return-button-wrapper">
        <Button onClick={() => Navigate("Home")}>Open</Button>
      </div>
    </div>
  );
}

export default TopBar;
