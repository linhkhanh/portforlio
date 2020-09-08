import React from 'react';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import End from './End';
import Cover from './Cover';

function Home() {
    return (
        <div>
            <Cover />
            <About style="about" image="https://res.cloudinary.com/dt5rqi1l9/image/upload/v1599544701/pic1_qnqxeo.jpg"/>
            <Education style_1="edu-work"/>
            <Skills />
            <Projects />
            <End />
        </div>
    );
}

export default Home;
