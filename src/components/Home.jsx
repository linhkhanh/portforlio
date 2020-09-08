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
            <About style="about" image="../../img/pic1.jpg"/>
            <Education style="edu-work"/>
            <Skills />
            <Projects />
            <End />
        </div>
    );
}

export default Home;
