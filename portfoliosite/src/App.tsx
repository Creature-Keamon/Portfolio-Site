import Project1 from "./Decommission";
import "./App.css";
import { useState } from "react";
import ProjectsPage from "./ProjectsPage";
import RotatingDisk from "./Nav";

function App() {
  const [page, SetPage] = useState("Projects");
  const navigate = (to: string) => SetPage(to);

  return (
    <div>
      {page === "Projects" && <ProjectsPage Navigate={navigate} />}
      {page === "Decommission" && <Project1 />}
      {page === "Home" && <RotatingDisk Navigate={navigate} />}
    </div>
  );
}

export default App;
