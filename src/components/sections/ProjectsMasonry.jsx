"use client";

// import Masonry from "masonry-layout";
// import imagesLoaded from "imagesloaded";
import {useEffect, useRef} from "react";
import {usePathname} from "next/navigation";
// import gsap from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger";
import RotatingButton from "@/components/RotatingButton";
import Link from "next/link";

// gsap.registerPlugin(ScrollTrigger);
const ProjectsMasonry = ({
  variant = "web", // "web" | "masonry"
  headlineTitle,
  headlineClass = "",
  sectionTitle,
  sectionDesc,
  allWorksLink = "/portfolio",
  items = [],
  buttonText = "Let's start new project * Let's start new project * ",
  buttonLink = "/contact",
  buttonImage,
}) => {
  const pathname = usePathname();
  const masonryRef = useRef(null);
  useEffect(() => {
    if (typeof window === "undefined") return;

    let masonryInstance;
    let ScrollTrigger;

    const initMasonry = async () => {
      // ✅ Dynamic imports (SSR SAFE)
      const Masonry = (await import("masonry-layout")).default;
      const imagesLoaded = (await import("imagesloaded")).default;
      const gsap = (await import("gsap")).default;
      ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

      gsap.registerPlugin(ScrollTrigger);

      const gallery = document.querySelector(".mxd-projects-masonry__gallery");
      if (!gallery) return;

      // Destroy previous instance
      if (masonryRef.current) {
        masonryRef.current.destroy();
        masonryRef.current = null;
      }

      masonryInstance = new Masonry(gallery, {
        percentPosition: true,
        transitionDuration: 0,
      });

      masonryRef.current = masonryInstance;

      imagesLoaded(gallery, () => {
        masonryInstance.layout();
        ScrollTrigger.refresh();
      });
    };

    initMasonry();

    return () => {
      if (masonryRef.current) {
        masonryRef.current.destroy();
        masonryRef.current = null;
      }
    };
  }, [pathname]);

  // useEffect(() => {
  //   const gallery = document.querySelector(".mxd-projects-masonry__gallery");
  //   if (!gallery) return;

  //   // 🔥 DESTROY old instance
  //   if (masonryRef.current) {
  //     masonryRef.current.destroy();
  //     masonryRef.current = null;
  //   }

  //   // 🔥 INIT Masonry
  //   const masonry = new Masonry(gallery, {
  //     percentPosition: true,
  //     transitionDuration: 0,
  //   });

  //   masonryRef.current = masonry;

  //   // 🔥 WAIT for images
  //   imagesLoaded(gallery, () => {
  //     masonry.layout();
  //     ScrollTrigger.refresh();
  //   });

  //   return () => {
  //     masonry.destroy();
  //     masonryRef.current = null;
  //   };
  // }, [pathname]);
  return (
    <div className={`mxd-section mxd-section-inner-headline grid-headline padding-default padding-pre-grid`}>
      <div className={`mxd-container grid-l-container`}>
        <div className={`mxd-block`}>
          <div className={`mxd-projects-masonry loading__item`}>
            <div className="container-fluid p-0">
              <div className="row g-0 mxd-projects-masonry__gallery" data-masonry='{"percentPosition": true }'>
                {/* ✅ LEFT TITLE BLOCK */}
                <div className={`col-12 col-xl-6 mxd-projects-masonry__title headline-title`}>
                  <div className="mxd-block__inner-headline loading__item">
                    {variant !== "web" ? (
                      <h1 className={`inner-headline__title ${variant === "web" ? "reveal-type" : `${headlineClass}`} `}>{headlineTitle}</h1>
                    ) : (
                      <>
                        <div class="mxd-section-title__title anim-uni-in-up">
                          <h2 class="reveal-type">{sectionTitle}</h2>
                        </div>
                        <div className="mxd-section-title__descr">
                          <p className="anim-uni-in-up">{sectionDesc}</p>
                        </div>
                        <div className="mxd-section-title__controls anim-uni-in-up">
                          <Link className="btn btn-anim btn-default btn-outline slide-right-up" href={allWorksLink}>
                            <span className="btn-caption">All Works</span>
                            <i className="ph ph-arrow-up-right" />
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* ✅ PROJECT ITEMS */}
                {items.map((item, index) => (
                  <div key={index} className={`col-12 col-xl-6 mxd-project-item mxd-projects-masonry__item `}>
                    <Link href={`/project-details/${item.slug}`} className="mxd-project-item__media masonry-media">
                      <div className={`mxd-project-item__preview masonry-preview ${item.previewClass} parallax-img-small`} />
                      <div className="mxd-project-item__tags">
                        {item.tags.map((tag, i) => (
                          <span key={i} className="tag tag-default tag-permanent">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>

                    <div className={`mxd-project-item__promo masonry-promo`}>
                      <div className="mxd-project-item__name">
                        <Link href={`/project-details/${item.slug}`}>
                          <span>{item.titleBold}</span> {item.titleLight}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ✅ ROTATING BUTTON */}
              <div className="mxd-projects-masonry__btngroup anim-uni-in-up">
                <RotatingButton href={buttonLink} text={buttonText} sizeClass="btn-rotating-180" variant="ver-02" image={buttonImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsMasonry;
