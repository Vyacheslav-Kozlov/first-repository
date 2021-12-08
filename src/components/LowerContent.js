import React from "react";

const LowerContent = () => {
  return (
    <div className="container pb-5 mt-5 mb-5">
      <div className="row row-cols-auto py-5">
        <div className="col mx-auto">
          <p className="fw-bold">Company</p>
          <div className="mt-4 text-muted">
            <p>Home</p>
            <p>Jobs</p>
            <p>Press</p>
          </div>
        </div>
        <div className="col mx-auto">
          <p className="fw-bold">Development</p>
          <div className="mt-4 text-muted">
            <p>iOS</p>
            <p>Android</p>
          </div>
        </div>
        <div className="col mx-auto">
          <p className="fw-bold">Marketing</p>
          <div className="mt-4 text-muted">
            <p>Advertising</p>
            <p>Referrals</p>
            <p>Get Quote</p>
          </div>
        </div>
        <div className="col mx-auto">
          <p className="fw-bold">Community</p>
          <div className="mt-4 text-muted">
            <p>Social</p>
            <p>Forum</p>
            <p>Contact</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="col mx-auto">
          <p className="fw-bold">Info</p>
          <div className="mt-4 text-muted">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
      <div>
        <p className="fs-2 text-center">Get In Touch</p>
        <p className="text-center">Subscribe to our newsletter and get notification for upcoming cool stuff.</p>
        <div className="input-group input-group-sm mt-5 px-0 px-sm-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your text"
            aria-label="Enter your text"
            aria-describedby="button-addon"/>
          <button
            className="btn custom-color-bg"
            type="button"
            id="button-addon"
          >
            COUNT ME IN
          </button>
        </div>
      </div>
    </div>
  )
}

export default LowerContent;