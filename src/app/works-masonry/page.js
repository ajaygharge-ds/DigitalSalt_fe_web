import GlobalAnimations from "@/components/animations/GlobalAnimations";
import TestimonialsSwiper from "@/components/common/TestimonialsSwiper";
import Footer from "@/components/Footer";

import ContactSection from "@/components/sections/ContactSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import ProjectsMasonry from "@/components/sections/ProjectsMasonry";
import VideoDivider from "@/components/sections/VideoDivider";
import Head from "next/head";
import Link from "next/link";

export default function WorkMasonry() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        {/* Page Title */}
        <title>Rayo - Digital Agency &amp; Personal Portfolio HTML Template</title>
        {/* Meta Tags */}
        <meta
          name="description"
          content="Elevate your digital presence with Rayo - dynamic and stylish HTML template designed for creative agencies and personal brands. With modern layouts, smooth interactions and a polished aesthetic, Rayo template helps showcase projects, services and expertise with clarity and impact."
        />
        <meta name="keywords" content="mix_design, resume, portfolio, personal page, cv, template, one page, responsive, html5, css3, creative, clean" />
        <meta name="author" content="mix_design" />
        {/* Viewport Meta*/}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        {/* Template Favicon & Icons Start */}
        <link rel="icon" href="img/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="img/favicon/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="img/favicon/manifest.webmanifest" />
        {/* Template Favicon & Icons End */}
        {/* Facebook Metadata Start */}
        <meta property="og:image:height" content={1200} />
        <meta property="og:image:width" content={1200} />
        <meta property="og:title" content="Rayo - Digital Agency & Personal Portfolio HTML Template" />
        <meta
          property="og:description"
          content="Elevate your digital presence with Rayo - dynamic and stylish HTML template designed for creative agencies and personal brands. With modern layouts, smooth interactions and a polished aesthetic, Rayo template helps showcase projects, services and expertise with clarity and impact."
        />
        <meta property="og:url" content="https://mixdesign.dev/themeforest/rayo" />
        <meta property="og:image" content="https://mixdesign.dev/themeforest/rayo/img/og-image.jpg" />
        {/* Facebook Metadata End */}
        {/* Custom Browser Color Start */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#FAF7F6" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#161616" />
        <meta name="msapplication-navbutton-color" content="#161616" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <GlobalAnimations />
      <main id="mxd-page-content" className="mxd-page-content inner-page-content">
        <ProjectsMasonry
          variant="masonry"
          headlineTitle={
            <>
              Projects <br /> to explore
            </>
          }
          headlineClass="headline-img-before headline-img-07"
          buttonImage="https://dummyimage.com/300x300/4d4d4d/838383"
          items={[
            {
              slug: "mobile-app",
              previewClass: "preview-image-3",
              tags: ["Sora", "AI", "Editorial"],
              titleBold: "Interactive concept",
              titleLight: " powered by AI",
            },
            {
              slug: "mobile-app",
              previewClass: "preview-image-3",
              tags: ["UI/UX", "Web Design", "Illustrations"],
              titleBold: "Creative studio",
              titleLight: " template for modern agencies",
            },
            {
              slug: "nft-branding",
              previewClass: "preview-image-4",
              tags: ["Brand identity", "Style guides"],
              titleBold: "NFT project",
              titleLight: "branding",
            },
            {
              slug: "creative-studio",
              previewClass: "preview-image-1",
              tags: ["UI/UX", "Design", "Android"],
              titleBold: "Mobile app design",
              titleLight: " for a cross-platform solution",
            },
            {
              slug: "creative-studio",
              previewClass: "preview-image-1",
              tags: ["Illustrations", "Design", "Packaging"],
              titleBold: "Illustrations set",
              titleLight: " for digital and print use",
            },
            {
              slug: "creative-studio",
              previewClass: "preview-image-1",
              tags: ["Midjourney", "AI model"],
              titleBold: "VR vision",
              titleLight: " experience concept",
            },
          ]}
        />

        <VideoDivider mp4Src="/video/1920x1080_video.mp4" webmSrc="/video/1920x1080_video.webm" ogvSrc="/video/1920x1080_video.ogv" poster="https://dummyimage.com/1920x1080/4d4d4d/838383" />

        <MarqueeSection sectionClass="mxd-section padding-mtext" items={["Clients Approve", "Clients Approve", "Clients Approve"]} />
        <TestimonialsSwiper
          variant="image"
          id=""
          oppsite={false}
          slides={[
            <>
              <div className="mxd-testimonials-image">
                <div className="container-fluid p-0 fullheight-l">
                  <div className="row g-0 d-flex align-items-stretch fullheight-l">
                    <div className="col-12 col-xl-7 mxd-testimonials-image__content mxd-grid-item no-margin">
                      <div className="mxd-testimonials-image__author" data-swiper-parallax-x={-50} data-swiper-parallax-opacity={0}>
                        <div className="mxd-testimonials-image__avatar">
                          <img src="https://dummyimage.com/300x300/4d4d4d/838383" alt="Review Author" />
                        </div>
                        <div className="mxd-testimonials-image__info">
                          <h5 className="mxd-testimonials-image__name">John Lemon</h5>
                          <p className="mxd-testimonials-image__position t-small">
                            Brand Manager in
                            <Link className="link-small-underline" href="#">
                              Instant Design
                            </Link>
                          </p>
                          <div className="mxd-testimonials-image__rating">
                            <i className="ph-fill ph-star" />
                            <i className="ph-fill ph-star" />
                            <i className="ph-fill ph-star" />
                            <i className="ph-fill ph-star" />
                            <i className="ph-fill ph-star" />
                          </div>
                        </div>
                      </div>
                      <div className="mxd-testimonials-image__text" data-swiper-parallax-x={-100} data-swiper-parallax-opacity={0}>
                        <p className="t-large">
                          Working with Alex was an absolute pleasure! He took the time to understand our business needs and translated them into a beautifully designed, user-friendly website.
                        </p>
                        <Link className="btn btn-anim btn-default btn-small btn-opposite slide-right-up" href="#0">
                          <span className="btn-caption">Project Page</span>
                          <i className="ph ph-arrow-up-right" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-xl-5 mxd-testimonials-image__img mxd-grid-item no-margin" data-swiper-parallax-x={-50} data-swiper-parallax-opacity={0}>
                      <img src="https://dummyimage.com/1400x1400/4d4d4d/838383" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </>,
            <>
              <div className="mxd-testimonials-image">
                <div className="container-fluid p-0 fullheight-l">
                  <div className="row g-0 d-flex align-items-stretch fullheight-l">
                    <div className="col-12 col-xl-7 mxd-testimonials-image__content mxd-grid-item no-margin">
                      <div className="mxd-testimonials-image__author" data-swiper-parallax-x={-50} data-swiper-parallax-opacity={0}>
                        <div className="mxd-testimonials-image__avatar">
                          <img src="https://dummyimage.com/300x300/4d4d4d/838383" alt="Review Author" />
                        </div>
                        <div className="mxd-testimonials-image__info">
                          <h5 className="mxd-testimonials-image__name">Alex Tomato</h5>
                          <p className="mxd-testimonials-image__position t-small">
                            Brand Manager in
                            <Link className="link-small-underline" href="#">
                              Instant Design
                            </Link>
                          </p>
                          <div className="mxd-testimonials-image__rating">
                            <i className="ph-fill ph-star" />
                            <i className="ph-fill ph-star" />
                            <i className="ph-fill ph-star" />
                            <i className="ph-fill ph-star" />
                            <i className="ph-fill ph-star" />
                          </div>
                        </div>
                      </div>
                      <div className="mxd-testimonials-image__text" data-swiper-parallax-x={-100} data-swiper-parallax-opacity={0}>
                        <p className="t-large">Amazing job on our website! Alex understood exactly what we needed and made it look great and easy to use.</p>
                        <Link className="btn btn-anim btn-default btn-small btn-opposite slide-right-up" href="#0">
                          <span className="btn-caption">Project Page</span>
                          <i className="ph ph-arrow-up-right" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-xl-5 mxd-testimonials-image__img mxd-grid-item no-margin" data-swiper-parallax-x={-50} data-swiper-parallax-opacity={0}>
                      <img src="https://dummyimage.com/1400x1400/4d4d4d/838383" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </>,
          ]}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
