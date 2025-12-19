import GlobalAnimations from "@/components/animations/GlobalAnimations";
import GlobalStackCards from "@/components/animations/GlobalStackCards";
import Footer from "@/components/Footer";
import HeroPinnedSection from "@/components/HeroPinnedSection";
import HoverRevealItem from "@/components/HoverRevealItem";

import ContactSection from "@/components/sections/ContactSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import PartnersGrid from "@/components/sections/PartnersGrid";
import ShowcaseStackSection from "@/components/sections/ShowcaseStackSection";
import StatsCardsSection from "@/components/sections/StatsCardsSection";
import UniversalContentBlock from "@/components/sections/UniversalContentBlock";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const detailsItems = [
  {
    title: "UI/UX Design",
    num: "/ 01",
    image: "https://dummyimage.com/1200x800/5d5d5d/838383",
    preview: "https://dummyimage.com/600x730/5d5d5d/838383",
  },
  {
    title: "Hi-end websites",
    num: "/ 02",
    image: "https://dummyimage.com/1200x800/5d5d5d/838383",
    preview: "https://dummyimage.com/600x730/5d5d5d/838383",
  },
  {
    title: "Product design",
    num: "/ 03",
    image: "https://dummyimage.com/1200x800/5d5d5d/838383",
    preview: "https://dummyimage.com/600x730/5d5d5d/838383",
  },
  {
    title: "Web &amp; mobile apps",
    num: "/ 04",
    image: "https://dummyimage.com/1200x800/5d5d5d/838383",
    preview: "https://dummyimage.com/600x730/5d5d5d/838383",
  },
  {
    title: "Project management",
    num: "/ 05",
    image: "https://dummyimage.com/1200x800/5d5d5d/838383",
    preview: "https://dummyimage.com/600x730/5d5d5d/838383",
  },
];
const statsData = [
  {
    col: 5,
    anim: "anim-uni-scale-in-right",
    bg: "bg-accent",
    align: "align-end",
    opposite: true,
    value: 120,
    suffix: "+",
    label: "Happy clients who trust my work",
    btn: {
      text: "Studio",
      link: "/about-us",
      anim: "slide-right-up opposite",
      icon: "ph-bold ph-arrow-up-right",
    },
    image: "https://dummyimage.com/800x800/5d5d5d/737373",
    imageClass: "mxd-stats-cards-image-1",
  },

  {
    col: 7,
    anim: "anim-uni-scale-in-left",
    bg: "bg-base-tint",
    align: "align-end",
    value: 90,
    suffix: "%",
    label: "Clients come back for new projects",
    avatars: [{img: "https://dummyimage.com/300x300/5d5d5d/737373"}, {type: "svg", icon: "star", bg: "bg-base-opp"}, {img: "https://dummyimage.com/300x300/5d5d5d/737373"}],
    image: "https://dummyimage.com/800x800/5d5d5d/737373",
    imageClass: "mxd-stats-cards-image-2",
  },

  {
    col: 7,
    anim: "anim-uni-scale-in-right",
    bg: "bg-base-tint",
    value: 6,
    suffix: "+",
    label: "Years of professional experience in designing digital products",
    btn: {
      text: "Start New Project",
      link: "/contact",
      anim: "slide-right-down",
      icon: "ph-bold ph-arrow-down-right",
    },
    image: "https://dummyimage.com/800x800/5d5d5d/737373",
    imageClass: "mxd-stats-cards-image-3",
  },

  {
    col: 5,
    anim: "anim-uni-scale-in-left",
    bg: "bg-base-tint",
    value: 250,
    suffix: "+",
    label: "Successfully completed projects",
    btn: {
      text: "Portfolio",
      link: "/portfolio",
      anim: "slide-right-up",
      icon: "ph-bold ph-arrow-up-right",
    },
    image: "https://dummyimage.com/800x800/5d5d5d/737373",
    imageClass: "mxd-stats-cards-image-4",
  },
];

