import Link from "next/link";

export default function ShowcaseStackSection({showcases = []}) {
  return (
    <div className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <div className="stack-wrapper mxd-hero-02-stack">
              <div className="stack-offset" />
              <div className="services-stack">
                {showcases.map((item, index) => (
                  <div className="stack-item" key={index}>
                    <div className={`mxd-services-stack__inner showcase-inner ${item.bg}`}>
                      <div className="mxd-services-stack__title showcase-title">
                        <h3 className={item.opposite ? "opposite" : ""}>{item.title}</h3>
                        <span className={`mxd-services-stack__number ${item.numberClass}`}>{item.number}</span>
                      </div>

                      <div className="mxd-services-stack__info showcase-info">
                        <p className={item.opposite ? "t-opposite" : ""}>{item.description}</p>
                      </div>

                      <div className="mxd-services-stack__works">
                        {item.works.map((work, i) => (
                          <Link key={i} className="mxd-services-stack__work" href={work.href || "/project-details"}>
                            <img className="mxd-services-stack__preview" src={work.image} alt="" />
                            <div className="mxd-services-stack__tags tags-absolute">
                              {work.tags.map((tag, j) => (
                                <span key={j} className="tag tag-default tag-permanent">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="mxd-preview-hover">
                              <i className="mxd-preview-hover__icon icon-small">
                                <img src="img/icons/icon-eye.svg" alt="Eye Icon" />
                              </i>
                            </div>
                          </Link>
                        ))}
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
  );
}
