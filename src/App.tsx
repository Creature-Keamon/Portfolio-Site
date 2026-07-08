import "./App.css";
import { useState } from "react";
import ProjectsPage from "./pages/ProjectsPage";
import RotatingDisk from "./pages/Nav";
import SingleProject from "./pages/SingleProject";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./data/ProjectList";
import { Route, Routes, useNavigate } from "react-router-dom";

const navigator = useNavigate()
const navigate = (path:string) => {
  navigator("/"+path)
}

function App() {
  return (
  <div>
    <Routes>
      <Route path="/" exact component={RotatingDisk({Navigate:navigate})}/>
    </Routes>
  </div>)
  let children = [
    {
        path: "/",
        element: <RotatingDisk Navigate={navigate} />,
    },
    {
        path: "/Projects",
        element: <ProjectsPage Navigate={navigate} />
    },
    {
        path: "/Contact",
        element: <Contact Navigate={navigate} />
    },
    {
        path: "/About",
        element: <About Navigate={navigate} />
    },
  ];
  Projects.forEach(project => {
    children.push(
    {
      path: "/Projects/" + project.PageURL,
      element: <SingleProject Navigate={navigate} data={project.data} />
    })
  });}

export default App;
