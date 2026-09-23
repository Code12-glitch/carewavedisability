import React, { useState } from "react";
import { Link } from "react-router-dom";

import simg from "../../images/services/img-3.png";

import "./style.css";

const DailyTasksSharedLiving = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const ClickHandler = () => {
    window.scrollTo(0, 0);
  };

  const faqData = [
    {
      question: "What are Daily Tasks & Shared Living?",
      answer:
        "Daily Tasks & Shared Living provides NDIS-funded support to help participants manage everyday activities and live more independently in a shared home environment.",
    },
    {
      question: "Do you offer Daily Tasks & Shared Living in Melbourne?",
      answer:
        "Yes, Carewave Disability Services offers Daily Tasks & Shared Living support, along with household tasks, assistance with personal activities, community participation, and other NDIS support services.",
    },
    {
      question:
        "Who is eligible for Daily Tasks & Shared Living support?",
      answer:
        "NDIS participants with approved funding for daily living assistance may be eligible when the support aligns with their individual goals and needs.",
    },
    {
      question: "What services do you offer?",
      answer:
        "Carewave Disability Services offers a range of support services, including household tasks, assistance with personal activities, Daily Tasks & Shared Living, community participation, and more.",
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
                  alt="Daily Tasks and Shared Living"
                />
              </div>

              {/* Service Content */}
              <div className="wpo-case-details-text">
                <div className="wpo-case-content">
                  <div className="wpo-case-text-top">

                    <h2>
                      Making Daily Living Easier with NDIS Support
                    </h2>

                    <p>
                      The Daily Tasks & Shared Living service provides
                      personalised support that can help participants manage
                      everyday activities and work towards greater independence.
                      Our support is designed around each participant's
                      individual needs, preferences, and goals.
                    </p>

                    <p>
                      Carewave Disability Services provides shared living
                      support to assist people with disabilities with their
                      daily routines and household responsibilities. Our Daily
                      Tasks & Shared Living NDIS support can help participants
                      maintain their independence while living in a safe,
                      supportive, and welcoming environment. We also offer
                      household tasks, assistance with personal activities,
                      community participation, and more.
                    </p>

                    <h3>
                      What are Daily Tasks & Shared Living?
                    </h3>

                    <p>
                      Daily Tasks & Shared Living NDIS support helps
                      participants with everyday personal and household
                      activities while living in a shared home. The support
                      can promote greater independence, safety, confidence,
                      and community participation.
                    </p>

                    <div className="case-bb-text">

                      <h5>Your Support Includes</h5>

                      <ul>
                        <li>Personal care assistance</li>
                        <li>Meal planning and preparation</li>
                        <li>Medication reminders and support</li>
                        <li>
                          Building daily living and independent living skills
                        </li>
                        <li>
                          Budgeting and money management assistance
                        </li>
                        <li>Support with attending appointments</li>
                        <li>
                          Encouragement to participate in social and community
                          activities
                        </li>
                      </ul>

                      <h3>Our Daily Tasks NDIS Services</h3>

                      <p>
                        At Carewave Disability Services, our Daily Tasks &
                        Shared Living support is designed to help participants
                        maintain organised and comfortable homes. Our support
                        may include:
                      </p>

                      <ul>
                        <li>Meal Preparation and Planning</li>
                        <li>Home and Garden Maintenance</li>
                        <li>Living and Bedroom Areas</li>
                        <li>Grocery Shopping</li>
                        <li>Laundry</li>
                      </ul>

                      <h3>
                        Signs You Need Daily Tasks & Shared Living
                      </h3>

                      <p>
                        If everyday activities are becoming difficult to manage
                        on your own, Daily Tasks & Shared Living support under
                        the NDIS may help you live more safely, comfortably,
                        and independently.
                      </p>

                      <ul>
                        <li>
                          You find it challenging to complete everyday
                          household tasks
                        </li>
                        <li>
                          You need assistance with personal care
                        </li>
                        <li>
                          You often forget important daily routines
                        </li>
                        <li>
                          You would like to live more independently
                        </li>
                        <li>
                          You require help managing responsibilities in a
                          shared living environment
                        </li>
                        <li>
                          Your family or carers need additional support
                        </li>
                        <li>
                          You want personalised support
                        </li>
                      </ul>

                      <h3>
                        How to Choose a Provider for Daily Tasks & Shared
                        Living in Melbourne
                      </h3>

                      <p>
                        Choosing a suitable provider is an important decision.
                        Consider factors such as:
                      </p>

                      <ul>
                        <li>Comprehensive support</li>
                        <li>Qualified team</li>
                        <li>Range of services</li>
                        <li>Person-centred approach</li>
                        <li>NDIS registration and service suitability</li>
                      </ul>

                      <h3>
                        Benefits of Our Daily Tasks & Shared Living Services
                      </h3>

                      <p>
                        Working with Carewave Disability Services may provide
                        support with everyday routines while helping
                        participants work towards their individual goals.
                      </p>

                      <ul>
                        <li>Greater independence in everyday living</li>
                        <li>
                          Increased confidence with daily routines
                        </li>
                        <li>
                          Development of practical household skills
                        </li>
                        <li>
                          Support with personal health and hygiene routines
                        </li>
                        <li>Community participation</li>
                        <li>Flexible and tailored support</li>
                        <li>Support for families and carers</li>
                      </ul>

                      <h3>
                        Maximising Your Daily Tasks & Shared Living NDIS Plan
                      </h3>

                      <p>
                        To make the most of your NDIS support for daily living
                        and shared living, consider the following:
                      </p>

                      <ul>
                        <li>
                          <b>Be Clear About Your Needs:</b> Identify the daily
                          activities and routines where you require support.
                        </li>

                        <li>
                          <b>Set Realistic Goals:</b> Work towards practical
                          goals that are meaningful to your individual
                          circumstances.
                        </li>

                        <li>
                          <b>Explore Assistive Technology:</b> Discuss suitable
                          tools or equipment that may help with daily
                          activities.
                        </li>

                        <li>
                          <b>Communicate Regularly With Your Provider:</b>
                          Share your preferences, feedback, and changing
                          support requirements.
                        </li>

                        <li>
                          <b>Review Your Support:</b> Regularly consider whether
                          your support continues to meet your needs and goals.
                        </li>
                      </ul>

                      <h3>
                        Why Choose Carewave Disability Services as Your Daily
                        Tasks NDIS Provider?
                      </h3>

                      <p>
                        Carewave Disability Services works with participants to
                        provide personalised support based on their individual
                        needs, preferences, and goals.
                      </p>

                      <ul>
                        <li>Quality and person-centred care</li>
                        <li>Compassionate and experienced team</li>
                        <li>Flexible support arrangements</li>
                        <li>Comprehensive support</li>
                        <li>Holistic approach</li>
                        <li>Focus on independence</li>
                      </ul>

                      {/* FAQ SECTION */}
                      <div className="service-faq">

                        <h3>Frequently Asked Questions</h3>

                        <p className="faq-intro">
                          Have questions about Daily Tasks & Shared Living?
                          Here are some common questions about our daily living
                          and shared living support services.
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
                    <Link to="/household-tasks">
                      Household Tasks
                    </Link>
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

export default DailyTasksSharedLiving;