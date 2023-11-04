import React from 'react'
import { useEffect,useState } from 'react';
import {Link, useLocation} from "react-router-dom";
import '../Styles/Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(()=>{
    setExpandNavbar(false);
  },[location]);
  
  return (
    <div className='navbar' id = {expandNavbar?"open":"close"}>
      <div className="toggleButton">
        <button onClick={()=> {
          setExpandNavbar((prev) => !prev)
        }} >
           <ReorderIcon/>
        </button>
      </div>
      <div className="links">
        <Link className='first' to="/">Home</Link>
        <Link className='first' to="/project">Project</Link>
        <Link className='first'to="/academic">Academic</Link>
        <Link className='first' id='contact' to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
