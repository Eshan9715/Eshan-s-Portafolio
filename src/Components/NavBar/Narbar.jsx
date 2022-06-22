import React from "react";
import './Navbar.css'
import lab from "../Images/ele.svg"


const Navbar =() =>{
    return (
        <div className="navbar">
            <div className="navleft">
                <div className="navlogo">
                <img src={lab} alt="logo"/>
                </div>
            </div>
            <div className="navright">
                <div className="navlist">
                    <ul style={{listStyleType: "none"}}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Portafolio</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                
            </div>

        </div>
    )
}

export default Navbar;