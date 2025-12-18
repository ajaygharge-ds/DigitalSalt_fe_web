"use client";

import {useLayoutEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function ZoomInAnimation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const docStyle = getComputedStyle(document.documentElement);

      gsap.utils.toArray(".anim-zoom-in-container").forEach((el) => {
        gsap
          .timeline({
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
          })
          .fromTo(
            el,
            {
              borderRadius: "200px",
              transform: "scale3d(0.94, 1, 1)",
            },
            {
              borderRadius: docStyle.getPropertyValue("--_radius-l"),
              transform: "scale3d(1, 1, 1)",
            }
          );
      });
    });

    return () => ctx.revert();
  }, []);
}
