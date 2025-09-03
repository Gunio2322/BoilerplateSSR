import React from 'react';

const AboutSection = () => (
  // About Section
  <section className="mea-about-section section-padding">
    <div className="container">
      <div className="row">
        {/* Section Title */}
        <div className="col-md-6 mea-title-section wow animated slideInLeft" data-wow-delay=".2s">
          <h1 className="section-titile-bg">About MEA</h1>
          <h1 className="section-title">About MEA</h1>
        </div>
        {/* Section Quote */}
        <div className="col-md-6 mea-section-quote wow animated slideInRight" data-wow-delay=".2s">
          <blockquote>
            <p>
              We are a strategic, creative studio based out of Savannah, Georgia. Our close team of innovative professionals is passionate about partnering with good people and organizations.
            </p>
          </blockquote>
        </div>
      </div>
      <div className="row mt-80">
        {/* Single About Widget */}
        <div className="col-md-4 about-widget wow animated fadeInUp" data-wow-delay=".4s">
          <i className="material-icons">&#xE90F;</i>
          <h2 className="subtitle">Insights</h2>
          <p>
            Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui officia deserunt mollit <br />animidest laborum.
          </p>
        </div>
        {/* Single About Widget */}
        <div className="col-md-4 about-widget wow animated fadeInUp" data-wow-delay=".5s">
          <i className="material-icons">&#xE8F1;</i>
          <h2 className="subtitle">Design</h2>
          <p>
            Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui officia deserunt mollit <br />animidest laborum.
          </p>
        </div>
        {/* Single About Widget */}
        <div className="col-md-4 about-widget wow animated fadeInUp" data-wow-delay=".6s">
          <i className="material-icons">&#xE8E5;</i>
          <h2 className="subtitle">Growth</h2>
          <p>
            Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui officia deserunt mollit <br />animidest laborum.
          </p>
        </div>
      </div>
    </div>
  </section>
  // About Section End
);

export default AboutSection;