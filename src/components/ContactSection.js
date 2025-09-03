import React from 'react';

const ContactSection = () => {
    return (
        // Contact Us Section
        <section className="mea-contact-section section-padding section-dark">
            <div className="container">
                <div className="row">
                    {/* Section Title */}
                    <div className="col-md-6 mea-title-section wow animated slideInLeft" data-wow-delay=".2s">
                        <h1 className="section-titile-bg">Contact Us</h1>
                        <h1 className="section-title">Contact Us</h1>
                        <div className="section-image mt-100 clearfix">
                            <img src="/assets/images/section-image3.png" className="mt-100 img-responsive" alt="Thumbs Up Icon" />
                        </div>
                    </div>
                    {/* contact form */}
                    <div className="col-md-6 mt-50 wow animated slideInRight" data-wow-delay=".2s">
                        <form className="shake" role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                            {/* Name */}
                            <div className="form-group label-floating">
                              <label className="control-label" htmlFor="name">Name</label>
                              <input className="form-control" id="name" type="text" name="name" required data-error="Please enter your name" />
                              <div className="help-block with-errors"></div>
                            </div>
                            {/* email */}
                            <div className="form-group label-floating">
                              <label className="control-label" htmlFor="email">Email</label>
                              <input className="form-control" id="email" type="email" name="email" required data-error="Please enter your Email" />
                              <div className="help-block with-errors"></div>
                            </div>
                            {/* Subject */}
                            <div className="form-group label-floating">
                              <label className="control-label" htmlFor="msg_subject">Subject</label>
                              <input className="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject" />
                              <div className="help-block with-errors"></div>
                            </div>
                            {/* Message */}
                            <div className="form-group label-floating">
                                <label htmlFor="message" className="control-label">Message</label>
                                <textarea className="form-control" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                            {/* Form Submit */}
                            <div className="form-submit mt-20">
                                <button className="btn btn-common" type="submit" id="form-submit">
                                    <i className="material-icons">&#xE0C9;</i> Send Message
                                </button>
                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                <div className="clearfix"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        // Contact Us Section End
    );
};

export default ContactSection;