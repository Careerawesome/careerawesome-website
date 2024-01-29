import React from "react";

const Post = ({ post }: any) => {
  // We get the blog post and then render it 

  return <div>Post</div>;
};

export default Post;

export async function getStaticPaths() {
  const res = await fetch("https://api.careerawesome.com/api/posts");
  const posts = await res.json();
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post: { slug: any }) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(`https://api.careerawesome.com/api/posts/${params.slug}`);
  const post = await res.json();
  return { props: { post } };
}
