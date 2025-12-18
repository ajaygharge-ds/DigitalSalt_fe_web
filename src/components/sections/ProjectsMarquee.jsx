"use client";

import {useLayoutEffect, useRef} from "react";
import Link from "next/link";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Image from "next/image";

export default function ProjectMarquee() {
  const marqueeRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      initMarquees();
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  /** -------------------------------------
   * ORIGINAL FUNCTIONS (converted to React)
   * ------------------------------------*/
  const initMarquees = () => {
    const items = marqueeRef.current.querySelectorAll(".marquee--gsap");

    if (!items.length) return;

    items.forEach((itemBlock) => {
      const marqueeObject = {
        top: {
          el: itemBlock.querySelector(".marquee__top"),
          width: 0,
        },
        bottom: {
          el: itemBlock.querySelector(".marquee__bottom"),
          width: 0,
        },
      };

      marqueeObject.top.width = marqueeObject.top.el.offsetWidth;
      marqueeObject.bottom.width = marqueeObject.bottom.el.offsetWidth;

      // Prevent duplicate infinite appends on re-renders
      if (!marqueeObject.top.el.dataset.duplicated) {
        marqueeObject.top.el.innerHTML += marqueeObject.top.el.innerHTML;
        marqueeObject.top.el.dataset.duplicated = "true";
      }
      if (!marqueeObject.bottom.el.dataset.duplicated) {
        marqueeObject.bottom.el.innerHTML += marqueeObject.bottom.el.innerHTML;
        marqueeObject.bottom.el.dataset.duplicated = "true";
      }

      let master = gsap.timeline().add(marquee(marqueeObject.top.el, 30, "-=50%"), 0).add(marquee(marqueeObject.bottom.el, 30, "+=50%"), 0);

      let tween = gsap.to(master, {
        duration: 1.5,
        timeScale: 1,
        paused: true,
      });

      let timeScaleClamp = gsap.utils.clamp(1, 6);

      ScrollTrigger.create({
        trigger: itemBlock,
        start: 0,
        end: "max",
        onUpdate: (self) => {
          master.timeScale(timeScaleClamp(Math.abs(self.getVelocity() / 200)));
          tween.invalidate().restart();
        },
      });
    });
  };

  const marquee = (item, time, direction) => {
    let mod = gsap.utils.wrap(0, 50);

    return gsap.to(item, {
      duration: time,
      ease: "none",
      x: direction,
      modifiers: {
        x: (x) => (direction = mod(parseFloat(x)) + "%"),
      },
      repeat: -1,
    });
  };

  return (
    <>
      <div ref={marqueeRef} className="mxd-section padding-pre-title">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-block">
            <div className="marquee marquee--gsap">
              <div className="marquee__top">
                <div className="marquee__item image">
                  <Link className="marquee__link" href="/project-details">
                    {/* <Image src="https://dummyimage.com/1200x1200/5d5d5d/737373" width={1200} height={1200} alt="Image" /> */}
                    <img src="img/marquee/top-1.webp" alt="Image" />
                  </Link>
                </div>
                <div className="marquee__item has-caption padding-4">
                  <p>
                    Inspiring
                    <br />
                    ideas
                  </p>
                </div>
                <div className="marquee__item">
                  <Link className="marquee__link" href="/project-details">
                    {/* <Image src="https://dummyimage.com/1200x1200/5d5d5d/737373" width={1200} height={1200} alt="Image" /> */}
                    <img src="img/marquee/top-2.webp" alt="Image" />
                  </Link>
                </div>
                <div className="marquee__item">
                  <Link className="marquee__link" href="/project-details">
                    {/* <Image src="https://dummyimage.com/1200x1200/5d5d5d/737373" width={1200} height={1200} alt="Image" /> */}
                    <img src="img/marquee/top-3.webp" alt="Image" />
                  </Link>
                </div>
                <div className="marquee__item has-caption padding-4">
                  <p>
                    Creative
                    <br />
                    minds
                  </p>
                </div>
                <div className="marquee__item">
                  <Link className="marquee__link" href="/project-details">
                    {/* <Image src="https://dummyimage.com/1200x1200/5d5d5d/737373" width={1200} height={1200} alt="Image" /> */}
                    <img src="img/marquee/top-4.webp" alt="Image" />
                  </Link>
                </div>
              </div>
              <div className="marquee__bottom">
                <div className="marquee__item has-caption padding-4">
                  <p>
                    Inspiring
                    <br />
                    ideas
                  </p>
                </div>
                <div className="marquee__item">
                  <Link className="marquee__link" href="/project-details">
                    {/* <Image src="https://dummyimage.com/1200x1200/5d5d5d/737373" width={1200} height={1200} alt="Image" /> */}
                    <img src="img/marquee/bottom-1.webp" alt="Image" />
                  </Link>
                </div>
                <div className="marquee__item">
                  <Link className="marquee__link" href="/project-details">
                    {/* <Image src="https://dummyimage.com/1200x1200/5d5d5d/737373" width={1200} height={1200} alt="Image" /> */}
                    <img src="img/marquee/bottom-2.webp" alt="Image" />
                  </Link>
                </div>
                <div className="marquee__item has-caption padding-4">
                  <p>
                    Creative
                    <br />
                    minds
                  </p>
                </div>
                <div className="marquee__item">
                  <Link className="marquee__link" href="/project-details">
                    {/* <Image src="https://dummyimage.com/1200x1200/5d5d5d/737373" width={1200} height={1200} alt="Image" /> */}
                    <img src="img/marquee/bottom-3.webp" alt="Image" />
                  </Link>
                </div>
                <div className="marquee__item">
                  <Link className="marquee__link" href="/project-details">
                    {/* <Image src="https://dummyimage.com/1200x1200/5d5d5d/737373" width={1200} height={1200} alt="Image" /> */}
                    <img src="img/marquee/bottom-4.webp" alt="Image" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
