import Page from "./components/Page";
import ContentItem from "./components/ContentItem";

interface Props {
  Navigate: (item: string) => void;
}

function ProjectsPage({ Navigate }: Props) {
  const testTags = ["Game Design", "3D Art", "Programming"];
  return (
    <Page title="PROJECTS" filter={true}>
      <div className="content-grid">
        <ContentItem
          Right={false}
          Name="Re-Make"
          Content="Ongoing"
          ImgName="Re-Make.png"
          Tags={testTags}
          PageURL="Project1"
          Navigate={Navigate}
        />
        <ContentItem
          Right={true}
          Name="Linus Tech Tips"
          Content="2069"
          ImgName="Linus.jpg"
          Tags={testTags}
          PageURL="Project1"
          Navigate={Navigate}
        />
        <ContentItem
          Right={false}
          Name="Linus Tech Tips"
          Content="2069"
          ImgName="Linus.jpg"
          Tags={testTags}
          PageURL="Project1"
          Navigate={Navigate}
        />
        <ContentItem
          Right={true}
          Name="Linus Tech Tips"
          Content="2069"
          ImgName="Linus.jpg"
          Tags={testTags}
          PageURL="Project1"
          Navigate={Navigate}
        />
      </div>
    </Page>
  );
}

export default ProjectsPage;
