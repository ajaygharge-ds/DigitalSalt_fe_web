import GlobalAnimations from "@/components/animations/GlobalAnimations";
import Footer from "@/components/Footer";
import HoverRevealItem from "@/components/HoverRevealItem";

import ApproachSection from "@/components/sections/ApproachSection";
import ContactSection from "@/components/sections/ContactSection";
import CultureValuesSection from "@/components/sections/CultureValuesSection";
import InnerPageHeadline from "@/components/sections/InnerPageHeadline";
import LeadersSection from "@/components/sections/LeadersSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import ParallaxSection from "@/components/sections/ParallaxSection";
import ProjectMarquee from "@/components/sections/ProjectsMarquee";
import StatsCardsSection from "@/components/sections/StatsCardsSection";
import Head from "next/head";
import Link from "next/link";

const items = [
  {
    title: "Some article on Medium",
    year: "2025",
    tags: ["UI/UX", "Development"],
    preview: "https://dummyimage.com/600x600/5d5d5d/838383",
    link: "/project-details",
  },
  {
    title: "Awwwards nomination",
    year: "2024",
    tags: ["UI/UX", "Frontend"],
    preview: "https://dummyimage.com/600x600/5d5d5d/838383",
    link: "/project-details",
  },
  {
    title: "Behance curated work",
    year: "2024",
    tags: ["Illustrations", "Graphic design"],
    preview: "https://dummyimage.com/600x600/5d5d5d/838383",
    link: "/project-details",
  },
  {
    title: "Article on Medium",
    year: "2024",
    tags: ["UI/UX", "Frontend"],
    preview: "https://dummyimage.com/600x600/5d5d5d/838383",
    link: "/project-details",
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

const leaders = [
  {
    name: "Helen Pineapple",
    position: "Founder, SEO",
    image: "https://dummyimage.com/800x920/4d4d4d/838383",
    socials: [
      {label: "Linkedin", link: "https://www.linkedin.com/"},
      {label: "Behance", link: "https://www.behance.net/"},
    ],
  },
  {
    name: "Alex Tomato",
    position: "SEO, Brand Manager",
    image: "https://dummyimage.com/800x920/4d4d4d/838383",
    socials: [
      {label: "Linkedin", link: "https://www.linkedin.com/"},
      {label: "Figma Community", link: "https://www.figma.com/community"},
    ],
  },
];

export default function AboutUs() {
  const square = true;
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
        <InnerPageHeadline sectionPadding="padding-headline-pre-block" label="Studio" title="Driven by ideas and innovation" titleClass="headline-img-before headline-img-06" />

        {/* Section - Inner Page Headline End */}
        {/* Section - Culture & Values Start */}
        <CultureValuesSection
          showLists={true}
          lists={{
            left: ["Innovations", "Excellence", "Creativity", "Experience", "Competence", "Passion"],
            right: ["Web design", "UI/UX", "App design", "Development", "Branding", "Motion"],
          }}
          description="We are a creative digital agency specializing in innovative design and cutting-edge development. We help businesses stand out and thrive in the modern landscape."
        />

        {/* Section - Culture & Values End */}
        {/* Section - Marquee Text One Line Start */}
        <MarqueeSection sectionClass="mxd-section padding-mtext" items={["Design", "Development", "Branding", "eCommerce", "Mobile Apps"]} />
        {/* Section - Marquee Text One Line End */}
        {/* Section - Parallax Divider Start */}
        <ParallaxSection sectionClass="mxd-section padding-pre-title" containerClass="mxd-container" dividerClass="mxd-divider" imageClass="mxd-divider__image divider-image-8" />
        {/* Section - Parallax Divider End */}
        {/* Section - Awards & Publications List Start */}
        <div className="mxd-section overflow-hidden padding-pre-grid mobile-grid-s">
          <div className="mxd-container grid-container">
            {/* Block - Section Title Start */}
            <div className="mxd-block">
              <div className="mxd-section-title">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrtitle">
                        <h2 className="reveal-type">
                          Awards &amp;
                          <br />
                          publications
                        </h2>
                      </div>
                    </div>
                    <div className="col-12 col-xl-3 mxd-grid-item no-margin" />
                    <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrcontrols pre-title anim-uni-in-up">
                        <Link className="btn btn-anim btn-default btn-outline slide-right-up" href="/project-details">
                          <span className="btn-caption">View More</span>
                          <i className="ph-bold ph-arrow-up-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Section Title End */}
            {/* Block - Approach and Philosophy List Start */}
            <div className="mxd-block">
              <div className="mxd-awards-list hover-reveal">
                {items.map((item, index) => (
                  <HoverRevealItem key={index} previewImage={item.preview} revealSize={square ? "260x260" : "280x340"} className="mxd-awards-list__item">
                    <Link href={item.link} target="_blank">
                      <div className="mxd-awards-list__border anim-uni-in-up" />

                      <div className="mxd-awards-list__inner">
                        <div className="container-fluid px-0">
                          <div className="row gx-0">
                            <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                              <div className="mxd-awards-list__title anim-uni-in-up">
                                <div className="mxd-awards-list__icon">
                                  <i className="ph ph-arrow-right" />
                                </div>
                                <p>{item.title}</p>
                              </div>
                            </div>

                            <div className="col-6 col-xl-2 mxd-grid-item no-margin">
                              <div className="mxd-awards-list__tagslist">
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
                              <div className="mxd-awards-list__date anim-uni-in-up">
                                <p className="t-small">{item.year}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mxd-awards-list__border anim-uni-in-up" />
                    </Link>
                  </HoverRevealItem>
                ))}
              </div>
            </div>
            {/* Block - Approach and Philosophy List Start */}
          </div>
        </div>
        <ProjectMarquee />
        <LeadersSection
          title="Creative leaders"
          description="Technical experts dedicated to delivering flawless, high-performing digital experiences."
          ctaText="Meet our team"
          ctaLink="/team"
          members={leaders}
        />
        {/* Section - Team Leaders End */}
        {/* Section - Statistics Cards Start */}
        <StatsCardsSection stats={statsData} />
        {/* Section - Statistics Cards End */}
        {/* Section - Approach and Philosophy Start */}
        <ApproachSection />
        {/* Section - Approach and Philosophy End */}
        {/* Section - Parallax Divider Start */}
        <ParallaxSection sectionClass="mxd-section padding-pre-title" containerClass="mxd-container" dividerClass="mxd-divider" imageClass="mxd-divider__image divider-image-9" />
        {/* Section - Parallax Divider End */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
