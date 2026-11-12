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
      <Route path="/" element={<RotatingDisk />} />
      <Route path="/Projects" element={<ProjectsPage />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      {Projects.map((Project) => {
        return (<Route path={"/Projects/" + Project.PageURL} element={<SingleProject projectInfo={Project} />} />)
      })}
    </Routes>

  </HashRouter>
);