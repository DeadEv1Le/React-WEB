import React from "react";
import './AboutPage.css'
import ReactTypingEffect from 'react-typing-effect';
import nkar from 'C:/Users/karen/Desktop/portfolio/src/images/nkar.jpg';

function SkillsPage() {
    
    return (
        <>
        <section class="about__section" id="about">
            <div className="headerBlock">
                <p className="title">
                    About Me
                </p>
                <div className="ba"></div>
                <p className="subtitle"><ReactTypingEffect text = {["WEB Developer", "UX & UI Designer", "Freelancer"]} speed = {100}  typingDelay={10} eraseDelay = {1100} eraseSpeed = {80} /></p>
            </div>
            <div className="imageBlock">
                <img src= {nkar} />
                {/* <div className="imageContainer">
                    <img src = {nkar} />
                </div> */}
            </div>            
            <div className="contentBlock">
                <p className="contentTitle">Hi I'm Karen</p>
                <p className="contentSubTitle">WEB developer and designer from Armenia</p>
                <p className="cont">WEB developer, with extensive knowledge and a lot of time of experience, working in web technologies delivering the quality of work... </p>
                <div className="aboutList">
                    <ul className="list">
                        <li className="listItem">
                            Name
                        </li>
                        <li className="listItem">
                            Age
                        </li>
                        <li className="listItem">
                            E-Mail
                        </li>
                        <li className="listItem">
                            Country
                        </li>
                    </ul>
                </div>
                <div className="aboutList2">
                    <ul className="list">
                        <li className="listItem">
                            Karen
                        </li>
                        <li className="listItem">
                            16yr
                        </li>
                        <li className="listItem">
                            tsogolakyan@gmial.com
                        </li>
                        <li className="listItem">
                            Armenia
                        </li>
                    </ul>
                </div>
                <button className="abBtn">Download CV</button>
            </div>
        </section>          
        
        </>
    )
}


export default SkillsPage;

