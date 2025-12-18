"use client";

import {useLayoutEffect, useRef} from "react";
import {usePathname} from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import RotatingStarIcon from "./common/icons/RotatingStarIcon";
import HeroTitleMarquee from "./HeroTitleMarquee";
import RotatingButton from "./RotatingButton";
import HeroScrollGallery from "./sections/HeroScrollGallery";

export default function HeroPinnedSection({
  topLine1 = "Powering next gen projects.",
  topLine2 = "No creative limits.",
  marqueeText = "the power of imagination",
  marqueeImage = "https://dummyimage.com/800x800/5d5d5d/838383",
  listLeft = ["Innovations", "Creativity", "Experience", "Competence", "Passion"],
  listRight = ["UI/UX", "App design", "Development", "Branding", "Motion"],
  scrollButtonText = "Scroll for More * Scroll for More * Scroll for More * ",
}) {
  const pathname = usePathname();
  const instancesRef = useRef({
    fadeOut: [],
    hero02Fade: [],
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const fadeOutEls = gsap.utils.toArray(".hero-02-fade-out-scroll");

      instancesRef.current.fadeOut = [...fadeOutEls].map((element) => {
        return gsap
          .timeline({
            scrollTrigger: {
              trigger: ".mxd-pinned-fullscreen__tl-trigger",
              start: "top 80%",
              end: "top 10%",
              scrub: true,
            },
          })
          .fromTo(element, {opacity: 1}, {opacity: 0});
      });
      // Translate + Scale + Fade
      const hero02Els = gsap.utils.toArray(".hero-02-static-anim-el");

      instancesRef.current.hero02Fade = [...hero02Els].map((element) => {
        return gsap
          .timeline({
            scrollTrigger: {
              trigger: ".hero-02-static__tl-trigger",
              start: "top 14%",
              end: "top 0.2%",
              scrub: true,
            },
          })
          .fromTo(
            element,
            {
              transform: "translate3d(0, 0, 0)",
              scaleY: 1,
              opacity: 1,
            },
            {
              transform: "translate3d(0, -5rem, 0)",
              scaleY: 1.3,
              opacity: 0,
              ease: "sine.out",
            }
          );
      });
    });

    return () => {
      ctx.revert();
    };
  }, [pathname]);

  return (
    <div className="mxd-section">
      <div className="mxd-hero-02 mxd-pinned-fullscreen">
        {/* STATIC SECTION */}
        <div className="mxd-pinned-fullscreen__static hero-02-fade-out-scroll">
          <div className="hero-02-static__tl-trigger" />

          {/* TOP TEXT BLOCK */}
          <div className="mxd-hero-02-static__top hero-02-static-anim-el">
            <div className="mxd-container fullwidth-container grid-container">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="hero-02-static__caption loading__item">
                      <p className="t-large t-medium t-120 t-bright">{topLine1}</p>
                      <p className="t-large t-medium t-120 t-muted">{topLine2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MARQUEE */}
          <HeroTitleMarquee text={marqueeText} image={marqueeImage} />

          {/* BOTTOM LIST BLOCK */}
          <div className="mxd-hero-02-static__bottom hero-02-static-anim-el">
            <div className="mxd-container fullwidth-container grid-container">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-md-6 col-xl-4 mxd-grid-item no-margin">
                    <div className="mxd-paragraph__lists loading__fade">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          {/* LEFT LIST */}
                          <div className="col-6 col-xl-5">
                            <ul>
                              {listLeft.map((item, i) => (
                                <li key={i}>
                                  <p className="t-small anim-uni-in-up">{item}</p>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* RIGHT LIST */}
                          <div className="col-6 col-xl-5">
                            <ul>
                              {listRight.map((item, i) => (
                                <li key={i}>
                                  <p className="t-small anim-uni-in-up">{item}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SCROLL BUTTON */}
          <div className="mxd-hero-02-static__btn hero-02-static-anim-el loading__fade">
            <RotatingButton href="#0" text={scrollButtonText} sizeClass="btn-rotating-160" svgClass="mxd-rotate" variant="" image={<RotatingStarIcon />} />
          </div>
        </div>

        {/* GALLERY */}
        <HeroScrollGallery />

        <div className="mxd-pinned-fullscreen__tl-trigger" />
      </div>
    </div>
  );
}
