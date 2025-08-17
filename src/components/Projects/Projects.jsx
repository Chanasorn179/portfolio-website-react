import { useMemo, useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

// ✅ import รูปจาก src/assets
import project1 from "../../assets/images/E-commerce.png"; 
import project2 from "../../assets/images/Screenshot 2025-08-17 222530.png";
import project3 from "../../assets/images/Screenshot 2025-08-18 000026.png";

const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-featured online store built with React and Node.js",
    image: project1,  // ใช้ตัวแปรที่ import มา
    technologies: ["React", "Vite", "CSS"],
    category: "E-commerce",
    demoUrl: "https://htmlpreview.github.io/?https://github.com/Benjasarayut/mini-ecommerce-collaboration1/blob/main/mini-ecommerce/index.html",
    githubUrl: "https://github.com/Benjasarayut/mini-ecommerce-collaboration1.git",
  },
  {
    id: 2,
    title: "Portfolio_website_shop",
    description: "Simple store with cart & checkout.",
    image: project2,
    technologies: ["React", "Node.js", "MongoDB"],
    category: "Portfolio_website_shop",
    demoUrl: "https://benjasarayut.github.io/Portfolio_website_shop/",
    githubUrl: "https://github.com/Benjasarayut/Portfolio_website_shop",
  },
  {
    id: 3,
    title: "My_Weather_app",
    description: "Real-time weather application with location-based forecasts",
    image: project3,
    technologies: ["JavaScript", "Canvas"],
    category: "Weather App",
    demoUrl: "https://chanasorn179.github.io/my-weather-app/",
    githubUrl: "https://github.com/Chanasorn179/my-weather-app.git",
  },
];

function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS.map(p => p.category)))],
    []
  );

  const filtered = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of the projects I've worked on recently.</p>

        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;