import { Typography, Box, Container } from "@mui/material";
import image_car from "../../public/Images/DSC_3434.png";

const acent = {
  fontWeight: 300,
  fontFamily: "Rajdhani, sans-serif",

  fontSize: { xs: "1rem", md: "3rem" },
  letterSpacing: "2px",
  fontStyle: "normal",
  lineHeight: 1.2,
};

const infoBoxStyle = {
  borderRadius: "10%",
  background:
    "linear-gradient(100deg, rgba(42, 40, 40, 0.8), rgba(56, 56, 56, 0.8))",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: { xs: "5px 15px", md: "15px 40px" },
  width: "fit-content",
  margin: "auto",
};

export default function Car() {
  return (
    <Box
      className="name"
      sx={{
        px: { xs: 0, md: 12.5 },
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
          
  fontSize: { xs: "1rem", md: "2rem" },
          padding: "80px 30px 40px 30px",
          maxWidth: { xs: "100%", md: "78%" },
          color: "#c3c6d6;",
        }}
      >
        Prototip visokih performansi, italijanske proizvodnje fabricki pripreman
        za brdske auto trke.
      </Typography>

      <Box
        sx={{
          margin: "0px 30px 40px 30px",
          marginTop: { xs: "100px", md: "150px" },
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
              transform: "scale(1.15)",
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: { xs: "-20px", md: "-70px" },
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            px: 3,
          }}
        >
          <Box sx={infoBoxStyle}>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.6rem",
                  sm: "0.9rem",
                  md: "1.4rem",
                },
                fontWeight: "300",
                color: "#f5f5f5",
              }}
            >
              MOTOR:
            </Typography>
            <Box
              sx={{
                pt: "6px",
                fontSize: { xs: "0.7rem", sm: "1rem", md: "1.5rem" },
                transition: "transform 0.2s ease-in-out",
                color: "#4DA6FF",
                display: "inline-block",
                fontFamily: "Ubuntu, sans-serif",
                transform: "scale(1)",
                lineHeight: "1.2",
                textAlign: "center",
                "&:hover": {
                  transform: "scale(1.1)",
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
                  xs: "0.6rem",
                  sm: "0.9rem",
                  md: "1.3rem",
                },
                fontWeight: "300",
                color: "#f5f5f5",
              }}
            >
              KUBIKAŽA:
            </Typography>
            <Box
              sx={{
                pt: "6px",
                fontSize: { xs: "0.7rem", sm: "1rem", md: "1.5rem" },
                transition: "transform 0.2s ease-in-out",
                color: "#4DA6FF",
                display: "inline-block",
                fontFamily: "Ubuntu, sans-serif",
                transform: "scale(1)",
                lineHeight: "1.2",
                textAlign: "center",
                "&:hover": {
                  transform: "scale(1.1)",
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
                  xs: "0.6rem",
                  sm: "0.9rem",
                  md: "1.3rem",
                },
                fontWeight: "300",
                color: "#f5f5f5",
              }}
            >
              SNAGA:
            </Typography>
            <Box
              sx={{
                pt: "6px",
                fontSize: { xs: "0.7rem", sm: "1rem", md: "1.5rem" },
                transition: "transform 0.2s ease-in-out",
                color: "#4DA6FF",
                display: "inline-block",
                fontFamily: "Ubuntu, sans-serif",
                transform: "scale(1)",
                lineHeight: "1.2",
                textAlign: "center",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              348 ks
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "-40px", md: "-90px" },
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
                  xs: "0.6rem",
                  sm: "0.9rem",
                  md: "1.3rem",
                },
                fontWeight: "300",
                color: "#f5f5f5",
              }}
            >
              POGON:
            </Typography>
            <Box
              sx={{
                pt: "6px",
                fontSize: { xs: "0.7rem", sm: "1rem", md: "1.5rem" },
                transition: "transform 0.2s ease-in-out",
                color: "#4DA6FF",
                display: "inline-block",
                fontFamily: "Ubuntu, sans-serif",
                transform: "scale(1)",
                lineHeight: "1.2",
                textAlign: "center",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              ZADNJI
            </Box>
          </Box>

          <Box sx={infoBoxStyle}>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.6rem",
                  sm: "0.9rem",
                  md: "1.3rem",
                },
                fontWeight: "300",
                color: "#f5f5f5",
              }}
            >
              TEŽINA:
            </Typography>
            <Box
              sx={{
                pt: "6px",
                fontSize: { xs: "0.7rem", sm: "1rem", md: "1.5rem" },
                transition: "transform 0.2s ease-in-out",
                color: "#4DA6FF",
                display: "inline-block",
                fontFamily: "Ubuntu, sans-serif",
                transform: "scale(1)",
                lineHeight: "1.2",
                textAlign: "center",
                "&:hover": {
                  transform: "scale(1.1)",
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
                  xs: "0.6rem",
                  sm: "0.9rem",
                  md: "1.3rem",
                },
                fontWeight: "300",
                color: "#f5f5f5",
              }}
            >
              MENJAČ:
            </Typography>
            <Box
              sx={{
                pt: "6px",
                fontSize: { xs: "0.7rem", sm: "1rem", md: "1.3rem" },
                transition: "transform 0.2s ease-in-out",
                color: "#4DA6FF",
                display: "inline-block",
                fontFamily: "Ubuntu, sans-serif",
                transform: "scale(1)",
                lineHeight: "1.2",
                textAlign: "center",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              SEDMOSTEPENI
              <br />
              SEKVENCIJALNI
              <br />
              SADEV
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
