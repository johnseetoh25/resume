import React from 'react';
import '../sections/about-section.css'

export default function AboutSection() {
  const personalBioList = [
    { label: 'Email', info: 'yeedingseetoh@gmail.com' },
    { label: 'Phone', info: '+6011-1057 5487' },
    { label: 'Date of Birth', info: '25/03/1998' },
    { label: 'Nationality', info: 'Malaysian'}
  ]

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
        {personalBioList.map((personBio, index) => (
          <div className='personal-bio-row' key={index}>
            <label>{personBio.label}&thinsp;:</label><p>&emsp;{personBio.info}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
