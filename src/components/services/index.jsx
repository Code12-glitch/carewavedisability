import React from "react";
import { Link } from "react-router-dom";

import service1 from "../../images/services/img-1.png";
import service2 from "../../images/services/img-2.png";
import service3 from "../../images/services/img-3.png";
import service4 from "../../images/services/img-4.png";
import service5 from "../../images/services/img-5.png";
import service6 from "../../images/services/img-6.png";
import service7 from "../../images/services/img-7.png";

import "./style.css";

const Services = () => {
  const ClickHandler = () => {
    window.scrollTo(0, 0);
  };

  const services = [
    {
      image: service1,
      title: "Assist-Personal Activities",
      description:
        "We provide personalised support with everyday personal activities, helping participants live safely, independently, and with dignity while working towards their individual goals.",
      link: "/services/assist-personal-activities",
    },
    {
      image: service2,
      title: "Assist-Travel & Transport",
      description:
        "We provide safe, reliable travel and transport support, helping participants travel confidently, build independence, and access personal, community, and public transport.",
      link: "/services/community-participation",
    },
    {
      image: service3,
      title: "Daily Tasks & Shared Living",
      description:
        "We provide personalised support with daily activities and shared living, helping participants build independence, confidence, and a meaningful lifestyle.",
      link: "/services/personal-care",
    },
    {
      image: service4,
      title: "Community Participation",
      description:
        "We support participants to connect with their community, build meaningful relationships, and confidently take part in social, recreational, and community activities.",
      link: "/services/supported-independent-living",
    },
    {
      image: service5,
      title: "Household Tasks",
      description:
        "We provide personalised household support to maintain a clean, safe, and comfortable home environment, helping participants manage everyday tasks with greater independence.",
      link: "/services/social-recreational-support",
    },
    {
      image: service6,
      title: "Participate Community",
      description:
        "We support participants to build confidence, develop life skills, and take part in meaningful community activities based on their interests and goals.",
      link: "/services/daily-tasks-shared-living",
    },
    {
      image: service7,
      title: "Group & Centre Activities",
      description:
        "We provide engaging group and centre-based activities that encourage social connection, skill development, confidence, and greater community participation.",
      link: "/services/other-support",
    },
  ];

  return (
    <div className="wpo-services-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wpo-section-title">
              <span>Our Services</span>
              <h2>Supporting You Every Step of the Way</h2>
            </div>
          </div>
        </div>

        <div className="row">

          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="wpo-service-card">
                <div className="wpo-service-card-img">
                  <img src={service.image} alt={service.title} />
                </div>

                <div className="wpo-service-card-content">
                  <h2>{service.title}</h2>

                  <p>{service.description}</p>

                  <Link
                    to={service.link}
                    onClick={ClickHandler}
                    className="service-btn"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Services;
