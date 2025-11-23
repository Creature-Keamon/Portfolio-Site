import FilterButton from "./FilterButton";
import carspeen from "../assets/carspeen/carspeen.gif";

interface Props {
  ImgName: string;
  FlavName: string;
  PageURL: string;
  Name: string;
  Content: string;
  Tags: string[];
  Right: boolean;
  Navigate: (item: string) => void;
}

function ContentItem({
  ImgName,
  PageURL = "",
  Name,
  Content,
  Tags = [],
  Right = false,
  Navigate,
}: Props) {
  return (
    <div className="flavour-wrapper">
      <div
        className={
          "content-wrapper " +
          (Right === true ? "content-wrapper-right" : "content-wrapper-left")
        }
        {...(PageURL.length > 0 ? { onClick: () => Navigate(PageURL) } : {})}
      >
        <div
          className={
            "main-content " +
            (Right === true ? "main-content-right" : "main-content-left")
          }
        >
          <img
            className={
              "content-image " + (PageURL.length > 0 ? "clickable " : "")
            }
            src={"src/assets/" + ImgName}
          />
          <div className="tag-wrapper">
            {Tags.map((item) => (
              <FilterButton onClick={() => {}} Clickable={false}>
                {item}
              </FilterButton>
            ))}
          </div>

          <h1 className="project-name text header-text">{Name}</h1>
          <h3 className="content text">{Content}</h3>
        </div>
      </div>
    </div>
  );
}

export default ContentItem;
