import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";
import ProjectsPage from "./pages/ProjectsPage";
import RotatingDisk from "./pages/Nav";
import SingleProject from "./pages/SingleProject";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./data/ProjectList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



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

function routerCreater() {
  let children = [
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
  });
  const router = createBrowserRouter([
    {
        path: "/",
        element: <RotatingDisk Navigate={navigate} />,
        children: children,
    }
  ])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={} />
  </StrictMode>
);
