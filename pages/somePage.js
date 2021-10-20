import client from "../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";

const Post = ({ data }) => {
  return (
    <article>
      <h1>{data.title}</h1>
      <BlockContent blocks={data.body} />
    </article>
  );
};

export async function getStaticProps() {
  const data = await client.fetch(`*[_type == "page"][0]`);
  return { props: { data: data } };
}

export default Post;
