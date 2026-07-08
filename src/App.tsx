import "./App.css";
import ProjectsPage from "./pages/ProjectsPage";
import RotatingDisk from "./pages/Nav";
import SingleProject from "./pages/SingleProject";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./data/ProjectList";
import { Route, Routes, useNavigate } from "react-router-dom";


function App():React.ReactElement | null {
  return (
    <Routes>
      <Route path="/" element={<RotatingDisk />}/>
      <Route path="/Projects" element={<ProjectsPage />}/>
      <Route path="/Contact"  element={<Contact />}/>
      <Route path="/About" element={<About />}/>
      {Projects.map((Project)=>{
        return (<Route path={"/Projects"+Project.PageURL} element={<SingleProject  Navigate={navigate} data={Project.data}/>}/>)
      })}
    </Routes>
  )
}

export default App;
