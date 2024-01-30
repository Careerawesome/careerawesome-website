import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container'

// customize the card component 

function PageHeader() {
    return (
        <Box>
            <Container>
                <Box sx={{ paddingBlockStart: "5rem" }}>
                    <Grid spacing={4} container>
                        <Grid lg={5} md={5}>
                            {/* this is the content  */}
                            <Box>
                                <Box>
                                    <Typography gutterBottom variant='h1'>
                                        Empowering your path: your guide to professional development.
                                    </Typography>
                                    <Typography gutterBottom variant='body1'>
                                        Let CareerAwesome be your compass as you navigate the exciting landscape of professional growth. Unleash your potential, learn from insightful articles, and shape a career that's uniquely yours.
                                    </Typography>
                                </Box>
                                <Box>
                                    {/* This is the CTA  */}
                                    <Box sx={{ mt: 4, mb:1 }}>
                                        <Button size='large' variant='contained'>
                                            Join our community
                                        </Button>
                                    </Box>
                                    <Typography variant='caption'>
                                        Join thousands of subscribers and get lessons on how to grow your startup.
                                    </Typography>
                                </Box>
                                {/* <Box>
                                    <Typography>
                                        follow us on
                                    </Typography>
                                    <Box>

                                    </Box>
                                </Box> */}
                            </Box>
                        </Grid>
                        <Grid lg={7} md={7}>
                            {/* the blog with the image  */}
                            <article>
                                <Box>
                                    <Card>
                                        <img
                                            style={{ width: "100%", height:"60vh" }}
                                            src="https://clickup.com/blog/wp-content/uploads/2023/11/ClickUp-List-of-the-Top-PMOs-of-2023-1536x1152.png"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h4" component="div">
                                                Career Awesome: Dawn of a New Productivity Era, the Everything App
                                            </Typography>
                                            <Typography variant="subtitle2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </article>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default PageHeader