"use client";

import {useLayoutEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {usePathname} from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedServicesSection({
  images = [
    "https://dummyimage.com/800x800/4d4d4d/838383",
    "https://dummyimage.com/800x800/2d2d2d/838383",
    "https://dummyimage.com/800x800/4d4d4d/838383",
    "https://dummyimage.com/800x800/2d2d2d/838383",
  ],
  services = [
    {
      title: "Digital art and graphic design",
      tags: ["UI/UX", "Web design", "Motion", "3D models"],
      text: "We create visually compelling designs that enhance user experience. We make sure your brand’s visuals resonate with your audience.",
      image: "https://dummyimage.com/800x800/4d4d4d/838383",
    },
    {
      title: "Creative development",
      tags: ["Frontend", "Interactions", "Backend", "E-Commerce"],
      text: "We build high-performance websites and applications using modern technologies. Our solutions are designed to be scalable and functional for optimal performance.",
      image: "https://dummyimage.com/800x800/4d4d4d/838383",
    },
    {
      title: "Brand identity",
      tags: ["Brand strategy", "Logo design", "Guidelines", "Visual identity", "Rebranding"],
      text: "From logo design to comprehensive brand strategies, we ensure your business stands out with a unique visual identity and consistent messaging across all touchpoints.",
      image: "https://dummyimage.com/800x800/4d4d4d/838383",
    },
    {
      title: "Digital marketing solutions",
      tags: ["Social media", "SEO Optimization", "Email", "Campaigns"],
      text: "SEO and content marketing, social media management and paid campaigns - we help you reach and engage your target audience effectively.",
      image: "https://dummyimage.com/800x800/4d4d4d/838383",
    },
  ],
}) {
  const pathname = usePathname();
  useLayoutEffect(() => {
    // ScrollTrigger.getAll().forEach((st) => st.kill()); // cleanup old triggers

    const ctx = gsap.context(() => {
      const pinnedBlocks = document.querySelectorAll(".mxd-pinned");

      pinnedBlocks.forEach((block) => {
        const triggers = block.querySelectorAll(".mxd-pinned__text-item");
        const targets = block.querySelectorAll(".mxd-pinned__img-item");

        if (!triggers.length || !targets.length) return;

        const setActive = (index) => {
          triggers.forEach((t) => t.classList.remove("is-active"));
          targets.forEach((t) => t.classList.remove("is-active"));

          triggers[index].classList.add("is-active");
          targets[index].classList.add("is-active");
        };

        // Default active (first item)
        setActive(0);

        // Create ScrollTriggers for each text item
        triggers.forEach((trigger, idx) => {
          ScrollTrigger.create({
            trigger,
            start: "top center",
            end: "bottom center",
            onToggle: ({isActive}) => {
              if (isActive) setActive(idx);
            },
          });
        });
      });
    });

    return () => {
      ctx.revert();
      // ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [pathname]);
  return (
    <div className="mxd-section padding-pinned-img-pre-mtext">
      <div className="mxd-container">
        <div className="mxd-block">
          <div className="mxd-pinned">
            {/* ✅ LEFT PINNED IMAGES */}
            <div className="mxd-pinned__visual page-padding">
              <div className="mxd-pinned__img-wrap">
                <div className="mxd-pinned__img-list" role="list">
                  {images.map((img, index) => (
                    <div key={index} className="mxd-pinned__img-item" role="listitem">
                      <img className="mxd-pinned__img" src={img} alt="Pinned Service" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ✅ RIGHT TEXT CONTENT */}
            <div className="mxd-pinned__content page-padding">
              <div className="mxd-pinned__text-wrap">
                <div className="mxd-pinned__text-list" role="list">
                  {services.map((service, index) => (
                    <div key={index} className="mxd-pinned__text-item" role="listitem">
                      {/* ✅ MOBILE IMAGE */}
                      <div className="mxd-pinned__img-mobile anim-uni-in-up">
                        <img src={service.image} alt={service.title} />
                      </div>

                      {/* ✅ TITLE */}
                      <h2 className="mxd-pinned__title h2-small anim-uni-in-up">{service.title}</h2>

                      {/* ✅ TAGS */}
                      <div className="mxd-pinned__tags">
                        {service.tags.map((tag, i) => (
                          <span key={i} className="tag tag-default tag-outline anim-uni-in-up">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* ✅ DESCRIPTION */}
                      <p className="anim-uni-in-up">{service.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
