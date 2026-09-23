import React, { useState } from "react";
import { Link } from "react-router-dom";

import simg from "../../images/services/img-1.png";

import "./style.css";

const AssistPersonalActivities = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const ClickHandler = () => {
    window.scrollTo(0, 0);
  };

  const faqData = [
    {
      question: "What are assist personal activities?",
      answer:
        "Assist Personal Activities NDIS provides support with daily personal care tasks, helping NDIS participants maintain independence and improve their quality of life. ",
    },
    {
      question: "Do you offer assistance with personal domestic activities?",
      answer:
        "Yes, Carewave Disability Services offers household tasks, community participation, assist personal activities Melbourne and more.",
    },
    {
      question: "Who is eligible for Assist Personal Activities?",
      answer:
        "NDIS participants with approved funding for personal care support in their plan may be eligible. ",
    },
    {
      question: "What services do you offer? ",
      answer:
        "We offer everything, from household tasks to community participation, assist personal activities and more. ",
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
                  alt="Assist Personal Activities"
                />
              </div>

              {/* Service Content */}
              <div className="wpo-case-details-text">
                <div className="wpo-case-content">
                  <div className="wpo-case-text-top">

                    <h2>
                      Supporting Your Daily Life with Personal Care That Matters
                    </h2>

                    <p>
                      Carewave Disability Services offers a range of services
                      designed to support individuals with disabilities in
                      achieving greater autonomy and independence. This includes
                      assist personal activities, community participation,
                      household tasks and more. Our highly trained staff assist
                      personal activities Melbourne, while also working to
                      develop the skills and abilities of participants.
                    </p>

                    <p>
                      You don’t have to tackle daily challenges alone. With
                      Carewave Disability Services, you have the confidence of
                      knowing you’ve got a professional and caring team by your
                      side, helping you maintain your independence and live your
                      life on your terms. Get personalised assist personal
                      activities NDIS and related care with us today.
                    </p>

                    <h3>What are Assist Personal Activities?</h3>

                    <p>
                      Assist Personal Activities are NDIS-funded supports that
                      help participants with everyday personal care tasks so
                      they can live more independently, safely, and
                      comfortably.
                    </p>

                    <div className="case-bb-text">

                      <h5>Your Support Includes</h5>

                      <ul>
                        <li>
                          Assistance with showering, bathing, and personal
                          hygiene
                        </li>
                        <li>Dressing and grooming support</li>
                        <li>Toileting and continence care</li>
                        <li>Help with eating and drinking</li>
                        <li>Mobility and transferring assistance</li>
                        <li>
                          Medication reminders and assistance (as per NDIS plan)
                        </li>
                        <li>Morning and evening routines</li>
                        <li>Assistance with using mobility aids</li>
                        <li>Support with personal health and wellbeing</li>
                        <li>
                          Individualised care tailored to your daily needs
                        </li>
                      </ul>

                      <h3>Benefits of our assist personal activities</h3>

                      <p>
                        Carewave Disability Services offers assistance with
                        personal domestic activities. Participants and their
                        families may choose us for:
                      </p>

                      <ul>
                        <li>More independence</li>
                        <li>Improved quality of life</li>
                        <li>Personalised support</li>
                        <li>Reducing family burden</li>
                        <li>Holistic support</li>
                      </ul>

                      <h3>What Do Our Assist Personal Activities Include?</h3>

                      <p>
                        Our assist personal activities NDIS support helps
                        participants work towards their goals and manage their
                        daily lives. These may include:
                      </p>

                      <ul>
                        <li>Mobility and Transfers</li>
                        <li>Personal Hygiene</li>
                        <li>Toileting and Bowel Management</li>
                        <li>Event Attendance</li>
                        <li>Planning Your Day</li>
                        <li>Shopping Assistance</li>
                        <li>Attending Appointments</li>
                        <li>Household Tasks</li>
                        <li>Support with Eating and Drinking</li>
                      </ul>

                      <h3>
                        How to choose the right provider for assist personal
                        activities?
                      </h3>

                      <p>
                        Choosing the right support provider is an important
                        decision. Some factors to consider before choosing a
                        provider for assist personal activities include:
                      </p>

                      <ul>
                        <li>Qualifications</li>
                        <li>Personalised support plans</li>
                        <li>Communication and compatibility</li>
                        <li>Experienced team</li>
                        <li>Holistic support</li>
                        <li>Range of services</li>
                      </ul>

                      <h3>
                        How Do I Get NDIS Assist Personal Activities Support?
                      </h3>

                      <p>
                        Getting help with personal care and daily activities
                        doesn't have to be complicated. Here are five steps:
                      </p>

                      <ul>
                        <li>
                          <b>Step 1 - Check Your NDIS Plan:</b> Look under the
                          relevant support categories in your NDIS plan.
                        </li>

                        <li>
                          <b>Step 2 - Know What You Need:</b> Be clear about the
                          tasks you need help with, such as meal preparation,
                          dressing, showering, or community activities.
                        </li>

                        <li>
                          <b>Step 3 - Pick the Right Provider:</b> Select a
                          provider you trust and one that can match your needs
                          and routine.
                        </li>

                        <li>
                          <b>Step 4 - Plan Your Support:</b> Discuss your
                          preferences, routine, goals, and support requirements
                          with your provider.
                        </li>

                        <li>
                          <b>Step 5 - Start Your Support:</b> Your support worker
                          can assist you with agreed activities safely,
                          respectfully, and according to your preferences.
                        </li>
                      </ul>

                      <h3>
                        Why choose Carewave Disability Services for your assist
                        personal activities?
                      </h3>

                      <p>
                        Participants and their families can discuss their
                        individual requirements with our team to understand how
                        our services may support their needs.
                      </p>

                      <ul>
                        <li>Personalised support</li>
                        <li>Qualified team</li>
                        <li>Experience</li>
                        <li>Dedicated NDIS provider</li>
                        <li>Holistic support</li>
                      </ul>

                      {/* FAQ SECTION */}
                      <div className="service-faq">

                        <h3>Frequently Asked Questions</h3>

                        <p className="faq-intro">
                          Have questions about Assist Personal Activities?
                          Here are some common questions about our support
                          services.
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
                    <Link to="/services">
                      Community Participation
                    </Link>
                  </li>

                  <li>
                    <Link to="/services">
                      Assist Travel & Transport
                    </Link>
                  </li>

                  <li>
                    <Link to="/services">
                      Daily Tasks & Shared Living
                    </Link>
                  </li>

                  <li>
                    <Link to="/services">
                      Household Tasks
                    </Link>
                  </li>

                  <li>
                    <Link to="/services">
                      Participate Community
                    </Link>
                  </li>

                  <li>
                    <Link to="/services">
                      Group & Centre Based Activities
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="service-sidebar-box">
                <h3>Need Support?</h3>

                <p>
                  Talk to our friendly team about your individual support
                  needs.
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

export default AssistPersonalActivities;