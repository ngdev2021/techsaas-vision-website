import React from 'react';
import './SkillsShowcase.css';
import { useThemeSettings } from '../../context/theme/ThemeSettingsContext/ThemeSettingsContext';

// Import SVG icons for skills
import { ReactComponent as ReactIcon } from '../../assets/icons/react-icon.svg';
import { ReactComponent as NodeIcon } from '../../assets/icons/nodejs-icon.svg';
import { ReactComponent as MongoIcon } from '../../assets/icons/mongodb-icon.svg';
import { ReactComponent as ExpressIcon } from '../../assets/icons/express-icon.svg';
import { ReactComponent as JavaScriptIcon } from '../../assets/icons/javascript-icon.svg';
import { ReactComponent as HtmlCssIcon } from '../../assets/icons/htmlcss-icon.svg';
import { ReactComponent as PythonIcon } from '../../assets/icons/python-icon.svg';
import { ReactComponent as DjangoIcon } from '../../assets/icons/django-icon.svg';
import { ReactComponent as SqlIcon } from '../../assets/icons/sql-icon.svg';
import { ReactComponent as GitIcon } from '../../assets/icons/git-icon.svg';
import { ReactComponent as AwsIcon } from '../../assets/icons/aws-icon.svg';
import { ReactComponent as DockerIcon } from '../../assets/icons/docker-icon.svg';
import { ReactComponent as KubernetesIcon } from '../../assets/icons/kubernetes-icon.svg';
import { ReactComponent as CicdIcon } from '../../assets/icons/cicd-icon.svg';
import { ReactComponent as AgileIcon } from '../../assets/icons/agile-icon.svg';
import { ReactComponent as ScrumIcon } from '../../assets/icons/scrum-icon.svg';
import { ReactComponent as KanbanIcon } from '../../assets/icons/kanban-icon.svg';

const skills = [
  { name: 'React', proficiency: 90, IconComponent: ReactIcon },
  { name: 'Node.js', proficiency: 85, IconComponent: NodeIcon },
  { name: 'MongoDB', proficiency: 80, IconComponent: MongoIcon },
  { name: 'Express', proficiency: 80, IconComponent: ExpressIcon },
  {
    name: 'JavaScript',
    proficiency: 90,
    IconComponent: JavaScriptIcon,
  },
  { name: 'HTML/CSS', proficiency: 95, IconComponent: HtmlCssIcon },
  { name: 'Python', proficiency: 70, IconComponent: PythonIcon },
  { name: 'Django', proficiency: 70, IconComponent: DjangoIcon },
  { name: 'SQL', proficiency: 75, IconComponent: SqlIcon },
  { name: 'Git', proficiency: 85, IconComponent: GitIcon },
  { name: 'AWS', proficiency: 75, IconComponent: AwsIcon },
  { name: 'Docker', proficiency: 70, IconComponent: DockerIcon },
  {
    name: 'Kubernetes',
    proficiency: 60,
    IconComponent: KubernetesIcon,
  },
  { name: 'CI/CD', proficiency: 65, IconComponent: CicdIcon },
  { name: 'Agile', proficiency: 80, IconComponent: AgileIcon },
  { name: 'Scrum', proficiency: 80, IconComponent: ScrumIcon },
  { name: 'Kanban', proficiency: 75, IconComponent: KanbanIcon },
];

const SkillsShowcase = () => {
  const themeSettings = useThemeSettings();

  return (
    <div
      className="skills-showcase"
      style={{
        backgroundColor: themeSettings.colors.background,
        color: themeSettings.colors.text,
      }}
    >
      <div className="background-animation"></div>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="skill-bar"
          data-aos="fade-up"
          style={{
            borderColor: themeSettings.colors.accent,
            color: themeSettings.colors.text,
          }}
        >
          <div className="particle-effect"></div>
          <div className="skill-info">
            <skill.IconComponent className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
            <span className="skill-badge">{skill.level}</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${skill.proficiency}%`,
                background: `linear-gradient(90deg, ${themeSettings.colors.primary}, ${themeSettings.colors.accent})`,
              }}
            ></div>
          </div>
          <span className="proficiency-tooltip">
            {skill.proficiency}%
          </span>
        </div>
      ))}
    </div>
  );
};

export default SkillsShowcase;
