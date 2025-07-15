import * as React from "react";
import { Block } from "@mui/icons-material";
import { Typography, Box, Container } from "@mui/material";
import image_car from "../../public/Images/DSC_3434.png";
import Grid from "@mui/material/Grid";

const acent = {
  fontWeight: 300,
  fontFamily: "Rajdhani, sans-serif",
  letterSpacing: "2px",
  fontStyle: "normal",
  fontSize: "24px",
  lineHeight: 1.2,
};

const infoBoxStyle = {
  borderRadius: "50%",
  backgroundColor: "rgba(56, 56, 56, 0.7)",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  aspectRatio: "1 / 1", // ensures it's always a perfect circle
  width: "fit-content", // adjusts to content
  minWidth: "160px", // fallback size
  minHeight: "160px", // fallback size
  margin: "auto",
};

function Car() {
  return (
    <Box
      className="name"
      sx={{
        px: { sm: 1, md: 12.5 },
        paddingBottom: "100px",
        color: "#f2f2f2",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          marginTop: "200px",
          paddingLeft: "50px",
          fontSize: { xs: "3.5rem", sm: "4rem", md: "5rem" },
          fontFamily: "Bebas Neue, sans-serif",
          letterSpacing: "5%",
        }}
      >
        O KOLIMA{" "}
        <Box
          component="span"
          sx={{
            color: "#4DA6FF",
            paddingLeft: "1%",
            fontSize: { xs: "1.2rem", sm: "1.8rem", md: "3rem" },
          }}
        >
          OSELLA PA 21/S
        </Box>
      </Typography>
      <Box sx={{ borderTop: "2px solid #4DA6FF" }}></Box>
      <Typography
        style={acent}
        sx={{
          maxWidth: "78%",
          paddingTop: "80px",
          paddingLeft: "50px",
          color: "#c3c6d6;",
        }}
      >
        Prototip visokih performansi, italijanske proizvodnje fabricki pripreman
        za brdske auto trke.
      </Typography>

      <Box
        sx={{
          marginTop: "100px",
          marginBottom: "100px",
          position: "relative",
          border: "5px solid #4DA6FF",
          borderRadius: "200px",
          height: { xs: "200px", sm: "300px", md: "400px", lg: "500px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          className="car"
          src={image_car}
          alt="Car"
          sx={{
            width: "80%",
            margin: "auto",
            transition: "transform 0.4s ease-in-out",
            transform: "scale(1)",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "-40px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            px: 4,
          }}
        >
          <Box sx={infoBoxStyle}>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.8rem",
                  sm: "0.9rem",
                  md: "1.1rem",
                },
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              MOTOR:
            </Typography>
            <Box
              sx={{
                pt: "6px",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.3rem" },
                transition: "transform 0.2s ease-in-out",
                color: "#4DA6FF",
                display: "inline-block",
                fontFamily: "Ubuntu, sans-serif",
                transform: "scale(1)",
                lineHeight: "1.2",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            >
              HONDA K24
            </Box>
          </Box>

          <Box sx={infoBoxStyle}>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.8rem",
                  sm: "0.9rem",
                  md: "1.1rem",
                },
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              KUBIKAŽA:
            </Typography>
            <Box
              sx={{
                pt: "6px",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.3rem" },
                transition: "transform 0.2s ease-in-out",
                color: "#4DA6FF",
                display: "inline-block",
                fontFamily: "Ubuntu, sans-serif",
                transform: "scale(1)",
                lineHeight: "1.2",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            >
              2468 ccm
            </Box>
          </Box>

          <Box sx={infoBoxStyle}>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.8rem",
                  sm: "0.9rem",
                  md: "1.1rem",
                },
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              SNAGA:
            </Typography>
            <Box
              sx={{
                pt: "6px",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.3rem" },
                transition: "transform 0.2s ease-in-out",
                color: "#4DA6FF",
                display: "inline-block",
                fontFamily: "Ubuntu, sans-serif",
                transform: "scale(1)",
                lineHeight: "1.2",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            >
              348 ks
            </Box>
          </Box>
        </Box>

        {/* Bottom row boxes */}
        <Box
          sx={{
            position: "absolute",
            bottom: "-40px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            px: 4,
          }}
        >
          <Box sx={infoBoxStyle}>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.8rem",
                  sm: "0.9rem",
                  md: "1.1rem",
                },
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              TEŽINA:
            </Typography>
            <Box
              sx={{
                pt: "6px",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.3rem" },
                transition: "transform 0.2s ease-in-out",
                color: "#4DA6FF",
                display: "inline-block",
                fontFamily: "Ubuntu, sans-serif",
                transform: "scale(1)",
                lineHeight: "1.2",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            >
              490 kg
            </Box>
          </Box>

          <Box sx={infoBoxStyle}>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.8rem",
                  sm: "0.9rem",
                  md: "1.1rem",
                },
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              MENJAČ:
            </Typography>
            <Box
              sx={{
                pt: "6px",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.3rem" },
                transition: "transform 0.2s ease-in-out",
                color: "#4DA6FF",
                display: "inline-block",
                fontFamily: "Ubuntu, sans-serif",
                transform: "scale(1)",
                lineHeight: "1.2",
                textAlign: "center",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            >
              Sedmostepeni<br/>Sekvencijalni<br/>Sadev
            </Box>
          </Box>

          <Box sx={infoBoxStyle}>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.8rem",
                  sm: "0.9rem",
                  md: "1.1rem",
                },
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              POGON:
            </Typography>
            <Box
              sx={{
                pt: "6px",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.3rem" },
                transition: "transform 0.2s ease-in-out",
                color: "#4DA6FF",
                display: "inline-block",
                fontFamily: "Ubuntu, sans-serif",
                transform: "scale(1)",
                lineHeight: "1.2",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            >
              Zadnji
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Car;
