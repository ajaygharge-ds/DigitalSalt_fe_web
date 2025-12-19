"use client";
import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
export default function LeadersSection({title, description, ctaText, ctaLink, members = []}) {
  const firstTwo = members.slice(0, 2);
  const remainingMembers = members.slice(2);
  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  let teamRows = chunkArray(remainingMembers, 3);

  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animateElems = gsap.utils.toArray(".animate-card-3");

      gsap.set(animateElems, {y: 50, opacity: 0});

      ScrollTrigger.batch(animateElems, {
        interval: 0.1,
        batchMax: 3,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            ease: "sine",
            stagger: {each: 0.15, grid: [1, 3]},
          }),
        onLeave: (batch) => gsap.set(batch, {opacity: 1, y: 0}),
        onEnterBack: (batch) => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15}),
        onLeaveBack: (batch) => gsap.set(batch, {opacity: 0, y: 50}),
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="mxd-section padding-pre-grid">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-team-cards">
            <div className="container-fluid p-0">
              <div className="row g-0 flex-column-reverse flex-xl-row">
                {/* ✅ LEFT: 2 CARDS ONLY */}
                <div className="col-12 col-xl-8">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      {firstTwo.map((member, i) => (
                        <div key={i} className="col-12 col-md-6 mxd-team-cards__item mxd-grid-item no-margin-desktop animate-card-3">
                          <div className="mxd-team-cards__media anim-uni-in-up">
                            <div className="mxd-team-cards__photo">
                              <Image src={member.image} width={800} height={920} alt={member.name} />
                            </div>
                            <div className="mxd-team-cards__socials">
                              {member.socials.map((s, j) => (
                                <Link key={j} className="btn btn-anim tag tag-default tag-permanent" href={s.link} target="_blank">
                                  <span className="btn-caption">{s.label}</span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div className="mxd-team-cards__info">
                            <p className="mxd-team-cards__name t-large t-bright t-caption">{member.name}</p>
                            <p className="mxd-team-cards__position t-small t-medium t-140">{member.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ✅ RIGHT: TITLE BLOCK */}
                <div className="col-12 col-xl-4 mxd-team-cards__item mxd-grid-item no-margin animate-card-3">
                  <div className="mxd-team-cards__h2-block right-block">
                    <div className="mxd-section-title pre-grid">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12">
                            <div class="mxd-section-title__title">
                              <h2 className="reveal-type">{title}</h2>
                            </div>
                          </div>
                          <div className="col-12">
                            <div class="mxd-section-title__descr">
                              <p className="anim-uni-in-up">{description}</p>
                            </div>
                          </div>
                          <div className="col-12">
                            <div class="mxd-section-title__controls anim-uni-in-up">
                              <Link className="btn btn-anim btn-default btn-outline slide-right-up" href={ctaLink}>
                                <span className="btn-caption">{ctaText}</span>
                                <i className="ph-bold ph-arrow-up-right" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {teamRows.map((row, rowIndex) => (
                  <div key={rowIndex} className="col-12">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        {row.map((member, i) => (
                          <div key={i} className="col-12 col-md-4 mxd-team-cards__item mxd-grid-item padding-bottom-mobile animate-card-3">
                            <div className="mxd-team-cards__media anim-uni-in-up">
                              <div className="mxd-team-cards__photo">
                                <Image src={member.image} width={800} height={920} alt={member.name} />
                              </div>
                              <div className="mxd-team-cards__socials">
                                {member.socials.map((s, j) => (
                                  <Link key={j} className="btn btn-anim tag tag-default tag-permanent" href={s.link} target="_blank">
                                    <span className="btn-caption">{s.label}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            <div className="mxd-team-cards__info">
                              <p className="mxd-team-cards__name t-large t-bright t-caption">{member.name}</p>
                              <p className="mxd-team-cards__position t-small t-medium t-140">{member.position}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
