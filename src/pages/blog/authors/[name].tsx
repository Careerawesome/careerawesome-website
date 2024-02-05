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

function authorsBio() {
  const [authorbio, setAuthorbio] = useState([]);

  useEffect(() => {
    // Fetch author data from your API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8081/api/authors/"
        ); // Replace with your actual API endpoint
        const data = await response.json();

        console.log(data);
        setAuthorbio(data); // Assuming your API response has an 'authors' property
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

        
          <Box sx={{ display: "flex", alignItems: "center", gap: 3, flexDirection: 'column' }}>
            {authorbio.map((author, index) => (
              <Card key={index}>
                <Box sx={{ p: 3, pb: 4, display: "flex", gap: 4 }}>
                  <Avatar
                    variant="rounded"
                    sx={{ width: 56, height: 56 }}
                    src={author.image}
                  />
                  <Stack spacing={0.5}>
                    <Typography fontWeight="bold">
                      {author.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {author.bio}
                    </Typography>
                  </Stack>
                </Box>
              </Card>
            ))}
          </Box>
       
      </Container>
    </>
  );
}

export default authorsBio;