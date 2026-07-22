const projects = [
  {
    title: "I FIX IT",
    image: "https://placehold.co/600x400",
    description:
      "Professionele website voor een IT-servicebedrijf gespecialiseerd in computerherstellingen, ondersteuning en webdesign.",
    tech: ["React", "Vite", "CSS"],
    live: "https://ifixit-be.netlify.app"
  },
  {
    title: "NovaDesign",
    image: "https://placehold.co/600x400",
    description:
      "Modern portfolio waarin webdesign, UI/UX en AI samenkomen in stijlvolle websites.",
    tech: ["React", "Figma", "AI"],
    live: "#"
  },
  {
    title: "IRIS Zingt Voor Jou",
    image: "https://placehold.co/600x400",
    description:
      "Website rond AI-gegenereerde muziek, videoclips en een persoonlijke artiestenpagina.",
    tech: ["React", "AI", "Video"],
    live: "#"
  }
];

function Projects() {
  return (
    <section className="projects" id="projecten">
      <div className="section-title">
        <span>Portfolio</span>
        <h2>Uitgelichte Projecten</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Bekijk project →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;