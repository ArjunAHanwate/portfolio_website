import React from 'react'
import  LinkedIn  from '@material-ui/icons/LinkedIn'
import  Email  from '@material-ui/icons/Email'
import  GitHub  from '@material-ui/icons/GitHub'
import { useEffect } from 'react'
import '../Styles/Home.css'
import gsap from 'gsap'


function Home() {
 const linkedIn = 'https://www.linkedin.com/in/arjun-hanwate-94a424230/'
 const email = 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'
 const gitHub = 'https://github.com/ArjunAHanwate'
 

//  useEffect(() => {
//   gsap.from(".about .h2", {
//     y:100,
//     opacity: 0,
//     delay:0.5,
//     duration: 0.9, // Corrected typo here
//     stagger: 0.2
//   });
// }, []);

  return (
    <>
    <div className='home'>
      <div className="box">
        <div className="about">
          <p className='h2'><span>Arjun&nbsp;</span>Hanwate</p>
          
          <div className="prompt">
            <p className='me'>I'm a dedicated web developer eager to embrace and master new technologies in order to deliver user-friendly and responsive web apps.</p>
            <div className="svg">
              <a  href={linkedIn} target="_blank" rel="noopener noreferrer"><LinkedIn />
                </a>
              
              
                <a href={email} target="_blank" rel="noopener noreferrer">
                <Email></Email>
                </a>
                <a href={gitHub} target="_blank" rel="noopener noreferrer">
                <GitHub>
                </GitHub>
                </a>
            </div>
          
            
          </div>
      </div>

      <div className="img2">
        <div className="profile"></div>

      </div>
      </div>
   

      <h1>Skills</h1>
      <h6>My Technical Level</h6>

      <div className="skills">
        <div className="image">
            <div className="photo">

            </div>
        </div>

        <div className="text">
          <div className="mainContainer">
            <div className="skillBox">
               <h2>Front-End</h2>
                <p>ReactJs, HTML, CSS, JavaScript, Bootstrap, NextJs</p>
            </div>
            <div className="skillBox">
                <h2>Technical</h2>
                <p>DSA, OOPs, Problem-Solving, SQL Database, Github</p>
              </div>
              <div className="skillBox">
                <h2>Languages</h2>
                <p>Java, JavaScript, C++, Basic C#.Net</p>
              </div>
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Home
