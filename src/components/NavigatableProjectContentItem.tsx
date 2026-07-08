import { useNavigate } from "react-router-dom";
import ContentHero from "./ContentHero";
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
}

function ProjectContentItem({
  imgName,
  pageURL,
  name,
  content,
  tags = [],
  right = false,
  font,
  header,
}: Props) {
  let nav = useNavigate();
  return (
    <motion.div
      className={
        "content-wrapper " +
        (right === true ? "content-wrapper-right" : "content-wrapper-left") +
        (pageURL === null ? " project-page-item" : "")
      }
      {...(tags.length > 0
        ? { style: { width: "60%" } }
        : { style: { width: "90%" } })}
      {...(pageURL != null
        ? {
          onClick: () => nav(pageURL),
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

export default ProjectContentItem;
