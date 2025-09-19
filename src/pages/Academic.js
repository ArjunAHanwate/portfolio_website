import React from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

function Academic() {
  const { scroll } = useLocomotiveScroll();

  return (
    <div className='experience'>
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>My Professional & Academic Journey</h2>

      <VerticalTimeline lineColor="#333333">

        {/* 💼 Work Experience (latest first) */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2025 – Present"
          iconStyle={{ background: "#fbc534", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3>React & React Native Developer – Digital Creations (Nashik)</h3>
          <p>
            • Developing SaaS-based apps with MERN stack <br />
            • Key contributor in Etable POS System <br />
            • Deployed apps on VPS, Play Store & App Store <br />
            • Real-time updates with Node.js, Socket.io & Laravel backend
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2024 – Dec 2024"
          iconStyle={{ background: "#fbc534", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3>Fullstack Developer – Yahshua Software Limited (Pune)</h3>
          <p>
            • Built full-featured MERN e-commerce platform <br />
            • Focused on backend with Node.js & MongoDB <br />
            • API integrations, DB ops & server logic <br />
            • Team collaboration to deliver scalable features
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sept 2022 – Oct 2022"
          iconStyle={{ background: "#fbc534", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3>Data Analyst Intern – YBI Foundation</h3>
          <p>
            • Built digit recognition model using ML & Python <br />
            • Hands-on experience in computer vision <br />
            • Applied data analytics for business insights
          </p>
        </VerticalTimelineElement>

        {/* 🧑‍💻 Short Internships */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Dec 2022 – Jan 2023"
          iconStyle={{ background: "#fbc534", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3>Web Development Intern</h3>
          <p>Designed and developed a Unit Converter website using HTML, CSS & JavaScript.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Apr 2023 – May 2023"
          iconStyle={{ background: "#fbc534", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3>Machine Learning Intern</h3>
          <p>Worked on ML fundamentals with Python for Business & Data Analytics.</p>
        </VerticalTimelineElement>

        {/* 🎓 Education (latest first) */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2024"
          iconStyle={{ background: "#333333", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3>Sinhgad Institute Of Technology, Lonavala, Pune</h3>
          <h4>B.E. Computer Engineering</h4>
          <p>CGPA: 8.91 | Honour Degree in AI&ML (CGPA: 8.0)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#333333", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3>Government Polytechnic, Nanded</h3>
          <h4>Diploma – Civil Engineering</h4>
          <p>Score: 86.95%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{ background: "#333333", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3>Raja Bhagirath Vidhyalaya, Himayatnagar</h3>
          <p>SSC with 84.60%</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Academic;
