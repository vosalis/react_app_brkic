import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import data from "../../assets/data/events.json"
import { Link } from "react-router";
import { useState, useEffect } from "react";

export default function Media(props) {
  const { loading = false } = props;
  return (
    <Container>
      <Grid container spacing={3}>
        {(loading ? Array.from(new Array(3)) : data.slice(0, 3)).map((item, index) => (
          <Grid item key={index} size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Box
                component="img"
                src={item.src}
                alt={item.title}
                sx={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: 1,
                }}
              />
              <Typography
                variant="caption"
                sx={{ mt: 2, color: "#6C63FF", fontWeight: 600 }}
              >
                {item.createdAt.toUpperCase()}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: "20px", fontWeight: 700, mt: 1, mb: 2 }}
              >
                {item.title}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Link to={`/events?name=${item.title}`}>
                  READ MORE
                </Link>
                <Box
                  component="span"
                  sx={{
                    display: "inline-block",
                    width: "16px",
                    height: "2px",
                    bgcolor: "#000",
                    mt: "2px",
                  }}
                />
                <Box
                  component="span"
                  sx={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRight: "2px solid #000",
                    borderBottom: "2px solid #000",
                    transform: "rotate(-45deg)",
                    mt: "2px",   
                  }}
                />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}


