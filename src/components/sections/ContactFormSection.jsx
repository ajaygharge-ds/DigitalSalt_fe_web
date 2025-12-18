export default function ContactFormSection({projectName = "Rayo Template", adminEmail = "support@mixdesign.dev", formSubject = "Contact Form Message"}) {
  return (
    <div className="mxd-section mxd-section-inner-form padding-default">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-2 mxd-grid-item no-margin" />

              <div className="col-12 col-xl-8">
                <div className="mxd-block__content contact">
                  <div className="mxd-block__inner-form loading__fade">
                    <div className="form-container">
                      {/* ✅ Success Message */}
                      <div className="form__reply centered text-center">
                        <i className="ph-fill ph-smiley-wink reply__icon" />
                        <p className="reply__title">Done!</p>
                        <span className="reply__text">Thanks for your message. We'll get back as soon as possible.</span>
                      </div>

                      {/* ✅ Contact Form */}
                      <form className="form contact-form" id="contact-form">
                        <input type="hidden" name="project_name" defaultValue={projectName} />
                        <input type="hidden" name="admin_email" defaultValue={adminEmail} />
                        <input type="hidden" name="form_subject" defaultValue={formSubject} />

                        <div className="container-fluid p-0">
                          <div className="row gx-0">
                            <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                              <input type="text" name="Name" placeholder="Your name*" required />
                            </div>

                            <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                              <input type="text" name="Company" placeholder="Company name" />
                            </div>

                            <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                              <input type="email" name="E-mail" placeholder="Email*" required />
                            </div>

                            <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                              <input type="tel" name="Phone" placeholder="Phone" />
                            </div>

                            <div className="col-12 mxd-grid-item anim-uni-in-up">
                              <textarea name="Message" placeholder="A few words about your project*" required />
                            </div>

                            <div className="col-12 mxd-grid-item anim-uni-in-up">
                              <button className="btn btn-anim btn-default btn-large btn-opposite slide-right-up" type="submit">
                                <span className="btn-caption">Submit</span>
                                <i className="ph-bold ph-arrow-up-right" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
