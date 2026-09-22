import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import VideoModal from '../ModalVideo'

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

const Hero2 = (props) => {

  useEffect(() => {
    const initSlider = async () => {
        await import('owl.carousel')

        const slider = $('.hero-slider')

        slider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            smartSpeed: 1000,
            dots: true,
            nav: false
        })
    }

    initSlider()

    return () => {
        const slider = $('.hero-slider')

        if (slider.hasClass('owl-loaded')) {
            slider.trigger('destroy.owl.carousel')
        }
    }
}, [])

  return (
    <section className="hero hero-style-1">
      <div className="hero-slider">
        <div className="slide">
          <div className="container">
            <div className="row">
              <div className="col col-lg-6 slide-caption">
                <div className="slide-title">
                  <h2>
                    Daily Task & <span>Shared Living</span>
                  </h2>
                </div>
                {/* <div className="slide-subtitle">
                                    <p>High Quality Charity Theme in Envato Market.</p>
                                    <p>You Can Satisfied Yourself By Helping.</p>
                                </div> */}
                <div className="btns">
                  <Link to="/donate" className="theme-btn">
                    Discover More
                  </Link>
                  <ul>
                    <li className="video-holder">
                      <VideoModal />
                    </li>
                    <li className="video-text">Watch Our Video</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="right-vec"></div>
        </div>
        <div className="slide">
          <div className="container">
            <div className="row">
              <div className="col col-lg-6 slide-caption">
                <div className="slide-title">
                  <h2>
                    Community <span>Participation</span>
                  </h2>
                </div>
                {/* <div className="slide-subtitle">
                                    <p>High Quality Charity Theme in Envato Market.</p>
                                    <p>You Can Satisfied Yourself By Helping.</p>
                                </div> */}
                <div className="btns">
                  <Link to="/donate" className="theme-btn">
                    Discover More
                  </Link>
                  <ul>
                    <li className="video-holder">
                      <VideoModal />
                    </li>
                    <li className="video-text">Watch Our Video</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="right-vec"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
