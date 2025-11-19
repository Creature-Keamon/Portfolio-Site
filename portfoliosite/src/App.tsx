import Page from "./components/Page";
import ContentItem from "./components/ContentItem";
import "./App.css";
import { useState } from "react";
import ProjectsPage from "./ProjectsPage";

function App() {
  const [page, SetPage] = useState("Projects");
  const navigate = (to) => SetPage(to);

  return <div>{page === "Projects" && <ProjectsPage />};</div>;
}

export default App;
