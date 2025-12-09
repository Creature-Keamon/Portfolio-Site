import CustomHeader from "./CustomHeader";
import TopBar from "./TopBar";
import FilterWrapper from "./FilterWrapper";
import type React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  font?: string;
  textColor?: string;
  backgroundColor?: string;
  buttonLinks?: string[];
  buttonText?: string[];
  buttonImages?: string[];
  filterItem?: (filter: string) => void;
  Navigate: (link: string) => void;
  pageName?: string;
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
  buttonLinks,
  buttonText,
  buttonImages,
  filterItem,
  Navigate,
  pageName = "",
}: Props) {
  if (backgroundColor != null) {
    document.body.style.backgroundColor = backgroundColor;
  }

  document.body.style.overflowY = "scroll";
  return (
    <div className="Bg">
      <div className="grid-item">
        <TopBar
          Navigate={Navigate}
          {...(buttonLinks != null ? { buttonLinks: buttonLinks } : {})}
          buttonImages={buttonImages}
          buttonText={buttonText}
          pageName={pageName}
          font={font}
        />
        {filterItem != null ? (
          <FilterWrapper filterItem={filterItem}></FilterWrapper>
        ) : (
          <div className="filter-wrapper"></div>
        )}
        {children}
      </div>
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
    </div>
  );
}

export default Page;
