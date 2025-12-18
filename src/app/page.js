import GlobalAnimations from "@/components/animations/GlobalAnimations";
import GlobalStackCards from "@/components/animations/GlobalStackCards";
import CommonIcon from "@/components/common/icons/CommonIcon";
import Footer from "@/components/Footer";
import HoverRevealItem from "@/components/HoverRevealItem";
import RotatingButton from "@/components/RotatingButton";
import ApproachSection from "@/components/sections/ApproachSection";
import ClientTestimonialSection from "@/components/sections/ClientTestimonialSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroBanner from "@/components/sections/HeroBanner";
import MarqueeSection from "@/components/sections/MarqueeSection";
import ParallaxSection from "@/components/sections/ParallaxSection";
import PartnersGrid from "@/components/sections/PartnersGrid";
import PinnedProjectsSection from "@/components/sections/PinnedProjectsSection";
import ProjectMarquee from "@/components/sections/ProjectsMarquee";
import ServicesStackSection from "@/components/sections/ServicesStackSection";
import StatsCardsSection from "@/components/sections/StatsCardsSection";
import UniversalContentBlock from "@/components/sections/UniversalContentBlock";
import Head from "next/head";
import Link from "next/link";

const detailsItems = [
  {
    title: "Some article on Medium",
    year: "2025",
    tags: ["UI/UX", "Development"],
    preview: "img/hover/1.webp",
    link: "/project-details",
  },
  {
    title: "Awwwards nomination",
    year: "2024",
    tags: ["UI/UX", "Frontend"],
    preview: "img/hover/2.webp",
    link: "/project-details",
  },
  {
    title: "Behance curated work",
    year: "2024",
    tags: ["Illustrations", "Graphic design"],
    preview: "img/hover/3.webp",
    link: "/project-details",
  },
  {
    title: "Article on Medium",
    year: "2024",
    tags: ["UI/UX", "Frontend"],
    preview: "img/hover/4.webp",
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
    image: "img/stats/stats-card-1.webp",
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
    avatars: [{img: "img/stats/stats-prsn-1.webp"}, {type: "svg", icon: "star", bg: "bg-base-opp"}, {img: "img/stats/stats-prsn-2.webp"}],
    image: "img/stats/stats-card-2.webp",
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
    image: "img/stats/stats-card-3.webp",
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
    image: "img/stats/stats-card-4.webp",
    imageClass: "mxd-stats-cards-image-4",
  },
];

