import Decommisson from "./Decommission";
import "./App.css";
import { useState } from "react";
import ProjectsPage from "./ProjectsPage";
import RotatingDisk from "./Nav";

function App() {
  const [page, SetPage] = useState("Home");
  const navigate = (to: string) => SetPage(to);

  return (
    <div>
      {page === "Projects" && <ProjectsPage Navigate={navigate} />}
      {page === "Decommission" && <Decommisson Navigate={navigate} />}
      {page === "Home" && <RotatingDisk Navigate={navigate} />}
    </div>
  );
}

export default App;
