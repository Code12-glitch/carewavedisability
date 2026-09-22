import React, { useState } from 'react'
import './style.css'

const faqData = [
    {
        question: 'What does the NDIS provide?',
        answer: 'The NDIS will provide all Australians under the age of 65 who have a permanent and significant disability with the reasonable and necessary supports they need to enjoy an ordinary life.'
    },
    {
        question: 'How will the NDIS help me?',
        answer: 'The NDIS will help people with disability achieve their goals. This may include greater independence, community involvement, employment and improved wellbeing.'
    },
    {
        question: 'How long does it last?',
        answer: 'As an insurance scheme, the NDIS takes a lifetime approach, investing in people with disability early to improve their outcomes later in life.'
    },
    {
        question: 'How does the NDIS help my family?',
        answer: 'The NDIS also provides people with disability, their family and carers with information and referrals to existing support services in the community.'
    }
]

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index)
    }

    return (
        <section className="faq-section">
            <div className="container">

                <div className="section-title">
                    <span>Frequently Asked Questions</span>
                    <h2>Have Any Questions?</h2>
                </div>

                <div className="faq-wrapper">

                    {faqData.map((item, index) => (
                        <div
                            className={`faq-item ${
                                activeIndex === index ? 'active' : ''
                            }`}
                            key={index}
                        >

                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{item.question}</span>

                                <span className="faq-icon">
                                    {activeIndex === index ? '−' : '+'}
                                </span>
                            </button>

                            {activeIndex === index && (
                                <div className="faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}

                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default FAQ