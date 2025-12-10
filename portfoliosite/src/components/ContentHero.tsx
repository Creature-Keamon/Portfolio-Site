import ContentText from "./ContentText";
import FilterButton from "./FilterButton";

interface Props {
  font?: string;
  imgName: string;
  pageURL?: string;
  name?: string;
  content?: React.ReactNode;
  tags?: string[];
  right?: boolean;
  header?: boolean;
}

function ContentHero({
  imgName,
  pageURL,
  name,
  content,
  tags = [],
  right = false,
  font,
  header = true,
}: Props) {
  return (
    <div
      className={
        "main-content" +
        (header === false ? " project-content-grid" : "") +
        (right === true ? "-right" : "-left")
      }
    >
      {right === true && tags.length === 0 && (
        <ContentText
          name={name}
          content={content}
          font={font}
          right={right}
          projectPage={tags.length > 0}
        />
      )}
      <div
        className={"content-grid-item" + (right === true ? "-right" : "-left")}
      >
        <div className="content-image-wrapper">
          <img
            className={
              "content-image" +
              (pageURL != null ? " clickable" : "") +
              (header === false ? " flavour-image" : " main-image")
            }
            src={"src/assets/" + imgName}
          />
        </div>
        <div className="tag-wrapper">
          {tags.map((item, index) => (
            <FilterButton onClick={() => {}} key={index}>
              {item}
            </FilterButton>
          ))}
        </div>
      </div>
      {(right === false || tags.length > 0) && (
        <ContentText
          name={name}
          content={content}
          font={font}
          right={right}
          projectPage={tags.length > 0}
        />
      )}
    </div>
  );
}

export default ContentHero;
