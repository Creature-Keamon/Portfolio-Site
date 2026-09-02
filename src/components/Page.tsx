import CustomHeader from "./Text/CustomHeader";
import type React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  font?: string;
  textColor?: string;
  backgroundColor?: string;

}

/*creates a page within some formatting rules and populates it with 
it's given props*/
function Page({
  children,
  title,
  subtitle = "",
  font,
  textColor,
  backgroundColor,
}: Props) {
  if (backgroundColor != null) {
    document.body.style.backgroundColor = backgroundColor;
  }

  document.body.style.overflowY = "scroll";
  return (
    <div className="Bg">
      <div className="grid-item">
        <div className="header">
          <CustomHeader
            text={title}
            subheader={subtitle}
            font={font}
            textColor={textColor}
          />
        </div>
      </div>
      {children}
    </div>
  );
}

export default Page;
