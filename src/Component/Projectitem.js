import React from 'react'
import { useNavigate } from 'react-router-dom'

function Projectitem({ image, name, id }) {
  const navigate = useNavigate();

  // Get skills from ProjectList if available
  const getSkillsPreview = () => {
    try {
      const { ProjectList } = require('../Helper/ProjectList');
      const project = ProjectList[id];
      if (project && project.skill) {
        const skills = project.skill.split(',').map(s => s.trim()).slice(0, 3);
        return skills;
      }
    } catch (error) {
      console.log('Skills not available');
    }
    return [];
  };

  const skillsPreview = getSkillsPreview();

  return (
    <div className='projectItem' onClick={() => {
      navigate("/project/" + id)
    }}>
      <div 
        style={{ backgroundImage: `url(${image})` }} 
        className='bgImage'
      />
      
      <div className="project-content">
        <h1>{name}</h1>
        
        {skillsPreview.length > 0 && (
          <div className="project-skills-preview">
            {skillsPreview.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
            {skillsPreview.length === 3 && (
              <span className="skill-tag more">+more</span>
            )}
          </div>
        )}
      </div>

      <div className="project-overlay">
        <span className="view-text">View Project</span>
      </div>
    </div>
  )
}

export default Projectitem