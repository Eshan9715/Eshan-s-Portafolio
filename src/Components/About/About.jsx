import React from 'react'
import "./About.css"
import about from "../Images/about.jpg"
import wel from "../Images/wel.png"
import edu from "../Images/edu.png"
import wor from "../Images/work.png"
import sk from "../Images/skill.png"
import vis from "../Images/vis.png"


const About = () => {
  return (
    <div className='a'>
        <div className='a-left'>
          <div className='a-left-card-bg'></div>
          <div className='a-left-card'>
            <img src={about} alt='about' className='aboutImg'/>
          </div>
        </div>

        <div className='a-right'>
          <h1 className='a-right-title'>About me</h1>

          <div className='px'>

            <div className='py'>
              <img src={wel} alt='' className='l'/>
              <p className='g'>Hi There, I am Eshan Geekiyanage.</p>
            </div>

            <div className='py'>
              <img src={edu} alt='' className='l'/>
              <p className='g'>An undergratuate of faculty of science, university of Colombo.</p>
            </div>

            <div className='py'>
              <img src={wor} alt='' className='l'/>
              <p className='g'>Prefer to study about new technologies ,
              develop new things using newest technologies. Passionate about
              programming, researching, and keen to learn cutting-edge technologies.</p>
            </div>

            <div className='py'>
              <img src={sk} alt='' className='l'/>
              <p className='g'>
              Technical expertise lies in JavaScript-based enterprise applications and
              Hybrid Mobile applications with hands-on experience.</p>
            </div>

            <div className='py'>
              <img src={vis} alt='' className='l'/>
              <p className='g'>
              A strict believer in
              good architectural designs and proper project planning that saves 
              a significant amount of time in the future.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About