import React from 'react'
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faStar, faPhone, faLocationDot, faInbox } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faFontAwesome, faTwitter, faInstagram, faYoutube, faTiktok} from '@fortawesome/free-brands-svg-icons'
import ReactDOM from 'react-dom'


    export default function Footer(){
    
      
     return (
            <>
                <div className="Footer bg">
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-5 col-12 ft-1">
                                <h3>Tiny Health Tales</h3>
                                <p>Tiny Narratives, Mighty Health Lessons</p>
                                <div className="footer-icons">
                                    <a href="https://www.instagram.com/tinyhealthtales?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><FontAwesomeIcon className="icon ig" icon={faInstagram}/></a>
                                    <a href="https://www.youtube.com/channel/UC-nTBrcorao43utH9wuXyHQ" target="_blank"><FontAwesomeIcon className="icon yt" icon={faYoutube}/></a>
                                    <a href="https://www.tiktok.com/@tinyhealthtales_" target="_blank"><FontAwesomeIcon className="icon tt" icon={faTiktok}/></a>
                                   
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-3 col-12 ft-2">
                                <h5>Quick Links</h5>
                                <ul>
                                    <li className="nav-item">
                                        <a className="" href="/Home"><FontAwesomeIcon icon={faStar}/> Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="" href="/About Us"><FontAwesomeIcon icon={faStar}/> About</a>
                                    </li>
                                   
                                    <li className="nav-item">
                                        <a className="" href="/"><FontAwesomeIcon icon={faStar}/> Support Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-4 col-12 ft-3">
                                <h5>Contact Info</h5>
                                <p><i className="fa-solid fa-phone-volume"><FontAwesomeIcon icon={faPhone}/></i> 408-tinyhealthtales</p>
                                <p><i className="fa-solid fa-envelope"><FontAwesomeIcon icon={faInbox}/></i> tinyhealthtales@gmail.com</p>
                                <p><i className="fa-solid fa-paper-plane"><FontAwesomeIcon icon={faLocationDot}/></i> Merced, CA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }