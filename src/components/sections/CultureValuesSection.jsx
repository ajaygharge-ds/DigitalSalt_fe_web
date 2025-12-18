"use client";

import {useLayoutEffect} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {usePathname} from "next/navigation";

gsap.registerPlugin(ScrollTrigger);
const CultureValuesSection = ({showHeader = false, headerTitle, headerTags = [], headerButton, opposite = false, showLists = false, lists = {left: [], right: []}, description}) => {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const cards = gsap.utils.toArray(".animate-card-2");
    if (!cards.length) return;
    gsap.set(cards, {y: 50, opacity: 0});
    const batchTrigger = ScrollTrigger.batch(cards, {
      interval: 0.1,
      batchMax: 2,
      onEnter: (batch) =>
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          ease: "sine",
          stagger: {each: 0.15, grid: [1, 2]},
          overwrite: true,
        }),
      onLeave: (batch) => gsap.set(batch, {y: 0, opacity: 1, overwrite: true}),
      onEnterBack: (batch) => gsap.to(batch, {y: 0, opacity: 1, stagger: 0.15, overwrite: true}),
      onLeaveBack: (batch) => gsap.set(batch, {y: 50, opacity: 0, overwrite: true}),
    });

    // Reset on refresh
    const refreshHandler = () => gsap.set(cards, {y: 0, opacity: 1});
    ScrollTrigger.addEventListener("refreshInit", refreshHandler);

    // Cleanup on unmount
    return () => {
      batchTrigger.forEach((t) => t.kill());
      ScrollTrigger.removeEventListener("refreshInit", refreshHandler);
    };
  }, [pathname]);

  return (
    <div className="mxd-section padding-grid-pre-mtext">
      <div className="mxd-container grid-container">
        {/* ✅ HEADER (TEAM PAGE ONLY) */}
        {showHeader && (
          <div className="mxd-block">
            <div className="mxd-section-title">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrtitle">
                      <h2 className="opposite reveal-type anim-uni-in-up">{headerTitle}</h2>
                    </div>
                  </div>

                  <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrdescr">
                      {headerTags.map((tag, i) => (
                        <p key={i} className="t-opposite-medium anim-uni-in-up">
                          {tag}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrcontrols anim-uni-in-up">{headerButton}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ✅ MAIN VALUES BLOCK */}
        <div className="mxd-block">
          <div className="mxd-values ">
            <div className="container-fluid p-0">
              <div className="row g-0 d-flex">
                {/* ✅ LISTS (ABOUT PAGE ONLY) */}
                {showLists && (
                  <div className="col-12 col-xl-2 mxd-values__item order-2 order-xl-1 mxd-grid-item no-margin animate-card-2">
                    <div className="mxd-values__lists fullheight-xl">
                      <div className="container-fluid p-0 fullheight-xl">
                        <div className="row g-0 fullheight-xl d-xl-flex flex-xl-column justify-content-xl-between">
                          <div className="col-12 col-sm-6 col-xl-12 mxd-values__lists-item">
                            <ul>
                              {lists.left.map((item, i) => (
                                <li key={i}>
                                  <p className="t-small anim-uni-in-up">{item}</p>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="col-12 col-sm-6 col-xl-12 mxd-values__lists-item">
                            <ul>
                              {lists.right.map((item, i) => (
                                <li key={i}>
                                  <p className="t-small anim-uni-in-up">{item}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ✅ IMAGE 1 */}
                <div className={`col-12 ${showLists ? "col-xl-4" : "col-xl-6"} mxd-values__item order-1 order-xl-2 mxd-grid-item no-margin animate-card-2`}>
                  <div className="mxd-values__image image-large-desktop image-values-1 parallax-img-small" />
                </div>

                {/* ✅ IMAGE 2 + DESCRIPTION */}
                <div className={`col-12 ${showLists ? "col-xl-6" : "col-xl-6"} mxd-values__item order-3 order-xl-3 mobile-reverse mxd-grid-item no-margin animate-card-2`}>
                  <div className="mxd-values__image image-small-desktop image-values-2 parallax-img-small" />

                  <div className={`mxd-values__descr ${showLists ? "has-top-list" : ""} anim-uni-in-up`}>
                    <p className={`t-bright t-large ${opposite ? "opposite" : ""} reveal-type`}>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureValuesSection;
