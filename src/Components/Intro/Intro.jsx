import React from "react";
import './Intro.css'
import lab from "../Images/lab.png"

const Intro = () =>{
  return (
    <div className="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">Hello, my name is</div>
                <div class="text-2">Prakash Shahi</div>
                <div class="text-3">And I'm a <span class="typing"></span></div>
                <a href="#">Hire me</a>
            </div>
        </div>
    </div>
    // <div className="intro">
    //     <div className="introleft">
    //         <div className="introname">
    //             <h2 className="i-intro">Hello,  I'm </h2>
    //             <h1 className="i-name">Eshan Geekiyanage </h1>

    //             <div className="i-title">
    //                 <div className="i-title-wrap">
    //                     <div className="i-title-item">Web developer</div>
    //                     <div className="i-title-item">Mobile developer</div>
    //                     <div className="i-title-item">UI/UX Designer</div>
    //                     <div className="i-title-item">Photographer</div>
    //                     <div className="i-title-item">Content Creator</div>

    //                 </div>
    //             </div>
    //             <div className="i-desc">
    //                 I design and develop for customers specializing stylish,
    //                 modern, attractive web sites, mobile applications and online
    //                 services.
    //             </div>

    //         </div>

    //     </div>

    //     <div className="introright">
    //         <img src={lab} alt="" className="profile"/>

    //     </div>

    // </div>
  )
}

export default Intro