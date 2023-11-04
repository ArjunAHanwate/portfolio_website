import React from 'react'
import  InstagramIcon  from '@material-ui/icons/Instagram'
import  LinkedInIcon from '@material-ui/icons/LinkedIn'
import  FacebookIcon  from '@material-ui/icons/Facebook'
import '../Styles/Footer.css'

function Footer() {
  const linkedIn = 'https://www.linkedin.com/in/arjun-hanwate-94a424230/'
  const instagram = 'https://www.instagram.com/arjuna_hanwate/?next=%2F'
  const facebook = 'https://www.facebook.com/arjun.hanwate.96'
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
          <a href={instagram} target="_blank" rel="noopener noreferrer"> <InstagramIcon/></a>
          <a href={facebook} target="_blank" rel="noopener noreferrer"><FacebookIcon/></a>
           
              
            
        </div>
        <p style={{color:"#000", fontWeight:"500"}}> &copy; 2023 | All Rights Reserved.
 </p>
      
    </div>
  )
}

export default Footer
