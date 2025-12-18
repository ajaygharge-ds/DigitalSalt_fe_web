import Link from "next/link";

export default function ProjectsStackSection({projects = []}) {
  return (
    <div className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block loading__fade">
            <div className="stack-wrapper">
              <div className="stack-offset" />
              <div className="projects-stack">
                {projects.map((item, index) => (
                  <div className="stack-item" key={index}>
                    <Link href={item.href || "/project-details"} className="mxd-projects-stack__inner justify-between">
                      <div className="mxd-projects-stack__image">
                        <img className="mobile" src={item.imageMobile} alt="" />
                        <img className="desktop" src={item.imageDesktop} alt="" />
                      </div>

                      <div className="mxd-projects-stack__tags">
                        {item.tags.map((tag, i) => (
                          <span key={i} className="tag tag-default tag-outline-permanent">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mxd-projects-stack__title no-margin">
                        <h2 className="permanent-light">{item.title}</h2>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
