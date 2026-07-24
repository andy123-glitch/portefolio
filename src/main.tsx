import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Button from "./components/Button";
import Badge from "./components/Badge";
import ExperienceCard from "./components/ExperienceCard";
import { experiences } from "./datas/experienceData.js";
import { projects } from "./datas/projectsData.js";
import ProjectCard from "./components/ProjectCard";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {projects.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ))}
  </StrictMode>,
);
