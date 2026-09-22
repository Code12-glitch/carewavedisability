import React from 'react'
import abimg from '../../images/about3.png'
import VideoModal from '../ModalVideo'
import './style.css'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>What We Do?</span>
                                <h2>About CareWave Disability Services</h2>
                            </div>
                            <p>At Carewave Disability Services, we are proud to serve as a trusted NDIS provider. Our dedicated team of highly skilled and experienced support workers is passionate about delivering personalised care with expertise, compassion, and genuine empathy.</p>
                            <p>We understand that every participant has their own unique lifestyle and goals. That’s why we take the time to listen and truly understand each individual’s needs. This allows us to design tailored support plans that perfectly align with their personal journeys. </p>
                            <div className="btns">
                                <a href="/contact" className="theme-btn" onClick={ClickHandler}>Contact Us</a>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal/>
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
                            <img src={abimg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;