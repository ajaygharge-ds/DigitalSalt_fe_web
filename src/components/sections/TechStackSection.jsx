"use client";

import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TechStackSection({title, items}) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".animate-card-3");

      gsap.set(cards, {y: 50, opacity: 0});

      ScrollTrigger.batch(cards, {
        interval: 0.1,
        batchMax: 3,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            ease: "sine",
            stagger: {each: 0.15, grid: [1, 3]},
            overwrite: true,
          }),
        onLeave: (batch) => gsap.set(batch, {opacity: 1, y: 0, overwrite: true}),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            overwrite: true,
          }),
        onLeaveBack: (batch) => gsap.set(batch, {opacity: 0, y: 50, overwrite: true}),
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="mxd-section padding-grid-pre-mtext">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              {/* LEFT TITLE */}
              <div className="col-12 col-xl-5 mxd-grid-item">
                <div className="mxd-section-title pre-grid no-margin-desktop">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12">
                        <div className="mxd-section-title__title">
                          <h2 className="reveal-type">{title}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT GRID */}
              <div className="col-12 col-xl-7">
                <div className="mxd-tech-stack-cards">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      {items.map((item, index) => (
                        <div key={index} className="col-12 col-md-6 col-xxl-4 mxd-tech-stack-cards__item mxd-grid-item animate-card-3">
                          <div className="mxd-tech-stack-cards__inner">
                            {/* LOGO */}
                            <div className="mxd-tech-stack-cards__logo">{item.icon}</div>

                            {/* TITLE */}
                            <div className="mxd-tech-stack-cards__title">
                              <p className="t-bright t-caption">{item.label}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* END GRID */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
