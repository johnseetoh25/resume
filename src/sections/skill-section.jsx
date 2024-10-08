import React from 'react'
import '../sections/skill-section.css'
import SkillSwiper from '../components/swipers/skill-swiper'

const SkillSection = () => {
  return (
    <div className='skill-section-layout'>
      <div className="skill-section-content">
        <h2>Technical Skills</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reiciendis quo provident autem ipsa eaque. Ad praesentium earum quibusdam vero aliquid sequi, ab in, laudantium provident eum consectetur culpa quis!
          Sed reprehenderit veritatis maxime aliquam exercitationem consectetur, nesciunt, placeat obcaecati deleniti nostrum sunt perspiciatis voluptatum quas itaque velit vel blanditiis temporibus totam! Facilis, quia enim. Enim recusandae iure necessitatibus quibusdam.
        </p>
      </div>
      <div className="skill-swiper-layout">
        <SkillSwiper/>
      </div>
    </div>
  )
}

export default SkillSection
