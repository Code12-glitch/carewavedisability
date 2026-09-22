import React from 'react'
import './style.css'

const testimonials = [
    {
        name: 'Kevin Jonthan',
        text: 'Carewave Disability Services has exceeded our expectations. Their hands-on approach to tailoring support has been outstanding. Thanks to their encouragement and guidance.'
    },
    {
        name: 'Alan H',
        text: "I can't speak highly enough of the support received from Carewave Disability Services. They take the time to truly listen and create a thoughtful, personalised care plan. Carewave is the best!"
    },
    {
        name: 'Miranda George',
        text: 'The team at Carewave Disability Services is nothing short of amazing! The staff is warm, understanding, and friendly. Highly Recommended.'
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">

                <div className="section-title text-center">
                    <span>Testimonials</span>
                    <h2>What Our Clients Say</h2>
                </div>

                <div className="row">
                    {testimonials.map((testimonial, index) => (
                        <div
                            className="col-lg-4 col-md-6"
                            key={index}
                        >
                            <div className="testimonial-card">

                                <div className="testimonial-icon">
                                    <i className="flaticon-quote"></i>
                                </div>

                                <p>
                                    {testimonial.text}
                                </p>

                                <div className="testimonial-author">
                                    <h4>{testimonial.name}</h4>
                                    <span>Client</span>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Testimonials