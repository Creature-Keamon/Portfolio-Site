import React from "react";
import youtubelogo from "../assets/youtubelogo.svg?react";
import githublogo from "../assets/githublogo.svg?react";

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
  const iconArray = [youtubelogo, githublogo];
  const icon = iconArray.find(function (element) {
    return element === imageFile;
  });
  return (
    <div className="single-button">
      <button
        type="button"
        className={"btn btn-" + colour}
        //style="--btn-border-width: .25rm;"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
