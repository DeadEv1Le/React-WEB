import React from "react";
import {useState, useEffect} from 'react';
import './ContactPage.css'
import ReactTypingEffect from "react-typing-effect";
// import { BsInstagram } from 'react-icons/bs';
import axios from 'axios';
import {useRef} from 'react';
import student from 'C:/Users/karen/Desktop/portfolio/src/images/phone.png';

function ContactPage() {

    const [name, setname] = useState(""); 
    const [Email, setMail] = useState("") ;
    const [message, setMessage] = useState("");

   
   
    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2= useRef(null);

  function handleClick() {
    setname(inputRef.current.value);
    setMail(inputRef1.current.value);
    setMessage(inputRef2.current.value);

    console.log("name = ", name , "Mail =" , Email, "message =",  message)
  }
async function postMessage(e) {
    e.preventDefault()
    try {
        await axios.post("http://localhost:4000/post_name",{
           name, Email, message
           
        })
  
        
    }catch (error) {
        console.log(error)
  }
  }

    return (
        <>
        <section class="section__contacts" id="contact">
        <div className="headerBlock2">
                <p className="title">
                    Get In Touch
                </p>
                <div className="ba"></div>
                <p className="subtitle"><ReactTypingEffect text = {["WEB Developer", "UX & UI Designer", "Freelancer"]} speed = {100}  typingDelay={10} eraseDelay = {1100} eraseSpeed = {80} /></p>
        </div>
        <div className="contactBlock">
            <div className="contactMain">
                <form onSubmit={postMessage}>
                <div className="es">
                    
                    <p className="esTitle">Send Me a Message</p>
                    <div className="es2">
                    <label for="message1">Your Name:</label>
                    <br />
                    <input ref={inputRef} type="text" id="message" name="message1" placeholder="name"/>
                    <br />
                    <label for="message2">Your  Mail:</label>
                    <br />
                    <input ref={inputRef1} type="text" id="message" name="message2" placeholder="example@gmail.com"/>
                    <br />
                    <label for="message3">Message:</label>
                    <br />
                    <input ref={inputRef2} type="text" id="message" name="message3" placeholder="Some Text"/>
                    <br />
                    <button className="sendBtn" onClick={handleClick}>Send message</button>
                    </div>
                </div>
                </form>
                <div className="imgblockCont">
                <img src= {student} />
                </div>
            </div>
            
        </div>  
    </section>
        </>
    )

}



export default ContactPage;