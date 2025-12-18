"use client";
import Head from "next/head";

export default function SEO({title, description, keywords, image, url}) {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
    </Head>
  );
}

// //////// use this by below

{
  /* <SEO
  title="Contact Us"
  description="Let's connect."
  keywords="contact, agency"
  image="/img/og/contact.jpg"
  url="https://yoursite.com/contact"
/> */
}
