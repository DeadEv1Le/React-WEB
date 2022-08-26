import React from "react";
import './HomePage.css';
import homePageImage from 'C:/Users/karen/Desktop/portfolio/src/images/image1.jpg';
import logo from 'C:/Users/karen/Desktop/portfolio/src/images/logo.png';
import {ImCog} from 'react-icons/im';
import {AiOutlineMessage} from 'react-icons/ai'
import {ImArrowDown2} from 'react-icons/im';
import {NavPhrases} from 'C:/Users/karen/Desktop/portfolio/src/Phrases.js';
import ReactAudioPlayer from 'react-audio-player';
let language = 0;



export function getLanguage() {
    
    return language;
}



function HomePage() {
    function switchLanguage1() {
    
        language = 0
        // if(language === 2) language = 0;
        // else language += 1;
        console.log(language)
        document.getElementById("homeLink").innerHTML = NavPhrases.phrase_home[language]
        console.log(NavPhrases.phrase_home[language])
      }
      function switchLanguage2() {
        language = 1
    
        // if(language === 2) language = 0;
        // else language += 1;
        console.log(language)
        document.getElementById("homeLink").innerHTML = NavPhrases.phrase_home[language]
        console.log(NavPhrases.phrase_home[language])
      }
      function switchLanguage3() {
        language = 2
    
        // if(language === 2) language = 0;
        // else language += 1;
        console.log(language)
        document.getElementById("homeLink").innerHTML = NavPhrases.phrase_home[language]
        console.log(NavPhrases.phrase_home[language])
      }
      

  return( 
        <>
            {/* ========Menu====== */}
            <header class="header">
        <nav class="navbar">
             <div class="navbar__logo"  ><img src= {logo} alt=""/></div> 
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="" class="nav-link" id="homeLink">Home</a>
                </li>
                
                <li class="nav-item">
                    <a href="" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">Skills</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">Services</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">Contact</a>
                </li>
            </ul>
            <div class="hamburger" onClick={mobileMenu}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

           
        </nav>
        
</header>
<div class="home__welcome"> 
            
            <p class="welcome__title">Hi, My Name is <a href="#about" >Karen</a></p>
            <p class="welcome__subtitle">WEB Developer</p>
            <p class="welcome__subtitle2">I'll help you to make your ideas to reality, and make creative site with it's creative design...</p>
            <button class="welcome__btn">
                <p>Contact Me
                <i class="uil uil-message"><AiOutlineMessage /></i></p></button>
        <p class="welcome__scroll">
                <i class="uil uil-mouse-alt"></i> Scroll down <i class="uil uil-arrow-down" id="scroll__icon"><ImArrowDown2 /></i>
            </p>
        <div className="langSettings" onClick={langOpen}>
            <i><ImCog /></i>
        </div>
        <div className="langs" id="langs">
            {/* <p id = "en" onClick={switchLanguage1}>{NavPhrases.lang_flag[0]}</p>
            <p id = "ru" onClick={switchLanguage2}>{NavPhrases.lang_flag[1]}</p>
            <p id = "arm" onClick={switchLanguage3}>{NavPhrases.lang_flag[2]}</p> */}
            <ReactAudioPlayer src="C:/Users/karen/Desktop/portfolio/src/erg.mp3" autoPlay="true" controls ="true" />
        </div>
    </div>
    <div class="welcome__img">
       <img src ={homePageImage} />
    </div>
         </>
        )
  
}


function mobileMenu() {
    document.querySelector(".hamburger").classList.toggle("active");
    document.querySelector(".nav-menu").classList.toggle("active");
}
function langOpen() {
    document.querySelector('.langs').classList.toggle("active")
}



export default HomePage;