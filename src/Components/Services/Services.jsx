import React from 'react'
import "./Services.css"
import {ImAndroid} from 'react-icons/im';
import {FaPaintBrush} from 'react-icons/fa';
import {CgWebsite} from 'react-icons/cg';


const Services = () => {
  return (
    <div className='max-width'>
      <div className='services'>
          <div className='title'>My Services</div>
          <div className='serv-content'>
            <div className='card'>
                <div className='box'>
                  <i className='box-icon'><CgWebsite/></i>
                  <p className='text'>Web Development</p>
                </div>
            </div>
            <div className='card'>
                <div className='box'>
                  <i className='box-icon'><FaPaintBrush/></i>
                  <p className='text'>UI/UX Design</p>
                </div>
            </div>
            <div className='card'>
                <div className='box'>
                  <i className='box-icon'><ImAndroid/></i>
                  <p className='text'>Mobile Development</p>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Services