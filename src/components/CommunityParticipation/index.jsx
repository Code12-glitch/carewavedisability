import React, { useState } from "react";
import { Link } from "react-router-dom";

import simg from "../../images/services/img-4.png";

import "./style.css";

const CommunityParticipation = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const ClickHandler = () => {
    window.scrollTo(0, 0);
  };

  const faqData = [
    {
      question: "What is community participation Melbourne?",
      answer:
        "Community Participation is an NDIS support that helps participants take part in social, educational, and community activities to build independence and meaningful relationships. ",
    },
    {
      question:
        "Do you offer NDIS social and community participation Melbourne?",
      answer:
        "Yes. Carewave Disability Services offers community participation Melbourne, along with household tasks, participation in community, daily tasks, shared living and more. ",
    },
    {
      question:
        "Who is eligible for Community Participation Melbourne supports?",
      answer:
        "Participants with relevant NDIS funding for community participation in their plan can access these supports, depending on their goals and approved funding. ",
    },
    {
      question: "What services do you offer?",
      answer:
        "Carewave Disability Services offer NDIS social and community participation Melbourne, along with assist personal activities, daily tasks, shared living, household tasks, and more. ",
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
                  alt="Community Participation"
                />
              </div>

              {/* Service Content */}
              <div className="wpo-case-details-text">
                <div className="wpo-case-content">
                  <div className="wpo-case-text-top">
                    <h2>
                      Your Trusted NDIS Community Participation Provider
                      Melbourne
                    </h2>

                    <p>
                      We humans are social animals, and we subconsciously love
                      to build connections with like-minded people. An NDIS
                      provider helps you with various community participation
                      and social activities. It’s more than just joining a
                      group; it’s about growing, belonging, and thriving in your
                      community.
                    </p>

                    <p>
                      At Carewave Disability Services, we believe you're a
                      crucial part of your community. That's why our Community
                      Participation Melbourne service, funded as a core support
                      by the NDIS, is all about helping you dive into the heart
                      of your local community. Imagine cheering on your
                      favourite team at a community sports event, joining a
                      local painting group, or lending a hand at a local charity
                      - we're here to make it happen.
                    </p>

                    <h3>
                      What Are NDIS Community Participation Melbourne Supports?
                    </h3>

                    <p>
                      Community participation Melbourne support is also called
                      NDIS social and community participation Melbourne. They
                      are designed to help participants join activities in their
                      local community.
                    </p>

                    <div className="case-bb-text">
                      <h5>Community participation supports may include:</h5>

                      <ul>
                        <li>Attending social groups and community events</li>
                        <li>
                          Joining sports, fitness, or recreational activities
                        </li>
                        <li>
                          Visiting libraries, museums, parks, or local
                          attractions
                        </li>
                        <li>
                          Learning new skills through workshops or hobby classes
                        </li>
                        <li>
                          Volunteering or participating in community programs
                        </li>
                        <li>Support to attend appointments or local outings</li>
                        <li>
                          Building communication, social, and independent living
                          skills
                        </li>
                        <li>
                          Assistance with using public transport and navigating
                          the community
                        </li>
                      </ul>

                      <h3>Types of Community Participation Melbourne</h3>

                      <p>NDIS community participation Melbourne includes: </p>

                      <ul>
                        <li>Community events and festivals</li>
                        <li>Social groups and clubs</li>
                        <li>Recreational activities</li>
                        <li>Arts and cultural experiences</li>
                        <li>Sporting activities and gym access</li>
                        <li>Library and educational activities </li>
                        <li>Shopping and errand assistance</li>
                      </ul>

                      <h3>What Community participation do we offer? </h3>

                      <p>
                        NDIS social and community participation Melbourne
                        services focus on equipping you with practical life
                        skills and giving you the support you need to live with
                        confidence and ease.
                      </p>
                      <p>
                        Here’s what we offer to help you take charge of your
                        daily life:
                      </p>

                      <ul>
                        <li>Budgeting and Financial Management</li>
                        <li>Communication and Administration Support</li>
                        <li>Shopping Assistance</li>
                        <li>Appointment Support</li>
                        <li>Health and Wellbeing</li>
                      </ul>

                      <h3>
                        Key Benefits of Community Participation Melbourne
                      </h3>

                      <p>
                        After participating in, participants experienced the following benefits of NDIS community participation Melbourne:
                      </p>

                      <ul>
                        <li>Improved Social Connections</li>
                        <li>Enhanced Physical and Mental Wellbeing</li>
                        <li>Skill Development and Independence</li>
                        <li>Opportunities for Employment and Volunteering</li>
                        <li>Strengthening Sense of Belonging</li>
                      </ul>

                      <h3>
                        How to Choose a Provider for Community Participation Melbourne under NDIS?
                      </h3>

                      <p>
                        Choosing the right Community Participation provider can help you build confidence, develop new skills, and enjoy meaningful social connections. Here are some important factors to consider:
                      </p>

                      <ul>
                        <li>Look for experience with Community Participation </li>

                        <li>Ensure supports are personalised </li>

                        <li>Check staff qualifications and approach</li>

                        <li>Ask about activity options </li>

                        <li>Choose a flexible provider</li>

                        <li>Review communication and responsiveness </li>

                        <li>Read reviews and seek recommendations</li>

                        <li>Discuss the service agreement </li>
                      </ul>

                      <h3>
                        Why choose Carewave Disability Services as your community participation Melbourne provider? 
                      </h3>

                      <p>
                        Participants and their family members choose Carewave Disability Services, as we are a reliable NDIS provider for community participation. Select us as:
                      </p>

                      <ul>
                        <li>Dedicated provider </li>
                        <li>Personalised support</li>
                        <li>Range of services</li>
                        <li>Qualified team</li>
                        <li>Flexible</li>
                        <li>Comprehensive support </li>
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

export default CommunityParticipation;
