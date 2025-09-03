import React from 'react';

const BLogSection = () => {
  return (
    // Our Blog Section
    <section className="mea-blog-section section-padding">
      <div className="container">
        <div className="row">
          <div className="row">
            {/* Section Title */}
            <div className="col-md-6 mea-title-section wow animated slideInLeft" data-wow-delay=".2s">
              <h1 className="section-titile-bg">Stories</h1>
              <h1 className="section-title">Our Stories</h1>
            </div>
            {/* Section Quote */}
            <div className="col-md-6 mea-section-quote wow animated slideInRight" data-wow-delay=".2s">
              <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </blockquote>
            </div>
          </div>

          <div className="row mt-100">
            {/* Single Article */}
            <div className="col-md-4 wow animated fadeInUp" data-wow-delay=".3s">
              <article className="single-blog-post">
                {/* Featured Image */}
                <div className="featured-image">
                  <a href="#">
                    <img src="/assets/images/blog/featured1.png" alt="" />
                  </a>
                </div>
                {/* Post Meta */}
                <div className="post-meta">
                  {/* Read More */}
                  <div className="read-more-icon">
                    <a className="btn btn-round btn-fab" href="blog-single.html"><i className="material-icons">&#xE5C8;</i><div className="ripple-container"></div></a>
                  </div>
                  {/* Title */}
                  <a href="blog-single.html"><h2 className="subtitle">Lorem ipsum do lor sit amet, cosectetur adipisicing</h2></a>
                  <p>by <b><a href="#">Kelly Grover</a></b></p>
                </div>
              </article>
            </div>
            {/* Single Article */}
            <div className="col-md-4 wow animated fadeInUp" data-wow-delay=".4s">
              <article className="single-blog-post">
                {/* Featured Image */}
                <div className="featured-image">
                  <a href="#">
                    <img src="/assets/images/blog/featured2.png" alt="" />
                  </a>
                </div>
                {/* Post Meta */}
                <div className="post-meta">
                  {/* Read More */}
                  <div className="read-more-icon">
                    <a className="btn btn-round btn-fab" href="blog-single.html"><i className="material-icons">&#xE5C8;</i><div className="ripple-container"></div></a>
                  </div>
                  {/* Title */}
                  <a href="blog-single.html"><h2 className="subtitle">Lorem ipsum do lor sit amet, cosectetur adipisicing</h2></a>
                  <p>by <b><a href="#">Kelly Grover</a></b></p>
                </div>
              </article>
            </div>
            {/* Single Article */}
            <div className="col-md-4 wow animated fadeInUp" data-wow-delay=".5s">
              <article className="single-blog-post">
                {/* Featured Image */}
                <div className="featured-image">
                  <a href="#">
                    <img src="/assets/images/blog/featured3.png" alt="" />
                  </a>
                </div>
                {/* Post Meta */}
                <div className="post-meta">
                  {/* Read More */}
                  <div className="read-more-icon">
                    <a className="btn btn-round btn-fab" href="blog-single.html"><i className="material-icons">&#xE5C8;</i><div className="ripple-container"></div></a>
                  </div>
                  {/* Title */}
                  <a href="blog-single.html"><h2 className="subtitle">Lorem ipsum do lor sit amet, cosectetur adipisicing</h2></a>
                  <p>by <b><a href="#">Kelly Grover</a></b></p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="row mt-30 wow animated fadeInUp" data-wow-delay=".6s">
          {/* Button */}
          <div className="col-md-12 text-center">
            <a href="blog.html" className="animated4 btn btn-common" data-ripple-color="#000"><i className="material-icons">&#xE90F;</i> Explore More Stories<div className="ripple-container"></div></a>
          </div>
        </div>
      </div>
    </section>
    // Our Blog Section End
  );
};

export default BLogSection;