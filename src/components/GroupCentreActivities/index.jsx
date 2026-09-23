import React, { useState } from "react";
import { Link } from "react-router-dom";

import simg from "../../images/services/img-7.png";

import "./style.css";

const GroupCentreActivities = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const ClickHandler = () => {
    window.scrollTo(0, 0);
  };

  const faqData = [
    {
      question: "What are group centre activities?",
      answer:
        "Group centre activities NDIS are structured programs that help participants build social, communication, and daily living skills in a supportive group environment. ",
    },
    {
      question: "Do you offer group centre activities NDIS?",
      answer:
        "Yes. At Carewave Disability Services, we offer group centre activities and community participation, household tasks, assist personal activities and more. ",
    },
    {
      question: "Who can access group centre activities?",
      answer:
        "NDIS participants with appropriate funding in their plan may be eligible to join group centre activities. ",
    },
    {
      question: "What services do you offer?",
      answer:
        "At Carewave Disability Services, we offer group centre activities Melbourne, along with daily tasks shared living, household tasks, community participation and more. ",
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
                {" "}
                <img
                  width="100%"
                  src={simg}
                  alt="Group and Centre Activities"
                />{" "}
              </div>

              {/* Service Content */}
              <div className="wpo-case-details-text">
                <div className="wpo-case-content">
                  <div className="wpo-case-text-top">
                    <h2>
                      Trusted provider for group and centre based activities
                      NDIS
                    </h2>

                    <p>
                      The Group Centre Activities is an NDIS-funded service that
                      offers people with disabilities with opportunities to live
                      a more independent life. At Carewave Disability Services,
                      we understand the power of connection and the joy that
                      comes from shared experiences.{" "}
                    </p>

                    <p>
                      That’s why we’re devoted to offering a wide range of group
                      and centre activities NDIS that don’t just keep you
                      entertained but also uplift your overall well-being.
                      Whether you’re sharing a laugh over board games,
                      participating in a physical activity or exploring a
                      creative hobby, our programmes are intended to bring
                      people together in meaningful ways. From adventure to
                      arts, there’s something for everyone in our
                      offerings.{" "}
                    </p>

                    <h3>What are group centre activities?</h3>

                    <p>
                      Group and centre based activities NDIS services offer
                      opportunities for individuals to engage in sporting,
                      recreational, social, and other activities in a community
                      setting.{" "}
                    </p>

                    <div className="case-bb-text">
                      <h5>Your support might include:</h5>

                      <ul>
                        <li>Social and recreational group activities</li>
                        <li>Arts, crafts, music, and creative workshops</li>
                        <li>Cooking and life skills programs</li>
                        <li>Health and wellbeing activities</li>
                        <li>Group fitness and gentle exercise sessions</li>
                        <li>Games, puzzles, and interactive learning</li>
                        <li>Community outings and excursions</li>
                        <li>Communication and social skills development</li>
                        <li>Confidence and independence-building activities</li>
                        <li>Peer support and friendship opportunities</li>
                      </ul>

                      <h3>Group Centre Activities NDIS We offer</h3>

                      <p>Carewave Disability Services offers the following: </p>

                      <ul>
                        <li>Music</li>
                        <li>Sport</li>
                        <li>Dance</li>
                        <li>Gardening, Shopping, and Cooking</li>
                        <li>Board Games and Trivia</li>
                        <li>Disco Nights</li>
                        <li>Reading Session</li>
                        <li>Camping and the Great Outdoor</li>
                        <li>Trips to Movies, Theatres, and More</li>
                        <li>Tours and Travel</li>
                      </ul>

                      <h3>
                        Benefits of our group centre activities Melbourne{" "}
                      </h3>

                      <p>
                        Participants and their families choose us, as we offer
                        several benefits, as mentioned below:{" "}
                      </p>

                      <ul>
                        <li>Improved Social Skills & Confidence</li>
                        <li>Structured Learning & Personal Growth</li>
                        <li>Enhanced Mental Wellbeing</li>
                        <li>Recreational Enjoyment in a Safe Space </li>
                        <li>Develop New Skills </li>
                        <li>Personalised Support </li>
                        <li>Safe and Inclusive Environment</li>
                        <li>Fun and Engaging Experiences</li>
                      </ul>

                      <h3>
                        How to choose a provider for Group centre activities?
                      </h3>

                      <p>
                        There are several factors that one should consider
                        before finalising on an NDIS provider. Check for:
                      </p>

                      <ul>
                        <li>NDIS-registered</li>
                        <li>Qualified crew</li>
                        <li>Holistic services</li>
                        <li>Personalised support</li>
                      </ul>

                      <p>
                        At Carewave Disability Services, we tick all of the
                        above boxes to offer the best NDIS support and related
                        services.{" "}
                      </p>

                      <h3>
                        Signs You Need Group Centre Activities Melbourne Under
                        the NDIS
                      </h3>

                      <p>
                        Group and centre based activities NDIS can help
                        participants build confidence, social connections, and
                        everyday life skills in a supportive environment.{" "}
                      </p>

                      <ul>
                        <li>
                          You would like to improve your communication and
                          social skills.
                        </li>
                        <li>You want to build confidence in group settings.</li>
                        <li>
                          You would like to make new friends in a safe and
                          inclusive environment.
                        </li>
                        <li>
                          You need assistance to increase your independence and
                          community participation.
                        </li>
                        <li>
                          You want regular activities that support your
                          wellbeing and personal growth.
                        </li>
                      </ul>

                      <h3>
                        Why choose Carewave Disability Services as your group
                        centre activities?{" "}
                      </h3>

                      <p>
                        At Carewave Disability Services, we believe that group
                        centre activities should be engaging, inclusive, and
                        designed to help participants build confidence,
                        independence, and lasting social connections.{" "}
                      </p>

                      <h5>Why families and participants choose us:</h5>

                      <ul>
                        <li>Experienced and compassionate support workers</li>
                        <li>
                          Person-centred activities tailored to individual
                          interests and goals
                        </li>
                        <li>
                          Safe, inclusive, and welcoming group environment
                        </li>
                        <li>
                          Fun recreational, educational, and skill-building
                          activities
                        </li>
                        <li>Flexible support aligned with your NDIS plan</li>
                        <li>
                          Regular communication with participants and their
                          families
                        </li>
                        <li>
                          Committed to helping you enjoy meaningful and
                          rewarding experiences every day
                        </li>
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

export default GroupCentreActivities;
