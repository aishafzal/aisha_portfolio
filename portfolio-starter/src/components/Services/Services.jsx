import React from 'react'
import './services.css'
import heartimogi from '../../img/heartemoji.png';
import glasses from '../../img/glasses.png';
import humble from '../../img/humble.png';
import Card from '../card/card';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion, transform} from 'framer-motion'
// modify  resume to pdf

import Resume from 'C:/Users/Microsoft/Downloads/Documents/Aisha%MernStack.pdf'

//
function Services() {

 const transition = {duration : 1, type: 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    
    <div className='services' id='Services'>
    <div className='awesome'>
    <span style={{color:darkMode? 'white': ''}}>My Awesome</span>
    <span>services</span>
        <span>
        I take pride in crafting dynamic and user-friendly websites that align with  your unique vision and business goals.<br/> With a strong foundation in modern web technologies and a keen eye for design, I offer a range of services to <br/> bring your digital ideas to life. Here's a glimpse of what I can offer:
        </span>
        <a href={Resume} download>  
        <button className='button s_button'>Downloaded CV</button>
 
     </a>
   <div className='blur s-blur' style={{background: "#ABF1FF94"}}>
    </div>
    </div>
     <div className='cards'>
       <motion.div 
       whileInView={{left: '12rem'}}
       initial={{left:'25rem'}}
       transition={transition}
       style={{left: '14rem'}}>
       <Card
       emoji = {heartimogi}
       heading = {'Design'}
       detail = {"Figma, Sketch,Photoshop,Adobe,video editor"}>
    </Card>
       </motion.div>
       <motion.div 
        initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
       
       style={{top: "12rem",left:"-4rem"}}>
 <Card 
  emoji = {glasses}
  heading = {'Developer'}
       detail = {"Html, Css,Js,React,Express,Nodejs,db"}
  
 />
   </motion.div>

<motion.div
initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
 style={{top: "19rem",left:"12rem"}}>
<Card 
  emoji = {humble}
  heading = {'UI/UX'}
       detail = {"I offer ongoing support to fix bugs, optimize performance,fine code, and implement updates."}
 />
</motion.div>

<div className='blur s-blur2' style={{background: "var(--purple)"}}/>
     </div>
    </div>
  )
}

export default Services;
