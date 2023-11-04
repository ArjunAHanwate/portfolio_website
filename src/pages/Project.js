import React from 'react'
// import proj1 from '../assets/proj1.png'
// import proj2 from '../assets/proj2.jpg'
import '../Styles/Project.css'
import Projectitem from '../Component/Projectitem'
import  {ProjectList}  from '../Helper/ProjectList'

function Project() {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <h6>My Personal Projects</h6>
      <div className="projectList">
        {ProjectList.map((project,inx)=>{
          return <Projectitem name ={project.name} image={project.image}id = {inx}/>
        })}
      </div>
    </div>
  )
}

export default Project
