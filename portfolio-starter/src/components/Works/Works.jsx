import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiver from '../../img/fiverr.png'
import Facebook from '../../img/Facebook.png'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion, transform} from 'framer-motion';
import {Link} from 'react-scroll'

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='works' id='works'>
    <div className="w-left">
      <div className='awesome'> 
    <span style={{color:darkMode? 'white': ''}}>Works for All these</span>
    <span>Companies</span>
        <span>
       
        I had the privilege to work as a software developer at well known companies Continental Biscuits Limited (CBL), <br/>

        SideHustle, LetsGrowMore, and The Sparks Foundation. <br/>
         <span>FYP:</span> 
    (Digi Health) It is an Enterprise Application that aims to provide a centralized platform  where 
     doctors from <br/> all over Pakistan can manage their patients. Patients can book remote appointments
     through audio and video calls <br/> and maintain their health history and report. The system is developed
    in React, express, and node js and implements <br/> 3rd party applications like Twillio for calls, SMS, and mailing engines.
            </span>
            <Link to="contact" smooth={true} spy={true}>
            <button className="button s_button">Hire me</button>
      </Link>
  
   <div className='blur s-blur' style={{background: "#ABF1FF94"}}>
    </div>
    </div>
</div>
    <div className='m-right'>
    <motion.div
    
         initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
    
    
    
     className='m-mainCircle'>
<div className='m-secCircle'>
<img src={Fiver} alt="" />
</div>
<div className='m-secCircle'>
<img src={Upwork} alt="" />
</div>
<div className='m-secCircle'>
<img src={Facebook} alt="" />
</div>
<div className='m-backCircle purpleCircle'></div>
<div className='m-backCircle yellowCircle'></div>



    </motion.div>
    </div>
    </div>
  )
}

export default Works
