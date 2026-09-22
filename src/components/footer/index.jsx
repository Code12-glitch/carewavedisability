import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/care-wave.webp'
import Newsletter from '../Newsletter'
import n1 from '../../images/footer/img-1.jpg'
import n2 from '../../images/footer/img-2.jpg'
import './style.css'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <Newsletter/>
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <img src={Logo} alt=""/>
                            </div>
                            <p>As a trusted NDIS provider, we are committed to delivering personalised and compassionate care tailored to your needs and goals.</p>
                            <ul>
                                <li><Link onClick={ClickHandler} to="https://www.facebook.com/carewavedisability/"><i className="ti-facebook"></i></Link></li>
                                {/* <li><Link onClick={ClickHandler} to="/home"><i className="ti-twitter-alt"></i></Link></li> */}
                                <li><Link onClick={ClickHandler} to="https://www.instagram.com/CareWaveDisabilityServices"><i className="ti-instagram"></i></Link></li>
                                {/* <li><Link onClick={ClickHandler} to="/home"><i className="ti-google"></i></Link></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                        {/* <div className="widget link-widget resource-widget">
                            <div className="widget-title">
                                <h3>Top News</h3>
                            </div>
                            <div className="news-wrap">
                                <div className="news-img">
                                    <img src={n1} alt=""/>
                                </div>
                                <div className="news-text">
                                    <h3><Link onClick={ClickHandler} to="/blog">Education for all poor children</Link></h3>
                                    <span>12 Nov, 2020</span>
                                </div>
                            </div>
                            <div className="news-wrap">
                                <div className="news-img">
                                    <img src={n2} alt=""/>
                                </div>
                                <div className="news-text">
                                    <h3><Link onClick={ClickHandler} to="/blog">Education for all poor children</Link></h3>
                                    <span>12 Nov, 2020</span>
                                </div>
                            </div>
                        </div> */}
                         <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                <li><Link onClick={ClickHandler} to="/case">NDIS</Link></li>
                                <li><Link onClick={ClickHandler} to="/case">New Participants</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Referral</Link></li>
                                <li><Link onClick={ClickHandler} to="/event">Feedback</Link></li>
                                <li><Link onClick={ClickHandler} to="/event">Blogs</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Services</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/about">Assist-Personal Activities</Link></li>
                                <li><Link onClick={ClickHandler} to="/case">Assist-Travel & Transport</Link></li>
                                <li><Link onClick={ClickHandler} to="/case">Group & Centre Activities</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Community Participation</Link></li>
                                <li><Link onClick={ClickHandler} to="/event">Household Tasks</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-12">
                        <div className="widget market-widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact Info</h3>
                            </div>
                            {/* <p>online store with lots of cool and exclusive wpo-features</p> */}
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-pin"></i>VIC, Australia</li>
                                    <li><i className="fi flaticon-envelope"></i>connect@carewavedisability.com.au</li>
                                    <li><i className="fi flaticon-call"></i>0433 257 716</li>
                                    <li><i className="fi flaticon-call"></i>0424 249 901</li>
                                    <li><i className="fi flaticon-document"></i>ABN - 9968 153 7904</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright">&copy; 2026 CareWave Disability Services. All rights reserved  | Website Designed & Managed by <a href="https://oz-digital.com.au/" target="_blank">Ozy Digital Pty Ltd</a>, Glenfield.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;