// import Image from "next/image";

import GlobalAnimations from "@/components/animations/GlobalAnimations";
import Marquee404 from "@/components/sections/Marquee404";
import Image from "next/image";
import Link from "next/link";

// export const metadata = {
//   title: "Rayo - Digital Agency & Personal Portfolio HTML Template",
//   description: "Elevate your digital presence with Rayo - dynamic and stylish HTML template designed for creative agencies and personal brands.",
//   keywords: "mix_design, resume, portfolio, personal page, cv, template, one page, responsive, html5, css3, creative, clean",
//   openGraph: {
//     title: "Rayo - Digital Agency & Personal Portfolio HTML Template",
//     description: "Elevate your digital presence with Rayo - dynamic and stylish HTML template designed for creative agencies and personal brands.",
//     url: "https://mixdesign.dev/themeforest/rayo",
//     images: [
//       {
//         url: "https://mixdesign.dev/themeforest/rayo/img/og-image.jpg",
//         width: 1200,
//         height: 1200,
//       },
//     ],
//   },
//   icons: {
//     icon: [{url: "/img/favicon/favicon.ico"}, {url: "/img/favicon/icon.svg", type: "image/svg+xml"}],
//     apple: "/img/favicon/apple-touch-icon.png",
//   },
// };

export default function Error() {
  return (
    <>
      <GlobalAnimations />
      <div className="mxd-floating-img floating-bg">
        <div className="mxd-floating-img__item mxd-move">
          <Image src="https://dummyimage.com/900x900/5d5d5d/838383" width={900} height={900} alt="Image" />
          {/* <img src="https://dummyimage.com/900x900/5d5d5d/838383" alt="Image" /> */}
        </div>
      </div>
      <main id="mxd-page-content" className="mxd-page-content">
        <div className="mxd-section mxd-section-fullscreen">
          <div className="mxd-container grid-container fullwidth-container fullscreen-container">
            <div className="mxd-block fullscreen-block">
              <div className="mxd-error floating-cards">
                <div className="mxd-error__descr">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-error__caption loading__fade">
                          <p className="t-large t-medium t-120 t-bright">This page doesn't exist</p>
                          <p className="t-large t-medium t-120 t-muted">Sorry.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-error__controls loading__fade">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <Link className="btn btn-anim btn-default btn-accent slide-right-up" href="/">
                          <span className="btn-caption">Let's Go Home</span>
                          <i className="ph-bold ph-arrow-up-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Marquee404 />
          </div>
        </div>
      </main>
    </>
  );
}
