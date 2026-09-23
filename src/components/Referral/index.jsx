import React from "react";
import "./style.css";

import pmt1 from "../../images/checkout/img-1.png";
import pmt2 from "../../images/checkout/img-2.png";
import pmt3 from "../../images/checkout/img-3.png";
import pmt4 from "../../images/checkout/img-4.png";

const Referral = (props) => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="wpo-donation-page-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="wpo-donate-header">
              <h2>
                Send Us Your Referrals
              </h2>
            </div>
            <form onSubmit={SubmitHandler} action="#">
              <div className="wpo-donations-details">
                {/* <h2>Details</h2> */}
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="fname"
                      placeholder="Participant First Name"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Participant Last Name"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                    <input
                      type="phone"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Participant Mobile Number"
                      required
                    />
                  </div>
                  
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Participant Email Address"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="company"
                      id="company"
                      placeholder="Referral Company and/or Person"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="services"
                      id="services"
                      placeholder="Services being referred"
                      required
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="contact"
                      id="contact"
                      placeholder="Contact Number or Referred"
                      required
                    />
                  </div>
                  <div className="col-lg-12 col-12 form-group">
                    <textarea
                      className="form-control"
                      name="note"
                      id="note"
                      placeholder="Comments"
                    ></textarea>
                  </div>

                  <div className="submit-area">
                    <button type="submit" className="theme-btn submit-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
