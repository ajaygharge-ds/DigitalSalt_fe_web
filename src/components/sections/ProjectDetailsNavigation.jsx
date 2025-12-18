"use client";

import Link from "next/link";

export default function ProjectDetailsNavigation({prevLink = "#", prevTitle = "Previous Project", nextLink = "#", nextTitle = "Next Project"}) {
  return (
    <div className="mxd-project__block no-margin">
      <div className="mxd-project__nav">
        <div className="mxd-project__divider anim-uni-in-up" />

        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* ✅ PREV */}
            <div className="col-6 mxd-project__navitem left mxd-grid-item no-margin anim-uni-in-up">
              <Link href={prevLink} className="btn btn-anim btn-line-small btn-muted anim-no-delay slide-left">
                <i className="ph ph-arrow-left" />
                <span className="btn-caption">Prev</span>
              </Link>

              <Link href={prevLink} className="mxd-project__link anim-uni-in-up">
                <span>{prevTitle}</span>
              </Link>
            </div>

            {/* ✅ NEXT */}
            <div className="col-6 mxd-project__navitem right mxd-grid-item no-margin anim-uni-in-up">
              <Link href={nextLink} className="btn btn-anim btn-line-small btn-muted anim-no-delay slide-right">
                <span className="btn-caption">Next</span>
                <i className="ph ph-arrow-right" />
              </Link>

              <Link href={nextLink} className="mxd-project__link anim-uni-in-up">
                <span>{nextTitle}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
