import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../Styles/Project.css';
import { ProjectList } from '../Helper/ProjectList';// Import your project images




function Project() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const categories = ['All', 'Web App', 'Mobile App', 'Full Stack', 'AI/ML'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="projects-container">
      {/* Cursor Follower */}
      <div 
        className="cursor-follower"
        style={{
          left: mousePosition.x * window.innerWidth - 10,
          top: mousePosition.y * window.innerHeight - 10,
        }}
      />

      {/* Floating Particles */}
      <div className="particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Background Effects */}
      <div className="projects-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Header Section */}
      <motion.section 
        className="projects-header"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="header-content" variants={itemVariants}>
          <h1>
            <span className="main-title">Projects</span>
            <span className="sub-title">My Personal Projects</span>
          </h1>
        </motion.div>

        {/* Category Filter */}
        <motion.div className="category-filter" variants={itemVariants}>
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </motion.section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {ProjectList.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => navigate(`/project/${index}`)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <span className="view-text">View Project</span>
                    <div className="project-links">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description.substring(0, 100)}...</p>
                
                <div className="project-tech">
                  {project.skill.split(',').slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech.trim()}</span>
                  ))}
                  {project.skill.split(',').length > 3 && (
                    <span className="tech-tag more">+{project.skill.split(',').length - 3}</span>
                  )}
                </div>
              </div>

              {/* Animated border */}
              <div className="project-border"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="projects-stats"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="stats-grid">
          <div className="stat-item">
            <h3>{ProjectList.length}+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Technologies Mastered</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Maintenance Support</p>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="projects-cta"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="cta-content">
          <h2>Ready to Start Your Next Project?</h2>
          <p>Let's collaborate and bring your vision to life with cutting-edge technology and innovative solutions.</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 197, 52, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
          >
            Get In Touch
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}

export default Project;