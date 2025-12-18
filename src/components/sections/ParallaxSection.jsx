"use client";

export default function ParallaxSection({sectionClass = "mxd-section", containerClass = "mxd-container", dividerClass = "mxd-divider", imageClass = "", children}) {
  let content = (
    <>
      {children}
      <div className={dividerClass || undefined}>
        <div className={`${imageClass} parallax-img`} />
      </div>
    </>
  );

  if (containerClass) {
    content = <div className={containerClass}>{content}</div>;
  }

  if (sectionClass) {
    content = <div className={sectionClass}>{content}</div>;
  }

  return content;
}
