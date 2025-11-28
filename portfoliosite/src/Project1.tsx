import Page from "./components/Page";
import ContentItem from "./components/ContentItem";
import githublogo from "./assets/githublogo.svg";
import youtubelogo from "./assets/youtubelogo.svg";

function Project1() {
  const arr = ["hello", "test"];
  const images = [githublogo, youtubelogo];
  return (
    <Page
      title="RE-MAKE"
      filter={false}
      subtitle="ONGOING"
      font="Verdana"
      textColor="rgba(255, 255, 255, 1)"
      backgroundColor="rgba(0, 0, 102, 1)"
      buttonLinks={arr}
      buttonText={arr}
      buttonImages={images}
    >
      <ContentItem
        Content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et auctor turpis. Nulla viverra lacus in magna commodo lobortis. Sed cursus purus massa, ut aliquet mi varius in. Donec vitae sollicitudin lectus, vel tristique nulla. Vivamus nunc quam, faucibus finibus congue eget, condimentum a orci. Maecenas tristique vel ante quis commodo." +
          " Integer sed erat sem. Ut mi neque, pulvinar eu vulputate in, ornare ac sem."
        }
        ImgName="Re-Make.png"
      />
    </Page>
  );
}

export default Project1;
