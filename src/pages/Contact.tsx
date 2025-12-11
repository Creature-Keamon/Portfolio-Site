import Page from "../components/Page";
import OtherText from "../components/Othertext";

interface Props {
  Navigate: (item: string) => void;
}

function Contact({ Navigate }: Props) {
  return (
    <Page
      title="CONTACT ME"
      backgroundColor="rgb(29,32,33)"
      Navigate={Navigate}
      pageName="Contact"
    >
      <div className="content-grid">
        <OtherText>
          Contact me with the LinkedIn link at the top of the page.
        </OtherText>
      </div>
    </Page>
  );
}

export default Contact;
