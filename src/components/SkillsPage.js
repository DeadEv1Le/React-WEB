import React from "react";
import './SkillsPage.css'
import ReactTypingEffect from 'react-typing-effect';
import { FaCompactDisc } from 'react-icons/fa' 
import { BiCoffeeTogo } from 'react-icons/bi'
import { TbBallVolleyball } from 'react-icons/tb'
import { MdWeb } from 'react-icons/md'
function SkillsPage() {
    return(
        <>
        <section className="skillsSection">
        <div className="headerBlock1">
                <p className="title">
                   My Skills
                </p>
                <div className="ba"></div>
                <p className="subtitle"><ReactTypingEffect text = {["WEB Developer", "UX & UI Designer", "Freelancer"]} speed = {100}  typingDelay={10} eraseDelay = {1100} eraseSpeed = {80} /></p>
        </div>
        <div className="chartBlock">
            <div className="mainChart">
                <h7 className="chartItemTitle">HTML5 , CSS3</h7><h7 className="percent">86%</h7>
                <div className="chartItem firstItem">
                    <div className="percentfill html">
                        
                    </div>
                </div>
            </div>

            <div className="mainChart">
                <h7 className="chartItemTitle">JavaScript , JQuery</h7><h7 className="percent">76%</h7>
                <div className="chartItem">
                    <div className="percentfill javas">
                        
                    </div>
                </div>
            </div>


            <div className="mainChart">
                <h7 className="chartItemTitle">React Js</h7><h7 className="percent">71%</h7>
                <div className="chartItem">
                    <div className="percentfill react" >
                        
                    </div>
                </div>
            </div>

            <div className="mainChart">
                <h7 className="chartItemTitle">Figma</h7><h7 className="percent">11%</h7>
                <div className="chartItem">
                    <div className="percentfill figma">
                        
                    </div>
                </div>
            </div>
        </div> 
        <div className="aimBlock">
            <br /><br /><br />
            <div className="aimItem b1">
                <p className="aimCont">
                    <br />
                    <i className="aimIcon"><FaCompactDisc /></i>
                    <h6>50 Albumes Listened</h6>
                </p>


            </div>

            <div className="aimItem ">
            <p className="aimCont">
                    <br />
                    <i className="aimIcon"><BiCoffeeTogo /></i>
                    <h6>1 000 Cups of coffee</h6>
                </p>
            </div>


            <div className="aimItem b1">
            <p className="aimCont">
                    <br />
                    <i className="aimIcon"><MdWeb /></i>
                    <h6>5 Completed projects</h6>
                </p>
            </div>
            <div className="aimItem">
            <p className="aimCont">
                    <br />
                    <i className="aimIcon"><TbBallVolleyball /></i>
                    <h6>100 matches of volleyball</h6>
                </p>
            </div>
            
        </div>
     
        </section>
        
        
        </>
    )
}

export default SkillsPage