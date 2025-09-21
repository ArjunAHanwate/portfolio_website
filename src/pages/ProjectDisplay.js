import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectList } from "../Helper/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import LaunchIcon from "@material-ui/icons/Launch";
import "../Styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = ProjectList[id];

  if (!project) {
    return (
      <div className="project">
        <div className="project-background">
          <div className="project-orb project-orb-1"></div>
          <div className="project-orb project-orb-2"></div>
        </div>
        
        <div className="project-header">
          <button 
            className="back-button" 
            onClick={() => navigate(-1)}
          >
            <ArrowBackIcon />
            Back to Projects
          </button>
        </div>
        
        <div className="project-content">
          <h1>Project not found</h1>
        </div>
      </div>
    );
  }

  const skillsArray = project.skill ? project.skill.split(',').map(skill => skill.trim()) : [];

  return (
    <div className="project">
      <div className="project-background">
        <div className="project-orb project-orb-1"></div>
        <div className="project-orb project-orb-2"></div>
      </div>
      
      <div className="project-header">
        <button 
          className="back-button" 
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon />
          Back to Projects
        </button>
      </div>

      <div className="project-content">
        <div className="project-image-section">
          <h1>{project.name}</h1>
          <img src={project.image} alt={project.name} />
          
          <div className="project-links">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              <GitHubIcon />
              <span>View Code</span>
            </a>
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                <LaunchIcon />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        <div className="project-info">
          <div className="project-description">
            <h3>About this project</h3>
            <p>
              {project.description || 
                `${project.name} is a comprehensive web application that demonstrates modern development practices and cutting-edge technologies. This project showcases full-stack development capabilities with a focus on user experience, performance optimization, and scalable architecture. Built with attention to detail and following industry best practices.`
              }
            </p>
          </div>

          {skillsArray.length > 0 && (
            <div className="project-skills">
              <h3>Technologies Used</h3>
              <div className="skills-container">
                {skillsArray.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}

          {project.features && (
            <div className="project-features">
              <h3>Key Features</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;