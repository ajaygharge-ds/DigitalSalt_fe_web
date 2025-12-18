import Link from "next/link";

export default function ContactAddress({
  title = "Welcome to our office",
  description = "Inspiring ideas, creative insights, and the latest in design and tech. Fueling innovation for your digital journey.",
  offices = [],
}) {
  return (
    <div className="mxd-section padding-default">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                <div className="mxd-block__name">
                  <h2 className="reveal-type anim-uni-in-up">{title}</h2>
                </div>
              </div>

              <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__paragraph">
                    <p className="t-large t-bright anim-uni-in-up">{description}</p>

                    <div className="mxd-paragraph__lists">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          {offices.map((office, index) => (
                            <div key={index} className="col-12 col-md-6 col-xl-5 mxd-paragraph__lists-item">
                              <div className="mxd-paragraph__lists-title">
                                <p className="t-large t-bright t-caption anim-uni-in-up">{office.city}</p>
                              </div>

                              <ul>
                                <li className="anim-uni-in-up">
                                  <Link href={office.mapLink} target="_blank">
                                    {office.address}
                                  </Link>
                                </li>
                              </ul>

                              <ul>
                                <li className="anim-uni-in-up">
                                  <Link href={`tel:${office.phone}`}>{office.phone}</Link>
                                </li>
                                <li className="anim-uni-in-up">
                                  <Link href={`mailto:${office.email}`}>{office.email}</Link>
                                </li>
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
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
