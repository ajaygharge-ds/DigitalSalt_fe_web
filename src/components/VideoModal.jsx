"use client";

import {useLayoutEffect, useRef} from "react";
// import gsap from "gsap";

export default function VideoModal({isOpen, onClose, videoUrl}) {
  // Inline styles (no Tailwind or Bootstrap)
  const overlayStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.75)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  };

  const contentStyle = {
    position: "relative",
    background: "#000",
    width: "90%",
    maxWidth: "900px",
    aspectRatio: "16 / 9",
    borderRadius: "12px",
    overflow: "hidden",
  };

  const closeBtnStyle = {
    position: "absolute",
    top: "10px",
    right: "12px",
    fontSize: "26px",
    background: "transparent",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    zIndex: 2,
  };

  // GSAP animation + Lenis scroll lock
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  useLayoutEffect(() => {
    if (!isOpen || typeof window === "undefined") return;

    let ctx;
    let gsap;

    (async () => {
      gsap = (await import("gsap")).default;

      document.body.style.overflow = "hidden";
      window.lenis?.stop();

      ctx = gsap.context(() => {
        gsap.fromTo(overlayRef.current, {opacity: 0}, {opacity: 1, duration: 0.3, ease: "power2.out"});

        gsap.fromTo(contentRef.current, {scale: 0.9, opacity: 0}, {scale: 1, opacity: 1, duration: 0.35, ease: "power3.out"});
      });
    })();

    return () => {
      document.body.style.overflow = "";
      window?.lenis?.start();
      ctx?.revert();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isLocalVideo = videoUrl?.endsWith(".mp4") || videoUrl?.endsWith(".webm");
  return (
    <div ref={overlayRef} style={overlayStyle} onClick={onClose}>
      <div ref={contentRef} style={contentStyle}>
        {/* <ReactPlayer url={videoUrl} playing width="100%" height="100%" /> */}
        {isLocalVideo ? (
          <video src={videoUrl} controls autoPlay playsInline style={{width: "100%", height: "100%"}} />
        ) : (
          <iframe src={videoUrl} width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Video" />
        )}

        <button style={closeBtnStyle} onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}
