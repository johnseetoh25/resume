import { Mail, Person, Phone, School } from '@mui/icons-material'
import React from 'react';
import '../sections/about-section.css'

export default function AboutSection() {
  return (
    <div className='about-section-layout'>
        <div className='about-section-title'>About</div>
        <div className='about-section-content'>
            <div className='personal-details'>
                <Person/> Name: See Toh Yee Ding
                <Mail/> Email: <a>yeedingseetoh@gmail.com</a>
                <Phone/> Contact NO.: +6011-1057 5487

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
