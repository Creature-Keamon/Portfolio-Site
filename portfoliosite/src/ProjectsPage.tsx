import Page from "./components/Page";
import ContentItem from "./components/ContentItem";
import { useState } from "react";

interface Props {
  Navigate: (item: string) => void;
}

function ProjectsPage({ Navigate }: Props) {
  const Projects = [
    {
      Name: "Decommission",
      Year: "2025",
      ImgName: "Decommission.png",
      Tags: ["Game Design", "3D Art"],
      PageURL: "Decommission",
    },
    {
      Name: "Ammit the Truth",
      Year: "2024",
      ImgName: "Ammit.png",
      Tags: ["Game Design", "3D Art", "Programming"],
      PageURL: "Project1",
    },
    {
      Name: "My Portfolio Website",
      Year: "2025",
      ImgName: "Linus.jpg",
      Tags: ["Programming", "Web Development"],
      PageURL: "Project1",
    },
    {
      Name: "Linus Tech Tips",
      Year: "2069",
      ImgName: "Linus.jpg",
      Tags: ["Game Design", "3D Art", "Video Editing"],
      PageURL: "Project1",
    },
    {
      Name: '"To Reminisce"',
      Year: "2025",
      ImgName: "Linus.jpg",
      Tags: ["Filmmaking", "Video Editing"],
      PageURL: "Project1",
    },
  ];
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
      filter={true}
      backgroundColor="rgb(29,32,33)"
      filterItem={filterItem}
      Navigate={Navigate}
    >
      <div className="content-grid">
        {content.map((Project, index) => {
          return (
            <ContentItem
              Right={(index + 1) % 2 === 0 ? true : false}
              Name={Project.Name}
              Content={Project.Year}
              ImgName={Project.ImgName}
              Tags={Project.Tags}
              PageURL={Project.PageURL}
              Navigate={Navigate}
            />
          );
        })}
      </div>
    </Page>
  );
}

export default ProjectsPage;
