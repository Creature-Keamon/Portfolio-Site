import Decommission from "../assets/Decommission.png";
import Ammit from "../assets/Ammit.png";
import Portfolio from "../assets/Portfoliosite.png";
import Reminisce from "../assets/Reminisce.png";
import ammitData from "./ammitData";
import decommissionData from "./decommissionData";
import PortfolioData from "./portfolioData";
import reminisceData from "./reminisceData";


const Projects = [
  {
    Name: "DECOMMISSION",
    Year: "2025",
    ImgName: Decommission,
    Tags: ["Game Design", "3D Art"],
    PageURL: "Decommission",
    data: decommissionData
  },
  {
    Name: "AMMIT THE TRUTH",
    Year: "2024",
    ImgName: Ammit,
    Tags: ["Game Design", "3D Art", "Programming", "Writing"],
    PageURL: "Ammit",
    data: ammitData
  },
  {
    Name: "MY PORTFOLIO SITE",
    Year: "2023/25",
    ImgName: Portfolio,
    Tags: ["Programming", "Web Development"],
    PageURL: "Portfolio",
    data: PortfolioData
  },
  {
    Name: "TO REMINISCE",
    Year: "2025",
    ImgName: Reminisce,
    Tags: ["Filmmaking", "Video Editing", "Writing"],
    PageURL: "Reminisce",
    data: reminisceData
  },
];

export default Projects;