export default function DigitalAgency() {
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
      <main id="mxd-page-content" className="mxd-page-content">
        {/* Hero Section Start */}
        {/* <div className="mxd-section">
          <div className="mxd-hero-02 mxd-pinned-fullscreen">
            <div className="mxd-pinned-fullscreen__static hero-02-fade-out-scroll">
              <div className="hero-02-static__tl-trigger" />
              <div className="mxd-hero-02-static__top hero-02-static-anim-el">
                <div className="mxd-container fullwidth-container grid-container">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="hero-02-static__caption loading__item">
                          <p className="t-large t-medium t-120 t-bright">Powering next gen projects.</p>
                          <p className="t-large t-medium t-120 t-muted">No creative limits.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <HeroTitleMarquee text="the power of imagination" image="https://dummyimage.com/800x800/5d5d5d/838383" />
              <div className="mxd-hero-02-static__bottom hero-02-static-anim-el">
                <div className="mxd-container fullwidth-container grid-container">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-md-6 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-paragraph__lists loading__fade">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 col-xl-5">
                                <ul>
                                  <li>
                                    <p className="t-small anim-uni-in-up">Innovations</p>
                                  </li>
                                  <li>
                                    <p className="t-small anim-uni-in-up">Creativity</p>
                                  </li>
                                  <li>
                                    <p className="t-small anim-uni-in-up">Experience</p>
                                  </li>
                                  <li>
                                    <p className="t-small anim-uni-in-up">Competence</p>
                                  </li>
                                  <li>
                                    <p className="t-small anim-uni-in-up">Passion</p>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-6 col-xl-5">
                                <ul>
                                  <li>
                                    <p className="t-small anim-uni-in-up">IU/UX</p>
                                  </li>
                                  <li>
                                    <p className="t-small anim-uni-in-up">App design</p>
                                  </li>
                                  <li>
                                    <p className="t-small anim-uni-in-up">Development</p>
                                  </li>
                                  <li>
                                    <p className="t-small anim-uni-in-up">Branding</p>
                                  </li>
                                  <li>
                                    <p className="t-small anim-uni-in-up">Motion</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mxd-hero-02-static__btn hero-02-static-anim-el loading__fade">
                <RotatingButton href="#0" text="Scroll for More * Scroll for More * Scroll for More * " sizeClass="btn-rotating-160" svgClass="mxd-rotate" variant="" image={<RotatingStarIcon />} />
              </div>
            </div>
            <HeroScrollGallery />
            <div className="mxd-pinned-fullscreen__tl-trigger" />
          </div>
        </div> */}
        <HeroPinnedSection />
        {/* Section - Services/Features Stacking Cards Start */}
        <ShowcaseStackSection
          showcases={[
            {
              title: "Digital products",
              numberClass: "t-opp-muted",
              number: "/01",
              description: "We create visually compelling designs that enhance user experience. We make sure your brand's visuals resonate with your audience.",
              bg: "bg-base-opp",
              opposite: true,
              works: [
                {
                  href: "/project-details",
                  image: "https://dummyimage.com/800x400/414141/636363",
                  tags: ["Sora", "AI", "Editorial"],
                },
                {
                  href: "/project-details",
                  image: "https://dummyimage.com/800x400/414141/636363",
                  tags: ["Frontend", "Interactions", "Web"],
                },
              ],
            },
            {
              title: "Corporate websites",
              numberClass: "t-opp-brigth",
              number: "/02",
              description: "We create visually compelling designs that enhance user experience. We make sure your brand's visuals resonate with your audience.",
              bg: "bg-accent",
              opposite: true,
              works: [
                {
                  href: "/project-details",
                  image: "https://dummyimage.com/800x400/414141/636363",
                  tags: ["Frontend", "Interactions", "Web"],
                },
                {
                  href: "/project-details",
                  image: "https://dummyimage.com/800x400/414141/636363",
                  tags: ["Brand", "Illustrations", "Web"],
                },
              ],
            },
            {
              title: "eCommerce",
              numberClass: "t-muted-extra",
              number: "/03",
              description: "We create visually compelling designs that enhance user experience. We make sure your brand's visuals resonate with your audience.",
              bg: "radius-dark bg-base-tint",
              opposite: false,
              works: [
                {
                  href: "/project-details",
                  image: "https://dummyimage.com/800x400/414141/636363",
                  tags: ["Design", "UI/UX", "Android"],
                },
                {
                  href: "/project-details",
                  image: "https://dummyimage.com/800x400/414141/636363",
                  tags: ["IU/UX design", "Development"],
                },
              ],
            },
            {
              title: "Brand identity",
              numberClass: "t-opp-muted",
              number: "/04",
              description: "We create visually compelling designs that enhance user experience. We make sure your brand's visuals resonate with your audience.",
              bg: "bg-base-opp",
              opposite: true,
              works: [
                {
                  href: "/project-details",
                  image: "https://dummyimage.com/800x400/414141/636363",
                  tags: ["Brand", "Style guides"],
                },
                {
                  href: "/project-details",
                  image: "https://dummyimage.com/800x400/414141/636363",
                  tags: ["Interactions", "Web", "Style guides"],
                },
              ],
            },
          ]}
        />
        {/* Section - Services/Features Stacking Cards End */}
        {/* Section - Our Capabilities List Small Start */}
        <div className="mxd-section overflow-hidden padding-grid-pre-mtext">
          <div className="mxd-container grid-container">
            {/* Block - Section Title Start */}
            <div className="mxd-block">
              <div className="mxd-section-title">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrtitle">
                        <h2 className="reveal-type">Our capabilities</h2>
                      </div>
                    </div>
                    <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrdescr">
                        <p className="anim-uni-in-up">Design</p>
                        <p className="anim-uni-in-up">Development</p>
                        <p className="anim-uni-in-up">Mastership</p>
                      </div>
                    </div>
                    <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                        <Link className="btn btn-anim btn-default btn-outline slide-right-up" href="/works-masonry">
                          <span className="btn-caption">Works Masonry</span>
                          <i className="ph-bold ph-arrow-up-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Section Title End */}
            {/* Block - Our Capabilities List Start */}
            <div className="mxd-block">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item no-margin">
                    <div className="mxd-cpb-list">
                      {detailsItems.map((item, index) => (
                        <HoverRevealItem key={index} previewImage={item.preview} revealSize="280x340" className="mxd-cpb-list__item">
                          <>
                            <div className="mxd-cpb-list__divider anim-uni-in-up" />

                            <div className="mxd-cpb-list__content anim-uni-in-up">
                              <h6 className="mxd-cpb-list__title">{item.title}</h6>
                              <div className="mxd-cpb-list__num">
                                <span>{item.num}</span>
                              </div>
                            </div>

                            <div className="mxd-cpb-list__image anim-uni-in-up">
                              <Image src={item.image} width={1200} height={800} alt="" />
                            </div>

                            {/* <div className="mxd-cpb-list__divider anim-uni-in-up" /> */}
                          </>
                        </HoverRevealItem>
                      ))}
                      <div className="mxd-cpb-list__divider anim-uni-in-up" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Our Capabilities List Start */}
          </div>
        </div>
        {/* Section - Our Capabilities List Small End */}
        {/* Section - Marquee Text One Line Start */}
        <MarqueeSection sectionClass="mxd-section padding-mtext-pre-grid" items={["Design", "Development", "Branding", "eCommerce", "Mobile Apps"]} />
        {/* Section - Marquee Text One Line End */}
        {/* Section - Statistics Cards Start */}
        <StatsCardsSection stats={statsData} />
        {/* Section - Statistics Cards End */}
        {/* Section - About Start */}
        <UniversalContentBlock
          leftType="title"
          leftTitle="Company"
          variant="paragraph"
          mainText="We are a creative digital agency specializing in innovative design and cutting-edge development. We help businesses stand out and thrive in the modern landscape."
          secondaryText="From pixel-perfect designs to flawless code, every aspect of our projects is crafted with care to ensure the highest standards of quality. We are passionate about integrating the latest technologies and trends, including interactive animations and mobile-first strategies."
          buttonText="More About Us"
          buttonHref="/about-us"
        />

        <PartnersGrid />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
