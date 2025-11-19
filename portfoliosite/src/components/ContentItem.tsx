import FilterButton from "./FilterButton";

interface Props {
  ImgName: string;
  PageURL: string;
  Name: string;
  Content: number;
  Tags: string[];
  Right: boolean;
  Navigate: (item: string) => void;
}

function ContentItem({
  ImgName,
  PageURL = "",
  Name,
  Content,
  Tags,
  Right = false,
  Navigate,
}: Props) {
  return (
    <div
      className={
        "content-wrapper " +
        (PageURL.length > 0? "clickable " : "") +
        (Right === true ? "content-wrapper-right" : "content-wrapper-left")
      }
      {...(PageURL.length > 0 ? { onClick: () => Navigate(PageURL) } : {})}
    >
      <div
        className={
          Right === true
            ? "main-content-right main-content"
            : "main-content-left main-content"
        }
      >
        <img className="content-image " src={"src/assets/" + ImgName}></img>
        <div className="tag-wrapper">
          {Tags.map((item) => (
            <FilterButton onClick={() => {}}>{item}</FilterButton>
          ))}
        </div>
        <h1 className="project-name text header-text">{Name}</h1>
        <h3 className="content text">{Content}</h3>
      </div>
    </div>
  );
}

export default ContentItem;
