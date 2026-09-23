import React, { useState } from "react";
import { Link } from "react-router-dom";

import simg from "../../images/services/img-2.png";

import "./style.css";

const AssistTravelTransport = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const ClickHandler = () => {
    window.scrollTo(0, 0);
  };

  const faqData = [
    {
      question: "What is Assist Travel & Transport?",
      answer:
        "Assist Travel & Transport provides support to help NDIS participants travel safely and confidently to appointments, work, education, and community activities. ",
    },
    {
      question: "Do you offer travel transport NDIS Melbourne?",
      answer:
        "Yes, we offer assist travel & Transport, along with daily tasks, shared living, community participation, household tasks and much more. ",
    },
    {
      question: "How does assist travel transport under NDIS work?",
      answer:
        "The Assistance Travel and Transport program is designed to help people with disabilities access the same travel opportunities as everyone else. ",
    },
    {
      question: "What services do you offer?",
      answer:
        "At Carewave Disability Services, we offer assist travel & transport, along with community participation, household tasks, assist personal activities and more. ",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="wpo-case-details-area section-padding">
      <div className="container">
        <div className="row">
          {/* Main Content */}
          <div className="col col-lg-8">
            <div className="wpo-case-details-wrap">
              {/* Service Image */}
              <div className="wpo-case-details-img">
                <img
                  width="100%"
                  src={simg}
                  alt="Assist Travel and Transport"
                />
              </div>

              {/* Service Content */}
              <div className="wpo-case-details-text">
                <div className="wpo-case-content">
                  <div className="wpo-case-text-top">
                    <h2>Safe, Reliable Travel Support You Can Trust </h2>

                    <p>
                      Assist travel & transport includes support that enables
                      participants to build capacity to independently travel,
                      including through personal transport, related training or
                      aids and equipment to use public transport
                      independently.
                    </p>
                    <p>
                      Our assist travel transport NDIS service is a secure and
                      comfortable choice for those who need extra support while
                      travelling. Our experienced team can help with anything
                      and everything. At Carewave Disability Services, apart
                      from travel transport NDIS Melbourne, we offer daily
                      tasks, shared living, household tasks, community
                      participation and much more.
                    </p>

                    <h3>What is Assistance Travel and Transport?</h3>

                    <p>Assist travel & transport is a comprehensive transportation service specially designed for NDIS participants to provide them with the necessary transport support to ease their travelling requirements. Assist Travel Transport under the National Disability Insurance Scheme may include:</p>

                    <div className="case-bb-text">
                      {/* <h5>Your Support Includes</h5> */}

                      <ul>
                        <li>Transport Assistance</li>
                        <li>Transport Services</li>
                        <li>Travel Training</li>
                      </ul>

                      <h3>What Assist Travel Transport NDIS We Offer? </h3>
                      <p>Our comprehensive Assist travel & transport service covers all aspects of your travel needs, ensuring confident and safe journeys:</p>

                      <ul>
                        <li>Access Personal Vehicles</li>
                        <li>Specialised Aids and Equipment</li>
                        <li>Public Transport Training </li>
                      </ul>

                      <h3>Where Can We Take You?</h3>

                      <p>At Carewave Disability Services, our assist travel transport NDIS service empowers you to reach where you need to go, including but not limited to:</p>

                      <ul>
                        <li>Medical Appointments </li>
                        <li>Educational Institutes</li>
                        <li>Community Functions </li>
                        <li>Training and Development</li>
                      </ul>

                      <h3>Why is Assist Travel Transport Important?</h3>

                      <p>Assist travel & transport support plays a crucial role in improving social participation and independence. It helps participants:</p>

                      <ul>
                        <li>Attend important appointments on time</li>
                        <li>Participate in community life</li>
                        <li>Access employment and education opportunities</li>
                        <li>Reduce reliance on family members for transport</li>
                        <li>Enhanced independence</li>
                        <li>Cost and time saving</li>
                        <li>Access to essential services</li>
                        <li>Build confidence in travel skills </li>
                      </ul>

                      <h3>How to Choose a Provider for Assist Travel & Transport Under NDIS?</h3>

                      <p>You should check some factors before finalising on a provider for travel transport NDIS Melbourne: </p>

                      <ul>
                        <li>Check NDIS experience</li>
                        <li>Reliable and punctual</li>
                        <li>Qualified support staff</li>
                        <li>Flexible scheduling</li>
                        <li>Accessible vehicles</li>
                        <li>Person-centred support</li>
                        <li>Clear communication</li>
                        <li>Positive reviews and reputation</li>
                      </ul>

                      <p>Carewave Disability Services is a reliable provider and ticks all of the above boxes when it comes to assistance travel and transport under NDIS. </p>

                      <h3>Signs You Need Assist Travel & Transport</h3>

                      <ul>
                        <li>You find it difficult to travel independently.</li>
                        <li>You need support getting to medical appointments or therapy.</li>
                        <li>Public transport feels unsafe or inaccessible for you.</li>
                        <li>You require reliable transport to work, school, or community activities.</li>
                        <li>You rely on family or friends for most of your travel.</li>
                        <li>You want to participate in more social and recreational activities.</li>
                        <li>You need assistance with boarding, exiting, or navigating transport.</li>
                        <li>You want to build confidence and independence while travelling.</li>
                      </ul>

                      <h3>Why Choose Carewave Disability Services as your Assist Travel & Transport Provider?</h3>
                      
                     <p>Are you or a dear one seeking travel transport NDIS Melbourne? At Carewave Disability Services, we’re devoted to helping people with disabilities maintain their independence. </p>
                     <ul>
                      <li>Our mission is simple: to empower you, focusing on your support requirements and unique preferences. </li>
                      <li>Participants and their families choose us as:<br></br>
                        <ul>
                          <li>Comprehensive services </li>
                          <li>Qualified team </li>
                          <li>Personalised support</li>
                          <li>Flexible</li>
                          <li>Holistic support</li>
                        </ul>
                      </li>
                     </ul>


                      {/* FAQ SECTION */}
                      <div className="service-faq">
                        <h3>Frequently Asked Questions</h3>

                        <p className="faq-intro">
                          Have questions about Assist Travel & Transport? Here
                          are some common questions about our travel and
                          transport support.
                        </p>

                        <div className="faq-list">
                          {faqData.map((faq, index) => (
                            <div
                              className={`faq-item ${
                                openFaq === index ? "active" : ""
                              }`}
                              key={index}
                            >
                              <button
                                type="button"
                                className="faq-question"
                                onClick={() => toggleFaq(index)}
                                aria-expanded={openFaq === index}
                              >
                                <span>{faq.question}</span>

                                <span className="faq-icon">
                                  {openFaq === index ? "−" : "+"}
                                </span>
                              </button>

                              {openFaq === index && (
                                <div className="faq-answer">
                                  <p>{faq.answer}</p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col col-lg-4">
            <div className="wpo-service-sidebar">
              <div className="service-sidebar-box">
                <h3>Our Services</h3>

                <ul>
                  <li>
                    <Link to="/assist-personal-activities">
                      Assist-Personal Activities
                    </Link>
                  </li>

                  <li>
                    <Link to="/assist-travel-transport">
                      Assist Travel & Transport
                    </Link>
                  </li>

                  <li>
                    <Link to="/daily-tasks-shared-living">
                      Daily Tasks & Shared Living
                    </Link>
                  </li>

                  <li>
                    <Link to="/community-participation">
                      Community Participation
                    </Link>
                  </li>

                  <li>
                    <Link to="/household-tasks">Household Tasks</Link>
                  </li>

                  <li>
                    <Link to="/participate-community">
                      Participate Community
                    </Link>
                  </li>

                  <li>
                    <Link to="/group-centre-activities">
                      Group & Centre Activities
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="service-sidebar-box">
                <h3>Need Support?</h3>

                <p>
                  Talk to our friendly team about your individual travel and
                  transport needs.
                </p>

                <Link
                  to="/contact"
                  onClick={ClickHandler}
                  className="theme-btn"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistTravelTransport;
