"use client";
import {useLayoutEffect} from "react";
import {usePathname} from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalAnimations() {
  const pathname = usePathname();
  useLayoutEffect(() => {
    const handleAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute("href");
      if (hash === "#" || hash === "#0") return;

      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();

      lenis.scrollTo(target, {
        offset: 0,
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      });
    };

    document.addEventListener("click", handleAnchorClick);
    /* ---------------------------------------------------------
     * LENIS SETUP (GSAP + ScrollTrigger synced)
     * --------------------------------------------------------- */
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // GSAP uses seconds
    });

    gsap.ticker.lagSmoothing(0);
    // ScrollTrigger.getAll().forEach((st) => st.kill());
    const ctx = gsap.context(() => {
      /* ---------------------------------------------------------
       * PAGE APPEARANCE — replaces hideLoader() + pageAppearance()
       * --------------------------------------------------------- */
      const loadingItems = gsap.utils.toArray(".loading__item");
      const fadeInItems = gsap.utils.toArray(".loading__fade");

      // Start hidden
      gsap.set(loadingItems, {opacity: 0, y: 120});
      gsap.set(fadeInItems, {opacity: 0});

      // Reveal sequence (cleaned & fast)
      gsap.to(loadingItems, {
        duration: 1,
        ease: "power3.out",
        y: 0,
        opacity: 1,
        stagger: 0.08,
        delay: 0.8,
      });

      gsap.to(fadeInItems, {
        duration: 0.8,
        opacity: 1,
        delay: 1.6,
        ease: "power1.out",
      });
      /* ---------------------------------------------------------
       *  BTN ANIMATION (.btn-anim .btn-caption)
       * --------------------------------------------------------- */
      const btnCaptions = gsap.utils.toArray(".btn-anim .btn-caption");

      btnCaptions.forEach((element) => {
        //     const innerText = element.innerText;
        //     element.innerHTML = "";

        //     const textContainer = document.createElement("div");
        //     textContainer.classList.add("btn-anim__block");

        //     [...innerText].forEach((letter) => {
        //       const span = document.createElement("span");
        //       span.innerText = letter.trim() === "" ? "\xa0" : letter;
        //       span.classList.add("btn-anim__letter");
        //       textContainer.appendChild(span);
        //     });

        //     element.appendChild(textContainer);
        //     element.appendChild(textContainer.cloneNode(true));

        //     element.addEventListener("mouseover", () => {
        //       element.classList.remove("play");
        //     });
        //   });
        if (element.dataset.processed === "true") return;
        element.dataset.processed = "true";

        const innerText = element.innerText;
        element.innerHTML = "";

        const textContainer = document.createElement("div");
        textContainer.classList.add("btn-anim__block");

        [...innerText].forEach((letter) => {
          const span = document.createElement("span");
          span.innerText = letter.trim() === "" ? "\xa0" : letter;
          span.classList.add("btn-anim__letter");
          textContainer.appendChild(span);
        });

        // Append 2 blocks ONLY ONCE
        element.appendChild(textContainer);
        element.appendChild(textContainer.cloneNode(true));

        element.addEventListener("mouseover", () => {
          element.classList.remove("play");
        });
      });

      /* ---------------------------------------------------------
       *  SplitType Reveal (.reveal-type)
       * --------------------------------------------------------- */
      gsap.utils.toArray(".reveal-type").forEach((el) => {
        const split = new SplitType(el, {types: "words, chars"});

        gsap.from(split.chars, {
          opacity: 0.2,
          stagger: 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        });
      });

      /* ---------------------------------------------------------
       *  SplitType Reveal Up (.reveal-in-up)
       * --------------------------------------------------------- */
      gsap.utils.toArray(".reveal-in-up").forEach((el) => {
        const split = new SplitType(el);

        gsap.from(split.chars, {
          y: 10,
          transformOrigin: "top left",
          stagger: 0.2,
          duration: 2,
          delay: 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 20%",
            scrub: true,
          },
        });
      });

      /* ---------------------------------------------------------
       *  Rotation Animation (.animate-rotation)
       * --------------------------------------------------------- */
      gsap.utils.toArray(".animate-rotation").forEach((el) => {
        // React-friendly: use dataset instead of jQuery ".data()"
        const value = Number(el.dataset.value ?? 0);

        gsap.fromTo(
          el,
          {rotate: 0},
          {
            rotate: value,
            ease: "sine",
            scrollTrigger: {
              trigger: el,
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* ---------------------------------------------------------
       *  Animations for up scale
       * --------------------------------------------------------- */
      gsap.utils.toArray(".anim-uni-in-up").forEach((el) => {
        gsap.fromTo(
          el,
          {opacity: 0, y: 50},
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {trigger: el, toggleActions: "play none none reverse"},
          }
        );
      });

      gsap.utils.toArray(".anim-uni-scale-in").forEach((el) => {
        gsap.fromTo(
          el,
          {opacity: 1, y: 50, scale: 1.2},
          {
            y: 0,
            scale: 1,
            scrollTrigger: {trigger: el, toggleActions: "play none none reverse"},
          }
        );
      });

      gsap.utils.toArray(".anim-uni-scale-in-right").forEach((el) => {
        gsap.fromTo(
          el,
          {opacity: 1, y: 50, x: -70, scale: 1.2},
          {
            y: 0,
            x: 0,
            scale: 1,
            scrollTrigger: {trigger: el, toggleActions: "play none none reverse"},
          }
        );
      });

      gsap.utils.toArray(".anim-uni-scale-in-left").forEach((el) => {
        gsap.fromTo(
          el,
          {opacity: 1, y: 50, x: 70, scale: 1.2},
          {
            y: 0,
            x: 0,
            scale: 1,
            scrollTrigger: {trigger: el, toggleActions: "play none none reverse"},
          }
        );
      });
    });
    return () => {
      document.removeEventListener("click", handleAnchorClick);
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [pathname]);

  return null;
}
