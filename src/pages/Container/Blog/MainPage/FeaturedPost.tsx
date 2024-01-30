import axios from 'axios';
import React, { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import CardMedia from '@mui/material/CardMedia'
import Avatar from '@mui/material/Avatar';;
import Container from '@mui/material/Container'

interface Post {
    excerpt: ReactNode;
    readTime: ReactNode;
    author: any;
    series: ReactNode;
    slug: string | undefined;
    featuredImage: string | undefined;
    _id: string;
    title: string;
    // Add other post properties as needed
}

function FeaturedPost() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState<number>(1);

    const fetchPosts = async () => {
        try {
            const response = await axios.get(`https://api.careerawesome.com/api/posts/recent`, {
                params: { limit: 12, page },
            });
            const newPosts: Post[] = response.data;
            setPosts((prevPosts) => {
                // Filter out duplicates based on _id
                const uniquePosts = newPosts.filter(
                    (newPost) => !prevPosts.some((prevPost) => prevPost._id === newPost._id)
                );
                return [...prevPosts, ...uniquePosts];
            });
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        fetchPosts();
    }, [page]);

    console.log(posts)
    return (

        <Box sx={{ marginTop: "100px" }}>
            <Container>
                <Box>
                    <Grid spacing={4} sx={{ mb: 4 }} container>
                        {
                            posts.map((post) => {
                                return (
                                    <Grid key={post._id} xs={12} md={4}>
                                        <Box>
                                            <Card>
                                                <Link href={`/blog/${post.slug}`}>
                                                    <img
                                                        style={{ height: "250px", width: "100%" }}
                                                        src={post.featuredImage}
                                                        alt={post.slug}
                                                    />
                                                </Link>
                                                <Box sx={{ height: '250px', padding: "30px" }}>
                                                    <Typography sx={{ textTransform: "uppercase", fontWeight: 600 }} gutterBottom variant="subtitle2" color="primary" component="div">
                                                        {post.series}
                                                    </Typography>
                                                    <Link href={`/blog/${post.slug}`}>
                                                        <Box sx={{ height: "120px" }}>
                                                            <Typography gutterBottom sx={{
                                                                fontWeight: 700, overflow: 'hidden',
                                                                mt: 1,
                                                                mb: 1,
                                                                display: '-webkit-box',
                                                                WebkitBoxOrient: 'vertical',
                                                                WebkitLineClamp: 3,
                                                                height: "90px",
                                                            }} variant="h5">
                                                                {post.title}
                                                            </Typography>
                                                            {/* <Typography gutterBottom sx={{
                                                            overflow: 'hidden',
                                                            mt: 1,
                                                            display: '-webkit-box',
                                                            WebkitBoxOrient: 'vertical',
                                                            WebkitLineClamp: 2,
                                                        }} variant="body2">
                                                            {post.excerpt}
                                                        </Typography> */}
                                                        </Box>
                                                    </Link>

                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                                            <Avatar alt={post.author.name} src={post.author.image} />
                                                            <Typography variant='subtitle2'>
                                                                {post.author.name}
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            <Typography variant='subtitle2'>
                                                                {post.readTime}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Card>
                                        </Box>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <Box sx={{ justifyContent: "center", display: "flex" }}>
                        <Button variant="contained" onClick={handleLoadMore}>
                            Load More
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default FeaturedPost;


