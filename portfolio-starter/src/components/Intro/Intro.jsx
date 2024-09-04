import * as React from 'react';
import './intro.css'
import Github from '../../img/github.png'
import LinkedIn  from '../../img/linkedin.png'
import Youtube from '../../img/y.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import girl from '../../img/a2.png'
import thumbnail from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glass from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion} from 'framer-motion'
import { Link } from "react-scroll";

const Intro = () =>
{
  const transition = { duration: 2, type: "spring" }
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div  className='intro' id="intro">
    <div className='i-left'>
    <div className='i-name'>
        <span style={{ color: darkMode ? "white" : "" }}>Salam! I Am </span>
        <span>Aisha </span>
        <span> With three years of dedicated experience in the field of web development, I am excited to contribute my expertise and skills to an innovative and forward-thinking organization.What sets me apart is my commitment to staying updated with the latest industry trends and technologies. I thrive on continuous learning and innovation, always seeking opportunities to enhance my skill set and contribute fresh perspectives to my projects.</span>
    </div>
    <Link to="contact" smooth={true} spy={true}>
    <button className='button i-button'>Hire me</button>
    </Link>
    <div className='i-icons'>
        <img src={Github} alt="">
        </img>
        <img src={LinkedIn} alt=""/>
        <img src={Youtube} alt=""/>
    </div>
  

    </div>
    <div className='i-right'>
      <img src= {Vector1} alt="" />
      <img src={Vector2} alt="" />
      <img src={girl} alt="" />
      
      <motion.img
      initial = {{left: '-36%'}}
      whileInView = {{left: '-24%'}}
      transition = {transition}
       src={glass} alt="" />

      <motion.div
      initial={{top:'-4%',left:'74%'}}
      whileInView={{left:'68%'}}
      transition={transition}

      style={{top: '-4%',left:'68%'}}
      className='floating-div'
      
      >

        <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
      </motion.div>

<motion.div
initial={{left: '9rem',top:'18rem'}}
whileInView={{left:'0rem'}}
transition={transition}

 style={{top: "18rem",left:"0rem"}}
 className='floating-div'
 >
<FloatingDiv image={thumbnail} txt1="Web Designer"/>
</motion.div>

<div  className='blur' style={{background: "rgb(238 210 255)"}}></div>
    </div>
<div className='blur'
style={{
  background: "#C1F5FF",
  top: '17rem',
  width: '21rem',
  height: '11rem',
  left: '-9rem'
}}

></div>
    </div>
  )
}



export default Intro;
