import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"

import { FiFacebook } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME HERE</h3>
            <h1>
              Hi, I’m <span>Eshan AG</span>
            </h1>

            <div className="i-title">
                    <div className="i-title-wrap">
                         <div className="i-title-item">Web developer</div>
                         <div className="i-title-item">Mobile developer</div>
                         <div className="i-title-item">UI/UX Designer</div>
                         <div className="i-title-item">Content Creator</div>
                    </div>
            </div>

            <p>I design and develop for customers specializing stylish, modern, attractive web sites, mobile applications and online
             services.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                  <FiFacebook/>
                  </button>
                  <button className='btn_shadow'>
                  <BsInstagram/>
                  </button>
                  <button className='btn_shadow'>
                  <AiOutlineLinkedin/>
                  </button>
                </div>
              </div>
              
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
