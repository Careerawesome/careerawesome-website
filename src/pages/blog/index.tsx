import React from 'react'

function BlogPost({posts, postsfeatured, author}) {
  console.log(posts, postsfeatured, author );
  
  return (
    <div>BlogPost</div>
  )
}

export default BlogPost



export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://api.careerawesome.com/api/posts')
  const posts = await res.json()
  const res1 = await fetch('https://api.careerawesome.com/api/featuredposts/how-to-write-a-resume-personal-statement')
  const postsfeatured = await res1.json()
  const res2 = await fetch('https://api.careerawesome.com/api/authors')
  const author = await res2.json()
  

 
  
  
 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts, 
      postsfeatured,
      author 
    },
  }
}

 // <>
  //     {posts.map((post) => (
  //       <div>
  //       <NextSeo
  //       title={post.title}
  //       description={post.excerpt}
  //       canonical={`https://yourdomain.com/blog/${post.slug}`}
  //       openGraph={{
  //         title: post.title,
  //         description: post.excerpt,
  //         images: [
  //           {
  //             url: post.featuredImage,
  //             width: 800,
  //             height: 600,
  //             alt: post.title,
  //           },
  //         ],
  //       }}
  //     />
  //     <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 4 }}>
  //       <Paper elevation={3} sx={{ padding: 4 }}>
  //         {post.featuredImage && (
  //           <img
  //             src={post.featuredImage}
  //             alt={post.title}
  //             style={{ width: '100%', marginBottom: 2, borderRadius: 4 }}
  //           />
  //         )}

  //         <Typography variant="h3" gutterBottom>
  //           {post.title}
  //         </Typography>

  //         <Box
  //           sx={{
  //             display: 'flex',
  //             alignItems: 'center',
  //             marginBottom: 2,
  //           }}
  //         >
  //           {post.author ? (
  //             <Avatar
  //             src={post.author.image}
  //             alt={post.author.name}
  //             sx={{ marginRight: 1 }}
  //           />
  //           ) : null }
  //           <Typography variant="subtitle1" color="textSecondary">
  //             By {post.author.name} on{' '}
  //             {new Date(post.createdAt).toLocaleDateString()}
  //           </Typography>
  //         </Box>

  //         <Divider sx={{ marginY: 2 }} />

  //         <Box sx={{ marginTop: 2 }}>
  //           <Typography variant="body1">{post.content}</Typography>
  //         </Box>
  //       </Paper>
  //     </Container>
  //       </div>
  //     ))}
  //   </>