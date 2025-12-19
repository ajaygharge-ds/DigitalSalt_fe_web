import Image from "next/image";
import Link from "next/link";

export default function ApproachSection() {
  return (
    <div className="mxd-section padding-pre-grid mobile-grid-s">
      <div className="mxd-container grid-container">
        {/* Section Title */}
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle anim-uni-in-up">
                    <h2 className="reveal-type">Approach and philosophy</h2>
                  </div>
                </div>

                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up">Design</p>
                    <p className="anim-uni-in-up">Development</p>
                    <p className="anim-uni-in-up">Mastership</p>
                  </div>
                </div>

                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                    <Link className="btn btn-anim btn-default btn-outline slide-right-up" href="contact">
                      <span className="btn-caption">Let's Chat</span>
                      <i className="ph-bold ph-arrow-up-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Approach List */}
        <div className="mxd-block">
          <div className="mxd-approach-list">
            {[
              {
                title: "Perfection",
                desc: "From pixel-perfect designs to flawless code, every aspect of our projects is crafted with care.",
              },
              {
                title: "Innovative",
                desc: "We stay ahead of design trends with modern and impactful solutions.",
              },
              {
                title: "Expertise",
                desc: "We integrate the latest technologies and mobile-first strategies.",
              },
              {
                title: "Full-Cycle services",
                desc: "From design to branding, SEO, and UX/UI.",
              },
              {
                title: "Client Success",
                desc: "Our clients consistently see improved growth.",
              },
            ].map((item, i) => (
              <div className="mxd-approach-list__item" key={i}>
                <div className="mxd-approach-list__border anim-uni-in-up" />

                <div className="mxd-approach-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__image anim-uni-in-up">
                          <Image src={`img/approach/icon-${i + 1}.webp`} width={210} height={210} alt="Icon" />
                        </div>
                      </div>

                      <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title anim-uni-in-up">
                          <h6>{item.title}</h6>
                        </div>
                      </div>

                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mxd-approach-list__border anim-uni-in-up" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
