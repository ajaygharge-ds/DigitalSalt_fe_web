import GlobalAnimations from "@/components/animations/GlobalAnimations";
import Footer from "@/components/Footer";
import ContactSection from "@/components/sections/ContactSection";
import ParallaxSection from "@/components/sections/ParallaxSection";
import ProjectDetailsHeader from "@/components/sections/ProjectDetailsHeader";
import ProjectDetailsImageGrid from "@/components/sections/ProjectDetailsImageGrid";
import ProjectDetailsNavigation from "@/components/sections/ProjectDetailsNavigation";
import UniversalContentBlock from "@/components/sections/UniversalContentBlock";
import Head from "next/head";

// export const metadata = {
//   title: "Studio Template – Project Details",
//   description: "Detailed case study of Studio Template.",
//   keywords: "web design, project, studio template",
//   openGraph: {
//     title: "Studio Template – Project Details",
//     description: "Detailed case study of Studio Template.",
//     url: "https://yoursite.com/project-details",
//     images: "/img/og/project.jpg",
//   },
// };

export default function ProjectDetails() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Rayo - Digital Agency &amp; Personal Portfolio HTML Template</title>
        <meta name="description" content="Elevate your digital presence with Rayo - dynamic and stylish HTML template designed for creative agencies and personal brands." />
        <meta name="keywords" content="mix_design, resume, portfolio, personal page, cv, template, one page, responsive, html5, css3, creative, clean" />
        <meta name="author" content="mix_design" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="img/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="img/favicon/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="img/favicon/manifest.webmanifest" />
        <meta property="og:image:height" content={1200} />
        <meta property="og:image:width" content={1200} />
        <meta property="og:title" content="Rayo - Digital Agency & Personal Portfolio HTML Template" />
        <meta property="og:description" content="Elevate your digital presence with Rayo - dynamic and stylish HTML template designed for creative agencies and personal brands." />
        <meta property="og:url" content="https://mixdesign.dev/themeforest/rayo" />
        <meta property="og:image" content="https://mixdesign.dev/themeforest/rayo/img/og-image.jpg" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#FAF7F6" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#161616" />
        <meta name="msapplication-navbutton-color" content="#161616" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <GlobalAnimations />
      <main id="mxd-page-content" className="mxd-page-content inner-page-content">
        {/* Section - Inner Page Headline Start */}
        <ProjectDetailsHeader
          pageLabel="Project Page"
          title="Studio Template"
          description="Inspiring ideas, creative insights, and the latest in design and tech. Fueling innovation for your digital journey."
          client="Mix Design"
          services="Web Development"
          industry="HTML Template"
          date="January 2025"
          tags={["Web design", "UI/UX design", "Development", "Branding"]}
        />
        {/* Section - Inner Page Headline End */}
        {/* Section - Parallax Divider Start */}
        <ParallaxSection sectionClas="mxd-section" containerClass="mxd-container" dividerClass="mxd-divider loading__fade" imageClass="mxd-divider__image prj-details-img-01" />
        {/* Section - Parallax Divider End */}
        {/* Section - Project Details Start */}
        <div className="mxd-section mxd-project overflow-hidden">
          <div className="mxd-container grid-container">
            {/* Project Block - Challenge Description with H2 Title and Paragraph Start */}
            <UniversalContentBlock
              isProjectBlock
              sectionClass="mxd-project__block pre-grid"
              leftType="subtitle"
              leftSubtitle="Challenge"
              variant="challenge"
              mainText="Donec maximus lorem quam, a aliquam erat aliquam quis. Sed accumsan sagittis condimentum. Proin eu nulla."
              secondaryText="Nunc vel ligula tincidunt, fermentum velit ac, sodales eros. Vivamus ac leo in arcu accumsan condimentum. Nullam ac est quis dolor scelerisque interdum in at risus. Pellentesque mattis est vel maximus posuere. Integer tristique ipsum velit, vitae gravida purus laoreet."
            />

            {/* Project Block - Challenge Description with H2 Title and Paragraph End */}
            {/* Project Block - Images Cards Start */}
            <ProjectDetailsImageGrid
              items={[
                {
                  col: 5,
                  image: "https://dummyimage.com/1200x1200/4d4d4d/838383",
                  animation: "anim-uni-scale-in-right",
                  align: "align-end",
                  bg: "bg-accent",
                },
                {
                  col: 7,
                  image: "https://dummyimage.com/1400x1000/2d2d2d/838383",
                  animation: "anim-uni-scale-in-left",
                  align: "align-end",
                  bg: "bg-base-tint",
                },
                {
                  col: 7,
                  image: "https://dummyimage.com/1400x1000/2d2d2d/838383",
                  animation: "anim-uni-scale-in-right",
                  bg: "bg-base-tint",
                },
                {
                  col: 5,
                  image: "https://dummyimage.com/1200x1200/4d4d4d/838383",
                  animation: "anim-uni-scale-in-left",
                  bg: "bg-base-tint",
                },
              ]}
            />
            {/* Project Block - Images Cards End */}
            {/* Project Block - Solution Description with H2 Title and Paragraph Start */}
            <UniversalContentBlock
              isProjectBlock
              sectionClass="mxd-project__block"
              leftType="subtitle"
              leftSubtitle="Solution"
              variant="solution"
              mainText="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque ut arcu pulvinar, rhoncus libero id, lobortis metus. Morbi tristique dolor sit amet turpis faucibus malesuada."
              secondaryText="Morbi non ipsum vel risus scelerisque sagittis nec a ipsum. Nulla odio neque, feugiat a arcu et, tristique cursus diam. Duis consectetur massa nibh, ut rhoncus nibh vestibulum in. Sed imperdiet metus sed arcu efficitur posuere."
            />

            {/* Project Block - Solution Description with H2 Title and Paragraph End */}
            {/* Project Block - Parallax Fullwidth Image Start */}
            <ParallaxSection sectionClass="mxd-project__block mxd-grid-item no-margin" containerClass="" dividerClass="mxd-divider" imageClass="mxd-divider__image prj-details-img-02" />
            {/* Project Block - Parallax Fullwidth Image End */}
            {/* Project Block - Client’s feedback Description with H2 Title and Paragraph Start */}
            <UniversalContentBlock
              isProjectBlock
              sectionClass="mxd-project__block"
              leftType="subtitle"
              leftSubtitle={
                <>
                  Client’s
                  <br />
                  feedback
                </>
              }
              variant="feedback"
              mainText="Working with Rayo team was an absolute pleasure! They took the time to understand our business needs and translated them into a beautifully designed, user-friendly website.
                          The team's attention to detail, creativity, and technical expertise exceeded our expectations. We've received so much positive feedback from our customers already."
              clientName="Lea Tomato"
              clientRole="Senior Designer"
              clientCompany="The Way"
            />

            {/* Project Block - Client’s feedback Description with H2 Title and Paragraph End */}
            {/* Project Block - Project Link Start */}
            <ProjectDetailsNavigation prevLink="/projects-details/ai-experiments" prevTitle="Mobile app design" nextLink="/projects-details/ai-experiments" nextTitle="AI experiments" />
            {/* Project Block - Project Link End */}
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
