import React from 'react';
import '../sections/header-section.css';

export default function HeaderSection() {
  return (
    <div className='header-section-layout'>
      <div className='header-background'>
        <img src='photos/header-background.jpg' alt='header_background' style={{ height: '100%', width: '100%', objectFit: 'cover', opacity: 0.7}}/>
      </div>
      <div className='header-content-layout'>
          <div className='personal-introduction'>
            | Hi, I'm <span style={{fontSize: '42px', fontWeight: 700}}>See Toh Yee Ding</span>
          </div>
          <div className='personal-photo'>
              <img src='photos/profile picture.png' alt='profile-photo'/>
          </div>
      </div>
      
    </div>
  );
}
