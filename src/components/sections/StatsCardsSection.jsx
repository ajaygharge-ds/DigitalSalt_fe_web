"use client";
import {useLayoutEffect, useRef} from "react";
import {CountUp} from "countup.js";
import StarIcon from "../common/icons/StarIcon";
import Link from "next/link";
import Image from "next/image";
export default function StatsCardsSection({variant = "", stats}) {
  const counterRefs = useRef([]);

  const ICON_MAP = {
    star: <StarIcon />,
  };

  useLayoutEffect(() => {
    // const startDelay = 2000;

    // const timers = [];
    stats.forEach((item, index) => {
      const el = counterRefs.current[index];
      if (!el || typeof item.value !== "number") return;

      // ✅ AUTO OPTIONS
      let options = {
        duration: 2,
        separator: ",",
        enableScrollSpy: true,
        // scrollSpyOnce: false,
        // startVal: 0,
      };

      if (item.suffix === "+") options.suffix = "+";
      if (item.suffix === "%") options.suffix = "%";

      const counter = new CountUp(el, item.value, options);
      // if (!counter.error) {
      //   // 2. Set a timeout to wait for the GSAP loading__fade animation
      //   const timer = setTimeout(() => {
      //     counter.start();
      //   }, startDelay);

      //   timers.push(timer);
      // }
      if (!counter.error) counter.start();
    });
    // return () => timers.forEach((timer) => clearTimeout(timer));
  }, [stats]);

  const StatsGrid = (
    <div className={`mxd-stats-cards ${variant === "services" ? "loading__fade" : ""}`}>
      <div className="container-fluid px-0">
        <div className="row gx-0">
          {stats.map((item, index) => (
            <div key={index} className={`col-12 col-xl-${item.col} mxd-stats-cards__item mxd-grid-item ${item.anim}`}>
              <div className={`mxd-stats-cards__inner ${item.align || ""} ${item.bg} radius-m padding-4`}>
                {/* Avatars (only if exists) */}
                {item.avatars && (
                  <div className="mxd-stats-cards__btngroup">
                    <div className="mxd-avatars">
                      {item.avatars.map((avt, i) => (
                        <div key={i} className={`mxd-avatars__item ${avt.bg || ""}`}>
                          {avt.type === "svg" ? ICON_MAP[avt.icon] : <img src={avt.img} width={300} height={300} alt="Avatar" />}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/* Counter */}
                <div className={`mxd-counter ${item.align || ""}`}>
                  <p ref={(el) => (counterRefs.current[index] = el)} className={`mxd-counter__number mxd-stats-number ${item.opposite ? "opposite" : ""}`}>
                    0
                  </p>

                  <p className={`mxd-counter__descr t-140 t-bright ${item.opposite ? "opposite" : ""}`}>{item.label}</p>
                </div>

                {/* Button */}
                {item.btn && (
                  <div className="mxd-stats-cards__btngroup">
                    <Link className={`btn btn-anim btn-default btn-outline ${item.btn.anim}`} href={item.btn.link}>
                      <span className="btn-caption">{item.btn.text}</span>
                      <i className={item.btn.icon} />
                    </Link>
                  </div>
                )}

                {/* Image */}
                <div className={`mxd-stats-cards__image ${item.imageClass}`}>
                  {/* <Image src={item.image} width={800} height={800} alt="Illustration" /> */}
                  <img src={item.image} alt="Illustration" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  /* -------------------------
     SERVICES VARIANT
  -------------------------- */
  if (variant === "services") {
    return (
      <div className="mxd-section mxd-section-inner-stats overflow-hidden">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {/* LEFT EMPTY COLUMN */}
                <div className="col-12 col-xl-2 mxd-grid-item no-margin" />

                {/* RIGHT CONTENT */}
                <div className="col-12 col-xl-10">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-stats">{StatsGrid}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* -------------------------
     DEFAULT VARIANT
  -------------------------- */
  return (
    <div className="mxd-section padding-grid-pre-mtext overflow-hidden">
      <div className="mxd-container grid-container">
        <div className="mxd-block">{StatsGrid}</div>
      </div>
    </div>
  );
}
