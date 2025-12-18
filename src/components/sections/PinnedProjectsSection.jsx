import Link from "next/link";

export default function PinnedProjectsSection({
  id = "projects",

  // ✅ SECTION TITLE
  title = (
    <>
      Featured
      <br />
      projects
    </>
  ),
  description = (
    <>
      Explore a selection of projects blending
      <br />
      creativity with practical design
    </>
  ),
  buttonText = "All Portfolio",
  buttonHref = "works-masonry",

  // ✅ PROJECT LIST
  projects = [
    {
      previewClass: "preview-image-1",
      tags: ["UI/UX", "Web design", "Illustrations"],
      titleBold: "Creative studio",
      titleText: "template for modern agencies",
      href: "project-details",
    },
    {
      previewClass: "preview-image-2",
      tags: ["Sora", "AI", "Editorial"],
      titleBold: "Interactive concept",
      titleText: "powered by AI",
      href: "project-details",
    },
    {
      previewClass: "preview-image-3",
      tags: ["UI/UX", "Design", "Android"],
      titleBold: "Mobile app design",
      titleText: "for a cross-platform solution",
      href: "project-details",
    },
    {
      previewClass: "preview-image-4",
      tags: ["Brand identity", "Style guides"],
      titleBold: "NFT project",
      titleText: "branding",
      href: "project-details",
    },
    {
      previewClass: "preview-image-5",
      tags: ["Illustrations", "Design", "Packaging"],
      titleBold: "Illustrations set",
      titleText: "developed for digital and print use.",
      href: "project-details",
    },
  ],
}) {
  return (
    <div id={id} className="mxd-section padding-pre-stack">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-pinned-projects">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {/* ✅ LEFT STATIC SECTION */}
                <div className="col-12 col-xl-5 mxd-pinned-projects__static">
                  <div className="mxd-pinned-projects__static-inner no-margin">
                    <div className="mxd-section-title no-margin-desktop">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__title anim-uni-in-up">
                              <h2 className="reveal-type">{title}</h2>
                            </div>
                          </div>

                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__descr anim-uni-in-up">
                              <p>{description}</p>
                            </div>
                          </div>

                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__controls anim-uni-in-up">
                              <Link href={buttonHref} className="btn btn-anim btn-default btn-outline slide-right-up">
                                <span className="btn-caption">{buttonText}</span>
                                <i className="ph-bold ph-arrow-up-right" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ✅ RIGHT SCROLL PROJECT LIST */}
                <div className="col-12 col-xl-7 mxd-pinned-projects__scroll">
                  <div className="mxd-pinned-projects__scroll-inner mxd-grid-item no-margin">
                    {projects.map((project, index) => (
                      <div className="mxd-project-item" key={index}>
                        <Link className="mxd-project-item__media anim-uni-in-up" href={project.href}>
                          <div className={`mxd-project-item__preview ${project.previewClass} parallax-img-small`} />
                          <div className="mxd-project-item__tags">
                            {project.tags.map((tag, i) => (
                              <span key={i} className="tag tag-default tag-permanent">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </Link>

                        <div className="mxd-project-item__promo">
                          <div className="mxd-project-item__name">
                            <Link className="anim-uni-in-up" href={project.href}>
                              <span>{project.titleBold}</span> {project.titleText}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
