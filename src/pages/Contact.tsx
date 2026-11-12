import TopBar from "../components/Navigation/TopBar";
import Page from "../components/Page";
import OtherText from "../components/Text/Othertext";

function Contact() {
  return (
    <Page
      title="CONTACT ME"
      backgroundColor="rgb(29,32,33)"
    >
      <div className="content-grid">
        <TopBar pageName="Contact" tags="project-page-filter-button project-page-clickable"/>
        <OtherText>
          Contact me with the LinkedIn link at the top of the page.
        </OtherText>
      </div>
    </Page>
  );
}

export default Contact;
