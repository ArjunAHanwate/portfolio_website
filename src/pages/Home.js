import React from 'react'
import LinkedIn from '@material-ui/icons/LinkedIn'
import Email from '@material-ui/icons/Email'
import GitHub from '@material-ui/icons/GitHub'
import { useEffect } from 'react'
import '../Styles/Home.css'
import gsap from 'gsap'
import { motion } from "framer-motion";
import { 
  SiJavascript, SiCplusplus, SiHtml5, SiCss3, SiTailwindcss, SiReact, 
  SiNodedotjs, SiExpress, SiBootstrap, SiMongodb, SiGithub, SiAngular,
  SiNextdotjs, SiMysql, SiPostgresql, SiRedis, SiLinux,
  SiUbuntu, SiPostman, SiSocketdotio, SiDocker
} from "react-icons/si";
import { FaTools, FaServer, FaJava } from "react-icons/fa";

// Custom AWS Icon Component
// Custom AWS Component with proper styling
const AWSComponent = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }}>
    <div style={{
      color: 'black',
      padding: '8px 12px',
      borderRadius: '4px',
      fontSize: '18px',
      fontWeight: 'bold',
      letterSpacing: '1px',
      marginBottom: '4px'
    }}>
      AWS
    </div>
  </div>
);

// Custom C# Icon Component
const CSharpIcon = ({ size = 40, color = "#239120" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zM9.426 7.12a5.55 5.55 0 011.985-.38c.43 0 .863.04 1.292.122v2.018a4.26 4.26 0 00-.615-.047c-.43 0-.855.047-1.271.14a3.26 3.26 0 00-1.093.457 2.47 2.47 0 00-.771.794 2.22 2.22 0 00-.298 1.205c0 .44.099.834.298 1.205.2.357.463.66.771.885.334.2.706.342 1.093.457.416.093.841.14 1.271.14.216 0 .424-.016.615-.047v2.018a7.75 7.75 0 01-1.292.122 5.55 5.55 0 01-1.985-.38 4.32 4.32 0 01-1.487-.984 4.24 4.24 0 01-.93-1.449c-.216-.549-.324-1.138-.324-1.766s.108-1.217.324-1.766c.2-.55.518-1.026.93-1.449a4.32 4.32 0 011.487-.984zM16.4 7.68h.48l.96 2.4.96-2.4h.48v4.64h-.4v-3.6l-.8 2h-.48l-.8-2v3.6h-.4V7.68zm-1.6 0h.48l.96 2.4.96-2.4h.48v4.64h-.4v-3.6l-.8 2h-.48l-.8-2v3.6h-.4V7.68z"/>
  </svg>
);

function Home() {
  const linkedIn = 'https://www.linkedin.com/in/arjun-hanwate-94a424230/'
  const email = 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'
  const gitHub = 'https://github.com/ArjunAHanwate'

  return (
    <>
      <div className='home'>
        <div className="box">
          <div className="about">
            <p className='h2'><span>Arjun&nbsp;</span>Hanwate</p>
            
            <div className="prompt">
              <p className='me'>Full-Stack Developer (MERN) with 1+ year of experience building scalable SaaS web and mobile applications. 
Skilled in React.js, React Native, Node.js, Express.js, and MongoDB.</p>
              <div className="svg">
                <a href={linkedIn} target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
                <a href={email} target="_blank" rel="noopener noreferrer"><Email /></a>
                <a href={gitHub} target="_blank" rel="noopener noreferrer"><GitHub /></a>
              </div>
            </div>
          </div>

          <div className="img2">
            <div className="profile"></div>
          </div>
        </div>

        <div className="skills-section">
          <h1>Skills</h1>
          <h6>My Technical Level</h6>

          <div className="skills">
            {/* Languages */}
            <div className="skills-category">
              <h2>Languages</h2>
              <div className="skills-grid">
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiJavascript size={40} color="#f7df1e" />
                  <p>JavaScript</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <FaJava size={40} color="#ff0000ff" />
                  <p>Java</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiCplusplus size={40} color="#00599C" />
                  <p>C++</p>
                </motion.div>
                {/* <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <CSharpIcon size={40} color="#239120" />
                  <p>C# .NET</p>
                </motion.div> */}
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiHtml5 size={40} color="#e34c26" />
                  <p>HTML</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiCss3 size={40} color="#264de4" />
                  <p>CSS</p>
                </motion.div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="skills-category">
              <h2>Frameworks</h2>
              <div className="skills-grid">
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiReact size={40} color="#61DBFB" />
                  <p>React.js</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiAngular size={40} color="#DD0031" />
                  <p>Angular.js</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiNextdotjs size={40} color="#000000" />
                  <p>Next.js</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiReact size={40} color="#61DBFB" />
                  <p>React Native</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiNodedotjs size={40} color="#3C873A" />
                  <p>Node.js</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiExpress size={40} color="#000000" />
                  <p>Express.js</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiTailwindcss size={40} color="#38BDF8" />
                  <p>Tailwind CSS</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiBootstrap size={40} color="#563d7c" />
                  <p>Bootstrap</p>
                </motion.div>
              </div>
            </div>

            {/* Databases */}
            <div className="skills-category">
              <h2>Databases</h2>
              <div className="skills-grid">
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiMongodb size={40} color="#4DB33D" />
                  <p>MongoDB</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiRedis size={40} color="#DC382D" />
                  <p>Redis</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiMysql size={40} color="#4479A1" />
                  <p>MySQL</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiPostgresql size={40} color="#336791" />
                  <p>PostgreSQL</p>
                </motion.div>
              </div>
            </div>

            {/* Tools */}
            <div className="skills-category">
              <h2>Tools</h2>
              <div className="skills-grid">
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <AWSComponent size={40} color="#FF9900" />
                  <p>AWS</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiGithub size={40} color="#171515" />
                  <p>GitHub</p>
                </motion.div>
                {/* <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiUbuntu size={40} color="#E95420" />
                  <p>Ubuntu</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiLinux size={40} color="#FCC624" />
                  <p>Linux</p>
                </motion.div> */}
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiPostman size={40} color="#FF6C37" />
                  <p>Postman</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <SiSocketdotio size={40} color="#010101" />
                  <p>Socket.io</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <FaServer size={40} color="#4A90E2" />
                  <p>VPS Hosting</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
                  <FaTools size={40} color="#6C757D" />
                  <p>DevOps</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home