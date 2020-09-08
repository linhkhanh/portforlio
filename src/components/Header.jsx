import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light white">

                <div class="container">
                    <Link to="/">
                        <p class="navbar-brand">
                            <img src="https://res.cloudinary.com/dt5rqi1l9/image/upload/v1599544869/logo_iiomol.jpg" height="70" alt="linh logo" />
                        </p>
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse" id="basicExampleNav">
                        <ul class="navbar-nav mr-auto">
                            <Link to="/">
                                <li class="nav-item">
                                    <a class="nav-link waves-effect" href="/">Home</a>
                                </li>
                            </Link>

                            <Link to="/about">
                                <li class="nav-item">
                                    <a class="nav-link waves-effect" href="https://mdbootstrap.com/docs/jquery/">About</a>
                                </li>
                            </Link>

                            <Link to="/skills">
                                <li class="nav-item">
                                    <a class="nav-link waves-effect" href="https://mdbootstrap.com/docs/angular/">Skills</a>
                                </li>
                            </Link>

                            <Link to="/education_experience">
                                <li class="nav-item">
                                    <a class="nav-link waves-effect" href="https://mdbootstrap.com/docs/react/">Education & Experience</a>
                                </li>
                            </Link>

                            <Link to="/projects" >
                                <li class="nav-item">
                                    <a class="nav-link waves-effect" href="https://mdbootstrap.com/docs/vue/">Projects</a>
                                </li>
                            </Link>
                        </ul>


                        <ul class="navbar-nav nav-flex-icons">
                            <li class="nav-item">
                                <a href="https://www.facebook.com/profile.php?id=100009374371575" class="nav-link waves-effect">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="https://www.linkedin.com/in/khanh-linh-8019761b5/" class="nav-link waves-effect">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="https://github.com/linhkhanh" class="nav-link waves-effect">
                                    <i class="fab fa-github"></i>
                                </a>
                            </li>
                            <Link to="/contact">
                            <li class="nav-item">
                                <a href="https://mdbootstrap.com/docs/jquery/newsletter/"
                                    class="nav-link border border-light rounded waves-effect mr-2">
                                    <i class="fas fa-envelope mr-1"></i>Contact Me
          </a>
                            </li>
                            </Link>
                        </ul>

                    </div>

                </div>

            </nav>




        </div>
    );
}

export default Header;
