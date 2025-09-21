import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import Home from './pages/Home';
import gsap from 'gsap';
import Academic from './pages/Academic';
import ProjectDisplay from './pages/ProjectDisplay';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import LocomotiveScroll from 'locomotive-scroll';


function App() {

  

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector('.App'),
  //     smooth: true
  //   });

  //   // Clean up when the component unmounts
  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);
  

//   var elements = document.getElementsByClassName("App");
//   var cur = document.getElementById("cursor")
//   for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener("mouseenter", function () {
//       gsap.to(cur,{
//         opacity:1,
//         scale:1
//       })
//     });
//   }

//   for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener("mousemove", function (dets) {
//       gsap.to(cur,{
//        left:dets.x,
//        top:dets.y
//       });
//   })
// }
  
  return (
    <div className="App" id='ab'>
      {/* <div id="cursor"></div> */}
     <Router>
      <Navbar ></Navbar> 
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/project" element = {<Project/>}/>
        <Route path="/project/:id" element = {<ProjectDisplay/>}/>
        <Route path='/academic' element = {<Academic/>}/>
        <Route path='/contact' element = {<Contact/>}/>
      </Routes>
      {/* <Footer></Footer> */}
     </Router>
    </div>
  );
}

export default App;
