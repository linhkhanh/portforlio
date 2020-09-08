import React from 'react';
import { Parallax } from 'react-parallax';

function Cover() {
    return (
        <div>
            <Parallax
                blur={{ min: -10, max: 10 }}
                bgImage='https://cdn.pixabay.com/photo/2020/07/15/15/14/meadow-5407968_960_720.jpg'
                bgImageAlt="the cat"
                strength={1500}
            >

                <div className="cover">
                    <h1 className="name">Hi, I'm Linh Le</h1>
                    <h4>Student in General Assembly - Software engineering immersive course</h4>
                    <h5>Dependent pass</h5>
                </div>
            </Parallax>
        </div>
    );
}

export default Cover;
