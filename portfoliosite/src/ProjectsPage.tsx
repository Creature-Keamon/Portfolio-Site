import Page from "./components/Page";
import ContentItem from "./components/ContentItem";
import React from "react";

interface Props {
  Navigate: (item: string) => void;
}

function ProjectsPage({ Navigate }) {
  const testTags = ["Hello", "I", "Am", "A", "Tag", "Yes"];
  return (
    <Page title="PROJECTS" filter={true}>
      <div className="content-grid">
        <ContentItem
          Right={false}
          Name="Linus Tech Tips"
          Content={2069}
          ImgName="Linus.jpg"
          Tags={testTags}
          PageURL="App.tsx"
        />
        <ContentItem
          Right={true}
          Name="Linus Tech Tips"
          Content={2069}
          ImgName="Linus.jpg"
          Tags={testTags}
          PageURL="App.tsx"
        />
        <ContentItem
          Right={false}
          Name="Linus Tech Tips"
          Content={2069}
          ImgName="Linus.jpg"
          Tags={testTags}
        />
      </div>
    </Page>
  );
}

export default ProjectsPage;
