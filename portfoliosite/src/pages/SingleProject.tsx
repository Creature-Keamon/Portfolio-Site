import Page from "../components/Page";
import ContentItem from "../components/ContentItem";
import type { JSX } from "react";

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
    pageData: { imgName: string; pageData: JSX.Element }[];
  };
}

function SingleProject({ Navigate, data }: Props) {
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
    >
      <div className="content-grid">
        {data.pageData.map((item, index) => {
          return (
            <ContentItem
              right={(index + 1) % 2 === 0 ? true : false}
              content={
                <div style={{ color: data.textColor }}>{item.pageData}</div>
              }
              imgName={item.imgName}
              font={data.font}
              key={index}
              header={index > 0 ? false : true}
            />
          );
        })}
      </div>
    </Page>
  );
}

export default SingleProject;
