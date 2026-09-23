import React from "react";
import "./style.css";

import pmt1 from "../../images/checkout/img-1.png";
import pmt2 from "../../images/checkout/img-2.png";
import pmt3 from "../../images/checkout/img-3.png";
import pmt4 from "../../images/checkout/img-4.png";

const NewParticipants = (props) => {
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
                Please fill in the information below as completely as possible
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
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="ndis"
                      id="ndis"
                      placeholder="NDIS Number (if applicable)"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                    <select
                      className="form-control"
                      name="other"
                      id="othertype"
                      required
                    >
                      <option value="">Select Other Type</option>
                      <option value="english">English</option>
                      <option value="other"> Other </option>
                    </select>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                    <input
                      type="phone"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="suburb"
                      id="suburb"
                      placeholder="Suburb"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                    <select
                      className="form-control"
                      name="selectoption"
                      id="selectoption"
                      required
                    >
                      <option value="">Select Option</option>
                      <option value="english">Email</option>
                      <option value="other"> Phone </option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-lg-12 col-12 form-group">
                    <textarea
                      className="form-control"
                      name="note"
                      id="note"
                      placeholder="Anything else you would like to tell us?"
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

export default NewParticipants;
