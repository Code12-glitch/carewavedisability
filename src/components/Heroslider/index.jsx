import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import VideoModal from '../ModalVideo'

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

const Hero2 = () => {

  useEffect(() => {
    let slider = null

    const initSlider = async () => {
      // Owl Carousel requires jQuery globally
      window.$ = $
      window.jQuery = $

      // Load Owl Carousel
      await import('owl.carousel')

      slider = $('.hero-slider')

      if (!slider.length) return

      // Destroy existing instance if already initialized
      if (slider.hasClass('owl-loaded')) {
        slider.trigger('destroy.owl.carousel')
      }

      slider.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,

        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,

        smartSpeed: 1000,

        // Home 2 style transition
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',

        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1200: {
            items: 1
          }
        }
      })
    }

    initSlider()

    return () => {
      if (
        slider &&
        slider.length &&
        slider.hasClass('owl-loaded')
      ) {
        slider.trigger('destroy.owl.carousel')
      }
    }
  }, [])

  return (
    <section className="hero hero-style-1">

      <div className="hero-slider">

        {/* SLIDE 1 */}
        <div className="slide">

          <div className="container">

            <div className="row">

              <div className="col col-lg-6 slide-caption">

                <div className="slide-title">
                  <h2>
                    Daily Task & <span>Shared Living</span>
                  </h2>
                </div>

                <div className="btns">

                  <Link
                    to="/daily-tasks-shared-living/"
                    className="theme-btn"
                  >
                    Discover More
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

          </div>

          {/* Banner image */}
          <div className="right-vec"></div>

        </div>


        {/* SLIDE 2 */}
        <div className="slide">

          <div className="container">

            <div className="row">

              <div className="col col-lg-6 slide-caption">

                <div className="slide-title">
                  <h2>
                    Community <span>Participation</span>
                  </h2>
                </div>

                <div className="btns">

                  <Link
                    to="/community-participation/"
                    className="theme-btn"
                  >
                    Discover More
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

          </div>

          {/* Banner image */}
          <div className="right-vec"></div>

        </div>

      </div>

    </section>
  )
}

export default Hero2;