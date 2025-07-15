import * as React from "react";

import "./Home.css";
import { Typography, Box } from "@mui/material";
import CountdownTimer from "../Components/CountdownTimer/CountdownTimer";
import image1 from "../Images/PRE_3574.png";
import News_preview from "./../Components/News/NewsPreviw";

const acent = {
  color: "#4DA6FF",
  fontSize: "25px",
  fontWeight: 500,
  fontFamily: "Rajdhani, sans-serif",
  letterSpacing: "3px",
  fontStyle: "normal",
  paddingTop: "14px",
  paddingBottom: "50px",
};

export default function FixedContainer() {

  
  return (
    
    <React.Fragment>
        <Box
          className="name"
          sx={{
            px: { sm: 1, md: 12.5 },
            marginBottom: "160px",
            position: "relative",
          }}
        >
          <Box>
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
                <CountdownTimer targetDate="2025-08-01T15:00:00" />
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
                  xs: "none", 
                  sm: "block", 
                },
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100vw",
              marginLeft:"-100px",
              height: "80px",
              marginTop: "100px",
              background: "linear-gradient(180deg, rgba(15, 95, 174, 0) 0%, rgba(42, 40, 40, 0.8) 50%, rgba(15, 95, 174, 0) 100%)",

              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(10px)",
              borderRadius: "5px",
            }}
          ></Box>
          <Box className="newsContainer" sx={{ mt: "120px" }}>
            <Typography sx={{fontSize: {xs: "30px !important", md:"40px !important "}, paddingLeft: {xs:"20px", md: "0px"} }} 
            style={acent} >POSLEDNJE VESTI</Typography>
            <Box sx={{marginBottom: "80px"}}
            >
              <News_preview />
            </Box>
          </Box>
        </Box>
    </React.Fragment>
  );
}
