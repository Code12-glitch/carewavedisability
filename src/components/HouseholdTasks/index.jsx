import React, { useState } from "react";
import { Link } from "react-router-dom";

import simg from "../../images/services/img-5.png";

import "./style.css";

const HouseholdTasks = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const ClickHandler = () => {
    window.scrollTo(0, 0);
  };

  const faqData = [
    {
      question: "What are household tasks under NDIS?",
      answer:
        "Household tasks under the NDIS are supports that help participants complete essential daily chores they cannot manage due to their disability. ",
    },
    {
      question:
        "Do you offer household task assistance?",
      answer:
        "Yes. Carewave Disability Services offers household tasks along with participate community, assist personal activities and more. ",
    },
    {
      question:
        "Does the NDIS pay for all cleaning services?",
      answer:
        "No, the NDIS only funds reasonable and necessary cleaning related to your disability. ",
    },
    {
      question: "What services do you offer?",
      answer:
        "Carewave Disability Services offers household tasks Melbourne, along with daily tasks, shared living, assist personal activities, community participation, and more. ",
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
                  alt="Household Task"
                />
              </div>

              {/* Service Content */}
              <div className="wpo-case-details-text">
                <div className="wpo-case-content">
                  <div className="wpo-case-text-top">
                    <h2>
                      Trusted Household Task Services Designed Around Your Needs
                    </h2>

                    <p>
                      Carewave Disability Services is one of the leading
                      providers when it comes to household tasks. We have
                      seasoned support workers who will offer you the support
                      that you require to perform all household tasks Melbourne
                      efficiently. Our support workers will tailor household
                      task assistance services for you after assessing your
                      needs. So, if you want all-inclusive support and want to
                      reach your goals, you are at the right place. Connect with
                      us to know more.
                    </p>

                    <p>
                      Our team members assisting with NDIS household tasks will create necessary plans after analysing your impairments and how they have affected you. We also provide household tasks, assist personal activities, daily tasks, shared living, community participation and more. 
                    </p>

                    <h3>
                      What are Household Tasks Services?
                    </h3>

                    <p>
                      NDIS Household Tasks services aim to support participants in their daily living activities and maintain a comfortable, safe home environment. 
                    </p>

                    <div className="case-bb-text">
                      <h5>Your support might include: </h5>

                      <ul>
                        <li>Cleaning </li>
                        <li>Laundry</li>
                        <li>Light home maintenance </li>
                        <li>Shopping </li>
                        <li>Bill paying and household admin</li>
                      </ul>

                      <h3>Benefits of our Household Tasks under NDIS</h3>

                      <p>Given below are the key advantages of our NDIS household tasks.  </p>

                      <ul>
                        <li>Promoting Independence</li>
                        <li>Enhanced Quality of Life</li>
                        <li>Tailored Support Based on Individual Needs</li>
                        <li>Inclusion and Community Engagement</li>
                        <li>Stress Reduction for Participants and Carers</li>
                        <li>Health and Well-being</li>
                      </ul>

                      <h3>Our Household Tasks Melbourne Services</h3>

                      <p>
                        We provide reliable Household Tasks Melbourne services to help NDIS participants maintain a clean, safe, and comfortable home while supporting greater independence. 
                      </p>
                      <h5>Our services include:</h5>>

                      <ul>
                        <li>General home cleaning and tidying</li>
                        <li>Dishwashing and rubbish removal</li>
                        <li>Grocery shopping assistance</li>
                        <li>Bed making and household organisation</li>
                        <li>Light gardening and yard maintenance</li>
                        <li>Support tailored to your NDIS goals and routine</li>
                        <li>Flexible scheduling across Melbourne</li>
                      </ul>

                      <h3>How to choose a provider for household tasks under NDIS?</h3>

                      <p>
                        Before finalising a provider for household tasks Melbourne, it is crucial that you consider some factors. You will be relaxed if you are assured that your loved ones are in safe hands. Some factors are: 
                      </p>

                      <ul>
                        <li>NDIS-registered provider</li>
                        <li>Qualified team</li>
                        <li>Personalised support </li>
                        <li>Flexible </li>
                        <li>Past client review </li>
                        <li>Transparent pricing </li>
                        <li>Clear communication </li>
                      </ul>

                      <h3>
                        Signs You Need a Provider for Household Tasks Under NDIS
                      </h3>

                      <p>
                        You may benefit from a household tasks provider if:
                      </p>

                      <ul>
                        <li>Keeping your home clean has become difficult due to your disability.</li>
                        <li>Laundry and linen changes are becoming challenging to complete independently.</li>
                        <li>You struggle with meal preparation or kitchen cleaning on a regular basis.</li>
                        <li>Maintaining a safe and hygienic home environment is becoming harder.</li>
                        <li>Your family or carers need additional assistance with ongoing household responsibilities.</li>
                        <li>Your NDIS plan includes funding for household tasks, allowing you to access practical in-home support</li>
                      </ul>

                      <h3>
                        Why Choose Carewave Disability Services As Your Provider For Household Tasks?
                      </h3>

                      <p>
                        Carewave Disability Services' commitment to personalised support, comprehensive care, and the promotion of independence makes it an ideal choice for those seeking household task assistance. Some of the key reasons why you may choose us are: 
                      </p>

                      <ul>
                        <li>Comprehensive NDIS Services</li>
                        <li>Person-Centred Approach</li>
                        <li>Trained and Friendly Staff</li>
                        <li>Focus on Independence</li>
                        <li>Safe and Healthy Living Spaces</li>
                        <li>Community Integration and Support </li>
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

export default HouseholdTasks;
