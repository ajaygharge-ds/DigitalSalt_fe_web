"use client";

import Link from "next/link";
import {useLayoutEffect, useRef, useState} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {usePathname} from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const [theme, setTheme] = useState("light");

  useLayoutEffect(() => {
    const cookieTheme = document.cookie
      .split("; ")
      .find((row) => row.startsWith("theme="))
      ?.split("=")[1];
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    const currentTheme = cookieTheme || systemTheme;

    setTheme(currentTheme);
    applyTheme(currentTheme);
  }, []);

  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("color-scheme", theme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    applyTheme(newTheme);

    // Store in cookie (1 year)
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
  };

  const headerRef = useRef(null);
  const pathname = usePathname();
  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 10,
        onUpdate: (self) => {
          header.classList.toggle("is-hidden", self.scroll() > 10);
        },
      });
    }, headerRef);

    return () => {
      ctx.revert();
    };
  }, [pathname]);

  return (
    <header ref={headerRef} id="header" className="mxd-header">
      <div className="mxd-header__logo loading__fade">
        <Link href="/" className="mxd-logo">
          <svg className="mxd-logo__image" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 56 56" style={{enableBackground: "new 0 0 56 56"}} xmlSpace="preserve">
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html: "\n              .mxd-logo__bg{fill:var(--base-opp);}\n              .mxd-logo__cat{clip-path:url(#mxd-logo__id);fill:var(--base);}\n            ",
              }}
            />
            <path className="mxd-logo__bg" d="M56,28c0,11.1-2.9,28-28,28S0,39.1,0,28S2.9,0,28,0S56,16.9,56,28z" />
            <g>
              <defs>
                <path id="mxd-logo__clippath" d="M28,0C2.9,0,0,16.9,0,28s2.9,28,28,28s28-16.9,28-28S53.1,0,28,0z" />
              </defs>
              <clipPath id="mxd-logo__id">
                <use xlinkHref="#mxd-logo__clippath" style={{overflow: "visible"}} />
              </clipPath>
              <path
                className="mxd-logo__cat"
                d="M33.6,34.5h0.9
          c0.5,0,0.9,0.4,0.9,0.9v3.7c0,0.5-0.4,0.9-0.9,0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-3.7C32.7,34.9,33.1,34.5,33.6,34.5z M20.5,37.3
          v1.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9V37.3L20.5,37.3z
          M39.2,21.5v0.9c0,0.5-0.4,0.9-0.9,0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-0.9c0-0.5,0.4-0.9,0.9-0.9h0.9C38.8,20.5,39.2,21,39.2,21.5z
          M34.5,26.1h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v0.9C33.6,25.7,34,26.1,34.5,26.1z
          M28,26.1h-4.7c-0.5,0-0.9,0.4-0.9,0.9V28c0,0.5,0.4,0.9,0.9,0.9h9.3c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9H28L28,26.1
          z M19.6,24.3v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9C20,23.3,19.6,23.8,19.6,24.3z
          M16.8,21.5v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9C17.2,20.5,16.8,21,16.8,21.5z
          M14,26.1v4.7c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-6.5c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9V26.1
          L14,26.1z M11.2,34.5v1.9c0,0.5-0.4,0.9-0.9,0.9H7.5c-0.5,0-0.9,0.4-0.9,0.9v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9,0.4,0.9,0.9
          V42c0,0.5-0.4,0.9-0.9,0.9H7.5c-0.5,0-0.9,0.4-0.9,0.9v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9,0.4,0.9,0.9V56
          c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-6.5c0-0.5,0.4-0.9,0.9-0.9h3.7c0.5,0,0.9-0.4,0.9-0.9v-0.9
          c0-0.5-0.4-0.9-0.9-0.9h-3.7c-0.5,0-0.9-0.4-0.9-0.9v-6.5c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9-0.4,0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9
          h-0.9c-0.5,0-0.9,0.4-0.9,0.9L11.2,34.5L11.2,34.5z M42,26.1v-1.9c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v6.5
          c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9V26.1L42,26.1z M49.5,39.2v-0.9c0-0.5-0.4-0.9-0.9-0.9h-2.8
          c-0.5,0-0.9-0.4-0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v3.7c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9,0.4,0.9,0.9
          v6.5c0,0.5-0.4,0.9-0.9,0.9h-3.7c-0.5,0-0.9,0.4-0.9,0.9v0.9c0,0.5,0.4,0.9,0.9,0.9h3.7c0.5,0,0.9,0.4,0.9,0.9V56
          c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-9.3c0-0.5,0.4-0.9,0.9-0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9
          c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-0.9c0-0.5,0.4-0.9,0.9-0.9h0.9C49,40.1,49.5,39.7,49.5,39.2L49.5,39.2z"
              />
            </g>
          </svg>
          <span className="mxd-logo__text">
            rayo
            <br />
            template
          </span>
        </Link>
      </div>
      <div className="mxd-header__controls loading__fade">
        <button id="color-switcher" className="mxd-color-switcher" type="button" role="switch" aria-label="light/dark mode" aria-checked={theme === "dark"} onClick={toggleTheme}>
          {theme === "light" ? <i className="ph-bold ph-moon-stars"></i> : <i className="ph-bold ph-sun-horizon"></i>}
        </button>
        <Link className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right-up" href="/contact">
          <span className="btn-caption">Say Hello</span>
          <i className="ph-bold ph-arrow-up-right" />
        </Link>
      </div>
    </header>
  );
}
