import * as React from "react";
import Box from "@mui/material/Box";
import "./Home.css";
import { Typography } from "@mui/material";
import CountdownTimer from "../Components/CountdownTimer/CountdownTimer";
import image1 from "../Images/PRE_3574.png";
import News from "./../Components/News/NewsPreviw";

const acent = {
  color: "#4DA6FF",
  fontSize: "25px",
  fontWeight: 500,
  fontFamily: "Rajdhani, sans-serif",
  letterSpacing: "3px",
  fontStyle: "normal",
  paddingTop: "14px",
  paddingBottom: "50px",
  paddingLeft: {sx: "20px", md: "0px"},
};

export default function FixedContainer() {

  
  return (
    
    <React.Fragment>
        <Box
          className="name"
          sx={{
            px: { sm: 1, md: 12.5 },
            paddingBottom: "100px",
            position: "relative",
          }}
        >
          <Box sx={{ maxHeight: "100vh - 100px" }}>
            <Box sx={{ position: "relative", zIndex: 2, paddingLeft: {xs:"30px", md: "0"}}}>
              <Typography
                variant="h1"
                sx={{
                  paddingTop: "110px",
                  fontSize: "140px",
                  lineHeight: "150px",
                  fontFamily: "Bebas Neue, sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  letterSpacing: "10px",
                  color: "#ffffff",
                }}
              >
                <span>UROŠ</span>
                <br />
                BRKIĆ
              </Typography>
              <Typography style={acent}>PROFESIONALNI AUTOMOBILISTA</Typography>

              <Box textAlign="center" mt={8} sx={{ width: "fit-content" }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#ffffff",
                    letterSpacing: "5px",
                    textAlign: "left",
                    ml: "5px",
                    mt: "-50px",
                  }}
                >
                  SLEDEĆI DOGAĐAJ ZA
                </Typography>
                <CountdownTimer targetDate="2025-07-10T15:00:00" />
              </Box>
            </Box>
            <Box
              className="image1"
              component="img"
              src={image1}
              alt="Driver"
              sx={{
                
                maxWidth: "480px",
                height: "auto",
                position: "absolute",
                right: { sm: "2%", md: "15%" },
                top: "30px",
                zIndex: 1,
                opacity: 1,

                display: {
                  xs: "none", // hidden on screens <600px
                  sm: "block", // visible from 600px and up
                },
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "10px",
              marginTop: "100px",
              backgroundColor: "rgba(77, 166, 255, 0.7)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(10px)",
              borderRadius: "5px",
            }}
          ></Box>
          <Box className="newsContainer" sx={{ mt: "120px" }}>
            <Typography style={acent}>POSLEDNJE VESTI</Typography>
            <Box sx={{marginBottom: "80px"}}
            >
              <News />
            </Box>
          </Box>
        </Box>
    </React.Fragment>
  );
}
