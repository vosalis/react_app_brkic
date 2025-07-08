import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import team_data from "../assets/data/team.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function team() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 960, // md
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Box>
      <Box
        className="name"
        sx={{
          paddingBottom: "100px",
          color: "#f2f2f2",
          px: { sm: 1, md: 12.5 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            marginTop: "200px",
            paddingLeft: "50px",
            fontSize: { xs: "3.5rem", sm: "4rem", md: "5rem" },
            fontFamily: "Bebas Neue, sans-serif",
            letterSpacing: "5%",
          }}
        >
          <Box
            component="span"
            sx={{
              color: "#4DA6FF",
              paddingLeft: "1%",
              fontSize: { xs: "1.2rem", sm: "1.8rem", md: "3rem" },
            }}
          >
            PREDSTAVLJAMO VAM{" "}
          </Box>
          NAŠ TIM
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "16px",
            fontWeight: "200",
            marginBottom: 10,
            borderTop: "2px solid #4DA6FF",
            textAlign: "justify",
            padding: "80px 30px 0px 30px",
          }}
        >
          Trkanje nije individualni sport — iza svakog uspeha stoji tim
          posvećenih ljudi koji neumorno rade kako bi Uroš bio najbrži na stazi.
          Upoznajte ekipu koja mu svakodnevno pruža podršku i omogućava da na
          svakoj trci pruži svoj maksimum.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "200px", border: "0" }}>
        <Slider {...settings}>
          {team_data.map((item) => (
            <Box
              key={item.key}
              sx={{
                padding: "0 15px",
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={`${import.meta.env.BASE_URL}${item.image}`}
                alt={item.name}
                sx={{
                  width: "100%",
                  borderRadius: "12px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="h5"
                sx={{ paddingTop: 2, color: "#4DA6FF", fontWeight: 600 }}
              >
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginTop: "8px",
                  color: "#ccc",
                  maxWidth: "90%",
                  mx: "auto",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
