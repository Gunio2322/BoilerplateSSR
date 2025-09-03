import React from 'react';

const Carousel = () => (
  // Main Carousel Section
  <div id="main-slide" className="carousel slide carousel-fade" data-ride="carousel">
    <div className="carousel-inner">
      <div className="item active">
        <img className="img-responsive" src="/assets/images/slider/slider-bg4.jpg" alt="slider" />
        <div className="slider-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-left">
                <h1 className="slideInLeft animated wow hero-heading" data-wow-delay=".6s">
                  Create Amazing Web<br />Experiences
                </h1>
                <h5 className="fadeInDown wow animated hero-sub-heading" data-wow-delay=".8s">
                  Great choice for your next webdesign project
                </h5>
                <a href="#" className="animated fadeInUp wow btn btn-common" data-wow-delay=".9s">
                  <i className="material-icons">&#xE90F;</i> Explore
                  <div className="ripple-container"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <img className="img-responsive" src="/assets/images/slider/slider-bg2.jpg" alt="slider" />
        <div className="slider-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="animated wow fadeIn hero-heading" data-wow-delay=".7s">
                  Material Design Inspired
                </h1>
                <h5 className="animated5 hero-sub-heading">
                  Refreshing Design - Built-with Latest Bootstrap &amp; HTML5
                </h5>
                <a href="#" className="animated6 btn btn-lg btn-common">
                  <i className="material-icons">&#xE90F;</i> Purchase
                </a>
                <a href="#" className="animated6 btn btn-lg btn-raised btn-default">
                  <i className="material-icons">&#xE8F4;</i> Learn More
                </a>
                <div className="ripple-container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <img className="img-responsive" src="/assets/images/slider/slider-bg3.jpg" alt="slider" />
        <div className="slider-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="animated wow bounceInUp hero-heading" data-wow-delay=".6s">
                  Cutting Edge Features
                </h1>
                <h5 className="animated4 hero-sub-heading">
                  Material Design - Bootstrap - HTML5 - CSS3 - Responsive
                </h5>
                <a href="#" className="animated4 btn btn-common">
                  <i className="material-icons">&#xE8F4;</i> Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a className="left carousel-control" href="#main-slide" data-slide="prev">
      <span>
        <i className="fa fa-angle-left" data-ripple-color="#F0F0F0">
          <div className="ripple-container"></div>
        </i>
      </span>
    </a>
    <a className="right carousel-control" href="#main-slide" data-slide="next">
      <span>
        <i className="fa fa-angle-right" data-ripple-color="#F0F0F0">
          <div className="ripple-container"></div>
        </i>
      </span>
    </a>
  </div>
  // Main Carousel Section End
);

export default Carousel;