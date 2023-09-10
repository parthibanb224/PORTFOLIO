import React from 'react'
import Education from './Education';
import Home from './Home';
import Skills from './Skills';
import ScrollButton from '../components/ScrollButton';
import Contacts from './Contacts';
import Projects from './Projects';
import { useRef } from 'react';

export default function MainPage() {

    const about = useRef(null)
    const education = useRef(null);
    const skills = useRef(null);
    const contacts = useRef(null);
    const projects = useRef(null);
    const acheivements = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("Home-introSlide").style.filter = "none";
        document.getElementById("Home-sideSlide").style.filter = "none";
    }

    return (
        <div>
            <Home about={about} education={education} skills={skills} contacts={contacts} projects={projects} acheivements={acheivements} scrollToSection={scrollToSection} />
            <Education education={education} />
            <Skills skills={skills} />
            <Projects projects={projects} />
            <Contacts contacts={contacts} />
            <ScrollButton />
        </div>
    )
}
