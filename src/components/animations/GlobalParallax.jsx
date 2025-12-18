"use client";

import {useLayoutEffect, useRef} from "react";
import {usePathname} from "next/navigation";
import Ukiyo from "ukiyojs";

export default function GlobalParallax() {
  const pathname = usePathname();

  // store separate Ukiyo instances
  const instancesRef = useRef({
    large: null,
    small: null,
    video: null,
  });

  useLayoutEffect(() => {
    // CLEANUP old Ukiyo instances
    Object.values(instancesRef.current).forEach((inst) => {
      if (inst) inst.destroy();
    });

    const initUkiyo = (selector, options, key) => {
      const elements = document.querySelectorAll(selector);
      if (elements.length) {
        instancesRef.current[key] = new Ukiyo(elements, options);
      }
    };
    initUkiyo(".parallax-img", {scale: 1.5, speed: 1.3, externalRAF: false}, "large");
    initUkiyo(".parallax-img-small", {scale: 1.2, speed: 1.5, externalRAF: false}, "small");
    initUkiyo(".parallax-video", {scale: 1.5, speed: 1.5, externalRAF: false}, "video");

    return () => {
      Object.values(instancesRef.current).forEach((inst) => {
        if (inst) inst.destroy();
      });
    };
  }, [pathname]);

  return null;
}
