import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  SiJavascript, SiCplusplus, SiHtml5, SiCss3, SiTailwindcss, SiReact, 
  SiNodedotjs, SiExpress, SiBootstrap, SiMongodb, SiGithub, SiAngular,
  SiNextdotjs, SiMysql, SiPostgresql, SiRedis, SiPostman, SiSocketdotio
} from "react-icons/si";
import { FaTools, FaServer, FaJava, FaLinkedin, FaEnvelope, FaGithub, FaWhatsapp, FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import '../Styles/Home.css';
import { ProjectList } from '../Helper/ProjectList';// Import your project images
import PP from '../assets/pp.jpeg'
function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSkill, setActiveSkill] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const containerRef = useRef(null);
    const navigate = useNavigate();
  
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skillsData = {
    Languages: [
      { icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
      { icon: FaJava, name: "Java", color: "#ff0000ff" },
      { icon: SiCplusplus, name: "C++", color: "#00599C" },
      { icon: SiHtml5, name: "HTML", color: "#e34c26" },
      { icon: SiCss3, name: "CSS", color: "#264de4" },
    ],
    Frameworks: [
      { icon: SiReact, name: "React.js", color: "#61DBFB" },
      { icon: SiAngular, name: "Angular.js", color: "#DD0031" },
      { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
      { icon: SiReact, name: "React Native", color: "#61DBFB" },
      { icon: SiNodedotjs, name: "Node.js", color: "#3C873A" },
      { icon: SiExpress, name: "Express.js", color: "#000000" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
      { icon: SiBootstrap, name: "Bootstrap", color: "#563d7c" },
    ],
    Databases: [
      { icon: SiMongodb, name: "MongoDB", color: "#4DB33D" },
      { icon: SiRedis, name: "Redis", color: "#DC382D" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    ],
    Tools: [
      { icon: () => <div className="aws-icon">AWS</div>, name: "AWS", color: "#FF9900" },
      { icon: SiGithub, name: "GitHub", color: "#171515" },
      { icon: SiPostman, name: "Postman", color: "#FF6C37" },
      { icon: SiSocketdotio, name: "Socket.io", color: "#010101" },
      { icon: FaServer, name: "VPS Hosting", color: "#4A90E2" },
      { icon: FaTools, name: "DevOps", color: "#6C757D" },
    ]
  };



  const experiences = [
    {
      title: "React & React Native Developer",
      company: "Digital Creations (Nashik)",
      period: "Jan 2025 – Present",
      type: "work"
    },
    {
      title: "Fullstack Developer",
      company: "Yahshua Software Limited (Pune)",
      period: "Aug 2024 – Dec 2024",
      type: "work"
    },
    {
      title: "B.E. Computer Engineering",
      company: "Sinhgad Institute Of Technology, Lonavala",
      period: "2021 - 2024",
      type: "education"
    }
  ];

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="home-container" ref={containerRef}>
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
        {Array.from({ length: 50 }).map((_, i) => (
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

      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        style={{ y: heroY, opacity: heroOpacity }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <motion.h1 variants={itemVariants}>
              <span className="hero-name">Arjun</span>
              <span className="hero-surname">Hanwate</span>
            </motion.h1>
            
            <motion.div className="hero-description" variants={itemVariants}>
              <p>Full-Stack Developer crafting scalable SaaS web and mobile applications with 1+ year of experience in the MERN ecosystem.</p>
            </motion.div>

            <motion.div className="hero-social" variants={itemVariants}>
              <a href="https://www.linkedin.com/in/arjun-hanwate-94a424230/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
              </a>
              <a href="https://github.com/ArjunAHanwate" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </motion.div>
          </div>

          <motion.div className="hero-image" variants={itemVariants}>
            <div className="profile-container">
              <div className="profile-ring ring-1"></div>
              <div className="profile-ring ring-2"></div>
              <div className="profile-ring ring-3"></div>
       <div className="profile-image">
  <img src={PP} alt="Profile" className="profile-photo" />
</div>

              {/* Floating Tech Icons */}
              <div className="floating-tech tech-1"><SiReact /></div>
              <div className="floating-tech tech-2"><SiNodedotjs /></div>
              <div className="floating-tech tech-3"><SiJavascript /></div>
            </div>
          </motion.div>
        </div>

        <motion.div className="scroll-indicator" variants={itemVariants}>
          <span>Scroll to explore</span>
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <section className="skills-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Skills</h2>
          <p>My Technical Arsenal</p>
        </motion.div>

        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <motion.div
            key={category}
            className="skills-category"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
          >
            <h3>{category}</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  onHoverStart={() => setActiveSkill(skill.name)}
                  onHoverEnd={() => setActiveSkill(null)}
                >
                  <div className="skill-icon">
                    {typeof skill.icon === 'function' ? (
                      <skill.icon />
                    ) : (
                      <skill.icon style={{ color: skill.color }} />
                    )}
                  </div>
                  <span>{skill.name}</span>

                  <AnimatePresence>
                    {activeSkill === skill.name && (
                      <motion.div
                        className="skill-tooltip"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        {skill.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Projects Section */}
<section className="projects-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Projects</h2>
        <p>My Personal Projects</p>
      </motion.div>

      <div className="projects-grid">
        {ProjectList.map((project, index) => {
          // Convert the skill string to an array of technologies
          const techArray = project.skill.split(',').map(tech => tech.trim());
          
          return (
            <motion.div
              key={project.name}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
                            onClick={() => navigate(`/project/${index}`)}

            >
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="project-overlay">
                  <span>View Project</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.name}</h3>
                <div className="project-tech">
                  {techArray.slice(0, 4).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                  {techArray.length > 4 && (
                    <span className="tech-tag">+{techArray.length - 4} more</span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>

      {/* Experience Section */}
      <section className="experience-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Experience</h2>
          <p>My Professional Journey</p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${exp.type}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* <div className="timeline-icon">
                {exp.type === 'work' ? '💼' : '🎓'}
              </div> */}
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="timeline-period">{exp.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Get In Touch</h2>
          <p>Contact Me</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-item">
              <FaWhatsapp />
              <div>
                <h4>WhatsApp</h4>
                <p>+91-9766440296</p>
                <a href="https://wa.me/9766440296" target="_blank" rel="noopener noreferrer">
                  Write me →
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <div>
                <h4>Address</h4>
                <p>Nanded, Maharashtra</p>
                <a href="#" onClick={() => window.open("https://www.google.com/maps", "_blank")}>
                  Reach to me →
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <div>
                <h4>E-mail</h4>
                <p>arjunahanwate358@gmail.com</p>
                <a href="mailto:arjunahanwate358@gmail.com">
                  Mail me →
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
          >
            <h3>Send Message</h3>
            
            <div className="input-group">
              <input 
                type="text" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleFormChange}
              />
              <label>Name</label>
            </div>

            <div className="input-group">
              <input 
                type="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleFormChange}
              />
              <label>Email</label>
            </div>

            <div className="input-group">
              <textarea 
                name="message" 
                required
                value={formData.message}
                onChange={handleFormChange}
              ></textarea>
              <label>Message</label>
            </div>

            <div className="form-buttons">
              <button type="submit" className="btn-primary">Send</button>
              <button 
                type="button" 
                className="btn-secondary"
                onClick={() => window.open('https://drive.google.com/file/d/1k1-QLtvzodylf6IM_rcwlFpaJLcvPLcN/view?usp=sharing', '_blank')}
              >
                <FaDownload /> Resume
              </button>
            </div>
          </motion.form>
        </div>
      </section>


    </div>
  );
}

export default Home;