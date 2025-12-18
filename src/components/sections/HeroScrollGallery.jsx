"use client";

import Link from "next/link";

export default function HeroScrollGallery() {
  return (
    <div className="mxd-pinned-fullscreen__scroll">
      <div className="mxd-hero-02-scroll__wrap">
        <div className="mxd-hero-02-scroll__images">
          {/* ✅ ROW 1 */}
          <div className="mxd-hero-02-images__row mxd-hero-02-images__row-01">
            <Link className="mxd-hero-02-image__portrait portrait-01" href="/project-details">
              <div className="mxd-hero-02-image__inner type-01 anim-uni-in-up">
                <img src="https://dummyimage.com/800x1200/414141/636363" alt="Hero Image" />
                <div className="mxd-preview-hover">
                  <i className="mxd-preview-hover__icon icon-small">
                    <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                  </i>
                </div>
              </div>
            </Link>

            <Link className="mxd-hero-02-image__landscape landscape-01" href="/project-details">
              <div className="mxd-hero-02-image__inner type-03 anim-uni-in-up">
                <img src="https://dummyimage.com/1200x800/414141/636363" alt="Hero Image" />
                <div className="mxd-preview-hover">
                  <i className="mxd-preview-hover__icon icon-small">
                    <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                  </i>
                </div>
              </div>
            </Link>

            <Link className="mxd-hero-02-image__portrait portrait-02" href="/project-details">
              <div className="mxd-hero-02-image__inner type-01 anim-uni-in-up">
                <img src="https://dummyimage.com/800x1200/414141/636363" alt="Hero Image" />
                <div className="mxd-preview-hover">
                  <i className="mxd-preview-hover__icon icon-small">
                    <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                  </i>
                </div>
              </div>
            </Link>
          </div>

          {/* ✅ ROW 2 */}
          <div className="mxd-hero-02-images__row mxd-hero-02-images__row-02">
            <Link className="mxd-hero-02-image__landscape landscape-02" href="/project-details">
              <div className="mxd-hero-02-image__inner type-03 anim-uni-in-up">
                <img src="https://dummyimage.com/1200x800/414141/636363" alt="Hero Image" />
                <div className="mxd-preview-hover">
                  <i className="mxd-preview-hover__icon icon-small">
                    <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                  </i>
                </div>
              </div>
            </Link>

            <Link className="mxd-hero-02-image__portrait portrait-xl portrait-03" href="/project-details">
              <div className="mxd-hero-02-image__inner type-02 anim-uni-in-up">
                <img src="https://dummyimage.com/1000x1300/414141/636363" alt="Hero Image" />
                <div className="mxd-preview-hover">
                  <i className="mxd-preview-hover__icon icon-small">
                    <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                  </i>
                </div>
              </div>
            </Link>
          </div>

          {/* ✅ ROW 3 */}
          <div className="mxd-hero-02-images__row mxd-hero-02-images__row-03">
            <Link className="mxd-hero-02-image__portrait portrait-04" href="/project-details">
              <div className="mxd-hero-02-image__inner type-01 anim-uni-in-up">
                <img src="https://dummyimage.com/800x1200/414141/636363" alt="Hero Image" />
                <div className="mxd-preview-hover">
                  <i className="mxd-preview-hover__icon icon-small">
                    <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                  </i>
                </div>
              </div>
            </Link>

            <Link className="mxd-hero-02-image__landscape landscape-03" href="/project-details">
              <div className="mxd-hero-02-image__inner type-03 anim-uni-in-up">
                <img src="https://dummyimage.com/1200x800/414141/636363" alt="Hero Image" />
                <div className="mxd-preview-hover">
                  <i className="mxd-preview-hover__icon icon-small">
                    <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                  </i>
                </div>
              </div>
            </Link>

            <Link className="mxd-hero-02-image__portrait portrait-05" href="/project-details">
              <div className="mxd-hero-02-image__inner type-01 anim-uni-in-up">
                <img src="https://dummyimage.com/800x1200/414141/636363" alt="Hero Image" />
                <div className="mxd-preview-hover">
                  <i className="mxd-preview-hover__icon icon-small">
                    <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                  </i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
