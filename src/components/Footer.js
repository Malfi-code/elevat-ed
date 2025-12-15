import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <>
            <section className="footer">
                <div className="footer-container">
                    <div className="footer-links">
                        <div className="footer-link-wrapper">
                            <div className="footer-link-items">
                                <Link to='/about-us'><h2 className="underline">About Us</h2></Link>
                            </div>
                            <div className="footer-link-items">
                                <Link to='/resources'><h2 className="underline">Resources</h2></Link>
                            </div>
                            <div className="footer-link-items">
                                <Link to='/contact-us'><h2 className="underline">Contact Us</h2></Link>
                            </div>
                            <div className="footer-link-items !flex-row">
                                <div className="row flex gap-2 text-xl">
                                    <Link to='https://instagram.com/elevated_graded' target='_blank'><i class="fa-brands fa-instagram"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;