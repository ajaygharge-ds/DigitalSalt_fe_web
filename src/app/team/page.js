import GlobalAnimations from "@/components/animations/GlobalAnimations";
import ZoomInAnimation from "@/components/animations/ZoomInAnimation";
import TestimonialsSwiper from "@/components/common/TestimonialsSwiper";
import Footer from "@/components/Footer";
import RotatingButton from "@/components/RotatingButton";

import ContactSection from "@/components/sections/ContactSection";
import CultureValuesSection from "@/components/sections/CultureValuesSection";
import InnerPageHeadline from "@/components/sections/InnerPageHeadline";
import MarqueeSection from "@/components/sections/MarqueeSection";
import ParallaxSection from "@/components/sections/ParallaxSection";
import TeamSection from "@/components/sections/TeamSection";
import Head from "next/head";
import Link from "next/link";

const team = [
  {
    name: "Alex Berry",
    position: "Frontend Developer",
    image: "https://dummyimage.com/800x920/5d5d5d/838383",
    socials: [
      {label: "Linkedin", link: "https://www.linkedin.com/"},
      {label: "Behance", link: "https://www.behance.net/"},
    ],
  },
  {
    name: "Helen Lemon",
    position: "Creative Designer",
    image: "https://dummyimage.com/800x920/5d5d5d/838383",
    socials: [
      {label: "Linkedin", link: "https://www.linkedin.com/"},
      {label: "Figma Community", link: "https://www.figma.com/community"},
    ],
  },
  {
    name: "Sarah Olive",
    position: "Digital Marketing Strategist",
    image: "https://dummyimage.com/800x920/5d5d5d/838383",
    socials: [
      {label: "Linkedin", link: "https://www.linkedin.com/"},
      {label: "Behance", link: "https://www.behance.net/"},
    ],
  },
  {
    name: "Johanna Cherry",
    position: "Brand Identity Expert",
    image: "https://dummyimage.com/800x920/5d5d5d/838383",
    socials: [
      {label: "Linkedin", link: "https://www.linkedin.com/"},
      {label: "Dribbble", link: "https://dribbble.com/"},
    ],
  },
];

export default function Team() {
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
      <GlobalAnimations />
      <main id="mxd-page-content" className="mxd-page-content inner-page-content">
        {/* Section - Inner Page Headline Start */}
        <InnerPageHeadline
          sectionPadding="padding-text-pre-block"
          label="Our team"
          title="Talented minds shaping our vision"
          titleClass="headline-img-before headline-img-05"
          description="Our team is a blend of creative thinkers, problem-solvers, and tech enthusiasts dedicated to bringing your ideas to life. Together, we craft innovative solutions that inspire and deliver results."
          contentCol="col-xl-8"
        />

        {/* Section - Inner Page Headline End */}
        {/* Section - Parallax Divider Start */}
        <ParallaxSection sectionClass="mxd-section padding-grid-pre-mtext" dividerClass="mxd-divider loading__fade" imageClass="mxd-divider__image divider-image-7">
          <div className="mxd-container__circle loading__fade">
            <RotatingButton
              href="/contact"
              text="Let's start new project * Let's start new project * "
              variant="btn-rotating-blur-outline ver-02"
              image="https://dummyimage.com/100x100/4d4d4d/838383"
            />
          </div>
        </ParallaxSection>
        {/* Section - Parallax Divider End */}
        {/* Section - Marquee Text One Line Start */}
        <MarqueeSection sectionClass="mxd-section padding-mtext mobile-title" items={["Talents", "Dreamers", "Thinkers", "Creatives"]} />
        {/* Section - Marquee Text One Line End */}
        {/* Section - Team Full Start */}
        <TeamSection
          title="Dreamers and doers"
          description="Creatives and strategists united by a passion for crafting impactful digital solutions."
          ctaText="View Portfolio"
          ctaLink="/portfolio"
          members={team}
          showCareerCard
        />

        {/* Section - Team Full End */}
        {/* Wrapper - Opposite Sections Group Start */}
        <ZoomInAnimation />
        <div className="mxd-wrapper mxd-wrapper-opposite padding-top-pre-title margin-bottom-pre-title anim-zoom-in-container">
          {/* Section - Culture & Value Start */}
          <CultureValuesSection
            showHeader={true}
            headerTitle={
              <>
                Our culture and <br /> values
              </>
            }
            headerTags={["Imagination", "Strategy", "Action"]}
            headerButton={
              <Link className="btn btn-anim btn-default btn-outline opposite slide-right-down" href="#testimonials">
                <span className="btn-caption">Testimonials</span>
                <i className="ph-bold ph-arrow-down-right" />
              </Link>
            }
            opposite={true}
            description="We thrive on collaboration, creativity, and innovation. Our team values open communication, continuous learning, and delivering results that make a real impact."
          />
          {/* Section - Culture & Value End */}
          {/* Section - Marquee Text One Line Start */}
          <MarqueeSection sectionClass="mxd-section padding-mtext" items={["Clients Approve", "Clients Approve", "Clients Approve", "Clients Approve"]} />
          {/* Section - Marquee Text One Line End */}
          {/* Section - Testimonials Slider #03 Start */}
          <TestimonialsSwiper
            variant="image"
            id="testimonials"
            opposite={true}
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
                            <h5 className="mxd-testimonials-image__name opposite">John Lemon</h5>
                            <p className="mxd-testimonials-image__position t-small t-opposite-medium">
                              Brand Manager in
                              <Link className="link-small-underline" href="#">
                                Instant Design
                              </Link>
                            </p>
                            <div className="mxd-testimonials-image__rating opposite">
                              <i className="ph-fill ph-star" />
                              <i className="ph-fill ph-star" />
                              <i className="ph-fill ph-star" />
                              <i className="ph-fill ph-star" />
                              <i className="ph-fill ph-star" />
                            </div>
                          </div>
                        </div>
                        <div className="mxd-testimonials-image__text" data-swiper-parallax-x={-100} data-swiper-parallax-opacity={0}>
                          <p className="t-large t-opposite">
                            Working with Rayo team was an absolute pleasure! They took the time to understand our business needs and translated them into a beautifully designed, user-friendly website.
                          </p>
                          <Link className="btn btn-anim btn-default btn-small btn-base slide-right-up" href="#0">
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
                            <h5 className="mxd-testimonials-image__name opposite">Alex Tomato</h5>
                            <p className="mxd-testimonials-image__position t-small t-opposite-medium">
                              Brand Manager in
                              <Link className="link-small-underline opposite" href="#">
                                Instant Design
                              </Link>
                            </p>
                            <div className="mxd-testimonials-image__rating opposite">
                              <i className="ph-fill ph-star" />
                              <i className="ph-fill ph-star" />
                              <i className="ph-fill ph-star" />
                              <i className="ph-fill ph-star" />
                              <i className="ph-fill ph-star" />
                            </div>
                          </div>
                        </div>
                        <div className="mxd-testimonials-image__text" data-swiper-parallax-x={-100} data-swiper-parallax-opacity={0}>
                          <p className="t-large t-opposite">
                            The team's attention to detail, creativity, and technical expertise exceeded our expectations. We've received so much positive feedback from our customers already.
                          </p>
                          <Link className="btn btn-anim btn-default btn-small btn-base slide-right-up" href="#0">
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
          {/* Section - Testimonials Slider #03 End */}
        </div>
        {/* Wrapper - Opposite Sections Group End */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
