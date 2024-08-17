import React from 'react'
import '../sections/feature-section.css'

function FeatureCardLayout({featureItem}) {
  return (
    <div className='feature-card-layout'>
      <div className="feature-photo"></div>
      <h3>{featureItem.cardTitle}</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, maiores vitae aperiam est doloribus doloremque quos id, at deserunt qui cupiditate ipsam quia necessitatibus. Hic quos fuga eligendi amet voluptatem.
      </p>
    </div>
  );
}

const FeatureSection = () => {
    const featureList = [
        { cardTitle: 'Web Development', cardContent: '' },
        { cardTitle: 'HarmonyOS Development', cardContent: '' },
        { cardTitle: 'UI/UX Designer', cardContent: '' },
    ];

  return (
    <div className='feature-section-layout'>  
      <h2>What I do</h2>
      <div className="feature-listing">
        {featureList.map((featureItem, index) => (
          <FeatureCardLayout featureItem={featureItem} key={index} />
        ))}
      </div>
    </div>
  )
}

export default FeatureSection
