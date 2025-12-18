"use client";

import Link from "next/link";
import {useLayoutEffect, useRef} from "react";
import Swiper from "swiper";
import {Navigation, Pagination, Autoplay, Parallax, EffectFade} from "swiper/modules";

Swiper.use([Navigation, Pagination, Autoplay, Parallax, EffectFade]);

export default function TestimonialsSwiper({variant = "photo", opposite = false, id = "testimonials", slides = []}) {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current || swiperRef.current) return;

    swiperRef.current = new Swiper(variant === "photo" ? ".swiper-testimonials" : ".swiper-testimonials-2", {
      slidesPerView: variant === "photo" ? "auto" : 1,
      grabCursor: true,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
      loop: true,
      parallax: true,
      effect: variant === "image" ? "fade" : "slide",
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
        swiperRef.current = null;
      }
    };
  }, [variant]);

  return (
    <div id={id} className="mxd-section overflow-hidden padding-default">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className={variant === "photo" ? "testimonials-slider no-padding" : "testimonials-slider-2 no-padding"}>
            <div ref={containerRef} className={variant === "photo" ? "swiper-testimonials no-padding" : "swiper-testimonials-2 no-padding"}>
              <div className="swiper-wrapper">
                {slides.map((slide, index) => (
                  <div key={index} className="swiper-slide mxd-fullwidth-slide no-blur">
                    {slide}
                  </div>
                ))}
              </div>

              {/* ✅ CONTROLS */}
              <div className="swiper-testimonials__controls">
                <div className="swiper-button-prev mxd-slider-btn mxd-slider-btn-round-prev">
                  <a className={`btn btn-round btn-round-small btn-outline slide-left anim-no-delay ${opposite ? "opposite" : ""}`} href="#0">
                    <i className="ph ph-arrow-left" />
                  </a>
                </div>

                <div className={`swiper-pagination mxd-swiper-pagination-fraction ${opposite ? "opposite" : ""}`} />

                <div className="swiper-button-next mxd-slider-btn mxd-slider-btn-round-next">
                  <a className={`btn btn-round btn-round-small btn-outline slide-right anim-no-delay ${opposite ? "opposite" : ""}`} href="#0">
                    <i className="ph ph-arrow-right" />
                  </a>
                </div>
              </div>
              {/* ✅ CONTROLS END */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
