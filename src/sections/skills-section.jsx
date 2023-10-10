import React from 'react';
import '../sections/skills-section.css';

function SkillsCard({skillCard}) {
    return (
        <div className='skill-card-layout'>
            <div className='skill-card-title'>{skillCard.skillTitle}</div>
        </div>
    );
}

export default function SkillsSection() {
    const skillCardsList = [
        {   skillTitle: 'language', 
            itemList: [ 
                { itemIcon: '', itemText: 'HTML' },
                { itemIcon: '', itemText: 'CSS' },
                { itemIcon: '', itemText: 'HTML' },
            ],
        },
        {   skillTitle: 'framework', 
            itemList: [ 
                { itemIcon: '', itemText: 'Angular' },
                { itemIcon: '', itemText: 'React' },
                { itemIcon: '', itemText: 'Vue' },
            ],
        }
    ];
  return (
    <div className='skills-section-layout'>
        <div className='skills-section-title'>Skills</div>
        <div className='skill-card-list-layout'>
            { skillCardsList.map((skillCard, index) => (
                <SkillsCard 
                    key={index}
                    skillCard={skillCard}
                />
            ))}
        </div>
    </div>
  );
}
