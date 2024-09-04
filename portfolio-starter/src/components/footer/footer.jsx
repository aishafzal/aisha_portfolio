import React from 'react'
import './footer.css'
import Wave from  '../../img/wave.png'
import Youtube from "@iconscout/react-unicons/icons/uil-youtube"; 
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"; 
import Github from "@iconscout/react-unicons/icons/uil-github"; 
const footer = () => {
  return (
    <div className='footer'>
    <img src={Wave} alt="" style={{width: '100%'}}></img>
    <div className='f-content'>
        <span>aishaafzal157@gmail.com</span>
        <div className='f-icons'>
            <Youtube color="white" size="3rem"
            />
            <Facebook color="white" size="3rem"/>
            <Github color="white" size="3rem"/>
           

        </div>
    </div>
    </div>
  )
}

export default footer
