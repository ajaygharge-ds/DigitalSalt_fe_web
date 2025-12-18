import GlobalAnimations from "@/components/animations/GlobalAnimations";
import GlobalStackCards from "@/components/animations/GlobalStackCards";
import CommonIcon from "@/components/common/icons/CommonIcon";
import TestimonialsSwiper from "@/components/common/TestimonialsSwiper";
import Footer from "@/components/Footer";
import HoverRevealItem from "@/components/HoverRevealItem";

import ContactSection from "@/components/sections/ContactSection";
import InnerPageHeadline from "@/components/sections/InnerPageHeadline";
import MarqueeSection from "@/components/sections/MarqueeSection";
import ProjectsStackSection from "@/components/sections/ProjectStackSection";
import Head from "next/head";
import Link from "next/link";

const projects = [
  {
    title: "E-commerce website",
    year: "2025",
    tags: ["UI/UX design", "Development"],
    image: "https://dummyimage.com/1200x800/4d4d4d/838383",
    preview: "https://dummyimage.com/600x730/4d4d4d/838383",
    link: "/project-details",
  },
  {
    title: "NFT project branding",
    year: "2025",
    tags: ["Brand identity", "Style guides"],
    image: "https://dummyimage.com/1200x800/4d4d4d/838383",
    preview: "https://dummyimage.com/600x730/4d4d4d/838383",
    link: "/project-details",
  },
  {
    title: "VR vision project",
    year: "2024",
    tags: ["Midjourney", "AI model"],
    image: "https://dummyimage.com/1200x800/4d4d4d/838383",
    preview: "https://dummyimage.com/600x730/4d4d4d/838383",
    link: "/project-details",
  },
  {
    title: "Illustrations set",
    year: "2024",
    tags: ["Illustrations", "Design"],
    image: "https://dummyimage.com/1200x800/4d4d4d/838383",
    preview: "https://dummyimage.com/600x730/4d4d4d/838383",
    link: "/project-details",
  },
  {
    title: "Blockchain app design",
    year: "2024",
    tags: ["UI/UX design", "Development"],
    image: "https://dummyimage.com/1200x800/4d4d4d/838383",
    preview: "https://dummyimage.com/600x730/4d4d4d/838383",
    link: "/project-details",
  },
];
export default function Portfolio() {
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
      {/* Custom Browser Color End */}
      {/* Loader Start */}
      {/* <div id="loader" className="loader">
        <div className="loader__wrapper">
          <div className="loader__content">
            <div className="loader__count">
              <span className="count__text">0</span>
              <span className="count__percent">%</span>
            </div>
          </div>
        </div>
      </div> */}
      {/* Loader End */}
      {/* Page Content Start */}
      <GlobalStackCards />
      <GlobalAnimations />
      <main id="mxd-page-content" className="mxd-page-content inner-page-content">
        {/* Section - Inner Page Headline Start */}
        <InnerPageHeadline sectionPadding="padding-headline-pre-stack" label="Portfolio" title="Where bold ideas take shape" titleClass="headline-img-after headline-img-03" />
        {/* Section - Inner Page Headline End */}
        {/* Section - Projects Stacking Cards Start */}
        <ProjectsStackSection
          projects={[
            {
              title: "Studio template",
              tags: ["Brand", "Illustrations", "Web"],
              href: "/project-details",
              imageMobile: "https://dummyimage.com/1080x1920/2d2d2d/838383",
              imageDesktop: "https://dummyimage.com/1920x1080/2d2d2d/838383",
            },
            {
              title: "AI Experiments",
              tags: ["Sora", "AI", "Editorial"],
              href: "/project-details",
              imageMobile: "https://dummyimage.com/1080x1920/4d4d4d/838383",
              imageDesktop: "https://dummyimage.com/1920x1080/4d4d4d/838383",
            },
            {
              title: "Mobile app design",
              tags: ["Design", "UI/UX", "Android"],
              href: "/project-details",
              imageMobile: "https://dummyimage.com/1080x1920/2d2d2d/838383",
              imageDesktop: "https://dummyimage.com/1920x1080/2d2d2d/838383",
            },
          ]}
        />
        {/* Section - Projects Stacking Cards End */}
        {/* Section - Projects List #01 Start */}
        <div className="mxd-section overflow-hidden padding-grid-pre-mtext">
          <div className="mxd-container grid-container">
            {/* Block - Section Title Start */}
            <div className="mxd-block">
              <div className="mxd-section-title">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrtitle">
                        <h2 className="reveal-type anim-uni-in-up">Portfolio archive</h2>
                      </div>
                    </div>
                    <div className="col-12 col-xl-2 mxd-grid-item no-margin" />
                    <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrcontrols pre-title anim-uni-in-up">
                        <Link className="btn btn-anim btn-default btn-outline slide-right-down" href="#testimonials">
                          <span className="btn-caption">Clients Approve</span>
                          <i className="ph-bold ph-arrow-down-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Section Title End */}
            {/* Block - Projects List #01 Start */}
            <div className="mxd-block">
              <div className="mxd-projects-list hover-reveal">
                {projects.map((item, index) => (
                  <HoverRevealItem key={index} previewImage={item.preview} revealSize="280x340" className="mxd-projects-list__item">
                    <Link href={item.link}>
                      <div className="mxd-projects-list__border anim-uni-in-up" />

                      <div className="mxd-projects-list__inner">
                        <div className="container-fluid px-0">
                          <div className="row gx-0">
                            <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                              <div className="mxd-projects-list__title anim-uni-in-up">
                                <div className="mxd-projects-list__icon">
                                  <i className="ph ph-arrow-right" />
                                </div>
                                <p>{item.title}</p>
                              </div>

                              <div className="mxd-projects-list__image anim-uni-in-up">
                                <img src={item.image} alt="" />
                              </div>
                            </div>

                            <div className="col-6 col-xl-2 mxd-grid-item no-margin">
                              <div className="mxd-projects-list__tagslist">
                                <ul>
                                  {item.tags.map((t, i) => (
                                    <li key={i} className="anim-uni-in-up">
                                      <p className="t-small">{t}</p>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="col-6 col-xl-2 mxd-grid-item no-margin">
                              <div className="mxd-projects-list__date anim-uni-in-up">
                                <p className="t-small">{item.year}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mxd-projects-list__border anim-uni-in-up" />
                    </Link>
                  </HoverRevealItem>
                ))}
              </div>
            </div>
            {/* Block - Projects List #01 End */}
          </div>
        </div>
        {/* Section - Projects List #01 End */}
        {/* Section - Marquee Text One Line Start */}
        <MarqueeSection sectionClass="mxd-section padding-mtext" items={["Clients Approve", "Clients Approve", "Clients Approve"]} />
        {/* Section - Marquee Text One Line End */}
        {/* Section - Testimonials Slider #02 Start */}
        <TestimonialsSwiper
          variant="photo"
          id="testimonials"
          opposite={false}
          slides={[
            <>
              <div className="mxd-testimonials-photo">
                <div className="container-fluid p-0 fullheight-l">
                  <div className="row g-0 d-flex align-items-stretch fullheight-l">
                    <div className="col-12 col-lg-6 mxd-testimonials-photo__content mxd-grid-item no-margin">
                      <div className="mxd-testimonials-photo__author" data-swiper-parallax-x={-250} data-swiper-parallax-opacity={0}>
                        <div className="mxd-testimonials-photo__avatar">
                          <img src="https://dummyimage.com/300x300/4d4d4d/838383" alt="Review Author" />
                        </div>
                        <div className="mxd-testimonials-photo__info">
                          <h5 className="mxd-testimonials-photo__name">Alex Tomato</h5>
                          <p className="mxd-testimonials-photo__position t-small">
                            Brand Manager in
                            <Link className="link-small-underline" href="#">
                              Instant Design
                            </Link>
                          </p>
                          <div className="mxd-testimonials-photo__rating">
                            <i className="ph-fill ph-star" />
                            <i className="ph-fill ph-star" />
                            <i className="ph-fill ph-star" />
                            <i className="ph-fill ph-star" />
                            <i className="ph-fill ph-star" />
                          </div>
                        </div>
                      </div>
                      <div className="mxd-testimonials-photo__text" data-swiper-parallax-x={-300} data-swiper-parallax-opacity={0}>
                        <p className="t-large">
                          Working with Rayo team was an absolute pleasure! They took the time to understand our business needs and translated them into a beautifully designed, user-friendly website.
                        </p>
                        <Link className="btn btn-anim btn-default btn-small btn-opposite slide-right-up" href="#0">
                          <span className="btn-caption">Project Page</span>
                          <i className="ph ph-arrow-up-right" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mxd-testimonials-photo__image mxd-grid-item no-margin fullheight-l" data-swiper-parallax-x={-450} data-swiper-parallax-opacity={0}>
                      <div className="mxd-testimonials-photo__image-inner radius-l fullheight-l">
                        <img src="https://dummyimage.com/1400x1200/4d4d4d/838383" alt="Testimonials Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>,
            <>
              <div className="mxd-testimonials-photo">
                <div className="container-fluid p-0 fullheight-l">
                  <div className="row g-0 d-flex align-items-stretch fullheight-l">
                    <div className="col-12 col-lg-6 mxd-testimonials-photo__content mxd-grid-item no-margin">
                      <div className="mxd-testimonials-photo__author" data-swiper-parallax-x={-250} data-swiper-parallax-opacity={0}>
                        <div className="mxd-testimonials-photo__avatar">
                          <img src="https://dummyimage.com/300x300/4d4d4d/838383" alt="Review Author" />
                        </div>
                        <div className="mxd-testimonials-photo__info">
                          <h5 className="mxd-testimonials-photo__name">Alex Tomato</h5>
                          <p className="mxd-testimonials-photo__position t-small">
                            SEO in
                            <Link className="link-small-underline" href="#">
                              Eye Candy
                            </Link>
                          </p>
                          <div className="mxd-testimonials-photo__rating">
                            <i className="ph-fill ph-star" />
                            <i className="ph-fill ph-star" />
                            <i className="ph-fill ph-star" />
                            <i className="ph-fill ph-star" />
                            <i className="ph-fill ph-star" />
                          </div>
                        </div>
                      </div>
                      <div className="mxd-testimonials-photo__text" data-swiper-parallax-x={-300} data-swiper-parallax-opacity={0}>
                        <p className="t-large">
                          The team's attention to detail, creativity, and technical expertise exceeded our expectations. We've received so much positive feedback from our customers already.
                        </p>
                        <Link className="btn btn-anim btn-default btn-small btn-opposite slide-right-up" href="#0">
                          <span className="btn-caption">Project Page</span>
                          <i className="ph ph-arrow-up-right" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mxd-testimonials-photo__image mxd-grid-item no-margin fullheight-l" data-swiper-parallax-x={-450} data-swiper-parallax-opacity={0}>
                      <div className="mxd-testimonials-photo__image-inner radius-l fullheight-l">
                        <img src="https://dummyimage.com/1400x1200/4d4d4d/838383" alt="Testimonials Image" />
                      </div>
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
