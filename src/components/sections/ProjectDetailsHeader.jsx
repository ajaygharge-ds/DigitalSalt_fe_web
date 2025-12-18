"use client";

import Link from "next/link";

export default function ProjectDetailsHeader({pageLabel = "Project Page", title = "Studio template", description = "", client = "", services = "", industry = "", date = "", tags = []}) {
  return (
    <div className="mxd-section mxd-section-inner-headline padding-default">
      <div className="mxd-container grid-container">
        {/* Block - Inner Page Headline Start */}
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              {/* ✅ Left Label */}
              <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                <div className="mxd-block__name name-project-link loading__fade">
                  <Link className="btn btn-anim btn-line-small btn-muted slide-right-up" href="#0">
                    <span className="btn-caption">{pageLabel}</span>
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
              </div>

              {/* ✅ Title */}
              <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__inner-headline loading__item">
                    <h1 className="inner-headline__title">{title}</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-0">
              <div className="col-12 col-xl-2" />

              {/* ✅ Description + Data */}
              <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                <div className="inner-headline__paragraph loading__item">
                  <p>{description}</p>
                </div>

                <div className="inner-headline__data">
                  <div className="mxd-data-list">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12 col-md-6 col-xl-5 mxd-data-list__column loading__item">
                          <div className="mxd-data-list__item">
                            <p className="mxd-data-list__name">Client</p>
                            <p className="mxd-data-list__content">{client}</p>
                          </div>
                          <div className="mxd-data-list__item">
                            <p className="mxd-data-list__name">Services</p>
                            <p className="mxd-data-list__content">{services}</p>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-5 mxd-data-list__column loading__item">
                          <div className="mxd-data-list__item">
                            <p className="mxd-data-list__name">Industries</p>
                            <p className="mxd-data-list__content">{industry}</p>
                          </div>
                          <div className="mxd-data-list__item">
                            <p className="mxd-data-list__name">Date</p>
                            <p className="mxd-data-list__content">{date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ✅ Tags */}
              <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                <div className="inner-headline__tags loading__fade">
                  {tags.map((tag, index) => (
                    <span key={index} className="tag tag-default tag-outline-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Inner Page Headline End */}
      </div>
    </div>
  );
}
