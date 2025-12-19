import GlobalAnimations from "@/components/animations/GlobalAnimations";
import Footer from "@/components/Footer";
import ContactSection from "@/components/sections/ContactSection";
import InnerPageHeadline from "@/components/sections/InnerPageHeadline";
import StatsCardsSection from "@/components/sections/StatsCardsSection";
import VideoDivider from "@/components/sections/VideoDivider";
import Head from "next/head";
import Image from "next/image";

const statsData = [
  {
    col: 7,
    value: 10,
    suffix: "+",
    label: "Years of professional experience in designing digital products",
    bg: "bg-base-tint",
    anim: "loading__fade",
    btn: {
      text: "Start New Project",
      link: "/contact",
      icon: "ph-bold ph-arrow-up-right",
      anim: "slide-right-up",
    },
    image: "https://dummyimage.com/800x800/5d5d5d/838383",
    imageClass: "mxd-stats-cards-image-3",
  },
  {
    col: 5,
    value: 120,
    suffix: "+",
    label: "Successfully\ncompleted projects",
    bg: "bg-base-tint",
    anim: "loading__fade",
    btn: {
      text: "Portfolio",
      link: "/portfolio",
      icon: "ph-bold ph-arrow-up-right",
      anim: "slide-right-up",
    },
    image: "https://dummyimage.com/800x800/5d5d5d/838383",
    imageClass: "mxd-stats-cards-image-4",
  },
];

export default function Services() {
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
        {/* Template Styles Start */}
        <link rel="stylesheet" type="text/css" href="css/loaders/loader.css" />
        <link rel="stylesheet" type="text/css" href="css/plugins.css" />
        <link rel="stylesheet" type="text/css" href="css/main.css" />
        {/* Template Styles End */}
        {/* Custom Browser Color Start */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#FAF7F6" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#161616" />
        <meta name="msapplication-navbutton-color" content="#161616" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <GlobalAnimations />
      <main id="mxd-page-content" className="mxd-page-content inner-page-content">
        {/* Section - Inner Page Headline Start */}
        <InnerPageHeadline sectionPadding="padding-s-headline-pre-grid" label="Services" title="New standards in digital excellence" titleClass="headline-img-before headline-img-04" />
        {/* Section - Inner Page Headline End */}
        {/* Section - Inner Page Statistics Start */}
        <StatsCardsSection variant="services" stats={statsData} />
        {/* Section - Inner Page Statistics End */}
        {/* Section - Services List Start */}
        <div className="mxd-section overflow-hidden padding-default">
          <div className="mxd-container grid-container">
            {/* Block - Services List Start */}
            <div className="mxd-block">
              <div className="mxd-services-list grid-top hover-reveal">
                {/* item */}
                <div className="mxd-services-list__item hover-reveal__item">
                  <div className="mxd-services-list__border anim-uni-in-up" />
                  <div className="hover-reveal__content hover-reveal-360x440">
                    <Image className="hover-reveal__image" src="https://dummyimage.com/360x440/5d5d5d/838383" width={360} height={440} alt="Rayo Image" />
                  </div>
                  <div className="mxd-services-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                          <div className="mxd-services-list__title anim-uni-in-up">
                            <p>Design</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                          <div className="mxd-services-list__descr anim-uni-in-up">
                            <p>
                              We create visually compelling designs that enhance user experience. From UI/UX design to stunning websites, mobile apps, and print materials, we make sure your brand’s
                              visuals resonate with your audience.
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-services-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p>UI/UX</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Web design</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Applications</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Print design</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Packaging</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Motion</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>3D models</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__border anim-uni-in-up" />
                </div>
                {/* item */}
                <div className="mxd-services-list__item hover-reveal__item">
                  <div className="mxd-services-list__border anim-uni-in-up" />
                  <div className="hover-reveal__content hover-reveal-360x440">
                    <Image className="hover-reveal__image" src="https://dummyimage.com/360x440/5d5d5d/838383" width={360} height={440} alt="Rayo Image" />
                  </div>
                  <div className="mxd-services-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                          <div className="mxd-services-list__title anim-uni-in-up">
                            <p>Development</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                          <div className="mxd-services-list__descr anim-uni-in-up">
                            <p>We build high-performance websites and applications using modern technologies. Our solutions are designed to be scalable and functional for optimal performance.</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-services-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p>Frontend</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Interactions</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Backend</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>E-Commerce</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Mobile Apps</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Maintenance</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Support</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__border anim-uni-in-up" />
                </div>
                {/* item */}
                <div className="mxd-services-list__item hover-reveal__item">
                  <div className="mxd-services-list__border anim-uni-in-up" />
                  <div className="hover-reveal__content hover-reveal-360x440">
                    <Image className="hover-reveal__image" src="https://dummyimage.com/360x440/5d5d5d/838383" width={360} height={440} alt="Rayo Image" />
                  </div>
                  <div className="mxd-services-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                          <div className="mxd-services-list__title anim-uni-in-up">
                            <p>Branding</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                          <div className="mxd-services-list__descr anim-uni-in-up">
                            <p>From logo design to comprehensive brand strategies, we ensure your business stands out with a unique visual identity and consistent messaging across all touchpoints.</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-services-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p>Brand strategy</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Logo design</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Guidelines</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Visual identity</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Rebranding</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__border anim-uni-in-up" />
                </div>
                {/* item */}
                <div className="mxd-services-list__item hover-reveal__item">
                  <div className="mxd-services-list__border anim-uni-in-up" />
                  <div className="hover-reveal__content hover-reveal-360x440">
                    <Image className="hover-reveal__image" src="https://dummyimage.com/360x440/5d5d5d/838383" width={360} height={440} alt="Rayo Image" />
                  </div>
                  <div className="mxd-services-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                          <div className="mxd-services-list__title anim-uni-in-up">
                            <p>Marketing</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                          <div className="mxd-services-list__descr anim-uni-in-up">
                            <p>
                              We develop and execute tailored digital marketing strategies. SEO and content marketing, social media management and paid campaigns - we help you reach and engage your
                              target audience effectively.
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-services-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p>Strategy</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Social media</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>SEO</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Optimization</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Email</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Campaigns</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__border anim-uni-in-up" />
                </div>
              </div>
            </div>
            {/* Block - Services List End */}
          </div>
        </div>
        {/* Section - Services List End */}
        {/* Section - Parallax Divider Start */}
        <VideoDivider
          sectionClass="padding-pre-title"
          poster="https://dummyimage.com/1920x1080/5d5d5d/838383"
          showTrigger
          // triggerHref="https://vimeo.com/65036292"
          triggerHref="https://www.youtube.com/embed/dQw4w9WgXcQ?si=WyWTRqbbbrVJitOY"
          triggerText="Play showreel * Play showreel * Play showreel * "
          triggerImage="https://dummyimage.com/100x100/5d5d5d/838383"
        />
        {/* Section - Parallax Divider End */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
