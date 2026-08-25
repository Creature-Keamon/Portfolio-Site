interface Props {
  font?: string;
  name?: string;
  content: React.ReactNode;
  projectPage?: boolean;
  right?: boolean;
}

function ContentText({
  name,
  content,
  projectPage,
  right = false,
  font,
}: Props) {
  return (
    <div
      className={"content-grid-item" + (right === true ? "-left" : "-right")}
    >
      <h1
        className="project-name text header-text"
        style={{ fontFamily: font }}
      >
        {name}
      </h1>
      <p
        className={
          "text" +
          (projectPage === true
            ? " year-text"
            : " description-text" + (right === true ? "-right" : "-left"))
        }
        style={{ fontFamily: font }}
      >
        {content}
      </p>
    </div>
  );
}

export default ContentText;
