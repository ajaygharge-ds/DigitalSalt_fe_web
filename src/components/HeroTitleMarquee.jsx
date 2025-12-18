"use client";

import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import CommonIcon from "./common/icons/CommonIcon";

gsap.registerPlugin(ScrollTrigger);

export default function HeroTitleMarquee({text = "the power of imagination", image = "https://dummyimage.com/800x800/5d5d5d/838383"}) {
  const marqueeWrapRef = useRef(null); // .marquee-left--gsap
  const marqueeInnerRef = useRef(null); // .marquee__toleft

  useLayoutEffect(() => {
    const wrapper = marqueeWrapRef.current;
    const el = marqueeInnerRef.current;
    if (!wrapper || !el) return;

    // ✅ MATCHES YOUR ORIGINAL offsetWidth LOGIC
    const ctx = gsap.context(() => {
      const elWidth = el.offsetWidth;

      // ✅ DUPLICATE CONTENT LIKE innerHTML += innerHTML
      el.innerHTML += el.innerHTML;

      // ✅ ORIGINAL marqueeLeft FUNCTION (UNCHANGED)
      const marqueeLeft = (item, time, direction) => {
        const mod = gsap.utils.wrap(0, elWidth);

        return gsap.to(item, {
          duration: time,
          ease: "none",
          x: direction,
          modifiers: {
            x: (x) => mod(parseFloat(x)) + "px",
          },
          repeat: -1,
        });
      };

      const master = gsap.timeline().add(marqueeLeft(el, 30, `-=${elWidth}`), 0);

      const tween = gsap.to(master, {
        duration: 1.5,
        timeScale: 1,
        paused: true,
      });

      const timeScaleClamp = gsap.utils.clamp(1, 6);

      ScrollTrigger.create({
        trigger: wrapper,
        start: 0,
        end: "max",
        onUpdate: (self) => {
          master.timeScale(timeScaleClamp(Math.abs(self.getVelocity() / 200)));
          tween.invalidate().restart();
        },
      });
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mxd-hero-02-static__center">
      <div className="mxd-hero-02-marquee">
        {/* ✅ CENTER IMAGE */}
        <div className="mxd-hero-02-marquee__image loading__item">
          <img className="mxd-move" src={image} alt="Hero Image" />
        </div>

        {/* ✅ MARQUEE LINE */}
        <div className="mxd-hero-02-marquee__line loading__item">
          <div ref={marqueeWrapRef} className="marquee marquee-left--gsap">
            <div ref={marqueeInnerRef} className="marquee__toleft">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="marquee__item one-line item-regular text">
                  <p className="marquee__text">{text}</p>
                  <div className="marquee__image">
                    <CommonIcon />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
