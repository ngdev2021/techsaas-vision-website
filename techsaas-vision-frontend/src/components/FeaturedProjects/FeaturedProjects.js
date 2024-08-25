import './FeaturedProjects.css';

const FeaturedProjects = ({ projects }) => {
  return (
    <div className="featured-projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card" data-aos="fade-up">
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;