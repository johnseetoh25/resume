import React from 'react';
import '../swipers/swiper-style.css';
import '../swipers/experience-swiper.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Divider } from '@mui/material';
import { AssignmentInd, Business, School, Work } from '@mui/icons-material';

function InternSwiperSlide(){
  const internExperienceList = [
    { internPosition: 'Web Designer', internCompany: 'Incross Enterprise', startDate: '', endDate: '' },
  ];

  return (
    <div className='intern-slide-layout'>
      <div className="slide-title"><AssignmentInd style={{ fontSize: '36px' }}/>&thinsp;Internship Experience</div>
      <div className="slide-content">
        {internExperienceList.map((internExperience) => (
          <div className="intern-row">
            <div className="intern-date"></div>
            <div className="intern-detail">
              <h3>{internExperience.internPosition}</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea repellendus magni reprehenderit, libero asperiores, facilis dolorem temporibus odio, delectus similique pariatur! Magni consequuntur placeat odit consectetur doloribus officiis, ea aliquam.
                Sed fugiat necessitatibus veritatis ea perspiciatis asperiores animi voluptas earum quisquam nobis. Totam facere saepe, error cupiditate quae veritatis eaque voluptates. Nam mollitia repudiandae, ipsam animi in rerum quidem quia?
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkingSwiperSlide(){
  const workExperienceList = [
    { companyName: 'Tandem Advisory Sdn Bhd', workPosition: 'Front End Developer', startDate: 'December.2023', endDate: 'June.2024' },
    { companyName: 'Gadang Works Sdn Bhd', workPosition: 'Application Developer', startDate: 'May.2022', endDate: 'November.2023' }
  ]

  return (
    <div className='working-slide-layout'>
      <div className="slide-title"><Work style={{ fontSize: '36px' }}/>&thinsp;Work Experience</div>
      <div className="slide-content">
        {workExperienceList.map((workExperience) => (
          <div className='work-row'>
            <div className="work-date">{workExperience.startDate}&thinsp;-&thinsp;{workExperience.endDate}</div>
            <Divider orientation='vertical' flexItem/>
            <div className="work-detail">
              <h3>{workExperience.workPosition}</h3>
              <span><Business/>&emsp;{workExperience.companyName}</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sit dolorem saepe aliquam repellendus quod unde dicta quasi nobis dolor a at totam neque, quae delectus mollitia. Atque, dolorum mollitia?
                Amet illum reprehenderit neque quaerat assumenda possimus velit nulla animi quasi doloremque sed itaque nesciunt asperiores vitae voluptatem delectus ipsam, minima ratione eum quam facere exercitationem accusantium ex. Delectus, beatae.
              </p>
            </div>
          </div>
        ))}
      </div>
      <br />
      <Divider/>
      <br />
      
      <div className='slide-bottom'><Button>More Info</Button></div>
    </div>
  );
}

function EducationSwiperSlide(){
  const eduExperienceList = [
    { collegeName: 'New Era University College', degree: 'Bachelor Degree of Computer Science in Software Engineering', startDate: 'May.2019', endDate: 'April.2022' },
    { collegeName: 'Politeknik Tuanku Sultanah Bahiyah', degree: 'Diploma in Mechatronic Engineering', startDate: 'June.2016', endDate: 'April.2019' }
  ]

  return (
    <div className='education-slide-layout'>
      <div className="slide-title"><School style={{ fontSize: '36px'}}/>&thinsp;Education</div>
      <div className="slide-contant">
        <div className="left">
          <div className='photo'>Photo</div>
          <div className='tag'>tag</div>
        </div>
        <div className="right">
          {eduExperienceList.map((eduExperience) => (
            <div>
              <h3>{eduExperience.degree}</h3>
              <span>{eduExperience.collegeName} | {eduExperience.startDate}-{eduExperience.endDate}</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rerum mollitia esse explicabo! Quasi earum animi iure hic aliquid aliquam, ea ratione nihil quisquam quibusdam reprehenderit fugiat pariatur alias quam!
              Consequuntur at exercitationem maiores repellendus quos ratione velit recusandae magnam suscipit optio dolorem sed, tempora doloremque impedit ipsa odit voluptas? Voluptatum laudantium sit eligendi, accusantium quis ipsam quod fugit eum.</p>
              <Divider/>
            </div>
          ))}
          <br />
          <Button>More Info</Button>
        </div>
      </div>
    </div>
  );
}

const ExperienceSwiper = () => {
  return (
    <Swiper className='swiper-layout'
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      navigation={{ clickable: true }}
    >
      <SwiperSlide className="slide-layout"><EducationSwiperSlide/></SwiperSlide>
      <SwiperSlide className="slide-layout"><WorkingSwiperSlide/></SwiperSlide>
      <SwiperSlide className="slide-layout"><InternSwiperSlide/></SwiperSlide>
    </Swiper>
  )
}

export default ExperienceSwiper
