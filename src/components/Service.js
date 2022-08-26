import React from 'react';

import './Service.css';

import ReactTypingEffect from 'react-typing-effect';
import { TbDeviceDesktop } from 'react-icons/tb'
import { HiOutlineDeviceMobile } from 'react-icons/hi'
import { TbMessages } from 'react-icons/tb';
import { IoMdPricetags } from 'react-icons/io';
import { ImWrench } from 'react-icons/im';
import { SiSpeedtest } from 'react-icons/si';
function ServicePage() {
    return (
        <>
        <section className="serviceSection">
        <div className="headerBlock2">
                <p className="title">
                   My Services
                </p>
                <div className="ba"></div>
                <p className="subtitle"><ReactTypingEffect text = {["WEB Developer", "UX & UI Designer", "Freelancer"]} speed = {100}  typingDelay={10} eraseDelay = {1100} eraseSpeed = {80} /></p>
        </div>
        <div className='serviceCont'>
            <div className='serviceBlock'>
                <div className='iconBlock'>
                    <i className='icon'><TbDeviceDesktop /></i>
                   
                </div>
                <p className='esshatgidamTitle'>Unique design</p>
                <p className='info'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
            </div>
        </div>

        <div className='serviceCont'>
        <div className='serviceBlock'>
                <div className='iconBlock'>
                    <i className='icon'><HiOutlineDeviceMobile /></i>
                   
                </div>
                <p className='esshatgidamTitle'>Responsiveness</p>
                <p className='info'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
            </div>
        </div>

        <div className='serviceCont'>
        <div className='serviceBlock'>
                <div className='iconBlock'>
                    <i className='icon'><TbMessages /></i>
                   
                </div>
                <p className='esshatgidamTitle'>Make it Simple</p>
                <p className='info'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
            </div>
        </div>
        <div className='serviceCont'>
        <div className='serviceBlock'>
                <div className='iconBlock'>
                    <i className='icon'><IoMdPricetags /></i>
                   
                </div>
                <p className='esshatgidamTitle'>Different Layout</p>
                <p className='info'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
            </div>
        </div>

        <div className='serviceCont'>
        <div className='serviceBlock'>
                <div className='iconBlock'>
                    <i className='icon'><ImWrench /></i>
                   
                </div>
                <p className='esshatgidamTitle'>Advanced Options</p>
                <p className='info'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
            </div>
        </div>

        <div className='serviceCont'>
        <div className='serviceBlock'>
                <div className='iconBlock'>
                    <i className='icon'><SiSpeedtest /></i>
                   
                </div>
                <p className='esshatgidamTitle'>Testing for Perfection</p>
                <p className='info'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
            </div>
        </div>
        </section>
        </>
    )
}
export default ServicePage;