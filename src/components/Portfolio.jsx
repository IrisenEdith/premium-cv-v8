import ifixitImage from "../assets/images/projects/ifixit.webp";
import irisZingtImage from "../assets/images/projects/iris-zingt.webp";

function Portfolio() {
  const projects = [
    {
      title: "I FIX IT",
      image: ifixitImage,
      imageWidth: 900,
      imageHeight: 322,
      imagePosition: "41%",
      description:
        "Moderne website ontwikkeld voor een zelfstandige IT-specialist. De focus ligt op een persoonlijke dienstverlening, duidelijke informatie en een professionele uitstraling.",
      tags: [
        "React",
        "Vite",
        "JavaScript",
        "CSS",
        "Responsive"
      ],
      url: "https://ifixit-be.netlify.app/"
    },

    {
      title: "IRIS Zingt Voor Jou",
      image: irisZingtImage,
      imageWidth: 900,
      imageHeight: 444,
      description:
        "Persoonlijke artiestenwebsite waarop bezoekers mijn muziek, videoclips en nieuwste singles kunnen ontdekken in een warme en overzichtelijke omgeving.",
      tags: [
        "React",
        "Vite",
        "AI",
        "Responsive",
        "UI/UX"
      ],
      url: "https://irisduym.be"
    },

    {
      title: "Dit Portfolio",
      image: null,
      description:
        "Mijn persoonlijke portfolio waarin ik mijn projecten, technische vaardigheden en werkervaring presenteer aan recruiters en toekomstige werkgevers.",
      tags: [
        "React",
        "Vite",
        "JavaScript",
        "CSS",
        "Portfolio"
      ],
      url: "#"
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="section-title">
        <span>Mijn projecten</span>

        <h2>Projecten waar ik trots op ben</h2>

        <p className="section-description">
          Een selectie van websites en toepassingen die ik zelf heb ontworpen
          en ontwikkeld. Elk project weerspiegelt mijn passie voor technologie,
          gebruiksvriendelijkheid en een verzorgde afwerking.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.title}
            data-aos="fade-up"
          >
            {project.image && (
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  loading="lazy"
                  decoding="async"
                  style={{
                    objectPosition: project.imagePosition || "center"
                  }}
                />
              </div>
            )}

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {project.url !== "#" && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  🌐 Live website →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;