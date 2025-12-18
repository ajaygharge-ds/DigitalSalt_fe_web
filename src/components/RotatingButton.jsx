"use client";

import Link from "next/link";

export default function RotatingButton({
  href = "#",
  text = "Scroll for More * Scroll for More *",
  image = null, // image url or jsx
  sizeClass = "btn-rotating-160", // like btn-rotating-120-160, btn-rotating-180 etc
  variant = "", // extra classes like ver-02, btn-rotating-blur-outline
  svgClass = "animate-rotation",
  wrapperClass = "",
}) {
  return (
    <Link href={href} className={`btn-rotating ${sizeClass} ${variant} ${wrapperClass}`}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 160 160" className={`btn-rotating__text ${svgClass}`} data-value={360}>
        <defs>
          <path id="textPath" d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z" />
        </defs>
        <g>
          <use xlinkHref="#textPath" fill="none" />
          <text>
            <textPath xlinkHref="#textPath">{text}</textPath>
          </text>
        </g>
      </svg>

      {/* Icon or Image */}
      {typeof image === "string" ? <img className="btn-rotating__image" src={image} alt="Object" /> : image}
    </Link>
  );
}
