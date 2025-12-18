import GlobalAnimations from "@/components/animations/GlobalAnimations";
import Footer from "@/components/Footer";

import ContactSection from "@/components/sections/ContactSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import ParallaxSection from "@/components/sections/ParallaxSection";
import PinnedServicesSection from "@/components/sections/PinnedServiceSection";
import ProjectMarquee from "@/components/sections/ProjectsMarquee";
import ProjectsMasonry from "@/components/sections/ProjectsMasonry";
import UniversalContentBlock from "@/components/sections/UniversalContentBlock";
import WebBanner from "@/components/sections/WebBanner";
import Head from "next/head";

export default function WebAgency() {
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
      <main id="mxd-page-content" className="mxd-page-content">
        <WebBanner />
        <MarqueeSection sectionClass="mxd-section padding-mtext" items={["Design", "Development", "Branding", "eCommerce", "Mobile Apps"]} />
        <ParallaxSection sectionClass="mxd-section padding-pre-manifest" containerClass="mxd-container" dividerClass="mxd-divider" imageClass="mxd-divider__image divider-image-10" />
        <UniversalContentBlock
          sectionClass="mxd-section padding-pre-pinned-img"
          variant="web"
          mainText="We are a creative web agency specializing in innovative design and cutting-edge development. We help businesses stand out and every aspect of our projects is crafted with the highest standards of quality."
          buttonText="About Us"
          buttonHref="/about-us"
        />

        <PinnedServicesSection />
        <MarqueeSection sectionClass="mxd-section padding-mtext mobile-title" items={["Understanding Your Industry", "Understanding Your Industry"]} />
        <ProjectsMasonry
          variant="web"
          sectionTitle="Case studies"
          sectionDesc={
            <>
              Explore a selection of projects blending <br />
              creativity with practical design
            </>
          }
          allWorksLink="/portfolio"
          buttonImage="https://dummyimage.com/300x300/4d4d4d/838383"
          items={[
            {
              slug: "ai-concept",
              previewClass: "preview-image-2",
              tags: ["Sora", "AI", "Editorial"],
              titleBold: "Interactive concept",
              titleLight: " powered by AI",
            },
            {
              slug: "creative-studio",
              previewClass: "preview-image-1",
              tags: ["UI/UX", "Web design", "Illustrations"],
              titleBold: "Creative studio",
              titleLight: " template for modern agencies",
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
              tags: ["Brand identity", "Style guides"],
              titleBold: "NFT project",
              titleLight: " branding",
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

        <ProjectMarquee />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
