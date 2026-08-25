import Decommission from "../assets/Decommission.png";
import Ammit from "../assets/Ammit.png";
import Portfolio from "../assets/Portfoliosite.png";
import Reminisce from "../assets/Reminisce.png";
import ammitData from "./ammitData";
import decommissionData from "./decommissionData";
import portfolioData from "./portfolioData";
import reminisceData from "./reminisceData";


const Projects = [
  {
    Name: "Polaroam",
    Year: "Ongoing",
    ImgName: Decommission,
    Tags: ["Full Stack", "Front End", "Web App", "Server"],
    PageURL: "Decommission",
    data: decommissionData
  },
  {
    Name: "Decommission",
    Year: "2025",
    ImgName: Decommission,
    Tags: ["Game Design", "3D Art"],
    PageURL: "Decommission",
    data: decommissionData
  },
  {
    Name: "Ammit the Truth",
    Year: "2024",
    ImgName: Ammit,
    Tags: ["Game Design", "3D Art", "Programming", "Writing"],
    PageURL: "Ammit",
    data: ammitData
  },
  {
    Name: "My Portfolio Site",
    Year: "2023/25",
    ImgName: Portfolio,
    Tags: ["Programming", "Web Development"],
    PageURL: "Portfolio",
    data: portfolioData
  },
  {
    Name: "To Reminisce",
    Year: "2025",
    ImgName: Reminisce,
    Tags: ["Filmmaking", "Video Editing", "Writing"],
    PageURL: "Reminisce",
    data: reminisceData
  },
];

export default Projects;
