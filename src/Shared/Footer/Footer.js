import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import linkedin from '../../images/linkedin.png'
import youtube from '../../images/youtube.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='mt-5' style={{ position: 'relative', width: '100%', bottom: '0' }}>
            <div className='footer text-light'>
                <div className='pt-5 container d-flex justify-content-between'>
                    <div>
                        {/* <div>
                            <img className='img-fluid rounded-3' src={logo} alt="" />
                        </div> */}
                        <div>
                            <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                            <p>Support : zillur.hero40@gmail.com</p>
                            <p>(Available : 10:00am to 07:00pm)</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center flex-wrap'>
                        <div>
                            <div className='footer-links'>
                                <Link to='blogs'>BLOGS</Link>
                                <br />
                                <Link to='blogs'>BLOGS</Link>
                                <br />
                                <Link to='blogs'>BLOGS</Link>
                                <br />
                                <Link to='blogs'>BLOGS</Link>
                            </div>
                        </div>
                    </div>
                    <div className='social-media'>
                        <h5>Follow us</h5>
                        <a href="https://www.facebook.com/kamrul.hassan400/">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="https://twitter.com/ZillurHero40">
                            <img src={twitter} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/zillur-rahman-965915229/">
                            <img src={linkedin} alt="" />
                        </a>
                        <a href="">
                            <img src={youtube} alt="" />
                        </a>
                    </div>
                </div>
                <p className='text-center mt-5'>C copyright @ Car.com</p>
            </div>
        </div>
    );
};

export default Footer;