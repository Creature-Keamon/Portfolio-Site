import TopBar from "../components/Navigation/TopBar";
import Page from "../components/Page";
import OtherText from "../components/Text/Othertext";

function About() {
  return (
    <Page
      title="ABOUT ME"
      backgroundColor="rgb(29,32,33)"
    >
      <div className="content-grid">
        <TopBar pageName="Contact" tags="project-page-filter-button project-page-clickable"/>
        <OtherText>
          I am a student programmer, 3D artist, designer, aspiring bass player
          and video editor from New Zealand, studying Computer Science and Game
          Arts at the University of Canterbury. I like to think outside the box,
          and consider how my decisions affect the wider project and the world
          around us. Taking these into consideration elevates my work and
          ensures it can be enjoyed by anyone. I am an excellent communicator,
          project manager and work well in teams. I have skills in video
          editing, 3D modelling, design and teaching. I am motivated to do the
          very best that I can in everything I do. I have excellent time
          management skills, and ensure that all who I am working with do too.
        </OtherText>
      </div>
    </Page>
  );
}

export default About;
