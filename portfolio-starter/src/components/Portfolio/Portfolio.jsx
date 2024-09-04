import React from 'react'
import './portfolio.css'
import minifoodpanda from '../../img/minifoodpanda.JPG'
import chatapp from '../../img/chatapp.JPG'
import digihealth from '../../img/digihealth.JPG'
import digihealth1 from '../../img/digihealth1.JPG'
import product from '../../img//product.JPG'
import product1 from '../../img/productdev2.JPG'
import digi from '../../img/digih.JPG'
import e1 from '../../img/ecommerce1.JPG';
import e2 from '../../img/ecommerce2.JPG';
import e3 from '../../img/ecoomerce3.JPG';
import socialmediaapp from '../../img/Capture1.JPG';
import socialmediaapp1 from '../../img/Capture2.JPG';
import  socialmediaapp2 from '../../img/Capture4.JPG'; 
import ai from '../../img/ai1.JPG';
import ai2 from '../../img/ai2.JPG';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Portfolio = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio' id="Portfolio">
      <span style={{color:darkMode? 'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

    <Swiper
    spaceBetween={30}
    slidesPerView={3}
    grabCursor={true}
    className='portfolio-slider'
    >
<SwiperSlide>
    <img src={digi} alt=""></img>
</SwiperSlide>
<SwiperSlide>
    <img src={digihealth} alt=""></img>
</SwiperSlide>
<SwiperSlide>
    <img src={digihealth1} alt=""></img>
</SwiperSlide>
<SwiperSlide>
    <img src={e1} alt=""></img>
</SwiperSlide>
<SwiperSlide>
    <img src={e2} alt=""></img>
</SwiperSlide>
<SwiperSlide>
    <img src={e3} alt=""></img>
</SwiperSlide>


<SwiperSlide>
    <img src={socialmediaapp1} alt=""></img>
</SwiperSlide>
<SwiperSlide>
    <img src={socialmediaapp} alt=""></img>
</SwiperSlide>
<SwiperSlide>
    <img src={socialmediaapp2} alt=""></img>
</SwiperSlide>

<SwiperSlide>
    <img src={ai} alt=""></img>
</SwiperSlide>
<SwiperSlide>
    <img src={ai2} alt=""></img>
</SwiperSlide>


<SwiperSlide>
    <img src={minifoodpanda} alt=""></img>
</SwiperSlide>
<SwiperSlide>
    <img src={product1} alt=""></img>
</SwiperSlide>

<SwiperSlide>
    <img src={product} alt=""></img>
</SwiperSlide>

</Swiper>
    </div>
  )
}

export default Portfolio
