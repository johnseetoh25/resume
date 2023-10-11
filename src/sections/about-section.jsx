import { Mail, Person, Phone, School } from '@mui/icons-material'
import React from 'react';
import '../sections/about-section.css'

export default function AboutSection() {
  return (
    <div className='about-section-layout'>
        <div className='about-section-title'>About</div>
        <div className='about-section-content'>
            <div className='personal-details'>
                <div className='personal-detail-row'>
                    <span style={{fontWeight: 'bold', display: 'flex', alignItems: 'center'}}>
                        <Person/>&thinsp;Name 
                    </span>&emsp;See Toh Yee Ding
                </div>
                <div className='personal-detail-row'>
                    <Mail/>Email: 
                    <a>yeedingseetoh@gmail.com</a>
                </div>
                <div className='personal-detail-row'>
                    <Phone/>Contact: 
                    +6011-1057 5487
                </div>
                
            </div>
            <div className='education-content-layout'>
                <div className='graduation-photo'>
                    <img src='' alt='New Era University College Logo' />
                    <img src='' alt='graduation-photo' />
                    <div className='education-information-card'>
                        <div className='education-info-title'><School/>&thinsp;New Era University College</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