export default function Home() {
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
      <GlobalStackCards />
      <GlobalAnimations />
      <main id="mxd-page-content" className="mxd-page-content">
        {/* Hero Section Start */}
        <HeroBanner />
        {/* Hero Section End */}
        {/* Section - Parallax Divider Start */}
        <ParallaxSection
          sectionClass="mxd-section padding-hero-01 padding-pre-manifest mobile-point-subtitle"
          containerClass="mxd-container"
          dividerClass="mxd-divider"
          imageClass="mxd-divider__image divider-image-1"
        />
        {/* Section - Parallax Divider End */}
        {/* Section - About Start */}
        <UniversalContentBlock
          sectionClass="mxd-section padding-pre-grid"
          leftType="iconTitle"
          leftTitle="Who we are"
          leftIcon={<CommonIcon />}
          variant="manifest"
          mainText="We are a creative digital agency specializing in innovative design and cutting-edge development."
          buttonText="Say Hello"
          buttonHref="/contact"
        />

        {/* Section - About End */}
        {/* Section - Statistics Cards Start */}
        <StatsCardsSection stats={statsData} />
        {/* Section - Statistics Cards End */}
        {/* Section - Marquee Text One Line Start */}
        <MarqueeSection sectionClass="mxd-section padding-mtext-pre-pinned" items={["Design", "Development", "Branding", "eCommerce", "Mobile Apps"]} />
        {/* Section - Marquee Text One Line End */}
        {/* Section - Projects Pinned #01 Start */}
        <PinnedProjectsSection />
        {/* Section - Projects Pinned #01 End */}
        {/* Section - Services/Features Stacking Cards Start */}
        <ServicesStackSection
          services={[
            {
              title: "Digital art and graphic design",
              description: "We create visually compelling designs that enhance user experience. We make sure your brand's visuals resonate with your audience.",
              tags: ["UI/UX", "Web design", "Packaging", "Motion", "3D models"],
              href: "/portfolio-details",
              bg: "bg-base-opp",
              btnClass: "btn-additional",
              tagStyle: "tag-outline-opposite",
              opposite: true,
              imageSmall: "img/stack/stack-mobile-1.webp",
              imageLarge: "img/stack/stack-desktop-1.webp",
            },
            {
              title: (
                <>
                  Creative
                  <br />
                  development
                </>
              ),
              description: "We build high-performance websites and applications using modern technologies. Our solutions are designed to be scalable and functional for optimal performance.",
              tags: ["Frontend", "Interactions", "Backend", "Mobile Apps"],
              href: "/portfolio-details",
              bg: "bg-accent",
              btnClass: "btn-base",
              tagStyle: "tag-outline-opposite",
              opposite: true,
              imageSmall: "img/stack/stack-mobile-2.webp",
              imageLarge: "img/stack/stack-desktop-2.webp",
            },
            {
              title: (
                <>
                  Brand
                  <br />
                  identity
                </>
              ),
              description: "From logo design to comprehensive brand strategies, we ensure your business stands out with a unique visual identity and consistent messaging across all touchpoints.",
              tags: ["Brand strategy", "Logo design", "Guidelines", "Rebranding"],
              href: "/portfolio-details",
              bg: "radius-dark bg-base-tint",
              btnClass: "btn-opposite",
              tagStyle: "tag-outline",
              opposite: false,
              imageSmall: "img/stack/stack-mobile-3.webp",
              imageLarge: "img/stack/stack-desktop-3.webp",
            },
            {
              title: (
                <>
                  Digital marketing
                  <br />
                  solutions
                </>
              ),

              description: "SEO and content marketing, social media management and paid campaigns - we help you reach and engage your target audience effectively.",
              tags: ["Strategy", "Social media", "SEO", "Optimization", "Campaigns"],
              href: "/portfolio-details",
              bg: "bg-base-opp",
              btnClass: "btn-additional",
              tagStyle: "tag-outline-opposite",
              opposite: true,
              imageSmall: "img/stack/stack-mobile-4.webp",
              imageLarge: "img/stack/stack-desktop-4.webp",
            },
          ]}
        />
        {/* Section - Services/Features Stacking Cards End */}
        {/* Section - Approach and Philosophy Start */}
        <ApproachSection />
        {/* Section - Approach and Philosophy End */}
        {/* Section - Marquee Images Two Lines Start */}
        <ProjectMarquee />
        {/* Section - Marquee Images Two Lines End */}
        {/* Section - Awards & Publications List Start */}
        <div className="mxd-section overflow-hidden padding-default mobile-title">
          <div className="mxd-container grid-container">
            {/* Block - Section Title Start */}
            <div className="mxd-block">
              <div className="mxd-section-title">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrtitle anim-uni-in-up">
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
                        <Link className="btn btn-anim btn-default btn-outline slide-right-up" href="/about-us">
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
                {detailsItems.map((item, index) => (
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
        {/* Section - Awards & Publications List End */}
        {/* Section - Testimonials Slider #01 Start */}
        <ClientTestimonialSection
          slides={[
            {
              photo: "img/testimonials/1.webp",
              companyLogo: "/img/brands/envato.svg",
              text: "The Rayo team nailed it! They understood our vision.",
              projectLink: "project-details",
              name: "Lea Tomato",
              role: "Senior Designer",
              company: "The Way",
            },
            {
              photo: "img/testimonials/2.webp",
              companyLogo: "/img/brands/envato.svg",
              text: "Amazing experience working with Rayo!",
              projectLink: "project-details",
              name: "Patrick Pineapple",
              role: "SEO",
              company: "Instant Design",
            },
            {
              photo: "img/testimonials/3.webp",
              companyLogo: "/img/brands/envato.svg",
              text: "The Rayo team nailed it! They understood our vision.",
              projectLink: "project-details",
              name: "Lea Tomato",
              role: "Senior Designer",
              company: "The Way",
            },
            {
              photo: "img/testimonials/4.webp",
              companyLogo: "/img/brands/envato.svg",
              text: "Amazing experience working with Rayo!",
              projectLink: "project-details",
              name: "Patrick Pineapple",
              role: "SEO",
              company: "Instant Design",
            },
          ]}
        />
        {/* Section - Testimonials Slider #01 End */}
        {/* Section - Marquee Text One Line Start */}
        <MarqueeSection sectionClass="mxd-section padding-mtext-pre-grid" items={["Our Partners", "Our Partners", "Our Partners", "Our Partners"]} />
        <PartnersGrid />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
