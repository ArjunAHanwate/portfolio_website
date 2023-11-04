import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../Helper/ProjectList"
import GitHubIcon from "@material-ui/icons/GitHub";
import "../Styles/ProjectDisplay.css"

function ProjectDisplay() {



  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image}/>
      <p>
        <div className="skil"><b>Skills :</b></div>
         <div className="pskill">{project.skill}</div> 
      </p>
     <a href={project.link} target="blank">
       <GitHubIcon>
      </GitHubIcon>
        </a>
    </div>
  );
}

export default ProjectDisplay;