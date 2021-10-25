// import { setupNextSanity } from "next-sanity-extra"

// // Standard sanity config
// // Don't forget token, to get a preview client and authenticated client
// const config = {
//   projectId: 'l8csq6vq',
//   dataset: 'production',
//   useCdn: process.env.NODE_ENV === "production",
//   token: 'skn8bUuJCEVHGEYlZqtiNtH7EaKurP1ht4GXeec62LEzAByeEhtLAkAjhHXXtkOjQlQtKrWXztr2LRPfjdhnbXhKW904gnF2m5z0OH7NNJQpydrNH52dfqvevdup4JmwYm5fzVWbSgsLr2LT8NeMT3yZlDNCEXxlTaOz7Ob5aReKNRTplIqW'
// };

// export const {
//   sanityClient,
//   imageUrlBuilder,
//   PortableText,
//   sanityStaticProps,
//   useSanityQuery
//  } = setupNextSanity(config); 


 import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'l8csq6vq', // you can find this in sanity.json
  dataset: 'production',
  apiVersion: '2021-08-31', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})