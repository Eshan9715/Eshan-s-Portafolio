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
    <div class="max-width">
      <div className='about'>
            <h2 class="title">About me</h2>
            <div class="about-content">
                <div class="column-left">
                  <img src={about} alt='about'/>
                </div>
                <div class="column-right">
                    <div class="text">I'm Prakash and I'm Young entrepernur</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                    <a href="#">Download CV</a>
                </div>
            </div>
      </div>
    </div>
    // <div className='a'>
    //     <div className='a-left'>
    //       <div className='a-left-card-bg'></div>
    //       <div className='a-left-card'>
    //         <img src={about} alt='about' className='aboutImg'/>
    //       </div>
    //     </div>

    //     <div className='a-right'>

    //       <div className='px'>

    //         <div className='py'>
    //           <img src={wel} alt='' className='l'/>
    //           <p className='g'>Hi There, I am Eshan Geekiyanage.</p>
    //         </div>

    //         <div className='py'>
    //           <img src={edu} alt='' className='l'/>
    //           <p className='g'>An undergratuate of faculty of science, university of Colombo.</p>
    //         </div>

    //         <div className='py'>
    //           <img src={wor} alt='' className='l'/>
    //           <p className='g'>Prefer to study about new technologies ,
    //           develop new things using newest technologies. Passionate about
    //           programming, researching, and keen to learn cutting-edge technologies.</p>
    //         </div>

    //         <div className='py'>
    //           <img src={sk} alt='' className='l'/>
    //           <p className='g'>
    //           Technical expertise lies in JavaScript-based enterprise applications and
    //           Hybrid Mobile applications with hands-on experience.</p>
    //         </div>

    //         <div className='py'>
    //           <img src={vis} alt='' className='l'/>
    //           <p className='g'>
    //           A strict believer in
    //           good architectural designs and proper project planning that saves 
    //           a significant amount of time in the future.</p>
    //         </div>
    //       </div>
    //     </div>
    // </div>
  )
}

export default About