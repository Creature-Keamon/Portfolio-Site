import FilterButton from "./FilterButton";
import { motion } from "motion/react";

interface Props {
  font?: string;
  imgName: string;
  pageURL?: string;
  name?: string;
  content: React.ReactNode;
  tags?: string[];
  right?: boolean;
  header?: boolean;
  navigate?: (item: string) => void;
}

function ContentItem({
  imgName,
  pageURL,
  name,
  content,
  tags = [],
  right = false,
  navigate,
  font,
  header = true,
}: Props) {
  return (
    <motion.div
      className={
        "content-wrapper " +
        (right === true ? "content-wrapper-right" : "content-wrapper-left") +
        (pageURL === null ? " project-page-item" : "")
      }
      {...(header === true
        ? { style: { width: "60%" } }
        : { style: { width: "80%" } })}
      {...(pageURL != null && navigate != null
        ? {
            onClick: () => navigate(pageURL),
            whileHover: { scale: 1.03 },
            whileTap: { scale: 0.9 },
          }
        : {})}
    >
      <div
        className={
          "main-content " +
          (right === true ? " content-grid-right" : " content-grid-left")
        }
      >
        <div
          className={
            "content-grid-item" + (right === true ? "-right" : "-left")
          }
        >
          <div className="content-image-wrapper">
            <img
              className={
                "content-image" +
                (pageURL != null ? " clickable" : "") +
                (header === false ? " flavour-image" : "")
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
        <div
          className={
            "content-grid-item" + (right === true ? "-left" : "-right")
          }
        >
          <h1
            className="project-name text header-text"
            style={{ fontFamily: font }}
          >
            {name}
          </h1>
          <h3 className="content text" style={{ fontFamily: font }}>
            {content}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default ContentItem;
