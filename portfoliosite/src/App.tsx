import decommissionData from "./assets/data/decommissionData";
import "./App.css";
import { useState } from "react";
import ProjectsPage from "./pages/ProjectsPage";
import RotatingDisk from "./pages/Nav";
import ammitData from "./assets/data/ammitData";
import SingleProject from "./pages/SingleProject";

function App() {
  const [page, SetPage] = useState("Home");
  const navigate = (to: string) => SetPage(to);

  return (
    <div>
      {page === "Projects" && <ProjectsPage Navigate={navigate} />}
      {page === "Decommission" && <SingleProject Navigate={navigate} data={decommissionData} />}
      {page === "Home" && <RotatingDisk Navigate={navigate} />}
      {page === "Ammit" && (
        <SingleProject Navigate={navigate} data={ammitData} />
      )}
    </div>
  );
}

export default App;
