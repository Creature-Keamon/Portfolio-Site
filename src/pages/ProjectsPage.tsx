import Page from "../components/Page";
import ProjectContentItem from "../components/Navigation/NavigatableProjectContentItem";
import { useState } from "react";
import Projects from "../data/ProjectList";

function ProjectsPage() {
  const [content, setContent] = useState(Projects);

  const filterItem = (filter: string) => {
    if (filter === "All") {
      setContent(Projects);
    } else {
      setContent(
        Projects.filter((Project: any) => {
          return Project.Tags.find((tag: string) => {
            return tag === filter;
          });
        })
      );
    }
  };

  return (
    <Page
      title="PROJECTS"
      backgroundColor="rgb(29,32,33)"
      filterItem={filterItem}
      pageName="Projects"
    >
      <div className="content-grid">
        {content.map((Project, index) => {
          return (
            <ProjectContentItem
              right={(index + 1) % 2 === 0 ? true : false}
              name={Project.Name}
              content={Project.Year}
              imgName={Project.ImgName}
              tags={Project.Tags}
              pageURL={Project.PageURL}
              key={index}
              header={true}
            />
          );
        })}
      </div>
    </Page>
  );
}

export default ProjectsPage;
