import GlobalAnimations from "@/components/animations/GlobalAnimations";
import Footer from "@/components/Footer";
import ContactAddress from "@/components/sections/ContactAddress";
import ContactFormSection from "@/components/sections/ContactFormSection";
import ContactSection from "@/components/sections/ContactSection";
import InnerPageHeadline from "@/components/sections/InnerPageHeadline";
import MarqueeSection from "@/components/sections/MarqueeSection";
import ParallaxSection from "@/components/sections/ParallaxSection";
import SocialLinksLines from "@/components/sections/SocialLinksLines";
import Head from "next/head";

const socialLinks = [
  {title: "Dribbble", url: "https://dribbble.com/"},
  {title: "Behance", url: "https://www.behance.net/"},
  {title: "Instagram", url: "https://www.instagram.com/"},
  {title: "Github", url: "https://github.com/"},
  {title: "Codepen", url: "https://codepen.io/"},
  {title: "Figma Community", url: "https://www.figma.com/community"},
];

export default function Contact() {
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
          sectionPadding="padding-s-text-pre-form overflow-hidden"
          label="Contact"
          title={
            <>
              Let's talk <br /> about your project!
            </>
          }
          showEmail={true}
          description="Have questions? We've got the answers! Here, you'll find clear and concise information about our services, process, and what to expect when working with us. If you need more details, feel free to reach out!"
          contentCol="col-xl-8"
        />

        {/* Section - Inner Page Headline End */}
        {/* Section - Inner Page Form Start */}
        <ContactFormSection projectName="My Website" adminEmail="contact@mywebsite.com" formSubject="Website Contact Form" />

        {/* Section - Inner Page Form End */}
        {/* Section - Parallax Divider Start */}
        <ParallaxSection sectionClass="mxd-section padding-grid-pre-mtext" containerClass="mxd-container" dividerClass="mxd-divider" imageClass="mxd-divider__image divider-image-3" />
        {/* Section - Parallax Divider End */}
        {/* Section - Marquee Text One Line Start */}
        <MarqueeSection sectionClass="mxd-section padding-mtext" items={["Connect", "Connect", "Connect", "Connect"]} />
        {/* Section - Marquee Text One Line End */}
        {/* Section - Socials List Start */}
        <SocialLinksLines links={socialLinks} />
        {/* Section - Socials List End */}
        {/* Section - Text Block Start */}
        <ContactAddress
          title="Welcome to our office"
          description="Inspiring ideas, creative insights, and the latest in design and tech. Fueling innovation for your digital journey."
          offices={[
            {
              city: "New York",
              address: "11 West 53 Street, New York, NY 10019",
              phone: "+12127089400",
              email: "hello@rayo.com",
              mapLink: "https://goo.gl/maps/nWXKpGaDPuyH6gxRA",
            },
            {
              city: "Oakland",
              address: "3400 Broadway, Oakland, CA 94611",
              phone: "+15104570211",
              email: "hello@rayo.com",
              mapLink: "https://goo.gl/maps/xap5o3MZBuC6DFHz8",
            },
          ]}
        />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
