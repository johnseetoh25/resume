import React from 'react';
import '../sections/skills-section.css';

export default function SkillsSection() {
    const skillsList = [
        {   skillTitle: 'language', 
            itemList: [ 
                {itemIcon: '', itemText: 'HTML'}
            ],
        }
    ];
  return (
    <div className='skills-section-layout'>
        <div className='skills-section-title'>Skills</div>
    </div>
  );
}
