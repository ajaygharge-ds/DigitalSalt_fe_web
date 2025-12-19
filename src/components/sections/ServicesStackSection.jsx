import Image from "next/image";
import Link from "next/link";

export default function ServicesStackSection({services = []}) {
  return (
    <div className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <div className="stack-wrapper in-content-stack">
              <div className="stack-offset" />
              <div className="services-stack">
                {services.map((item, index) => (
                  <div className="stack-item" key={index}>
                    <div className={`mxd-services-stack__inner justify-between ${item.bg}`}>
                      {/* BUTTON */}
                      <div className="mxd-services-stack__controls">
                        <Link href={item.href || "/"} className={`btn btn-round btn-round-large ${item.btnClass} slide-right-up anim-no-delay`}>
                          <i className="ph ph-arrow-up-right" />
                        </Link>
                      </div>

                      {/* TITLE */}
                      <div className="mxd-services-stack__title width-60">
                        <h3 className={item.opposite ? "opposite" : ""}>{item.title}</h3>
                      </div>

                      {/* INFO */}
                      <div className="mxd-services-stack__info width-60">
                        <div className="mxd-services-cards__tags">
                          {item.tags.map((tag, i) => (
                            <span key={i} className={`tag tag-default ${item.tagStyle}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className={`t-small-mobile ${item.opposite ? "t-opposite" : ""}`}>{item.description}</p>
                      </div>

                      {/* IMAGE */}
                      <div className="services-stack__image">
                        <Image className="service-img service-img-s" src={item.imageSmall} width={800} height={800} alt="" />
                        <Image className="service-img service-img-m" src={item.imageLarge} width={1000} height={1000} alt="" />
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
