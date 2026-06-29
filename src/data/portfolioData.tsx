import Portfoliosite from "../assets/Portfoliosite.png";
import PortfoliositeOld from "../assets/PortfolioSiteOld.png";
import PortfoliositeNew from "../assets/PortfolioSiteNew.png";

const PortfolioData = {
  buttonText: ["Old Site", "Github"],
  buttonImages: ["link", "githublogo"],
  buttonLinks: [
    "https://creature-keamon.github.io/Portfolio-Website-Old/index.html",
    "https://github.com/Creature-Keamon/New-Portfolio-Site",
  ],
  title: "MY PORTFOLIO SITE",
  subtitle: "2023/25",
  font: "",
  textColor: "rgba(182, 182, 182, 1)",
  backgroundColor: "",
  pageData: [
    {
      imgName: Portfoliosite,
      pageData: ("This site was built at the end of 2025 with REACT.JS and Motion.JS. However it was originally made back in 2023 using HTML, CSS and Three.JS. It houses information about me and my projects."),
    },
    {
      imgName: PortfoliositeOld,
      pageData: ("The original site was designed to be a hub for all of the projects that I worked on and was currently working on. However it was made with raw HTML and CSS, which made it difficult and tedious to add reusable elements and interesting effects, like animations."),
    },
    {
      imgName: PortfoliositeNew,
      pageData: ("So I have remade it with React.JS and Motion.JS. As I am using React, I was able to make the site extremely modular, making it extremely easy to add new pages that conform to my desired page design, and a new (conformant) page can be created with only a small amount of JSX. The source code is available from the Github link at the top of the page"),
    },
  ],
};
export default PortfolioData;
