import React from 'react'
import Head from 'next/head'
import Image from 'next/image'


// export default function Blog({ posts }:any) {
//   console.log(posts)
//  return(
//   <>
//     {
//       posts.map((post) => (
//        <div>
//          <h2 key={post._id}>
//           {
//             post.title
//           }
//         </h2>
//         <img src={post.featuredImage} alt="image" width={300} height={300}/>
        
//        </div>
//       ))
//     }
//   </>
//  )
// }

// pages/blog/[slug].tsx
import { NextSeo } from 'next-seo';
import { Container, Typography, Paper, Box, Divider, Avatar } from '@mui/material';


interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  createdAt: string;
  featuredImage: string;
  author: {
    name: string;
    image: string; // Include author image
  };
  slug: string;
}

interface BlogPostProps {
  posts: BlogPost;
}

const BlogPost: React.FC<BlogPostProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div>
          <NextSeo
        title={post.title}
        description={post.excerpt}
        canonical={`https://yourdomain.com/blog/${post.slug}`}
        openGraph={{
          title: post.title,
          description: post.excerpt,
          images: [
            {
              url: post.featuredImage,
              width: 800,
              height: 600,
              alt: post.title,
            },
          ],
        }}
      />

      <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 4 }}>
        <Paper elevation={3} sx={{ padding: 4 }}>
          {post.featuredImage && (
            <img
              src={post.featuredImage}
              alt={post.title}
              style={{ width: '100%', marginBottom: 2, borderRadius: 4 }}
            />
          )}

          <Typography variant="h3" gutterBottom>
            {post.title}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 2,
            }}
          >
            {post.author ? (
              <Avatar
              src={post.author.image}
              alt={post.author.name}
              sx={{ marginRight: 1 }}
            />
            ) : null }
            <Typography variant="subtitle1" color="textSecondary">
              By {post.author.name} on{' '}
              {new Date(post.createdAt).toLocaleDateString()}
            </Typography>
          </Box>

          <Divider sx={{ marginY: 2 }} />

          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1">{post.content}</Typography>
          </Box>
        </Paper>
      </Container>
        </div>
      ))}
    </>
  );
};

// export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
//   const res = await fetch(`https://api.careerawesome.com/api/post/${params.slug}`);
//   const posts: BlogPost = await res.json();

//   return { props: { posts } };
// };

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://api.careerawesome.com/api/posts')
  const posts = await res.json()
 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}



export default BlogPost;


 
// This function gets called at build time
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://api.careerawesome.com/api/posts')
//   const posts = await res.json()
 
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }