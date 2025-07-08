import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import team_member_1 from "../Images/Team_member_1.png";
import team_member_2 from "../Images/Team_member_2.png";
import team_member_3 from "../Images/Team_member_3.png";
import team_member_4 from "../Images/Team_member_4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function team() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Box sx={{}}>
        
      <Box sx={{ margin: "0 10%" }}>
        <Box
          variant="h2"
          sx={{
            display: "inline-block",
            fontWeight: "bold",
            borderBottom: "2px solid #4DA6FF",
            marginTop: "200px",
            paddingBottom: 1,
            paddingLeft: "50px",
            paddingRight: "10%",
            marginBottom: 3,
            fontSize: { xs: "3rem", md: "4rem" },
            fontFamily: "Bebas Neue, sans-serif",
            letterSpacing: 1.8,
          }}
        >
          <Box
          component="span"
            sx={{
              color: "#4DA6FF",
              paddingLeft: "40px",
              fontSize: { xs: "1.2rem", md: "2.5rem" },
            }}
          >
            PREDSTAVLJAMO VAM{" "}
          </Box>
          NAŠ TIM
        </Box>
        <Typography
          variant="body1"
          sx={{ paddingLeft: "20px", maxWidth: "80%", marginBottom: 4 }}
        >
          Trkanje nije individualni sport — iza svakog uspeha stoji tim ljudi
          koji daju sve od sebe da bih ja bio najbrži na stazi. Upoznajte ekipu
          koja me svakodnevno podržava i pomaže mi da dam svoj maksimum.
        </Typography>
      </Box>
      <Slider {...settings}>
        <Box size={{ xs: 12, sm: 6, md: 3 }} sx={{ textAlign: "center" }}>
          <img
            src={team_member_1}
            alt="Čedomir Brkić"
            style={{ width: "100%", borderRadius: "12px" }}
          />
          <Typography
            variant="h5"
            sx={{ paddingTop: "10px", color: "#4DA6FF" }}
          >
            Čedomir
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "5px" }}>
            Glavni mehaničar — zadužen za to da automobil uvek bude u savršenom
            stanju.
          </Typography>
        </Box>

        <Box size={{ xs: 12, sm: 6, md: 3 }} sx={{ textAlign: "center" }}>
          <img
            src={team_member_2}
            alt="Luka"
            style={{ width: "100%", borderRadius: "12px" }}
          />
          <Typography
            variant="h5"
            sx={{ paddingTop: "10px", color: "#4DA6FF" }}
          >
            Luka
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "5px" }}>
            Trkački inženjer — analizira podatke, podešava automobil i planira
            strategiju.
          </Typography>
        </Box>

        <Box size={{ xs: 12, sm: 6, md: 3 }} sx={{ textAlign: "center" }}>
          <img
            src={team_member_3}
            alt="Lora"
            style={{ width: "100%", borderRadius: "12px" }}
          />
          <Typography
            variant="h5"
            sx={{ paddingTop: "10px", color: "#4DA6FF" }}
          >
            Lora
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "5px" }}>
            Mediji i PR — vodi računa o javnosti, društvenim mrežama i kontaktu
            sa fanovima.
          </Typography>
        </Box>

        <Box size={{ xs: 12, sm: 6, md: 3 }} sx={{ textAlign: "center" }}>
          <img
            src={team_member_4}
            alt="Natalija"
            style={{ width: "100%", borderRadius: "12px" }}
          />
          <Typography
            variant="h5"
            sx={{ paddingTop: "10px", color: "#4DA6FF" }}
          >
            Natalija
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "5px" }}>
            Lični trener — brine o mojoj fizičkoj spremi, fokusu i energiji na
            dan trke.
          </Typography>
        </Box>
      </Slider>
    </Box>
  );
}
