import React from 'react'
import { MdMenu } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import { ReactComponent as Linkedin } from "../Assets/linkedin.svg"
import { ReactComponent as Github } from "../Assets/github.svg"
import { ReactComponent as Twitter } from "../Assets/twitter.svg"
import { ReactComponent as Youtube } from "../Assets/youtube.svg"
import { ReactComponent as Instagram } from "../Assets/instagram.svg"
import parthi from "../Assets/SKMBT_C45418071908160_0001 - Copy.jpg"
import Resume from "../Assets/Parthiban FSD Guvi.pdf"

export default function Home({ about,education, skills, contacts, projects, scrollToSection }) {

    function openNav() {
        document.getElementById("mySidebar").style.width = "400px";
        document.getElementById("Home-introSlide").style.filter = 'blur(10px)';
        document.getElementById("Home-sideSlide").style.filter = 'blur(10px)';
    }

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("Home-introSlide").style.filter = "none";
        document.getElementById("Home-sideSlide").style.filter = "none";
    }

    return (
        <div ref={about} className='Home'>
            <div className='Home-socialMedia'>
                <a href="https://www.linkedin.com/in/parthibanb224/" target="_blank" rel="noreferrer"><p className='socialMedia-icon' ><Linkedin /></p></a>
                <a href="https://github.com/parthibanb224" target="_blank" rel="noreferrer"><p className='socialMedia-icon' ><Github /></p></a>
                <a href="https://twitter.com/parthibanb224" target="_blank" rel="noreferrer"><p className='socialMedia-icon' ><Twitter /></p></a>
                <a href="https://www.youtube.com/channel/UCxJwQg_SDe2XA6jYlofbcCw" target="_blank" rel="noreferrer"><p className='socialMedia-icon' ><Youtube /></p></a>
                <a href="https://www.instagram.com/parthiban__b/" target="_blank" rel="noreferrer"><p className='socialMedia-icon' ><Instagram /></p></a>
            </div>
            <div id="mySidebar" className="sidebar">
                <Button className="closebtn" onClick={closeNav}>&times;</Button>
                <ul className='sidebar-ul'>
                    <li><Button onClick={() => scrollToSection(about)} className='sidebar-menu-button'>About</Button></li>
                    <li><Button onClick={() => scrollToSection(education)} className='sidebar-menu-button'>Education</Button></li>
                    <li><Button onClick={() => scrollToSection(skills)} className='sidebar-menu-button'>skills</Button></li>
                    <li><Button onClick={() => scrollToSection(projects)} className='sidebar-menu-button'>Projects</Button></li>
                    {/* <li><Button onClick={() => scrollToSection(acheivements)} className='sidebar-menu-button'>Acheivements</Button></li> */}
                    <li><Button onClick={() => scrollToSection(contacts)} className='sidebar-menu-button'>Contact</Button></li>
                </ul>
            </div>
            <div id='Home-sideSlide' className='Home-sideSlide d-flex justify-content-center'>
                <div className='profile-img'>
                    <img src={parthi} width='350px' height='400px' alt='parthiban'></img>
                    <h1>PARTHIBAN</h1>
                </div>
            </div>
            <div id='Home-introSlide' className='Home-introSlide d-flex justify-content-center'>
                <div className='introSlide-intro'>
                    <h1>Full Stack Developer(MERN)</h1>
                    <h4>I hold a Bachelor's degree in Engineering from Karpagam College of Engineering, and I recently completed a comprehensive MERN Full Stack Developer course at QUVI Institute. My educational background and hands-on training have equipped me with a strong foundation in engineering principles as well as cutting-edge skills in web development using the MERN (MongoDB, Express.js, React, Node.js) stack. I am passionate about creating dynamic and user-friendly web applications and am constantly seeking opportunities to contribute to innovative projects. Feel free to connect with me to explore collaboration and discuss the exciting possibilities at the intersection of engineering and full-stack development.</h4>
                    <div className='mt-4'>
                        <a href={Resume} download='ParthibanResume' target="_blank" rel="noreferrer"><Button className='me-4 intro-button'>Download CV</Button>{' '}</a>
                        <Button onClick={() => scrollToSection(contacts)} className='intro-button'>Contact</Button>{' '}
                    </div>
                </div>
                <div className="openbtn">
                    <p onClick={openNav}><MdMenu /></p>
                </div>
            </div>
        </div>
    )
}
