import React from 'react'
import '../sections/resume-section.css'
import ExperienceSwiper from '../components/swipers/experience-swiper'

const ResumeSection = () => {
  return (
    <div className='resume-section-layout'>
      <div className="resume-section-content">
        <h2>Resume</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, cupiditate dolore. Debitis adipisci repellat, omnis quae porro voluptates tempora deleniti optio, numquam, saepe itaque iusto veniam nobis sapiente a consequuntur.
        Expedita obcaecati quae assumenda enim id repellat aut autem qui hic aliquam laborum iusto nostrum unde ipsum earum natus, nesciunt similique beatae sequi commodi adipisci magni. Minus nisi ipsam id.
        </p>
      </div>
      <div className='experience-swiper-layout'>
        <ExperienceSwiper />
      </div>
      
    </div>
  )
}

export default ResumeSection
