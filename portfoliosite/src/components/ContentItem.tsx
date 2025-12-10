import ContentText from "./ContentText";
import ContentHero from "./ContentHero";
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
  header,
}: Props) {
  return (
    <motion.div
      className={
        "content-wrapper " +
        (right === true ? "content-wrapper-right" : "content-wrapper-left") +
        (pageURL === null ? " project-page-item" : "")
      }
      {...(tags.length > 0
        ? { style: { width: "70%" } }
        : { style: { width: "90%" } })}
      {...(pageURL != null && navigate != null
        ? {
            onClick: () => navigate(pageURL),
            whileHover: { scale: 1.03 },
            whileTap: { scale: 0.9 },
          }
        : {})}
    >
      <ContentHero
        imgName={imgName}
        name={name}
        tags={tags}
        header={header}
        right={right}
        content={content}
        font={font}
      />
    </motion.div>
  );
}

export default ContentItem;
