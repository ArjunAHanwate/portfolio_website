import React from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import {
  VerticalTimeline,
  VerticalTimelineElement,
}from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School'
import Work from '@material-ui/icons/Work'


function Academic() {
  const { scroll } = useLocomotiveScroll()

  return (
    <div className='experience'>
      <VerticalTimeline className='abc' lineColor = "#333333">
      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2024"
          iconStyle={{ background: "#333333", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sinhgad Institute Of Technology, Lonavala, Pune
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Computer Engineering</h4>
          <p>Bachelor Of Engineering with 8.83 CGPA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2024"
          iconStyle={{ background: "#333333", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sinhgad Institute Of Technology, Lonavala, Pune
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Artificial Intelligence and Machine Learning</h4>
          <p>Honour Degree</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#333333", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Government Polytechnic, Nanded
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          Civil Engineering
          </h4>

          <p> Diploma with 86.95% Aggregate</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{ background: "#333333", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Raja Bhagirath Vidhyalaya, Himayatnagar, Nanded
          </h3>
          <p>SSC with 84.60%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1 Dec 2022 - 1 Jan 2023"
          iconStyle={{ background: "#f86c6c", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            1 Month Internship  In Web Development
          </h3>
          <p>Designed a website of Unit Converter using HTML, CSS, Javascript 
            </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="3 Apr 2023 - 2 May 2023"
          iconStyle={{ background: "#f86c6c", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            1 Month Internship In ML
          </h3>
          <p>Learned and worked The Fundamental Of Machine Learning with Python for Business And Data Analytics</p>
        </VerticalTimelineElement>
        </VerticalTimeline>
      
    </div>
  )
}

export default Academic
