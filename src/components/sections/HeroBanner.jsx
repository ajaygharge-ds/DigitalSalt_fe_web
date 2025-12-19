"use client";

import {useState} from "react";
import CommonIcon from "../common/icons/CommonIcon";
import RotatingButton from "../RotatingButton";
import VideoModal from "../VideoModal";
import TitleMarquee from "./TitleMarquee";
import Link from "next/link";
import Image from "next/image";

export default function HeroBanner({
  images = [
    {
      src: "/img/hero/banner-icon-1.webp",
      animationClass: "mxd-pulse",
      wrapperClass: "image-01",
    },
    {
      src: "/img/hero/banner-icon-2.webp",
      animationClass: "mxd-move",
      wrapperClass: "image-02",
    },
    {
      src: "/img/hero/banner-icon-3.webp",
      animationClass: "mxd-rotate",
      wrapperClass: "image-03",
    },
  ],

  titleRow1 = ["Design,", "tech"],
  titleRow2 = ["icon", "and some magic"],

  description = "We are a creative digital agency specializing in innovative design and cutting-edge development.",

  rotatingButton = {
    href: "#projects",
    text: "Scroll for More * Scroll for More * Scroll for More * ",
    sizeClass: "btn-rotating-120-160",
    image: "/img/icons/rotating-icon.webp",
  },

  socials = [
    {name: "Dribbble", href: "https://dribbble.com/"},
    {name: "Behance", href: "https://www.behance.net/"},
    {name: "Instagram", href: "https://www.instagram.com/"},
  ],

  video = {
    poster: "https://dummyimage.com/540x310/5d5d5d/737373",
    mp4: "video/540x310_video.mp4",
    webm: "video/540x310_video.webm",
    ogv: "video/540x310_video.ogv",
    vimeo: "https://vimeo.com/65036292",
    youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=WyWTRqbbbrVJitOY",
    // vimeo: "videoUrl=https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const videoUrl = video.youtube;
  return (
    <>
      <div className="mxd-section mxd-hero-section mxd-hero-fullheight">
        <div className="mxd-hero-01">
          <div className="mxd-hero-01__wrap">
            <div className="mxd-hero-01__top">
              <div className="mxd-hero-01__title-wrap">
                <div className="mxd-hero-01__images mxd-floating-img">
                  {images.map((img, index) => (
                    <div key={index} className={`hero-01-image ${img.wrapperClass} mxd-floating-img__item loading__fade`}>
                      <Image className={img.animationClass} src={img.src} width={700} height={687} alt="Hero Image" />
                    </div>
                  ))}
                </div>

                <TitleMarquee />

                <h1 className="hero-01-title">
                  <span className="hero-01-title__row loading__item">
                    <em className="hero-01-title__item">{titleRow1[0]}</em>
                    <em className="hero-01-title__item title-item-transparent">{titleRow1[1]}</em>
                  </span>

                  <span className="hero-01-title__row loading__item">
                    <em className="hero-01-title__item title-item-image">{titleRow2[0] === "icon" ? <CommonIcon /> : titleRow2[0]}</em>
                    <em className="hero-01-title__item">{titleRow2[1]}</em>
                  </span>
                </h1>
              </div>
            </div>

            <div className="mxd-hero-01__bottom">
              <div className="mxd-hero-01__data-wrap">
                <div className="mxd-hero-01__dash-line dash-line loading__fade" />

                <div className="mxd-hero-01__data-btn loading__fade">
                  <RotatingButton href={rotatingButton.href} text={rotatingButton.text} sizeClass={rotatingButton.sizeClass} variant="" image={rotatingButton.image} />
                </div>

                <div className="mxd-hero-01__data-descr loading__fade">
                  <p className="t-bright">{description}</p>
                </div>

                <div className="mxd-hero-01__data-socials loading__fade">
                  <ul>
                    {socials.map((item, index) => (
                      <li key={index}>
                        <CommonIcon />
                        <Link href={item.href} target="_blank">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mxd-hero-01__video-wrap loading__item">
                <video className="mxd-hero-01__video" preload="auto" autoPlay loop muted poster={video.poster}>
                  <source type="video/mp4" src={video.mp4} />
                  <source type="video/webm" src={video.webm} />
                  <source type="video/ogv" src={video.ogv} />
                </video>
                <div className="mxd-hero-01__video-btn">
                  <button onClick={() => setModalOpen(true)} className="btn btn-round btn-round-medium btn-accent slide-right anim-no-delay showreel-trigger">
                    <i className="ph-fill ph-play" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} videoUrl={videoUrl} />
    </>
  );
}
