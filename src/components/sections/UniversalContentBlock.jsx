import Link from "next/link";

export default function UniversalContentBlock({
  sectionClass = "mxd-section padding-pre-grid",
  containerClass = "mxd-container grid-container",
  blockClass = "mxd-block",
  isProjectBlock = false,

  // LEFT SIDE
  leftType = "title", // "title" | "subtitle" | "iconTitle"
  leftTitle = "",
  leftSubtitle = "",
  leftIcon = null,

  // RIGHT SIDE
  variant = "paragraph", // "manifest" | "paragraph" | "feedback" | "challenge" | "solution" | "web"
  mainText = "",
  secondaryText = "",

  // BUTTON
  buttonText = "",
  buttonHref = "",

  // CLIENT (for feedback)
  clientName = "",
  clientRole = "",
  clientCompany = "",
}) {
  const leftColClass = isProjectBlock ? "col-12 col-xl-5 mxd-grid-item no-margin" : "col-12 col-xl-5 mxd-grid-item no-margin";

  const rightColClass = isProjectBlock ? "col-12 col-xl-6 mxd-grid-item no-margin" : "col-12 col-xl-6 mxd-grid-item no-margin";

  const leftWrapperClass = isProjectBlock ? "mxd-project__subtitle" : "mxd-block__name";

  const rightWrapperClass = isProjectBlock ? "mxd-project__content" : "mxd-block__content";

  let content = (
    <div className="container-fluid px-0">
      <div className={`row gx-0 ${variant === "web" ? "d-xl-flex justify-content-xl-center" : ""}`}>
        {variant === "web" ? (
          <>
            <div className="col-12 col-xl-8 mxd-grid-item no-margin">
              <div className={rightWrapperClass}>
                <div className="mxd-block__manifest">
                  <p className="mxd-manifest mxd-manifest-l reveal-type">{mainText}</p>

                  {buttonText && (
                    <div className="mxd-manifest__controls">
                      <Link href={buttonHref} className="btn btn-anim btn-default btn-outline slide-right-up anim-uni-in-up">
                        <span className="btn-caption">{buttonText}</span>
                        <i className="ph-bold ph-arrow-up-right" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* ✅ LEFT COLUMN */}
            <div className={leftColClass}>
              <div className={leftWrapperClass}>
                {leftType === "title" && <h2 className="reveal-type anim-uni-in-up">{leftTitle}</h2>}

                {leftType === "subtitle" && <h2 className="reveal-type anim-uni-in-up">{leftSubtitle}</h2>}

                {leftType === "iconTitle" && (
                  <p className="mxd-point-subtitle anim-uni-in-up">
                    {leftIcon}
                    <span>{leftTitle}</span>
                  </p>
                )}
              </div>
            </div>

            {/* ✅ RIGHT COLUMN */}
            <div className={rightColClass}>
              <div className={rightWrapperClass}>
                {/* ✅ MANIFEST */}
                {variant === "manifest" && (
                  <div className="mxd-block__manifest">
                    <p className="mxd-manifest reveal-type anim-uni-in-up">{mainText}</p>

                    {buttonText && (
                      <div className="mxd-manifest__controls anim-uni-in-up">
                        <Link href={buttonHref} className="btn btn-anim btn-default btn-outline slide-right-up">
                          <span className="btn-caption">{buttonText}</span>
                          <i className="ph-bold ph-arrow-up-right" />
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                {/* ✅ PARAGRAPH */}
                {variant === "paragraph" && (
                  <div className="mxd-block__paragraph">
                    <p className="t-large t-bright anim-uni-in-up">{mainText}</p>

                    {secondaryText && <p className="anim-uni-in-up">{secondaryText}</p>}

                    {buttonText && (
                      <div className="mxd-paragraph__controls anim-uni-in-up">
                        <Link href={buttonHref} className="btn btn-anim btn-default btn-outline slide-right-up">
                          <span className="btn-caption">{buttonText}</span>
                          <i className="ph-bold ph-arrow-up-right" />
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                {/* ✅ CLIENT FEEDBACK */}
                {variant === "feedback" && (
                  <div className="mxd-project__paragraph medium-text">
                    <p className="anim-uni-in-up">{mainText}</p>

                    <div className="mxd-project__client anim-uni-in-up">
                      <h5>{clientName}</h5>
                      <p className="t-small">
                        {clientRole} in <Link href="#">{clientCompany}</Link>
                      </p>
                    </div>
                  </div>
                )}

                {/* ✅ CHALLENGE / SOLUTION */}
                {(variant === "challenge" || variant === "solution") && (
                  <div className={`mxd-project__paragraph ${variant === "solution" ? "medium-text" : ""}`}>
                    <p className={`${variant === "solution" ? "" : "t-large t-bright "}anim-uni-in-up`}>{mainText}</p>
                    {secondaryText && <p className="anim-uni-in-up">{secondaryText}</p>}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );

  // ✅ ONLY APPLY THESE IF NOT PROJECT BLOCK
  if (!isProjectBlock && blockClass) {
    content = <div className={blockClass}>{content}</div>;
  }

  if (!isProjectBlock && containerClass) {
    content = <div className={containerClass}>{content}</div>;
  }

  if (sectionClass) {
    content = <div className={sectionClass}>{content}</div>;
  }

  return content;
}
