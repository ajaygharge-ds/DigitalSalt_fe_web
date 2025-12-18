"use client";

import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import CommonIcon from "../common/icons/CommonIcon";

gsap.registerPlugin(ScrollTrigger);
export default function TitleMarquee() {
  const marqueeRef = useRef(null);

  useLayoutEffect(() => {
    if (!marqueeRef.current) return;

    const wrapper = marqueeRef.current;
    const elementsWidth = wrapper.offsetWidth;

    // Clone items for seamless infinite loop
    wrapper.innerHTML += wrapper.innerHTML;

    // ==== marqueeRight FUNCTION ====
    const marqueeRight = (item, duration, direction) => {
      const mod = gsap.utils.wrap(0, 50);

      return gsap.to(item, {
        duration,
        ease: "none",
        x: direction,
        modifiers: {
          x: (x) => mod(parseFloat(x)) + "%",
        },
        repeat: -1,
      });
    };

    // ==== MAIN GSAP MARQUEE INIT ====
    const master = gsap.timeline().add(marqueeRight(wrapper, 30, "+=50%"), 0);

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

    // Cleanup
    return () => {
      master.kill();
      tween.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      <div className="mxd-hero-01__marquee loading__item">
        <div className="marquee marquee-right--gsap">
          <div ref={marqueeRef} className="marquee__toright marquee-flex">
            {/* single item */}
            <div className="marquee__item item-regular text">
              <p>tech</p>
              <CommonIcon />
              {/* <img class="inject-me" src="img/icons/20x20-rayo-star.svg" alt="Divider Icon" /> */}
            </div>
            {/* single item */}
            <div className="marquee__item item-regular text">
              <p>tech</p>
              <CommonIcon />
              {/* <img class="inject-me" src="img/icons/20x20-rayo-star.svg" alt="Divider Icon"> */}
            </div>
            {/* single item */}
            <div className="marquee__item item-regular text">
              <p>tech</p>
              <CommonIcon />
              {/* <img class="inject-me" src="img/icons/20x20-rayo-star.svg" alt="Divider Icon"> */}
            </div>
            {/* single item */}
            <div className="marquee__item item-regular text">
              <p>tech</p>
              <CommonIcon />
              {/* <img class="inject-me" src="img/icons/20x20-rayo-star.svg" alt="Divider Icon"> */}
            </div>
            {/* single item */}
            <div className="marquee__item item-regular text">
              <p>tech</p>
              <CommonIcon />
              {/* <img class="inject-me" src="img/icons/20x20-rayo-star.svg" alt="Divider Icon"> */}
            </div>
            {/* single item */}
            <div className="marquee__item item-regular text">
              <p>tech</p>
              <CommonIcon />
              {/* <img class="inject-me" src="img/icons/20x20-rayo-star.svg" alt="Divider Icon"> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
