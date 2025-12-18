"use client";
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function PartnersGrid() {
  const partnersRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const animateCard4 = gsap.utils.toArray(".animate-card-4");
      gsap.set(animateCard4, {y: 50, opacity: 0});
      ScrollTrigger.batch(animateCard4, {
        interval: 0.1,
        batchMax: 4,
        delay: 1000,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            ease: "sine",
            stagger: {each: 0.15, grid: [1, 4]},
            overwrite: true,
          }),
        onLeave: (batch) => gsap.set(batch, {opacity: 1, y: 0, overwrite: true}),
        onEnterBack: (batch) => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
        onLeaveBack: (batch) => gsap.set(batch, {opacity: 0, y: 50, overwrite: true}),
      });
      ScrollTrigger.refresh();
      //   ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-4", {y: 0, opacity: 1}));
    }, partnersRef);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div ref={partnersRef} className="mxd-section padding-pre-title">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-partners-cards">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-md-6 col-xl-3 mxd-partners-cards__item mxd-grid-item animate-card-4">
                    <Link className="mxd-partners-cards__inner" href="#0">
                      <div className="mxd-partners-cards__logo">
                        <img src="img/brands/mozilla.svg" alt="Partner Logo" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3 mxd-partners-cards__item mxd-grid-item animate-card-4">
                    <Link className="mxd-partners-cards__inner" href="#0">
                      <div className="mxd-partners-cards__logo">
                        <img src="img/brands/envato.svg" alt="Partner Logo" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3 mxd-partners-cards__item mxd-grid-item animate-card-4">
                    <Link className="mxd-partners-cards__inner" href="#0">
                      <div className="mxd-partners-cards__logo">
                        <img src="img/brands/behance.svg" alt="Partner Logo" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3 mxd-partners-cards__item mxd-grid-item animate-card-4">
                    <Link className="mxd-partners-cards__inner" href="#0">
                      <div className="mxd-partners-cards__logo">
                        <img src="img/brands/dribbble.svg" alt="Partner Logo" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3 mxd-partners-cards__item mxd-grid-item animate-card-4">
                    <Link className="mxd-partners-cards__inner" href="#0">
                      <div className="mxd-partners-cards__logo">
                        <img src="img/brands/codeninja.svg" alt="Partner Logo" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3 mxd-partners-cards__item mxd-grid-item animate-card-4">
                    <Link className="mxd-partners-cards__inner" href="#0">
                      <div className="mxd-partners-cards__logo">
                        <img src="img/brands/udemy.svg" alt="Partner Logo" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3 mxd-partners-cards__item mxd-grid-item animate-card-4">
                    <Link className="mxd-partners-cards__inner" href="#0">
                      <div className="mxd-partners-cards__logo">
                        <img src="img/brands/angular.svg" alt="Partner Logo" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3 mxd-partners-cards__item mxd-grid-item animate-card-4">
                    <Link className="mxd-partners-cards__inner" href="#0">
                      <div className="mxd-partners-cards__logo">
                        <img src="img/brands/ghostgaming.svg" alt="Partner Logo" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
