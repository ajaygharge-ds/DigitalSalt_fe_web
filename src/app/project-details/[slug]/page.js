// export async function generateMetadata({params}) {
//   const {slug} = params;

//   const data = await getProject(slug);

//   return {
//     title: `${data.title} – Project`,
//     description: data.excerpt,
//     openGraph: {
//       title: data.title,
//       description: data.excerpt,
//       url: `https://yoursite.com/projects/${slug}`,
//       images: data.featuredImage,
//     },
//   };
// }

// export default function Project({params}) {
//   return <ProjectDetails slug={params.slug} />;
// }
