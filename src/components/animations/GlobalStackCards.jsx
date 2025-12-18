"use client";

import {useLayoutEffect} from "react";
import {usePathname} from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalStackCards() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    // Kill old ScrollTriggers to avoid duplication on page change
    // ScrollTrigger.getAll().forEach((st) => st.kill());

    const ctx = gsap.context(() => {
      const cards = document.querySelectorAll(".stack-item");
      const stickySpace = document.querySelector(".stack-offset");

      if (!cards.length || !stickySpace) return;

      let cardHeight = 0;
      const tl = gsap.timeline();

      const initCards = () => {
        tl.clear();
        cardHeight = cards[0].offsetHeight;

        cards.forEach((card, index) => {
          if (index > 0) {
            gsap.set(card, {y: index * cardHeight});
            tl.to(
              card,
              {
                y: 0,
                duration: index * 0.5,
                ease: "none",
              },
              0
            );
          }
        });
      };

      initCards();

      ScrollTrigger.create({
        trigger: ".stack-wrapper",
        start: "top top",
        pin: true,
        scrub: true,
        animation: tl,
        end: () => `+=${cards.length * cardHeight + stickySpace.offsetHeight}`,
        invalidateOnRefresh: true,
      });

      ScrollTrigger.addEventListener("refreshInit", initCards);
    });

    return () => {
      ctx.revert();
      // ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [pathname]);

  return null;
}
