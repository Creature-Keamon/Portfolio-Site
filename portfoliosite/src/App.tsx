import Page from "./components/Page";
import ContentItem from "./components/ContentItem";
import "./App.css";

function App() {
  const testTags = ["Hello"];
  return (
    <div>
      <Page title="PROJECTS" filter={true}>
        <div className="content-grid">
          <ContentItem
            Right={false}
            Name="Linus Sex Tips"
            Year={2069}
            ImgName="Linus.jpg"
            Tags={testTags}
          />
          <ContentItem
            Right={true}
            Name="Linus Sex Tips"
            Year={2069}
            ImgName="Linus.jpg"
            Tags={testTags}
          />
          <ContentItem
            Right={false}
            Name="Linus Sex Tips"
            Year={2069}
            ImgName="Linus.jpg"
            Tags={testTags}
          />
        </div>
      </Page>
    </div>
  );
}

export default App;
