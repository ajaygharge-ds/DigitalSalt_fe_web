"use client";

import Image from "next/image";
import {useLayoutEffect, useRef} from "react";

export default function HoverRevealItem({children, previewImage, revealSize = "280x340", className = ""}) {
  const wrapperRef = useRef(null);
  const revealRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const reveal = revealRef.current;
    const image = imageRef.current;

    if (!wrapper || !reveal || !image) return;

    const moveHandler = (e) => {
      // ✅ EXACT copy of your working JS logic
      reveal.style.opacity = 1;
      reveal.style.transform = "translate(-80%, -50%)";
      reveal.style.left = e.clientX + "px";
      reveal.style.top = e.clientY + "px";

      image.style.transform = "scale(1, 1)";
    };

    const leaveHandler = () => {
      reveal.style.opacity = 0;
      reveal.style.transform = "translate(-80%, -50%)";
      image.style.transform = "scale(1, 1.4)";
    };

    wrapper.addEventListener("mousemove", moveHandler);
    wrapper.addEventListener("mouseleave", leaveHandler);

    return () => {
      wrapper.removeEventListener("mousemove", moveHandler);
      wrapper.removeEventListener("mouseleave", leaveHandler);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={`hover-reveal__item ${className}`}>
      {/* ✅ Hover Reveal Box */}
      <div ref={revealRef} className={`hover-reveal__content hover-reveal-${revealSize}`} style={{opacity: 0, position: "fixed", pointerEvents: "none"}}>
        <Image ref={imageRef} className="hover-reveal__image" src={previewImage} width={600} height={700} alt="Preview" />
      </div>
      {children}
    </div>
  );
}
