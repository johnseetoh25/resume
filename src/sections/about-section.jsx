import { Mail, Person, Phone, School } from '@mui/icons-material'
import React from 'react';
import '../sections/about-section.css'

export default function AboutSection() {
  return (
    <div className='about-section-layout'>
       <div className='personal-about-eassy'>
        <h3>About Me</h3>
        <p>A dedicated and detail-oriented Software Engineer with a Bachelor's Degree in Computer Science (Software Engineering) from New Era University College. Possess over 2 years of experience in software development, with a strong track record in delivering high-quality web and mobile applications. Skilled in various programming languages and technologies including Flutter, PHP, MySQL, Bootstrap, Angular, React, Unity, Swagger and more.</p>       
       </div>

       <div className='personal-contact'>
        <div className='personal-detail-row'>
            <Mail/>Email: 
            <a>yeedingseetoh@gmail.com</a>
        </div>
        <div className='personal-detail-row'>
            <Phone/>Contact: 
            +6011-1057 5487
        </div>     
        </div>
    </div>
  )
}
