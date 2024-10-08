import React from 'react'
import '../swipers/swiper-style.css'
import 'swiper/swiper-bundle.css'
import '../swipers/skill-swiper.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';

function SwiperSlideLayout({skillList}){
    return (
        <div className="skill-card-layout">
            <div className="skill-title">{skillList.skillTitle}</div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque velit dignissimos nihil sed! Dolores provident reprehenderit corporis necessitatibus iste a eaque sit totam nam delectus. Ipsum, error. Assumenda, beatae neque?
            Recusandae vel pariatur dignissimos eligendi esse ad fugiat hic dolor veniam repudiandae accusamus molestiae beatae dolorem, quam magni obcaecati quod commodi ratione laudantium similique in error a amet? Illum, voluptatibus?
            </p>
            <div className='skill-listing'>
            {skillList.skillsListing.map((skillDetail)=>(
                <div className='skill-listing-content'>
                    <div className="skill-sub-title">{skillDetail.subTitle}:</div>
                    <div className="skill-grid-listing">
                        {skillDetail.listing.map((skillItem) => (
                            <div className="skill-item">
                                <div className="skill-icon"></div>
                                <div className="skill-name">{skillItem.name}</div>
                            </div>
                        ))}    
                    </div>
                </div>
            ))}
            </div>
            
        </div>
        
    );
}

const SkillSwiper = () => {
    const technicalSkillsList = [
        {   skillTitle: 'Programming Language', 
            skillsListing: [
                { subTitle: 'Proficiency in', listing: [{ icon: '', name: 'JavaScript' }, { icon: '', name: 'TypeScript' }, { icon: '', name: 'HTML' }, { icon: '', name: 'CSS' }]},
                { subTitle: 'Experience with', listing: [{ icon: '', name: 'Java' }, { icon: '', name: 'PHP' }, {icon: '', name: 'C'}, {icon: '', name: 'C++'}] },
                { subTitle: 'Begining', listing: []}
            ]
        
        },
        {   skillTitle: 'Front-End Framework Dev', 
            skillsListing: [
                { subTitle: 'Website/Browser', listing: [{ icon: '', name: 'Angular' }, { icon: '', name: 'React' }, { icon: '', name: 'Next.js' }]},
                { subTitle: 'Mobile App', listing: [{ icon: '', name: 'React Native' }, { icon: '', name: 'Flutter' }] }
            ]
        },
        {   skillTitle: 'Back-End Framework Dev', 
            skillsListing: [
                { subTitle: 'Server Slide', listing: [{ icon: '', name: 'Node.js' }, { icon: '', name: 'Express.js' }]},
                { subTitle: 'Database', listing: [{ icon: '', name: 'MySQL' }, { icon: '', name: 'PostgrelSQL' }] }
            ]
        },
        {   skillTitle: 'Others Development', 
            skillsListing: [
                { subTitle: 'HarmonyOS', listing: [{ icon: '', name: 'ArkTS' }]},
            ]
        },
        {   skillTitle: 'Others', 
            skillsListing: [
                { subTitle: '3D Modeling', listing: [{ icon: '', name: 'SketchUp' }]},
                { subTitle: 'UI/UX Designing', listing: [{ icon: '', name: 'Figma' }, { icon: '', name: 'Adobe XD' }] }
            ]
        }
    ];

  return (
    <Swiper className='swiper-layout'
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            navigation={{ clickable: true }}
            spaceBetween={180}
            loop={true}
            slidesPerView={'auto'}
            centeredSlides={true}
    >
        {technicalSkillsList.map((skillList, index) => (
            <SwiperSlide className="slide-layout" key={index}>
                <SwiperSlideLayout skillList={(skillList)}/>
            </SwiperSlide>
        ))}
        
    </Swiper>
  )
}

export default SkillSwiper
