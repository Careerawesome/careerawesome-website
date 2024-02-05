import axios from "axios";
import React, { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { TextField } from "@mui/material";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";

function FeaturedAuthor() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    // Fetch author data from your API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.careerawesome.com/api/posts/"
        ); // Replace with your actual API endpoint
        const data = await response.json();

        console.log(data.author);
        setAuthors(data); // Assuming your API response has an 'authors' property
      } catch (error) {
        console.error("Error fetching author data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <>
      <Container>
        <Box
          sx={{
            justifyContent: "flex-start",
            display: "flex",
            alignItems: "center",
            gap: 4,
            my: 10,
          }}
        >
          <Avatar
            variant="rounded"
            sx={{ height: 56, width: 56, bgcolor: "success" }}
          >
            <BorderColorRoundedIcon />
          </Avatar>
          <Typography variant="h3">Featured Authors</Typography>
        </Box>

        <Link href="/blog/authors/name">
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {authors.map((post, index) => (
              <Card key={index}>
                <Box sx={{ p: 3, pb: 4, display: "flex", gap: 4 }}>
                  <Avatar
                    sx={{ width: 56, height: 56 }}
                    src={post.author.image}
                  />
                  <Stack spacing={0.5}>
                    <Typography fontWeight="bold">
                      {post.author.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.author.id}
                    </Typography>
                  </Stack>
                </Box>
              </Card>
            ))}
          </Box>
        </Link>

        <Box sx={{ mt: 10 }}>
          <Card
            sx={{
              width: "100%",
              p: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" sx={{}}>
              Subscribe to our newsletter:
            </Typography>
            <form style={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <TextField
                  type="email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  sx={{ width: "60%" }}
                  // Add required, validation, and state as needed
                />
                <Button type="submit" variant="contained" color="primary">
                  Subscribe
                </Button>
              </Box>
            </form>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default FeaturedAuthor;
