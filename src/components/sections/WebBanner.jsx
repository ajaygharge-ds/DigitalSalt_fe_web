import Image from "next/image";
import CommonIcon from "../common/icons/CommonIcon";
import StarIcon from "../common/icons/StarIcon";
import Link from "next/link";

export default function WebBanner() {
  return (
    <div className="mxd-section mxd-hero-section padding-grid-pre-mtext">
      <div className="mxd-hero-05">
        <div className="mxd-hero-05__wrap">
          {/* ================= TOP SECTION ================= */}
          <div className="mxd-hero-05__top">
            <div className="mxd-hero-05__headline">
              <div className="container-fluid p-0">
                <div className="row g-0 d-flex flex-column flex-xl-row">
                  {/* ===== LEFT TITLE ===== */}
                  <div className="col-12 col-xl-8 col-xxl-10 order-2 order-xl-1 mxd-grid-item no-margin">
                    <h1 className="hero-05-title">
                      <span className="hero-05-title__row loading__item">
                        <em className="hero-05-title__item">Shaping ideas</em>
                      </span>

                      <span className="hero-05-title__row loading__item">
                        <em className="hero-05-title__item title-item-image">
                          <CommonIcon />
                        </em>
                        <em className="hero-05-title__item">into real stories</em>
                      </span>
                    </h1>
                  </div>

                  {/* ===== RIGHT AVATARS ===== */}
                  <div className="col-12 col-xl-4 col-xxl-2 order-1 order-xl-2 mxd-grid-item no-margin">
                    <div className="hero-05-headline__avatars loading__fade">
                      <div className="mxd-avatars-group align-right">
                        <div className="mxd-avatars align-right">
                          <div className="mxd-avatars__item small">
                            {/* <Image src="https://dummyimage.com/300x300/5d5d5d/838383" width={300} height={300} alt="Avatar" /> */}
                            <img src="https://dummyimage.com/300x300/5d5d5d/838383" alt="Avatar" />
                          </div>

                          <div className="mxd-avatars__item small bg-base-opp">
                            <StarIcon />
                          </div>

                          <div className="mxd-avatars__item small">
                            {/* <Image src="https://dummyimage.com/300x300/5d5d5d/838383" width={300} height={300} alt="Avatar" /> */}
                            <img src="https://dummyimage.com/300x300/5d5d5d/838383" alt="Avatar" />
                          </div>
                        </div>

                        <div className="mxd-avatars-group__text">
                          <p>
                            Trusted by <br />
                            <Link href="#0">10k+ customers</Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM SECTION ================= */}
          <div className="mxd-hero-05__bottom mxd-grid-item no-margin">
            {/* WORK IMAGE BLOCK */}
            <div className="mxd-hero-05__worksblock loading__item">
              {/* <Image className="mxd-move" src="https://dummyimage.com/800x800/4d4d4d/838383" width={800} height={800} alt="Hero" /> */}
              <img className="mxd-move" src="https://dummyimage.com/800x800/4d4d4d/838383" alt="Hero" />
              <div className="hero-05-worksblock__descr">
                <p className="t-large t-caption t-bright">Blending creativity with practical design</p>
                <Link className="btn btn-anim btn-default btn-outline slide-right-up" href="portfolio">
                  <span className="btn-caption">Explore</span>
                  <i className="ph-bold ph-arrow-up-right" />
                </Link>
              </div>
            </div>

            {/* VIDEO BLOCK */}
            <div className="mxd-hero-05__videoblock loading__item">
              <div className="mxd-hero-05-videoblock__video">
                <video preload="auto" autoPlay loop muted poster="https://dummyimage.com/1280x720/4d4d4d/838383">
                  <source src="video/1280x720_video.mp4" type="video/mp4" />
                  <source src="video/1280x720_video.webm" type="video/webm" />
                  <source src="video/1280x720_video.ogv" type="video/ogv" />
                </video>
              </div>
              <div className="mxd-hero-05-videoblock__descr">
                <p className="t-large t-caption t-bright">We are a creative digital agency specializing in innovative design and cutting-edge development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
