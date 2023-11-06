import React from 'react';
import '../sections/skills-section.css';

function SkillsCard({skillCard}) {
    return (
        <div className='skill-card-layout'>
            <div className='skill-card-title'>
                <img src={skillCard.skillIcon} alt={skillCard.skillTitle} style={{ height: '40px' }}/> 
                &emsp;{skillCard.skillTitle}</div>
            <div className='skill-items-list'>
                {skillCard.itemList.map((item, index) => (
                    <div className='skill-item-row' key={index}>
                        <img src={item.itemIcon} alt={item.itemText} style={{height: '35px'}}/>&emsp;
                        <span style={{fontSize: '22px', fontWeight: 600}}>{item.itemText}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function SkillsSection() {
    const skillCardsList = [
        {   skillTitle: 'Programming Language', 
            skillIcon: 'icons/.svg',
            itemList: [ 
                { itemIcon: 'icons/html-5-svgrepo-com.svg', itemText: 'HTML' },
                { itemIcon: 'icons/css-3-svgrepo-com.svg', itemText: 'CSS' },
                { itemIcon: 'icons/js-svgrepo-com.svg', itemText: 'JavaSricpt' },
                { itemIcon: 'icons/typescript-official-svgrepo-com.svg', itemText: 'TypeSricpt' },
                { itemIcon: 'icons/jar-svgrepo-com.svg', itemText: 'Java' },
                { itemIcon: 'icons/php-svgrepo-com (1).svg', itemText: 'PHP' }
            ],
        },
        {   skillTitle: 'Web Framework', 
            skillIcon: 'icons/web-page-browser-window-svgrepo-com.svg',
            itemList: [ 
                { itemIcon: 'icons/angular-svgrepo-com.svg', itemText: 'Angular' },
                { itemIcon: 'icons/react-svgrepo-com.svg', itemText: 'React' },
                { itemIcon: 'icons/vue-svgrepo-com.svg', itemText: 'Vue' },
            ],
        },
        {   skillTitle: 'Mobile App Framework', 
            skillIcon: 'icons/smartphone-tablet-svgrepo-com.svg',
            itemList: [ 
                { itemIcon: 'icons/react-svgrepo-com.svg', itemText: 'React Native' },
                { itemIcon: 'icons/flutter-svgrepo-com.svg', itemText: 'Flutter' },
            ],
        },
        {   skillTitle: 'Backend',
            skillIcon: 'icons/.svg', 
            itemList: [ 
                { itemIcon: 'icons/node-svgrepo-com.svg', itemText: 'Node.js' },
                
            ],
        },
        {   skillTitle: 'Database', 
            skillIcon: 'icons/.svg',
            itemList: [ 
                { itemIcon: 'icons/mysql-svgrepo-com.svg', itemText: 'MySQL' },
                { itemIcon: 'icons/pgsql-svgrepo-com.svg', itemText: 'PostgreSQL' },
                { itemIcon: 'icons/mongo-svgrepo-com.svg', itemText: 'MongoDB' },
            ],
        },
        {   skillTitle: 'Others', 
            skillIcon: 'icons/.svg',
            itemList: [ 
                { itemIcon: 'icons/npm-svgrepo-com.svg', itemText: 'npm' },
                { itemIcon: 'icons/express-svgrepo-com.svg', itemText: 'Express' },
            
            ],
        },
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
