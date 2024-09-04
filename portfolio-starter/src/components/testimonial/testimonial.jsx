import { Pagination } from 'swiper/modules';
import React from 'react'
import './testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import certificate1 from  '../../img/certificate.JPG';
import certificate2 from '../../img/certificate2.JPG';
import certificate3 from '../../img/degree.JPG';
// import {Pagination} from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';



const testimonial = () => {
    const clients = [

{
img: certificate2,
review:
"During my internship at CBL, I was entrusted with the responsibility of developing a software application similar to dynamic forms, utilizing full-stack development technologies.I familiarized myself with both front-end and back-end technologies, including HTML, CSS, JavaScript, and frameworks such as React.js for building dynamic user interfaces. On the back end, I honed my skills in working with databases, RESTful APIs, and server-side technologies such as Node.js."
},
{
  img: certificate1,
  review:
"During my time at Sparks Foundation I had the incredible opportunity to immerse myself in the dynamic world of web development. Despite the remote setup, the experience was enriching, allowing me to explore the latest technologies and gain hands-on experience in real-world projects."
},
{
  img: certificate3,
review:
"I am a highly motivated and skilled Computer Science graduate from SIBA. With a comprehensive education in computer science and a deep passion for technology, I am dedicated to driving innovation, creating impactful solutions, and shaping the future of the digital landscape."
},
    ]
    return (
    <div className='t-wrapper' id="Testimonials">
    <div className='t-heading'>
     <span>Internships </span>
     <span>And Degree Certificate</span>
     <div className='blur t-blur1' style={{background: "var(--purple)"}}></div>
      <div className='blur tblur2' style={{background: "skyblue"}}></div>
    </div>
   
    <Swiper
    modules={[Pagination]}
    slidesPerView={1}
    pagination={{clickable:true}}
    
    
    
    >
  {clients.map((client,index)=>{
    return(
   <SwiperSlide key={index}>
   <div className='testimonials'>
   <img src={client.img} alt="" />
      <span>{client.review}</span>
   </div>
    
   </SwiperSlide>
    )
  })}
     

    </Swiper>
    </div>
  );
};
export default testimonial
