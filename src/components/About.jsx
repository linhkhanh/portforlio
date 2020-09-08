import React from 'react';
import { Link } from 'react-router-dom';

function About(props) {
    const style = props.style;
    const image = props.image;

    return (
        <div className={style}>
            <div class="container my-5 py-5 z-depth-1">
                <section class="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
                    <div class="row">
                        <div class="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
                            <img src={image} class="img-fluid" alt="" />

                        </div>

                        <div class="col-lg-6 mb-4 mb-lg-0">

                            <h3 class="blue-italic font-weight-bold">About me</h3>

                            <h5 class="font-weight-bold">A software engineer</h5>

                            <p class="text-muted">
                                Enthusiastic Junior Software Engineer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of <span className="font-weight-bold">Javascript,  HTML/CSS and React</span>. Motivated to learn, grow and excel in Software Industry.
                            </p>
                            <Link to="/contact">
                                <div className="contact-me">
                                    <a href="#" ><button className="bt-contact">Contact Me</button></a>
                                </div>
                            </Link>


                        </div>


                    </div>



                </section>



            </div>
        </div>
    );
}

export default About;
