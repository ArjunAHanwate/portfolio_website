import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../Styles/Academic.css';

function Academic() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeItem, setActiveItem] = useState(null);

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

  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'React & React Native Developer',
      company: 'Digital Creations (Nashik)',
      period: 'Jan 2025 – Present',
      description: [
        'Developing SaaS-based apps with MERN stack',
        'Key contributor in Etable POS System',
        'Deployed apps on VPS, Play Store & App Store',
        'Real-time updates with Node.js, Socket.io & Laravel backend'
      ],
      skills: ['React.js', 'React Native', 'Node.js', 'Socket.io', 'MongoDB', 'VPS'],
      icon: '💼'
    },
    {
      id: 2,
      type: 'work',
      title: 'Fullstack Developer',
      company: 'Yahshua Software Limited (Pune)',
      period: 'Aug 2024 – Dec 2024',
      description: [
        'Built full-featured MERN e-commerce platform',
        'Focused on backend with Node.js & MongoDB',
        'API integrations, DB ops & server logic',
        'Team collaboration to deliver scalable features'
      ],
      skills: ['MERN Stack', 'MongoDB', 'Express.js', 'API Development'],
      icon: '💼'
    },
    {
      id: 3,
      type: 'work',
      title: 'Data Analyst Intern',
      company: 'YBI Foundation',
      period: 'Sept 2022 – Oct 2022',
      description: [
        'Built digit recognition model using ML & Python',
        'Hands-on experience in computer vision',
        'Applied data analytics for business insights'
      ],
      skills: ['Python', 'Machine Learning', 'Data Analytics', 'Computer Vision'],
      icon: '💼'
    },
    {
      id: 4,
      type: 'work',
      title: 'Web Development Intern',
      company: 'Various Companies',
      period: 'Dec 2022 – Jan 2023',
      description: [
        'Designed and developed a Unit Converter website using HTML, CSS & JavaScript'
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
      icon: '💼'
    },
    {
      id: 5,
      type: 'work',
      title: 'Machine Learning Intern',
      company: 'Tech Startup',
      period: 'Apr 2023 – May 2023',
      description: [
        'Worked on ML fundamentals with Python for Business & Data Analytics'
      ],
      skills: ['Python', 'Machine Learning', 'Business Analytics'],
      icon: '💼'
    },
    {
      id: 6,
      type: 'education',
      title: 'B.E. Computer Engineering',
      company: 'Sinhgad Institute Of Technology, Lonavala, Pune',
      period: '2021 - 2024',
      description: [
        'CGPA: 8.91',
        'Honour Degree in AI&ML (CGPA: 8.0)',
        'Specialized in Artificial Intelligence and Machine Learning',
        'Active participant in technical events and coding competitions'
      ],
      skills: ['Computer Science', 'AI/ML', 'Data Structures', 'Algorithms'],
      icon: '🎓'
    },
    {
      id: 7,
      type: 'education',
      title: 'Diploma – Civil Engineering',
      company: 'Government Polytechnic, Nanded',
      period: '2018 - 2021',
      description: [
        'Score: 86.95%',
        'Strong foundation in engineering principles',
        'Developed problem-solving and analytical skills'
      ],
      skills: ['Engineering Fundamentals', 'Problem Solving', 'Analytics'],
      icon: '🎓'
    },
    {
      id: 8,
      type: 'education',
      title: 'SSC (10th Grade)',
      company: 'Raja Bhagirath Vidhyalaya, Himayatnagar',
      period: '2017 - 2018',
      description: [
        'SSC with 84.60%',
        'Strong academic foundation',
        'Excellence in Mathematics and Science'
      ],
      skills: ['Mathematics', 'Science', 'Academic Excellence'],
      icon: '🎓'
    }
  ];

  const achievements = [
    {
      title: 'Honor Degree in AI/ML',
      description: 'Specialized degree with CGPA 8.0',
      icon: '🏆'
    },
    {
      title: 'High Academic Performance',
      description: 'Consistent 85%+ scores throughout',
      icon: '⭐'
    },
    {
      title: 'Industry Experience',
      description: '1+ years in professional development',
      icon: '💻'
    },
    {
      title: 'Full Stack Expertise',
      description: 'MERN stack specialization',
      icon: '🚀'
    }
  ];

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
    <div className="academic-container">
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
        {Array.from({ length: 40 }).map((_, i) => (
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
      <div className="academic-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Header Section */}
      <motion.section 
        className="academic-header"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="header-content" variants={itemVariants}>
          <h1>
            <span className="main-title">My Journey</span>
            <span className="sub-title">Professional & Academic Experience</span>
          </h1>
        </motion.div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section 
        className="achievements-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <motion.div 
          className="timeline-container"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`timeline-item ${exp.type} ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setActiveItem(exp.id)}
              onHoverEnd={() => setActiveItem(null)}
            >
              <div className="timeline-icon">
                <span>{exp.icon}</span>
              </div>
              
              <div className="timeline-content">
                <div className="content-header">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                
                <div className="content-description">
                  <ul>
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>

                <div className="content-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>

                {/* Hover Effect Background */}
                <div 
                  className={`hover-bg ${activeItem === exp.id ? 'active' : ''}`}
                ></div>
              </div>

              <div className="timeline-connector"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Statistics Section */}
      <motion.section 
        className="stats-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="stats-content">
          <h2>Experience in Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>3+</h3>
              <p>Years of Learning</p>
            </div>
            <div className="stat-item">
              <h3>1+</h3>
              <p>Years Professional Experience</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Internships Completed</p>
            </div>
            <div className="stat-item">
              <h3>8.91</h3>
              <p>CGPA in Engineering</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Evolution Section */}
      <motion.section 
        className="skills-evolution"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="evolution-content">
          <h2>Skills Evolution Timeline</h2>
          <div className="evolution-timeline">
            <div className="evolution-item">
              <div className="evolution-year">2018-2021</div>
              <div className="evolution-skills">
                <span>Engineering Fundamentals</span>
                <span>Mathematics</span>
                <span>Problem Solving</span>
              </div>
            </div>
            <div className="evolution-item">
              <div className="evolution-year">2021-2023</div>
              <div className="evolution-skills">
                <span>Programming</span>
                <span>Data Structures</span>
                <span>Web Development</span>
              </div>
            </div>
            <div className="evolution-item">
              <div className="evolution-year">2023-2024</div>
              <div className="evolution-skills">
                <span>MERN Stack</span>
                <span>AI/ML</span>
                <span>Full Stack Development</span>
              </div>
            </div>
            <div className="evolution-item">
              <div className="evolution-year">2024-Present</div>
              <div className="evolution-skills">
                <span>React Native</span>
                <span>DevOps</span>
                <span>System Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="academic-cta"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="cta-content">
          <h2>Ready to Add Your Project to My Journey?</h2>
          <p>Let's create something extraordinary together and add another milestone to this timeline.</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 197, 52, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Collaborate
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}

export default Academic;