import React from 'react';
import '../sections/header-section.css';

export default function HeaderSection() {
  return (
    <div className='header-section-layout'>
      <div className='header-background'>
        <img src='photos/header-background.jpg' alt='header_background' style={{ height: '100%', width: '100%', objectFit: 'cover', opacity: 0.7}}/>
      </div>
      <div className='header-content-layout'>
          <div className='personal-photo'>   
          </div>
          <div className='personal-introduction'>
            <span>See Toh Yee Ding</span>
            <br/>Web Developer
          </div>
          
      </div>
     
    </div>
  );
}
