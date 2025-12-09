import Page from "../components/Page";
import ContentItem from "../components/ContentItem";
import ammitData from "../assets/data/ammitData";

interface Props {
  Navigate: (item: string) => void;
}

function Ammit({ Navigate }: Props) {
  const pageData = {
    buttonText: ["Itch.io"],
    buttonImages: ["itchiologo"],
    buttonLinks: ["https://mythspire-interactive.itch.io/ammit-the-truth"],
    title: "ammit the truth",
    subtitle: "2024",
    font: "Cinzel Decorative",
    textColor: "rgba(68, 45, 0, 0.8)",
    backgroundColor: "rgba(184, 146, 75, 1)",
  };

  return (
    <Page
      title={pageData.title}
      subtitle={pageData.subtitle}
      font={pageData.font}
      textColor={pageData.textColor}
      backgroundColor={pageData.backgroundColor}
      buttonLinks={pageData.buttonLinks}
      buttonText={pageData.buttonText}
      buttonImages={pageData.buttonImages}
      Navigate={Navigate}
    >
      <div className="content-grid">
        {ammitData.map((item, index) => {
          return (
            <ContentItem
              right={(index + 1) % 2 === 0 ? true : false}
              content={
                <div style={{ color: pageData.textColor }}>{item.info}</div>
              }
              imgName={item.imgName}
              font={pageData.font}
              key={index}
            />
          );
        })}
      </div>
    </Page>
  );
}

export default Ammit;
