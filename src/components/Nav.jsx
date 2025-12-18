"use client";

import React, {useLayoutEffect, useRef, useState} from "react";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import gsap from "gsap";
import {Flip} from "gsap/Flip";

gsap.registerPlugin(Flip);

const menuItems = [
  {
    label: "Home",
    href: "/",
    subItems: [
      {label: "Main home", href: "/"},
      {label: "Digital agency", href: "/digital-agency"},
      {label: "Web agency", href: "/web-agency"},
      // {label: "Software development company", href: "/software-development"},
    ],
  },
  {
    label: "Works",
    href: "",
    subItems: [
      {label: "Portfolio", href: "/portfolio"},
      {label: "Works masonry", href: "/works-masonry"},
      {label: "Project details", href: "/project-details"},
    ],
  },
  {
    label: "Pages",
    href: "",
    subItems: [
      {label: "About us", href: "/about-us"},
      {label: "Our team", href: "/team"},
      {label: "Services", href: "/services"},
      // {label: "FAQ page", href: "/faq"},
      {label: "404 error page", href: "/404"},
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const navRef = useRef(null);

  const accordionRefs = useRef([]);
  const [openIndex, setOpenIndex] = useState(null);

  const animateAccordion = (submenu, open, onDone) => {
    if (!submenu) {
      if (onDone) onDone();
      return;
    }

    // kill any running tweens on this element
    gsap.killTweensOf(submenu);

    if (open) {
      // prepare for open
      submenu.style.display = "block";
      // force layout read
      const height = submenu.scrollHeight + "px";
      // start from 0 -> to measured height
      gsap.fromTo(
        submenu,
        {height: 0, opacity: 0},
        {
          height,
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
          onComplete: () => {
            submenu.style.height = "auto"; // let it become auto after animation
            if (typeof onDone === "function") onDone();
          },
        }
      );
    } else {
      // prepare for close: measure current height
      const height = submenu.scrollHeight + "px";
      gsap.fromTo(
        submenu,
        {height, opacity: 1},
        {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: () => {
            submenu.style.display = "none";
            submenu.style.height = "0px";
            if (typeof onDone === "function") onDone();
          },
        }
      );
    }
  };

  // toggleAccordion(index) — sequences closing current then opening new
  const toggleAccordion = (index) => {
    const nav = navRef.current;
    if (!nav) return;

    const items = Array.from(nav.querySelectorAll(".main-menu__item"));
    const current = items[index];
    const submenu = current?.querySelector(".submenu");
    const currentlyOpenIndex = items.findIndex((it) => it.classList.contains("open"));
    const isSame = currentlyOpenIndex === index;
    const isOpen = current?.classList.contains("open");

    // If clicking the already open item -> just close it
    if (isSame && isOpen) {
      // close it and remove class onComplete
      animateAccordion(submenu, false, () => {
        current.classList.remove("open");
      });
      return;
    }

    // If another item is open, close it first, then open the clicked one
    if (currentlyOpenIndex !== -1 && currentlyOpenIndex !== index) {
      const prevItem = items[currentlyOpenIndex];
      const prevSub = prevItem.querySelector(".submenu");

      // close previous, then open new
      animateAccordion(prevSub, false, () => {
        prevItem.classList.remove("open");

        // open the new one
        if (submenu) {
          animateAccordion(submenu, true, () => {
            // mark as open after animation completes
            current.classList.add("open");
          });
        }
      });

      return;
    }

    // If none open -> just open the clicked one
    if (!isOpen && submenu) {
      animateAccordion(submenu, true, () => {
        current.classList.add("open");
      });
    }
  };
  const resetAccordion = () => {
    const nav = navRef.current;
    if (!nav) return;

    const items = nav.querySelectorAll(".main-menu__item");
    items.forEach((item) => {
      const submenu = item.querySelector(".submenu");
      item.classList.remove("open");

      if (submenu) {
        gsap.set(submenu, {height: 0});
        submenu.style.display = "none";
      }
    });
  };
  const toggleMenuRef = useRef(null);

  // const handleLinkClick = () => {
  //   if (toggleMenuRef.current) toggleMenuRef.current();
  // };

  const handleRouteChange = (e, href) => {
    e.preventDefault();
    if (toggleMenuRef.current) toggleMenuRef.current();
    setTimeout(() => {
      router.push(href);
    }, 900);
  };

  // =====================================================================================
  // ⭐ MAIN MENU + HAMBURGER HANDLER (GSAP + FLIP)
  // =====================================================================================
  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const hamburger = nav.querySelector(".mxd-nav__hamburger");
    const lines = nav.querySelectorAll(".hamburger__line");
    const menuContain = nav.querySelector(".mxd-menu__contain");
    const flipItem = nav.querySelector(".hamburger__base");
    const menuWrap = nav.querySelector(".mxd-menu__wrapper");
    const menuBase = nav.querySelector(".mxd-menu__base");
    const menuItemsEl = nav.querySelectorAll(".main-menu__item");
    const videoEl = nav.querySelector(".menu-promo__video");
    const fadeEl = nav.querySelectorAll(".menu-fade-in");

    const flip = (forward) => {
      const state = Flip.getState(flipItem);
      forward ? menuContain.appendChild(flipItem) : hamburger.appendChild(flipItem);
      Flip.from(state, {duration: 0.8, ease: "power4.inOut"});
    };

    const tl = gsap.timeline({paused: true});
    tl.set(menuWrap, {display: "flex"});

    tl.from(menuBase, {
      opacity: 0,
      duration: 0.6,
      ease: "none",
      onStart: () => flip(true),
    });

    tl.to(lines[0], {y: 5}, "<");
    tl.to(lines[1], {y: -5}, "<");
    tl.to(lines[0], {rotate: 45}, 0.2);
    tl.to(lines[1], {rotate: -45}, 0.2);

    tl.add("fade");
    tl.from(
      menuItemsEl,
      {
        opacity: 0,
        yPercent: 50,
        duration: 0.2,
        stagger: 0.1,
        onReverseComplete: () => flip(false),
      },
      "fade"
    );

    tl.from(videoEl, {opacity: 0, yPercent: 20, duration: 0.2}, "fade");
    tl.from(fadeEl, {opacity: 0, duration: 0.3});

    toggleMenuRef.current = () => {
      const isOpen = hamburger.classList.contains("nav-open");
      const header = document.querySelector(".mxd-header");

      if (isOpen) {
        hamburger.classList.remove("nav-open");
        tl.reverse();

        setTimeout(resetAccordion, 500);
        setTimeout(() => header?.classList.remove("menu-is-visible"), 900);
      } else {
        hamburger.classList.add("nav-open");
        tl.play();
        header?.classList.add("menu-is-visible");
      }
    };

    const clickHandler = (e) => {
      e.preventDefault();
      if (toggleMenuRef.current) toggleMenuRef.current();
    };

    hamburger.addEventListener("click", clickHandler);
    menuBase.addEventListener("click", clickHandler);

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && toggleMenuRef.current) {
        toggleMenuRef.current();
      }
    });

    return () => {
      hamburger.removeEventListener("click", clickHandler);
      menuBase.removeEventListener("click", clickHandler);
    };
  }, []);

  const isActive = (href) => pathname === href;

  return (
    <nav className="mxd-nav__wrap" data-lenis-prevent="" ref={navRef}>
      <div className="mxd-nav__contain loading__fade">
        <Link href="" className="mxd-nav__hamburger">
          <div className="hamburger__base" />
          <div className="hamburger__line" />
          <div className="hamburger__line" />
        </Link>
      </div>
      <div className="mxd-menu__wrapper">
        <div className="mxd-menu__base" />
        <div className="mxd-menu__contain">
          <div className="mxd-menu__inner">
            <div className="mxd-menu__left">
              <p className="mxd-menu__caption menu-fade-in">
                🦄 Innovative design
                <br />
                and cutting-edge development
              </p>
              <div className="main-menu">
                <nav className="main-menu__content">
                  <ul id="main-menu" className="main-menu__accordion">
                    {menuItems.map((item, index) => {
                      return (
                        <li key={index} className="main-menu__item">
                          {item.subItems ? (
                            <>
                              <div className="main-menu__toggle" onClick={() => toggleAccordion(index)}>
                                <span className="main-menu__link btn btn-anim">
                                  <span className="btn-caption">{item.label}</span>
                                </span>
                                <MenuIcon />
                              </div>
                            </>
                          ) : (
                            <Link className="main-menu__link btn btn-anim" href={item.href} onClick={(e) => handleRouteChange(e, item.href)}>
                              <span className="btn-caption">{item.label}</span>
                            </Link>
                          )}

                          {/* Sub Menu */}
                          {item.subItems && (
                            <>
                              <ul
                                className="submenu"
                                style={{
                                  height: "0px",
                                  display: "none",
                                  transition: "max-height 0.6s ease",
                                }}
                              >
                                {item.subItems.map((sub, sIndex) => (
                                  <li className={`submenu__item ${isActive(sub.href) ? "active" : ""}`} key={sIndex}>
                                    <Link href={sub.href} onClick={(e) => handleRouteChange(e, sub.href)}>
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="mxd-menu__right">
              <div className="menu-promo">
                <div className="menu-promo__content">
                  <p className="menu-promo__caption menu-fade-in">
                    👋 Nice to see you!
                    <br />
                    I'm Alex Walker, digital designer and illustrator based in Odesa, Ukraine
                  </p>
                  <div className="menu-promo__video">
                    <video className="menu-video" id="inner-video" preload="auto" autoPlay loop muted poster="https://dummyimage.com/540x310/5d5d5d/737373">
                      <source type="video/mp4" src="video/540x310_video.mp4" />
                      <source type="video/webm" src="video/540x310_video.webm" />
                      <source type="video/ogv" src="video/540x310_video.ogv" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="mxd-menu__data menu-fade-in">
              <p className="t-xsmall">
                Made with <i className="ph-fill ph-heart t-additional" /> by{" "}
                <Link className="no-effect" href="https://1.envato.market/EKA9WD" target="_blank">
                  Mix_Design
                </Link>
              </p>
              <p className="t-xsmall">
                <i className="ph ph-copyright" /> 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} version="1.1" viewBox="0 0 20 20">
      <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
    </svg>
  );
}
