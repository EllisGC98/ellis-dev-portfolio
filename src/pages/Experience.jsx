import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../App.css';

import WorkIcon from '../components/WorkIcon';


const Experience = () => {

  const handleDownload = () => {
    const cvFile = process.env.PUBLIC_URL + '/Ellis_CV.pdf';
    window.open(cvFile, '_blank');
  }

  const workIconStyles = {background: "#06D6A0" };


  const workExperienceData = [
    {
      id: 1,
      company: "Citi",
      title: "Production Support Analyst",
      date: "September 2021 - Present",
      description: 
      "Facilitated the success of trading businesses within Global Markets at Citi by adeptly leveraging a diverse array of technologies, including SQL, Unix, and Python. Proactively engaged in the continuous maintenance, monitoring, and automation of key processes, contributing to the seamless operation and efficiency of the trading environment",
      icon: "work",
    },
    {
      id: 2,
      company: "Odd Orcs NFT",
      title: "Co-Founder & Developer",
      date: "June 2022 - June 2023",
      description: 
      "Co-Founded & led the development of an Ethereum based NFT Project which generated 13 ETH in revenue in its first month of the Blockchain. Tech stack included using React, JavaScript, HTML/CSS, Node.js & Solidity to build a landing page website, NFT minting dApp & smart contract.",
      icon: "work",
    },
    {
      id: 3,
      company: "Tesco",
      title: "Team Leader",
      date: "July 2014 - August 2021",
      description: 
      "Part-time role in retail whist studying for degree. Involved supervising seventy customer assistants in the checkout department, ensuring to priortise and allocate tasks to warrant proficiency all while ensuring the customers are served quickly.",
      icon: "work",
    },
    {
      id: 4,
      company: "Belfast City Council",
      title: "Infrastructure Support Analyst",
      date: "July 2019 - July 2020",
      description: 
      "Placement year in which I worked as an infrastructure analyst & liased with various council departments. the role consisted of providing second line technical support for any hardware/software issues.",
      icon: "work",
    },
  
 ];

 return (
    <div>
       <div className='experience-container'>
        <div className='experience-text'>
          <p>Experience</p>
          <h3>Timeline</h3>
        </div>
       <VerticalTimeline>
          {workExperienceData.map((entry) => (
             <VerticalTimelineElement
                key={entry.key}
                date={entry.date}
                dateClassName="date"
                iconStyle={workIconStyles}
                icon={<WorkIcon />}
             >
                <h3 className="vertical-timeline-element-title">{entry.title}</h3>
                <h5 className='vertical-timeline-element-subtitle'>{entry.company}</h5>
                <p id='description'>{entry.description}</p>
             </VerticalTimelineElement>
          ))}
       </VerticalTimeline>
       </div>
       <div className="download-button-container">
        <button onClick={handleDownload} className="download-button">
          Download CV
        </button>
      </div>
    </div>
 )
}

export default Experience
