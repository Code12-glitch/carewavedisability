import React, { useState } from "react";
import { Link } from "react-router-dom";

import simg from "../../images/services/img-6.png";

import "./style.css";

const ParticipateCommunity = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const ClickHandler = () => {
    window.scrollTo(0, 0);
  };

  const faqData = [
    {
      question: "What is participate community?",
      answer:
        "Community Participation under the NDIS is support that helps you take part in social, recreational, educational, and community activities to build independence and connections. ",
    },
    {
      question:
        "Do you offer participate community Melbourne support?",
      answer:
        "Yes, Carewave Disability Services offer participate in community support along with household tasks, assist personal activities, daily tasks, shared living and more. ",
    },
    {
      question:
        "Who is eligible for Community Participation supports?",
      answer:
        "NDIS participants with approved funding for community participation in their plan may be eligible. ",
    },
    {
      question: "What services do you offer?",
      answer:
        "Carewave Disability Services offers participate community, daily tasks shared living, household tasks, assist personal activities and more. ",
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
                  alt="Participate Community"
                />
              </div>

              {/* Service Content */}
              <div className="wpo-case-details-text">
                <div className="wpo-case-content">
                  <div className="wpo-case-text-top">
                    <h2>
                      Meaningful Community Participation, Tailored for You 
                    </h2>

                    <p>
                      For many participants, getting involved in the community is an excellent way of discovering new interests, making friends and acquiring life skills. With a positive environment and the help of planned activities, people with disabilities can increase self-esteem, learn communication skills and become independent, which will be very helpful in their daily lives. 
                    </p>

                    <p>
                      Carewave Disability Services is one of the leading providers offering participate community support. We understand that each participant is different with diverse needs, and thus we offer personalised support accordingly. Not just participate in community activities, we also offer assist personal activities, daily tasks shared living, household tasks and much more. 
                    </p>

                    <h3>
                      What is participate community?
                    </h3>

                    <p>
                      Participate in community is a vital NDIS support that assists individuals in developing independence, confidence and skills through actual activities. 
                    </p>

                    <div className="case-bb-text">
                      <h5>Your support might include:</h5>

                      <ul>
                        <li>Assistance to attend community events and activities</li>
                        <li>Support to join social, recreational, and cultural programs</li>
                        <li>Help with developing social and communication skills</li>
                        <li>Assistance to build confidence and independence in the community</li>
                        <li>Support to attend classes, workshops, and learning opportunities</li>
                        <li>Help with volunteering and community group participation</li>
                        <li>Assistance with transport to and from community activities (where funded)</li>
                        <li>Support to make new friends and strengthen social connections</li>
                        <li>Encouragement to achieve your personal NDIS goals through community engagement</li>
                      </ul>

                      <h3>Benefits of our participate community support</h3>

                      <p>Partnering with Carewave Disability Services offers several benefits for participate in community activities. Some of the key benefits include:</p>

                      <ul>
                        <li>Building confidence </li>
                        <li>Improving social interaction</li>
                        <li>Developing independence</li>
                        <li>Strengthening communication skills </li>
                        <li>Exploring hobbies and interests</li>
                      </ul>

                      <h3>Signs You Need to Participate in the Community under the NDIS </h3>

                      <ul>
                        <li>You feel isolated or have limited social connections.</li>
                        <li>You want to build confidence in social situations.</li>
                        <li>You need support to attend community events or activities.</li>
                        <li>You want to develop communication and social skills.</li>
                        <li>You need assistance to join hobbies, sports, or recreational programs.</li>
                        <li>You would like to become more independent in the community.</li>
                        <li>You need support to access education, volunteering, or skill-building opportunities.</li>
                        <li>You want to achieve your NDIS goals through greater community involvement.</li>
                      </ul>

                      <h3>
                        What Participate Community Support Do We Offer?
                      </h3>

                      <p>
                        Explore the exciting range of participate in community activities you can enjoy 
                      </p>

                      <ul>
                        <li>Social Groups</li>
                        <li>Outings and Holidays</li>
                        <li>Local Libraries</li>
                        <li>Movies and Concerts</li>
                        <li>Community Events</li>
                        <li>Personal Development Courses</li>
                        <li>Sporting Clubs</li>
                        <li>Beach Trips</li>
                        <li>Visits to Parks and Gardens</li>
                        <li>Art and Craft Classes</li>
                        <li>Galleries and Museums</li>
                        <li>Cafes and Restaurants</li>
                      </ul>

                      <h3>
                       Factors to Consider When Choosing a Community Participation Provider under the NDIS
                      </h3>

                      <p>Some factors to choose a provider for participate community Melbourne </p>

                      <ul>
                        <li>NDIS Experience</li>
                        <li>Qualified Support Workers</li>
                        <li>Personalised Support</li>
                        <li>Range of Activities</li>
                        <li>Flexible Scheduling</li>
                        <li>Community Connections</li>
                        <li>Safety and Reliability</li>
                        <li>Positive Reviews</li>
                        <li>Clear Communication</li>
                        <li>Goal-Focused Approach</li>
                      </ul>

                      <p>Carewave Disability Services ticks all of the above boxes for the best. </p>

                      <h3>Why Select Carewave Disability Services As Your Provider For Participate Community?</h3>

                      <p>Participants and their families choose Carewave Disability Services, as we are one of the most trustworthy providers. Choose us as: </p>

                      <ul>
                        <li>Qualified crew  </li>
                        <li>Personalised support  </li>
                        <li>Range of services   </li>
                        <li>Clear communication  </li>
                        <li>Dedicated support  </li>
                        <li>Holistic approach  </li>
                      </ul>

                      

                      {/* FAQ SECTION */}
                      <div className="service-faq">
                        <h3>Frequently Asked Questions</h3>

                        <p className="faq-intro">
                          Have questions about Daily Tasks & Shared Living? Here
                          are some common questions about our daily living and
                          shared living support services.
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

                      {/* Contact Button */}
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
                  Talk to our friendly team about your individual daily living
                  and shared living support needs.
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

export default ParticipateCommunity;
