import CustomHeader from "./Text/CustomHeader";
import TopBar from "./Navigation/TopBar";
import FilterWrapper from "./Navigation/FilterWrapper";
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
  pageName = "",
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
      <div className="grid-item">
        <TopBar
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
    </div>
  );
}

export default Page;
