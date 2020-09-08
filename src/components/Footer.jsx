import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>

            <footer class="page-footer font-small grey lighten-3 py-4 dark-grey-text">

                <div class="container">

                    <div class="row">
                        <div class="col-md-4">
                            <img src="https://res.cloudinary.com/dt5rqi1l9/image/upload/v1599544924/logo_size_invert_zmyzml.jpg" height="30" alt="linh logo" />
                        </div>
                        <div class="col-md-4">
                            <ul class="list-unstyled d-flex justify-content-center mb-0 mt-2">
                                <Link to="/about">
                                    <li>
                                        <a class="mx-3">About</a>
                                    </li>
                                </Link>
                                <Link to="/contact">
                                    <li>
                                        <a class="mx-3">Contact</a>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div class="col-md-4">

                            <div class="footer-copyright text-right bg-transparent dark-grey-text mt-2">© 2020.
          <a class="dark-grey-text" href="https://mdbootstrap.com/education/bootstrap/"> Designed by Linh Le</a>
                            </div>

                        </div>
                    </div>

                </div>


            </footer>

        </div>
    );
}

export default Footer;
