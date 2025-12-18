"use client";

import {useLayoutEffect, useRef, useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Link from "next/link";
import CommonIcon from "./common/icons/CommonIcon";
import ScrollTop from "./ScrollTop";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");
  // -----------------------------
  //  MAILCHIMP SUBMIT HANDLER
  // -----------------------------
  const mailchimpSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const mailchimpURL = "https://club.us10.list-manage.com/subscribe/post-json?u=e8d650c0df90e716c22ae4778&id=54a7906900&c=?";

    try {
      const url = `${mailchimpURL}&EMAIL=${encodeURIComponent(email)}`;

      await fetch(url, {
        method: "GET",
        mode: "no-cors",
      });

      setStatus("success");
      setMessage("Thank you! You have been subscribed.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  useLayoutEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      const toBottomEl = gsap.utils.toArray(".anim-top-to-bottom", footerRef.current);
      const triggerEl = footerRef.current.querySelector(".fullwidth-text__tl-trigger");
      toBottomEl.forEach((element) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: triggerEl,
              start: "top 99%",
              end: "top 24%",
              scrub: true,
            },
          })
          .fromTo(
            element,
            {
              transform: "translate3d(0, -100%, 0)",
            },
            {
              transform: "translate3d(0, 0, 0)",
            }
          );
      });
      const animateCard3 = gsap.utils.toArray(".animate-card-3");
      gsap.set(animateCard3, {y: 50, opacity: 0});
      ScrollTrigger.batch(animateCard3, {
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

      //   ScrollTrigger.addEventListener("refreshInit", () => gsap.set(animateCard3, {y: 0, opacity: 1}));
    }, footerRef);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <footer ref={footerRef} id="mxd-footer" className="mxd-footer">
        <div className="mxd-footer__text-wrap">
          <div className="fullwidth-text__tl-trigger" />
          <div className="mxd-footer__fullwidth-text anim-top-to-bottom">
            <svg
              className="mxd-footer__svg-v2"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 400.26 72"
              style={{enableBackground: "new 0 0 400.26 72"}}
              xmlSpace="preserve"
            >
              <path
                d="M4.93,56V25.93H0V16h10.13v7.73h2.8c1.11-2.67,2.82-4.69,5.13-6.07c2.31-1.38,4.96-2.07,7.93-2.07h3.33v8.53h-3.8
      c-3.65,0-6.36,1.04-8.13,3.13c-1.78,2.09-2.67,4.87-2.67,8.33V56H4.93z M46.53,56.73c-4.67,0-8.32-1.13-10.97-3.4
      c-2.65-2.27-3.97-5.27-3.97-9c0-3.91,1.34-6.93,4.03-9.07c2.69-2.13,6.57-3.2,11.63-3.2h12.2v-1.6c0-4.89-2.84-7.33-8.53-7.33
      c-4.84,0-7.76,1.73-8.73,5.2h-9.93c0.84-4.27,2.87-7.52,6.07-9.77c3.2-2.24,7.4-3.37,12.6-3.37c5.87,0,10.33,1.32,13.4,3.97
      c3.07,2.64,4.6,6.5,4.6,11.57v15.33h4.73V56h-10.2v-6.4h-2.8c-1.38,2.27-3.23,4.02-5.57,5.27C52.77,56.11,49.91,56.73,46.53,56.73z
      M48,49.07c2.18,0,4.13-0.41,5.87-1.23c1.73-0.82,3.1-1.93,4.1-3.33s1.5-2.97,1.5-4.7v-0.93H47.8c-4.49,0-6.73,1.67-6.73,5
      c0,1.65,0.61,2.92,1.83,3.83C44.12,48.61,45.82,49.07,48,49.07z M78.93,72v-7.93H88l3.4-8.27L73.93,16H84.4l12,28.33h0.33L108.33,16
      h10.07l-17.13,40l-3.47,8.27c-1.07,2.44-2.23,4.34-3.5,5.7C93.03,71.32,91.02,72,88.27,72H78.93z M140.8,56.8
      c-4.31,0-8.06-0.86-11.23-2.57c-3.18-1.71-5.64-4.12-7.4-7.23c-1.76-3.11-2.63-6.78-2.63-11c0-4.27,0.88-7.96,2.63-11.07
      c1.76-3.11,4.23-5.51,7.43-7.2c3.2-1.69,6.93-2.53,11.2-2.53c4.36,0,8.1,0.84,11.23,2.53c3.13,1.69,5.57,4.09,7.3,7.2
      c1.73,3.11,2.6,6.8,2.6,11.07c0,4.22-0.87,7.9-2.6,11.03c-1.73,3.13-4.18,5.54-7.33,7.23C148.84,55.96,145.11,56.8,140.8,56.8z
      M140.8,48.13c3.55,0,6.31-1.08,8.27-3.23c1.96-2.16,2.93-5.12,2.93-8.9c0-3.82-0.98-6.8-2.93-8.93c-1.96-2.13-4.71-3.2-8.27-3.2
      c-3.6,0-6.39,1.07-8.37,3.2c-1.98,2.13-2.97,5.09-2.97,8.87c0,3.82,0.99,6.81,2.97,8.97C134.41,47.06,137.2,48.13,140.8,48.13z
      M185.6,56.8c-5.78,0-10.33-1.21-13.67-3.63c-3.33-2.42-5.13-5.81-5.4-10.17h9.67c0.31,2.09,1.27,3.63,2.87,4.63
      c1.6,1,3.91,1.5,6.93,1.5c5.11,0,7.67-1.47,7.67-4.4c0-1.24-0.39-2.2-1.17-2.87c-0.78-0.67-2.08-1.18-3.9-1.53l-8.87-1.67
      c-7.78-1.51-11.67-5.2-11.67-11.07c0-3.78,1.49-6.79,4.47-9.03c2.98-2.24,7.07-3.37,12.27-3.37c5.29,0,9.48,1.14,12.57,3.43
      s4.81,5.52,5.17,9.7h-9.6c-0.49-2-1.41-3.46-2.77-4.37c-1.36-0.91-3.3-1.37-5.83-1.37c-2.27,0-4,0.36-5.2,1.07
      c-1.2,0.71-1.8,1.76-1.8,3.13c0,1.02,0.38,1.84,1.13,2.47c0.75,0.62,1.96,1.09,3.6,1.4l9,1.73c4.09,0.8,7.09,2.13,9,4
      c1.91,1.87,2.87,4.38,2.87,7.53c0,4.04-1.49,7.2-4.47,9.47C195.49,55.67,191.2,56.8,185.6,56.8z M221.06,56c-2.62,0-4.66-0.67-6.1-2
      c-1.45-1.33-2.17-3.36-2.17-6.07v-24.2h-7.07V16h7.13V4h9.73v12h9.67v7.73h-9.53V48.2h10.47V56H221.06z M255.86,56.73
      c-5.47,0-9.68-1.46-12.63-4.37c-2.96-2.91-4.43-6.85-4.43-11.83V16h9.93v22.53c0,3.11,0.8,5.46,2.4,7.03
      c1.6,1.58,3.98,2.37,7.13,2.37c3.33,0,5.89-0.84,7.67-2.53c1.78-1.69,2.67-4.07,2.67-7.13V16h9.93v30.07h5V56h-10.2v-6.4h-2.8
      c-1.56,2.31-3.5,4.08-5.83,5.3C262.36,56.12,259.42,56.73,255.86,56.73z M307,56.8c-4.09,0-7.56-0.86-10.4-2.57
      c-2.84-1.71-5.01-4.13-6.5-7.27c-1.49-3.13-2.23-6.79-2.23-10.97c0-4.22,0.72-7.89,2.17-11c1.44-3.11,3.53-5.52,6.27-7.23
      c2.73-1.71,6.01-2.57,9.83-2.57c3.02,0,5.62,0.57,7.8,1.7c2.18,1.13,3.84,2.77,5,4.9h0.27V0h9.93v46.07h4.93V56h-10.13v-6.4h-2.8
      c-1.42,2.31-3.31,4.09-5.67,5.33C313.11,56.18,310.28,56.8,307,56.8z M308.73,48.2c3.2,0,5.74-0.9,7.63-2.7
      c1.89-1.8,2.83-4.23,2.83-7.3v-4.4c0-3.07-0.94-5.5-2.83-7.3c-1.89-1.8-4.43-2.7-7.63-2.7c-3.56,0-6.27,1.08-8.13,3.23
      c-1.87,2.16-2.8,5.14-2.8,8.97c0,3.82,0.93,6.81,2.8,8.97C302.46,47.12,305.17,48.2,308.73,48.2z M345.86,11.6
      c-1.56,0-2.88-0.54-3.97-1.63c-1.09-1.09-1.63-2.41-1.63-3.97c0-1.56,0.54-2.88,1.63-3.97c1.09-1.09,2.41-1.63,3.97-1.63
      c1.55,0,2.88,0.54,3.97,1.63c1.09,1.09,1.63,2.41,1.63,3.97c0,1.56-0.54,2.88-1.63,3.97C348.74,11.06,347.42,11.6,345.86,11.6z
      M340.93,56V16h9.93v40H340.93z M379.13,56.8c-4.31,0-8.06-0.86-11.23-2.57c-3.18-1.71-5.64-4.12-7.4-7.23
      c-1.76-3.11-2.63-6.78-2.63-11c0-4.27,0.88-7.96,2.63-11.07c1.76-3.11,4.23-5.51,7.43-7.2c3.2-1.69,6.93-2.53,11.2-2.53
      c4.36,0,8.1,0.84,11.23,2.53c3.13,1.69,5.57,4.09,7.3,7.2c1.73,3.11,2.6,6.8,2.6,11.07c0,4.22-0.87,7.9-2.6,11.03
      c-1.73,3.13-4.18,5.54-7.33,7.23C387.17,55.96,383.44,56.8,379.13,56.8z M379.13,48.13c3.55,0,6.31-1.08,8.27-3.23
      c1.96-2.16,2.93-5.12,2.93-8.9c0-3.82-0.98-6.8-2.93-8.93c-1.96-2.13-4.71-3.2-8.27-3.2c-3.6,0-6.39,1.07-8.37,3.2
      c-1.98,2.13-2.97,5.09-2.97,8.87c0,3.82,0.99,6.81,2.97,8.97C372.74,47.06,375.53,48.13,379.13,48.13z"
              />
            </svg>
          </div>
        </div>
        <div className="mxd-footer__footer-blocks">
          <div className="footer-blocks__column animate-card-3">
            <div className="footer-blocks__card fullheight-card">
              <div className="footer-blocks__nav">
                <ul className="footer-nav">
                  <li className="footer-nav__item anim-uni-in-up">
                    <Link href="/" className="footer-nav__link btn-anim">
                      <span className="btn-caption">Home</span>
                    </Link>
                  </li>
                  <li className="footer-nav__item anim-uni-in-up">
                    <Link href="/about-us" className="footer-nav__link btn-anim">
                      <span className="btn-caption">About us</span>
                    </Link>
                  </li>
                  <li className="footer-nav__item anim-uni-in-up">
                    <Link href="/portfolio" className="footer-nav__link btn-anim">
                      <span className="btn-caption">Portfolio</span>
                    </Link>
                    <p className="footer-nav__counter">
                      <CommonIcon />
                      <span>10</span>
                    </p>
                  </li>
                  <li className="footer-nav__item anim-uni-in-up">
                    <Link href="/web-agency" className="footer-nav__link btn-anim">
                      <span className="btn-caption">Web Agency</span>
                    </Link>
                  </li>
                  <li className="footer-nav__item anim-uni-in-up">
                    <Link href="/digital-agency" className="footer-nav__link btn-anim">
                      <span className="btn-caption">Digital Agency</span>
                    </Link>
                  </li>
                  <li className="footer-nav__item anim-uni-in-up">
                    <Link href="/contact" className="footer-nav__link btn-anim">
                      <span className="btn-caption">Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-blocks__links anim-uni-in-up">
                <Link className="btn btn-line-xsmall btn-muted slide-right anim-no-delay" href="#0">
                  <span className="btn-caption">Privacy Policy</span>
                  <i className="ph ph-arrow-right" />
                </Link>
                <Link className="btn btn-line-xsmall btn-muted slide-right anim-no-delay" href="#0">
                  <span className="btn-caption">Terms &amp; conditions</span>
                  <i className="ph ph-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-blocks__column animate-card-3">
            <div className="footer-blocks__card">
              <p className="mxd-point-subtitle anim-uni-in-up">
                <CommonIcon />
                <Link href="mailto:example@example.com?subject=Message%20from%20your%20site">hello@rayostudio.com</Link>
              </p>
            </div>
            <div className="footer-blocks__card">
              <p className="mxd-point-subtitle anim-uni-in-up">
                <CommonIcon />
                <Link href="tel:+12127089400">+1 212-708-9400</Link>
              </p>
            </div>
            <div className="footer-blocks__card fill-card notify">
              <div className="footer-blocks__title anim-uni-in-up">
                <p className="footer-blocks__title-m">Subscribe to our insights:</p>
              </div>
              <div className="form-container anim-uni-in-up">
                <div className="form__reply subscription-ok">
                  <span className="reply__text">Done! Thanks for subscribing.</span>
                </div>
                <div className="form__reply subscription-error">
                  <span className="reply__text">Ooops! Something went wrong. Please try again later.</span>
                </div>
                <form className="form notify-form form-light">
                  <input type="email" placeholder="Your Email" required="" />
                  <button className="btn btn-form btn-absolute-right btn-muted slide-right-up anim-no-delay" type="submit">
                    <i className="ph ph-arrow-up-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-blocks__column animate-card-3">
            <div className="footer-blocks__card fullheight-card">
              <div className="footer-blocks__block">
                <div className="footer-blocks__title anim-uni-in-up">
                  <p className="footer-blocks__title-l">Ecosystem</p>
                </div>
                <div className="footer-blocks__socials">
                  <ul className="footer-socials">
                    <li className="footer-socials__item anim-uni-in-up">
                      <Link href="https://dribbble.com/" className="footer-socials__link" target="_blank">
                        Dribbble
                      </Link>
                    </li>
                    <li className="footer-socials__item anim-uni-in-up">
                      <Link href="https://www.behance.net/" className="footer-socials__link" target="_blank">
                        Behance
                      </Link>
                    </li>
                    <li className="footer-socials__item anim-uni-in-up">
                      <Link href="https://www.instagram.com/" className="footer-socials__link" target="_blank">
                        Instagram
                      </Link>
                    </li>
                    <li className="footer-socials__item anim-uni-in-up">
                      <Link href="https://github.com/" className="footer-socials__link" target="_blank">
                        Github
                      </Link>
                    </li>
                    <li className="footer-socials__item anim-uni-in-up">
                      <Link href="https://codepen.io/" className="footer-socials__link" target="_blank">
                        Codepen
                      </Link>
                    </li>
                    <li className="footer-socials__item anim-uni-in-up">
                      <Link href="https://www.figma.com/community" className="footer-socials__link" target="_blank">
                        Figma Community
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-blocks__links anim-uni-in-up">
                <p className="t-xsmall t-muted">
                  <Link className="no-effect" href="https://1.envato.market/EKA9WD" target="_blank">
                    Mix_Design
                  </Link>
                  <i className="ph-bold ph-copyright" />
                  2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ScrollTop />
    </>
  );
}
