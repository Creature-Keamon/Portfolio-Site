import FilterButton from "./FilterButton";
import { motion } from "motion/react";

interface Props {
  ImgName: string;
  FlavName?: string;
  PageURL: string;
  Name: string;
  Content: string;
  Tags?: string[];
  Right?: boolean;
  Navigate: (item: string) => void;
}

function ContentItem({
  ImgName,
  PageURL = "",
  Name = "",
  Content,
  Tags = [],
  Right = false,
  Navigate,
}: Props) {
  return (
    <motion.div
      className={
        "content-wrapper " +
        (Right === true ? "content-wrapper-right" : "content-wrapper-left") +
        (PageURL.length === 0 ? " project-page-item" : "")
      }
      {...(PageURL.length > 0
        ? {
            onClick: () => Navigate(PageURL),
            whileHover: { scale: 1.03 },
            whileTap: { scale: 0.9 },
          }
        : {})}
    >
      <div
        className={
          "main-content " +
          (Right === true
            ? "main-content-right content-grid-right"
            : "main-content-left content-grid-left")
        }
      >
        <div
          className={
            "content-grid-item" + (Right === true ? "-right" : "-left")
          }
        >
          <div className="content-image-wrapper">
            <img
              className={
                "content-image " + (PageURL.length > 0 ? "clickable " : "")
              }
              src={"src/assets/" + ImgName}
            />
          </div>
          <div className="tag-wrapper">
            {Tags.map((item) => (
              <FilterButton onClick={() => {}} Clickable={false}>
                {item}
              </FilterButton>
            ))}
          </div>
        </div>
        <div
          className={
            "content-grid-item" + (Right === true ? "-left" : "-right")
          }
        >
          <h1 className="project-name text header-text">{Name}</h1>
          <h3 className="content text">{Content}</h3>
        </div>
      </div>
    </motion.div>
  );
}

export default ContentItem;
