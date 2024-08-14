import React from 'react'
import '../swipers/swiper-style.css'
import '../swipers/skill-swiper.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';

function SwiperSlideLayout({skillList}){
    return (
        <div className='slide-layout'>
            <div className="skill-card-layout">
                <div className="skill-title">{skillList.skillTitle}</div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque velit dignissimos nihil sed! Dolores provident reprehenderit corporis necessitatibus iste a eaque sit totam nam delectus. Ipsum, error. Assumenda, beatae neque?
                Recusandae vel pariatur dignissimos eligendi esse ad fugiat hic dolor veniam repudiandae accusamus molestiae beatae dolorem, quam magni obcaecati quod commodi ratione laudantium similique in error a amet? Illum, voluptatibus?
                </p>
                <div className='skill-listing'>
                {skillList.skillsListing.map((skillDetail)=>(
                    <div >
                        <div className="skill-sub-title">{skillDetail.subTitle}:</div>
                        {skillDetail.listing.map((skillItem) => (
                            <div className="skill-item">
                                <div className="skill-icon"></div>
                                <div className="skill-name">{skillItem.name}</div>
                            </div>
                        ))}
                        
                    </div>
                ))}
                </div>
                
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
                { subTitle: 'New Learning', listing: []}
            ]
        
        },
        {   skillTitle: 'Framework Dev', 
            skillsListing: [
                { subTitle: 'Website/Browser', listing: [{ icon: '', name: 'Angular' }, { icon: '', name: 'React' }, { icon: '', name: 'Next.js' }]},
                { subTitle: 'Mobile App', listing: [{ icon: '', name: 'React Native' }, { icon: '', name: '' }] }
            ]
        }
    ];

  return (
    <Swiper className='swiper-layout'
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            navigation={{ clickable: true }}
    >
        {technicalSkillsList.map((skillList) => (
            <SwiperSlide>
                <SwiperSlideLayout skillList={(skillList)}/>
            </SwiperSlide>
        ))}
        
    </Swiper>
  )
}

export default SkillSwiper
