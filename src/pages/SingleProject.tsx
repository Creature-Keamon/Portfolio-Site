import Page from "../components/Page";
import ProjectContentItem from "../components/ProjectContentItem";
import type { JSX } from "react";
import TextItemWrapper from "../components/individualProjectComponents/TextItemWrapper";
import ImageItemWrapper from "../components/individualProjectComponents/ImageItemWrapper";

interface Props {
  Navigate: (item: string) => void;
  data: {
    buttonText: string[];
    buttonImages: string[];
    buttonLinks: string[];
    title: string;
    subtitle: string;
    font: string;
    textColor: string;
    backgroundColor: string;
    pageData: { imgName: string; pageData: string }[];
  };
}

function SingleProject({ Navigate, data }: Props) {
  const text: string[] = [];
  const imgNames: string[] = [];
  for (let i = 0; i < data.pageData.length; i++) {
    text.push(data.pageData[i].pageData);
    imgNames.push(data.pageData[i].imgName);
  }
  const newData = { font: data.font, textColor: data.textColor, texts: text };
  return (
    <Page
      title={data.title}
      subtitle={data.subtitle}
      font={data.font}
      textColor={data.textColor}
      backgroundColor={data.backgroundColor}
      buttonLinks={data.buttonLinks}
      buttonText={data.buttonText}
      buttonImages={data.buttonImages}
      Navigate={Navigate}
      pageName={data.title}
    >
      <div className="single-project-content-grid">
        <div className="text-wrapper">
          <TextItemWrapper data={newData} />

        </div>
        <div className="image-wrapper">
          <ImageItemWrapper imgNames={imgNames} />
        </div>
      </div>
    </Page>
  );
}

export default SingleProject;
