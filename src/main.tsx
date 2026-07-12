import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import RotatingDisk from "./pages/Nav";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SingleProject from "./pages/SingleProject";
import Projects from "./data/ProjectList";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Routes>
      <Route path="/Portfolio-Site/" element={<RotatingDisk />} />
      <Route path="/Portfolio-Site/Projects" element={<ProjectsPage />} />
      <Route path="/Portfolio-Site/Contact" element={<Contact />} />
      <Route path="/Portfolio-Site/About" element={<About />} />
      {Projects.map((Project) => {
        return (<Route path={"/Portfolio-Site/Projects/" + Project.PageURL} element={<SingleProject data={Project.data} />} />)
      })}
    </Routes>
  </HashRouter>
);