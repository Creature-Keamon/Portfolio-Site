import FilterButton from "./FilterButton";

interface Props {
  ImgName: string;
  PageURL: string;
  Name: string;
  Content: number;
  Tags: string[];
  Right: boolean;
  Navigate: (item: string) => void;
  Clickable: boolean;
}

function ContentItem({
  ImgName,
  PageURL = "",
  Name,
  Content,
  Tags,
  Right = false,
  Navigate,
  Clickable = false,
}: Props) {
  return (
    <div
      className={
        "content-wrapper " +
        (Clickable === true ? "clickable " : "") +
        (Right === true ? "content-wrapper-right" : "content-wrapper-left")
      }
      {...(Clickable ? { onClick: () => Navigate(PageURL) } : {})}
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
