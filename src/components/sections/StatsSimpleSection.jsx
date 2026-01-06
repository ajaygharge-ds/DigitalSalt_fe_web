"use client";

import {useLayoutEffect, useRef} from "react";
import {CountUp} from "countup.js";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSimpleSection({stats}) {
  const sectionRef = useRef(null);
  const counterRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ---------------------------
         COUNTER INIT
      ---------------------------- */
      stats.forEach((item, index) => {
        const el = counterRefs.current[index];
        if (!el || typeof item.value !== "number") return;

        const counter = new CountUp(el, item.value, {
          duration: 2,
          separator: ",",
          enableScrollSpy: true,
          scrollSpyOnce: true,
          suffix: item.suffix || "",
        });

        if (!counter.error) counter.start();
      });

      /* ---------------------------
         animate-card-4 (same as PartnersGrid)
      ---------------------------- */
      const cards = gsap.utils.toArray(".animate-card-4");
      gsap.set(cards, {y: 50, opacity: 0});

      ScrollTrigger.batch(cards, {
        interval: 0.1,
        batchMax: 4,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            ease: "sine",
            stagger: {each: 0.15, grid: [1, 4]},
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
  }, [stats]);

  return (
    <div ref={sectionRef} className="mxd-section padding-default">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-stats-simple">
            <div className="container-fluid p-0">
              <div className="row g-0 mxd-stats-simple">
                {stats.map((item, index) => (
                  <div key={index} className="col-12 col-lg-3 mxd-stats-simple__item mxd-grid-item">
                    <div className="mxd-stats-simple__inner animate-card-4">
                      {/* Counter */}
                      <div className="mxd-counter">
                        <p ref={(el) => (counterRefs.current[index] = el)} className="mxd-stats-number mxd-stats-simple__counter">
                          0
                        </p>
                      </div>

                      {/* Image */}
                      {item.image && <Image className="mxd-stats-simple__image" src={item.image} width={70} height={70} alt={item.alt || "Icon"} />}

                      {/* Description */}
                      <p className="mxd-stats-simple__descr t-140 t-bright">
                        <span>{item.label}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
