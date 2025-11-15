import { Component } from "react";
import Button from "./Button";

export default class TopBar extends Component {
  render() {
    return (
      <div className="TopBar">
        <div className="ReturnButtonWrapper">
          <Button onClick={() => console.log("Return Button Clickded")}>
            Open
          </Button>
        </div>
      </div>
    );
  }
}
