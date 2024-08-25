import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const themeSettings = useThemeSettings();

  return (
    <div
      className="project-card"
      style={{
        backgroundColor: themeSettings.colors.background,
        color: themeSettings.colors.text,
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          style={{ backgroundColor: themeSettings.colors.accent }}
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;