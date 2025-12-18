"use client";

import {useEffect, useRef} from "react";
import Link from "next/link";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default function ContactSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /** ---------------------------
       * ZOOM OUT ANIMATION
       * --------------------------*/
      const zoomOutContainers = gsap.utils.toArray(".anim-zoom-out-container");

      zoomOutContainers.forEach((el) => {
        const docStyle = getComputedStyle(document.documentElement);

        let zoomOutBlockTl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            end: "top 14%",
            scrub: {
              scrub: true,
              ease: "power4.inOut",
            },
            // markers: true,
          },
        });

        zoomOutBlockTl.fromTo(
          el,
          {
            borderRadius: "200px",
            transform: "scale3d(1.14, 1, 1)",
          },
          {
            borderRadius: docStyle.getPropertyValue("--_radius-l"),
            transform: "scale3d(1, 1, 1)",
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={sectionRef} className="mxd-section overflow-hidden">
        <div className="mxd-container">
          <div className="mxd-block">
            <div className="mxd-promo">
              <div className="mxd-promo__inner anim-zoom-out-container">
                <div className="mxd-promo__bg" />
                <div className="mxd-promo__content">
                  <p className="mxd-promo__title anim-uni-in-up">
                    <span className="mxd-promo__icon">
                      <img src="https://dummyimage.com/100x100/838383/5d5d5d" alt="Icon" />
                    </span>
                    <span className="mxd-promo__caption reveal-type">Let's talk about your project!</span>
                  </p>
                  <div className="mxd-promo__controls anim-uni-in-up">
                    <Link className="btn btn-anim btn-default btn-large btn-additional slide-right-up" href="/contact">
                      <span className="btn-caption">Contact Us</span>
                      <i className="ph-bold ph-arrow-up-right" />
                    </Link>
                  </div>
                </div>
                <div className="mxd-promo__images">
                  <img className="promo-image promo-image-1" src="https://dummyimage.com/600x600/5d5d5d/838383" alt="Image" />
                  <img className="promo-image promo-image-2" src="https://dummyimage.com/300x300/5d5d5d/838383" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
