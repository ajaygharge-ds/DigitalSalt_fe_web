"use client";

import Link from "next/link";

export default function SocialLinksLines({links = []}) {
  return (
    <div className="mxd-section padding-pre-title">
      <div className="mxd-container">
        <div className="mxd-block">
          <div className="mxd-links-lines">
            {links.map((item, index) => (
              <div key={index} className="mxd-links-lines__item">
                <div className="mxd-links-lines__divider anim-uni-in-up" />

                <Link className="mxd-links-lines__link anim-uni-in-up" href={item.url} target="_blank" rel="noopener noreferrer">
                  <h6 className="mxd-links-lines__title">{item.title}</h6>

                  <div className="mxd-links-lines__icon">
                    <i className="ph ph-arrow-up-right" />
                  </div>
                </Link>

                <div className="mxd-links-lines__divider anim-uni-in-up" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
