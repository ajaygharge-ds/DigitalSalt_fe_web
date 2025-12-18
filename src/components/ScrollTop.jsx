"use client";

import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import {usePathname} from "next/navigation";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function ScrollTop() {
  const btnRef = useRef(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    let ctx;
    let ScrollTrigger;
    let ScrollToPlugin;

    (async () => {
      ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      ScrollToPlugin = (await import("gsap/ScrollToPlugin")).default;

      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

      const btn = btnRef.current;
      if (!btn) return;

      ctx = gsap.context(() => {
        const clickHandler = (e) => {
          e.preventDefault();
          gsap.to(window, {
            scrollTo: {y: 0},
            ease: "power4.inOut",
            duration: 1.3,
          });
        };

        btn.addEventListener("click", clickHandler);

        // Initial state
        gsap.set(btn, {
          opacity: 0,
          pointerEvents: "none",
        });

        // Show / hide on scroll
        gsap.to(btn, {
          opacity: 1,
          pointerEvents: "auto",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top -20%",
            end: "top -20%",
            toggleActions: "play none reverse none",
          },
        });

        return () => btn.removeEventListener("click", clickHandler);
      }, btnRef);
    })();

    return () => {
      ctx?.revert();
    };
  }, [pathname]);
  return (
    <>
      <span ref={btnRef} id="to-top" className="btn btn-to-top slide-up anim-no-delay">
        <i className="ph ph-arrow-up" />
      </span>
    </>
  );
}
