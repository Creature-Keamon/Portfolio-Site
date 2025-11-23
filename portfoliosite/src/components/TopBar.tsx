import Button from "./Button";

function TopBar() {
  return (
    <div className="top-bar-wrapper">
      <div className="return-button-wrapper">
        <Button onClick={() => console.log("Return Button Clickded")}>
          Open
        </Button>
      </div>
    </div>
  );
}

export default TopBar;
