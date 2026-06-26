import "./App.css";
import { useState } from "react";
import ProjectsPage from "./pages/ProjectsPage";
import RotatingDisk from "./pages/Nav";
import SingleProject from "./pages/SingleProject";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./data/ProjectList";

function App() {

  const [page, SetPage] = useState("Home");
  const navigate = (to: string) => SetPage(to);

  return (
    <div>
      {page === "Projects" && <ProjectsPage Navigate={navigate} />}
      {page === "Home" && <RotatingDisk Navigate={navigate} />}
      {page === "Contact" && <Contact Navigate={navigate} />}
      {page === "About" && <About Navigate={navigate} />}
      {Projects.map((Project) => {
        return (
          page === Project.PageURL && <SingleProject Navigate={navigate} data={Project.data} />
        )
      })
      }
    </div>
  );
}

export default App;
