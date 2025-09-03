import React, { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        if (window.$ && window.$.fn.slicknav) {
            window.$('.wpb-mobile-menu').slicknav({ prependTo: '#nav-main' });
        }
    }, []);

    return (
  
      <header id="header" className="navbar navbar-default affix-top" data-spy="affix" data-offset-top="400">
        <div className="container">
          <a alt="Mea" className="site-logo" href="index.html">
            <h2>MEA</h2>
          </a>
          <nav role="navigation" id="nav-main" className="okayNav">
            <ul className="nav navbar-nav">
              <li className="active dropdown sub-menu">
                <a alt="Mea" className="dropdown-toggle nav-link" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Home</a>
                <div className="dropdown-menu sub-menu-panel" aria-labelledby="dropdownMenu1">
                  <a alt="Mea" className="sub-menu-item active" href="index.html">Home Page 1</a>
                  <a alt="Mea" className="sub-menu-item" href="index-2.html">Home Page 2</a>
                </div>
              </li>
              <li  className="dropdown sub-menu">
                <a alt="Mea" className="dropdown-toggle nav-link" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Pages</a>
                <div className="dropdown-menu sub-menu-panel" aria-labelledby="dropdownMenu1">
                  <a alt="Mea" className="sub-menu-item" href="about-us.html">About Us 1</a>
                  <a alt="Mea" className="sub-menu-item" href="about-us2.html">About Us 2</a>
                  <a alt="Mea" className="sub-menu-item" href="team.html">Team Members</a>
                  <a alt="Mea" className="sub-menu-item" href="services.html">Services</a>
                  <a alt="Mea" className="sub-menu-item" href="contact-us.html">Contact Us 1</a>
                  <a alt="Mea" className="sub-menu-item" href="contact-us2.html">Contact Us 2</a>
                  <a alt="Mea" className="sub-menu-item" href="404.html">404</a>
                </div>
              </li>
              <li  className="dropdown sub-menu">
                <a alt="Mea" className="dropdown-toggle nav-link" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Elements</a>
                <div className="dropdown-menu sub-menu-panel" aria-labelledby="dropdownMenu1">
                  <a alt="Mea" className="sub-menu-item" href="tab.html">Tabs</a>
                  <a alt="Mea" className="sub-menu-item" href="alert.html">Alert</a>
                  <a alt="Mea" className="sub-menu-item" href="accordion.html">Accordions</a>
                  <a alt="Mea" className="sub-menu-item" href="pricing.html">Pricing Tables</a>
                  <a alt="Mea" className="sub-menu-item" href="buttons.html">Buttons</a>
                  <a alt="Mea" className="sub-menu-item" href="icons.html">Icons</a>
                  <a alt="Mea" className="sub-menu-item" href="carousel.html">Carousel</a>
                  <a alt="Mea" className="sub-menu-item" href="counter.html">Counter</a>
                  <a alt="Mea" className="sub-menu-item" href="map.html">Google Map</a>
                </div>
              </li>
              <li className="dropdown sub-menu">
                <a alt="Mea" className=" dropdown-toggle nav-link" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Portfolio</a>
                <div className="dropdown-menu sub-menu-panel" aria-labelledby="dropdownMenu1">
                  <a alt="Mea" className="sub-menu-item" href="portfolio-col-3.html">Portfolio 3 columns</a>
                  <a alt="Mea" className="sub-menu-item" href="portfolio.html">Portfolio 4 columns</a>
                  <a alt="Mea" className="sub-menu-item" href="portfolio-single.html">Portfolio Single</a>
                </div>
              </li>
              <li className="dropdown sub-menu">
                <a alt="Mea" className="dropdown-toggle nav-link" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Blog</a>
                <div className="dropdown-menu sub-menu-panel" aria-labelledby="dropdownMenu1">
                  <a alt="Mea" className="sub-menu-item" href="blog.html">Blog Page</a>
                  <a alt="Mea" className="sub-menu-item" href="blog-single.html">Blog Single Page</a>
                </div>
              </li>
              <li className="dropdown sub-menu">
                <a alt="Mea" className="dropdown-toggle nav-link" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Contact Us</a>
                <div className="dropdown-menu sub-menu-panel" aria-labelledby="dropdownMenu1">
                  <a alt="Mea" className="sub-menu-item" href="contact-us.html">Contact Us 1</a>
                  <a alt="Mea" className="sub-menu-item" href="contact-us2.html">Contact Us 2</a>
                </div>
              </li>
            </ul>
            {/* <!-- Mobile Menu Start --> */}
            <ul className="wpb-mobile-menu">
              <li>
                <a className="active" href="#">
                Home
                </a>
                <ul className="dropdown">
                  <li>
                    <a className="active" href="index.html">Home Page 1</a>
                  </li>  
                  <li>
                    <a href="index-2.html">Home Page 2</a> 
                  </li> 
                </ul>
              </li>
              <li>
                <a href="#">
                Pages
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="about-us.html">About Us 1</a>
                  </li>
                  <li>
                    <a href="about-us2.html">About Us 2</a>
                  </li>
                  <li>
                    <a href="team.html">Team Members</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                      <a href="contact-us.html">Contact Us 1</a>
                  </li>
                  <li>
                      <a href="contact-us2.html">Contact Us 2</a>
                  </li>
                  <li>
                      <a href="404.html">404</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                Elements
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="tab.html">Tabs</a>
                  </li>
                  <li>
                    <a href="alert.html">Alert</a>
                  </li>
                  <li>
                    <a href="accordion.html">Accordions</a>
                  </li>
                  <li>
                   <a href="pricing.html">Pricing Tables</a>
                  </li>
                  <li>
                      <a href="buttons.html">Buttons</a>
                  </li>
                  <li>
                      <a href="icons.html">Icons</a>
                  </li>
                  <li>
                      <a href="carousel.html">Carousel</a>
                  </li>
                  <li>
                      <a href="counter.html">Counter</a>
                  </li>
                  <li>
                     <a href="map.html">Google Map</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                Portfolio
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="portfolio-col-3.html">Portfolio 3 columns</a>
                  </li>
                  <li>
                    <a href="portfolio.html">Portfolio 4 columns</a>
                  </li>
                  <li>
                    <a href="portfolio-single.html">Portfolio Single</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">
                Blog
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="blog.html">Blog Page</a>
                  </li>
                  <li>
                    <a href="blog-single.html">Blog Single Page</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                Contact Us
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="contact-us.html">Contact Us 1</a>
                  </li>
                  <li>
                    <a href="contact-us2.html">Contact Us 2</a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <!-- Mobile Menu End --> */}
          </nav>
        </div>
      </header>
 
    );
};

export default Header;