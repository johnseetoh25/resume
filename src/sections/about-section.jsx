import React, { useEffect, useState } from 'react';
import '../sections/about-section.css'
import axios from 'axios';

export default function AboutSection() {
  const [ user, setUser ] = useState({});
  
  useEffect(() => {
    axios.get("http://localhost:3001/resume")
    .then(response => {
      setUser(response.data)
    })
  })

  return (
    <div className='about-section-layout'>
      <div className='personal-about-eassy'>
        <h2>About Me</h2>
        <p>
        I am a passionate Frontend Developer with a background in Software Engineering. With a degree in Computer Science from New Era University College, I've worked on various web development projects, honing my skills in building user-centric web applications. My journey in tech has been fueled by a love for creating seamless digital experiences that make a difference. Currently, I'm focused on improving my skills in modern JavaScript frameworks and contributing to innovative projects that push the boundaries of web development. In the future, I hope to lead development teams and create impactful digital solutions on a larger scale.
        </p> 
      </div>

      <div className='personal-bio'>
        <h2>Personal Bios</h2>
        
        <div className='personal-bio-row' >
          <label>Email&thinsp;:</label><p>&emsp;{user.email}</p>
          <label>Contact&thinsp;:</label><p>&emsp;{user.contact}</p>
          <label>Date of Birth&thinsp;:</label><p>&emsp;{user.dateBirth}</p>
          <label>Nationality&thinsp;:</label><p>&emsp;{user.nationality}</p>
        </div>
        
      </div>
    </div>
  )
}
