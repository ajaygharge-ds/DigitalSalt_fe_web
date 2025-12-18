import Link from "next/link";
import CommonIcon from "../common/icons/CommonIcon";

export default function InnerPageHeadline({
  sectionPadding = "padding-headline-pre-block", // dynamic padding class
  label,
  title,
  titleClass = "",
  description,
  showEmail = false,
  email = "hello@rayo.com",
  emailSubject = "Message from your site",
  contentCol = "col-xl-10", // default wide layout
}) {
  return (
    <div className={`mxd-section mxd-section-inner-headline ${sectionPadding}`}>
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              {/* ✅ LEFT LABEL */}
              <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                <div className="mxd-block__name name-inner-headline loading__item">
                  <p className="mxd-point-subtitle">
                    <CommonIcon />
                    <span>{label}</span>
                  </p>
                </div>
              </div>

              {/* ✅ RIGHT CONTENT */}
              <div className={`col-12 ${contentCol} mxd-grid-item no-margin`}>
                <div className="mxd-block__content">
                  <div className="mxd-block__inner-headline loading__item">
                    <h1 className={`inner-headline__title ${titleClass}`}>{title}</h1>

                    {/* ✅ OPTIONAL EMAIL CTA */}
                    {showEmail && (
                      <Link className="btn btn-line-headline slide-right-up anim-no-delay" href={`mailto:${email}?subject=${encodeURIComponent(emailSubject)}`}>
                        <span className="btn-caption">{email}</span>
                        <i className="ph-bold ph-arrow-up-right" />
                      </Link>
                    )}

                    {/* ✅ OPTIONAL DESCRIPTION */}
                    {description && <p className="inner-headline__text t-large t-bright loading__item">{description}</p>}
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
