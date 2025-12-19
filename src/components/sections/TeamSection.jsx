"use client";
import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
export default function TeamSection({title, description, ctaText, ctaLink, members = [], showCareerCard = true}) {
  const firstRow = members.slice(0, 2);
  const rest = members.slice(2);

  const chunk = (arr, size) => {
    const out = [];
    for (let i = 0; i < arr.length; i += size) {
      out.push(arr.slice(i, i + size));
    }
    return out;
  };

  let rows = chunk(rest, 3);

  // ✅ Auto-fill last row with Career Card
  if (showCareerCard) {
    const last = rows[rows.length - 1];
    if (!last || last.length === 3) {
      rows.push([{isCareer: true}]);
    } else {
      last.push({isCareer: true});
    }
  }

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
    <div ref={sectionRef} className="mxd-section padding-default">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-team-cards">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {/* ✅ TITLE */}
                <div className="col-12 col-xl-4 mxd-team-cards__item mxd-grid-item no-margin no-padding-bottom animate-card-3">
                  <div className="mxd-team-cards__h2-block left-block">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12">
                          <div className="mxd-section-title__title">
                            <h2 className="reveal-type">{title}</h2>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="mxd-section-title__descr">
                            <p className="anim-uni-in-up">{description}</p>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="mxd-section-title__controls anim-uni-in-up">
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

                {/* ✅ FIRST 2 MEMBERS */}
                <div className="col-12 col-xl-8">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      {firstRow.map((member, i) => (
                        <div key={i} className="col-12 col-md-6 mxd-team-cards__item mxd-grid-item no-margin-desktop padding-bottom-mobile padding-bottom-desktop animate-card-3">
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

                {/* ✅ 3-COLUMN GRID + CAREER AUTO INSERT */}
                {rows.map((row, r) => (
                  <div key={r} className="col-12">
                    <div className="row g-0">
                      {row.map((item, i) =>
                        item.isCareer ? (
                          <div key={i} className="col-12 col-xl-4 mxd-team-cards__item mxd-grid-item animate-card-3">
                            <div className="mxd-team-cards__media no-margin overflow-visible anim-uni-in-up">
                              <Link className="mxd-team-cards__career" href="/contact">
                                <div className="career__image">
                                  <Image src="https://dummyimage.com/600x600/5d5d5d/838383" width={600} height={600} alt="Career" />
                                </div>
                                <div className="career__caption">
                                  <p className="mxd-team-cards__name t-large t-bright t-caption">Maybe you?</p>
                                  <p className="mxd-team-cards__position t-small t-medium t-140">Become a part of our team</p>
                                </div>
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <div key={i} className="col-12 col-md-6 col-xl-4 mxd-team-cards__item mxd-grid-item padding-bottom-mobile animate-card-3">
                            <div className="mxd-team-cards__media anim-uni-in-up">
                              <div className="mxd-team-cards__photo">
                                <Image src={item.image} width={800} height={920} alt={item.name} />
                              </div>
                              <div className="mxd-team-cards__socials">
                                {item.socials.map((s, j) => (
                                  <Link key={j} className="btn btn-anim tag tag-default tag-permanent" href={s.link} target="_blank">
                                    <span className="btn-caption">{s.label}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            <div className="mxd-team-cards__info">
                              <p className="mxd-team-cards__name t-large t-bright t-caption">{item.name}</p>
                              <p className="mxd-team-cards__position t-small t-medium t-140">{item.position}</p>
                            </div>
                          </div>
                        )
                      )}
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
