import React from 'react';
// import './AnimationsText.css';

const AnimationsText = () => (
  <section className="section text-center">
    <div className="container">
      {/* Start Animations Text */}
      <h1>
        You are using Free Lite version of MEA<br />Purchase Full version to Get all Pages and Features
      </h1>
      <br />
      {/* End Animations Text */}

      {/* Start Buttons */}
      <a
        rel="nofollow"
        target="_blank"
        href="https://rebrand.ly/gg-mea-purchase"
        className="btn btn-common btn-large"
      >
        <i className="fa fa-cart"></i> Purchase Now
      </a>
    </div>
  </section>
);

export default AnimationsText;