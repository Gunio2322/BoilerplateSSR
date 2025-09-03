import React from 'react';

const Footer = () => (
  // Footer Section
  <footer className="mea-footer-section">
    {/* Footer Widget Container */}
    <div className="footer-widget-container">
      <div className="container">
        <div className="row">
          {/* Single Footer Widget */}
          <div className="col-md-3 single-footer-widget wow animated fadeInUp" data-wow-delay=".2s">
            <h3 className="footer-title">About MEA</h3>
            <p>
              Fresh, innovative, creative, minimalist ... What's your style? You probably won't have a better chance to show off all your potential if it's not by designing a website for your own agency or web studio. It's time to push all those ideas and concepts forward.
            </p>
          </div>
          {/* Single Footer Widget */}
          <div className="col-md-3 single-footer-widget recent-news-widget wow animated fadeInUp" data-wow-delay=".3s">
            <h3 className="footer-title">Recent News</h3>
            <ul>
              <li><a href="#">21 things that won’t help you become a better designer</a></li>
              <li><a href="#">User Experience & Luxury Fashion Brands: A UX Designer’s Perspective</a></li>
              <li><a href="#">Don’t Listen to Users and 4 Other Myths About Usability Testing</a></li>
              <li><a href="#">Photoshop Express gets a UI update</a></li>
            </ul>
          </div>
          {/* Single Footer Widget */}
          <div className="col-md-3 single-footer-widget recent-work-widget wow animated fadeInUp" data-wow-delay=".4s">
            <h3 className="footer-title">Recent Works</h3>
            <ul>
              <li>
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img src="/assets/images/work/footer-work1.png" alt="" />
                    </a>
                  </div>
                  <div className="media-body">
                    <a href=""><h4>Bower JS plugin release</h4></a>
                    <span>September 20, 2016</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img src="/assets/images/work/footer-work2.png" alt="" />
                    </a>
                  </div>
                  <div className="media-body">
                    <a href=""><h4>Flat Icon collection</h4></a>
                    <span>October 30, 2016</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* Single Footer Widget */}
          <div className="col-md-3 single-footer-widget footer-contact-widget wow animated fadeInUp" data-wow-delay=".5s">
            <h3 className="footer-title">Contact Us</h3>
            <p><span>Phone:</span> 879-890-9767</p>
            <p><span>Email:</span> support@mea.com</p>
            <p><span>Twitter:</span> @mea</p>

            <h3 className="footer-title mt-50">Follow Us</h3>
            <ul>
              <li>
                <a href="#"><i className="fa fa-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-dribbble"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-github"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-linkedin"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-copyright-section">
      <div className="container">
        <div className="row">
          {/* Copyright */}
          <div className="col-md-6">
            <p>&copy; 2016 MEA Studio. All Rights Reserved.</p>
          </div>
          {/* Footer Links */}
          <div className="col-md-6 footer-links">
            <ul>
              <li>
                <a href="index.html"><i className="fa fa-home"></i> Homepage</a>
              </li>
              <li>
                <a href="portfolio.html"><i className="fa fa-image"></i> Portfolio</a>
              </li>
              <li>
                <a href="blog.html"><i className="fa fa-pencil"></i> Blog</a>
              </li>
              <li>
                <a href="contact.html"><i className="fa fa-envelope"></i> Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  // Footer Section End
);

export default Footer;