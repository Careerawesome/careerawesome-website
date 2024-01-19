// pages/blog/[slug].tsx
import { NextSeo } from 'next-seo';
import { Container, Typography, Paper, Box, Divider, Avatar } from '@mui/material';
import { GetStaticProps, GetStaticPaths } from 'next';

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
  post: BlogPost;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        canonical={`http://localhost:3000/blog/${post.slug}`}
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
            <Avatar
              src={post.author.image}
              alt={post.author.name}
              sx={{ marginRight: 1 }}
            />
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
    </>
  );
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const res = await fetch(`https://api.careerawesome.com/api/posts/${params.slug}`);
  const post: BlogPost = await res.json();

  return { props: { post } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all blog post slugs from your API
  const res = await fetch('https://api.careerawesome.com/api/posts');
  const posts = await res.json();

  // Generate paths for each blog post
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export default BlogPost;