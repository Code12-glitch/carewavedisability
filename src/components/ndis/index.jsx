import React from "react";
import { Link } from "react-router-dom";
import ndisimg from "../../images/about3.png";
import VideoModal from "../ModalVideo";
import "./style.css";

const Ndis = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="wpo-ndis-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="wpo-about-text">
              <div className="wpo-section-title">
                <span>National Disability Insurance Scheme</span>

                <h2>
                  What Is The National Disability Insurance Scheme (NDIS)?
                </h2>
              </div>

              <p>
                The National Disability Insurance Scheme (NDIS) is a significant
                social reform in Australia that aims to provide support and
                services to individuals with disabilities. It is designed to
                empower people with disabilities by giving them greater control
                and choice over their own lives. The NDIS provides funding for a
                wide range of services and supports, including healthcare,
                therapy, assistive technology, and personal care. By focusing on
                individual needs and goals, the NDIS seeks to enhance the
                quality of life and improve the outcomes for people with
                disabilities, enabling them to participate fully in society and
                achieve their aspirations.
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

                  <li className="video-text">Watch Our Video</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="wpo-ndis-img">
              <img src={ndisimg} alt="CareWave NDIS Services" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ndis;
