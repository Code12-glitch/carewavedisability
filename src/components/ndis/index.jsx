import React from 'react'
import { Link } from 'react-router-dom'
import ndisimg from '../../images/about3.png'
import VideoModal from '../ModalVideo'
import './style.css'

const Ndis = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0)
    }

    return (
        <div className="wpo-ndis-area section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-text">

                            <div className="wpo-section-title">
                                <span>
                                    National Disability Insurance Scheme
                                </span>

                                <h2>
                                    Your Support, Your Goals,
                                    Your Choice
                                </h2>
                            </div>

                            <p>
                                At CareWave Disability Services, we are proud
                                to be a trusted NDIS provider. Our dedicated
                                team of experienced support workers is
                                committed to providing personalised care with
                                compassion, respect and genuine empathy.
                            </p>

                            <p>
                                We understand that every participant has
                                unique needs, goals and aspirations. We take
                                the time to listen and understand what matters
                                to you, allowing us to provide tailored support
                                that fits your lifestyle and personal journey.
                            </p>

                            <div className="btns">
                                <Link
                                    to="/contact"
                                    className="theme-btn"
                                    onClick={ClickHandler}
                                >
                                    Contact Us
                                </Link>

                                <ul>
                                    <li className="video-holder">
                                        <VideoModal />
                                    </li>

                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-ndis-img">
                            <img
                                src={ndisimg}
                                alt="CareWave NDIS Services"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Ndis