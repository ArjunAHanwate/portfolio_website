import React, { useState,useRef } from 'react'
import "../Styles/Contact.css"
import whats from "../assets/icons8-whatsapp-30.png"
import addrss from "../assets/icons8-home-address-30.png"
import mail from "../assets/icons8-gmail-login-30.png"
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';






export default function Contact() {

  const resumeUrl = 'https://drive.google.com/file/d/1HOuOUfVQqC0DaEpDZebhZHtLO6izo6tE/view?usp=drive_link';

  // Event handler for the "Download CV" button
  const handleDownloadClick = () => {
    // Create an anchor element to trigger the download
    const link = document.createElement('a');
    console.log(link)
    link.href = resumeUrl;
    link.download = 'Resume.pdf';
    link.click();
  };


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5evebtg', 'template_5plbjqq', form.current, 'D1ql7-hPO47Pg-e_e')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  const openGoogleMaps = () => {
    window.open("https://www.google.com/maps", "_blank");
  };
 
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const notify = () =>{
    if (formData.from_name && formData.from_email && formData.message) {
      toast('Sent Successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }

        
      )
    }else{
      toast.error('Please fill the all required fields.');
    }
    
  }

  return (
    <>

      <h2 style={{marginTop:"20px", marginBottom:"0px"}} className="title">Get In Touch</h2>
      <h4 style={{fontWeight:"lighter", margin:"0px"}} className='subtitle'>Contact me</h4>
      
      <div className="container">
        <div className="contactInfo">
       
        <div className="commonBox">
        <div className="box">
              <div className="img">
                <img src={whats} alt="WhatsApp" />
              </div>
              <div className="name">
                <p style={{margin:"0px"}}>Whatsapp</p>
                +91-9766440296  
              </div>
             <a style={{textDecoration:"none",color:"black"}} href="https://wa.me/9766440296">Write me &rarr;</a>
          </div>

          <div className="box">
            <div className="img">
              <img src={addrss} alt="WhatsApp" />
            </div>
            <div className="name">
                <p style={{margin:"0px"}}>Address</p>
                Nanded, Maharashtra
            </div>
              <a onClick={openGoogleMaps}>Reach to me &rarr;</a>
          </div>


          <div className="box" id=''>
            <div className="img" >
              <img src={mail} alt="WhatsApp" />
            </div>
            <div className="name">
              <p style={{margin:"0px"}}>E-mail</p>
              arjunahanwate358@gmail.com
            </div>
            <a style={{textDecoration:"none", color:"black"}} href='mailto:arjunahanwate358@gmail.com'>Mail me &rarr;</a>
          </div>
        </div>


        </div>
        {/* https://formsubmit.co/c8205b7b9c30738dd268f091050cd31a */}
        <div className="contactForm">
          <form ref={form} onSubmit={sendEmail} >
            <h2>Send Message</h2>

            <div className='inputBox'>
              <input type="text" onChange={handleChange} required name="from_name" id="" />
              <span>Name</span>
            </div>

              <div className='inputBox'>
                <input  type="text"  onChange={handleChange} name="from_email" id="" required />
                <span>Email</span>
              </div>

              <div className='inputBox'>
                <textarea type='text' onChange={handleChange} name="message" id="" required ></textarea>
                <span>Message</span>
              </div>

             <div style={{display:"flex",}} className="inputBox">
               <input className='btn' type="Submit"  onClick={notify} value="Send" />
               <ToastContainer/>
               <input className='btn' style={{width:"130px"}} type="button" onClick={handleDownloadClick}  value="Resume"/>
             </div> 
          </form>
        </div>
    </div> 
  </>
  )
}
