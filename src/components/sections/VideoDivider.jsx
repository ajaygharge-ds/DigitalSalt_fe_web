"use client";

import RotatingButton from "@/components/RotatingButton";
import {useState} from "react";
import VideoModal from "../VideoModal";

export default function VideoDivider({
  mp4Src = "/video/1920x1080_video.mp4",
  webmSrc = "/video/1920x1080_video.webm",
  ogvSrc = "/video/1920x1080_video.ogv",
  poster = "https://dummyimage.com/1920x1080/4d4d4d/838383",

  sectionClass = "padding-grid-pre-mtext",

  showTrigger = false,
  triggerHref = "#",
  triggerText = "Play showreel * Play showreel * ",
  triggerImage = "https://dummyimage.com/100x100/5d5d5d/838383",
  triggerVariant = "btn-rotating-blur-outline showreel-trigger",

  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ",
}) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className={`mxd-section ${sectionClass}`}>
        <div className="mxd-container">
          <div className="mxd-divider">
            <div className="mxd-divider__video">
              <video className="video parallax-video" preload="auto" autoPlay loop muted poster={poster}>
                <source type="video/mp4" src={mp4Src} />
                <source type="video/webm" src={webmSrc} />
                <source type="video/ogv" src={ogvSrc} />
              </video>
            </div>
            {showTrigger && (
              <div className="mxd-divider__trigger">
                <span onClick={() => setModalOpen(true)} style={{display: "block", borderRadius: "50%"}}>
                  <RotatingButton text={triggerText} image={triggerImage} sizeClass="btn-rotating-160" variant={triggerVariant} />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <VideoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} videoUrl={videoUrl} />;
    </>
  );
}
