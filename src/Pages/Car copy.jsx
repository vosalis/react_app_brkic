import { Block } from "@mui/icons-material";
import { Typography, Box, Container } from "@mui/material";
import image_car from "../../public/Images/DSC_3434.png";
import Grid from "@mui/material/Grid";

const acent = {
  color: "#f2f2f2",
  fontWeight: 400,
  fontFamily: "Rajdhani, sans-serif",
  letterSpacing: "2px",
  fontStyle: "normal",
  fontSize: "25px",
  lineHeight: 1.2,
};
function Car() {
  return (
    <Box sx={{ color: "#f2f2f2" }}>
      <Container maxWidth="lg" sx={{ lineHeight: "3" }}>
        <Typography
          variant="h2"
          sx={{
            display: "inline-block",
            fontWeight: "bold",
            marginTop: "200px",
            paddingLeft: "50px",
            paddingRight: "10%",
            fontSize: { xs: "3rem", md: "5rem" },
            fontFamily: "Bebas Neue, sans-serif",
            letterSpacing: 1.8,
          }}
        >
          O KOLIMA{" "}
          <Box
            component="span"
            sx={{
              color: "#4DA6FF",
              paddingLeft: "40px",
              fontSize: { xs: "1.2rem", md: "3rem" },
            }}
          >
            OSELLA PA 21/S
          </Box>
        </Typography>
        <Typography
          style={acent}
          sx={{
            maxWidth: "78%",
            borderTop: "2px solid #4DA6FF",
            paddingTop: "70px",
            color: "#4DA6FF",
          }}
        >
          Prototip visokih performansi, italijanske proizvodnje fabricki
          pripreman za brdske auto trke.
        </Typography>
        <Grid container sx={{ mt: "100px" }}>
          <Grid item size={{ xs: 12, sm: 10 }}>
            <Typography
              sx={{
                fontFamily: "Bebas Neue, sans-serif",
                fontSize: "2.4rem",
                ml: "290px",
                marginTop: "0",
                paddingTop: "0",
              }}
            >
              SPECIFIKACIJE
            </Typography>
            <img
              className="car"
              src={image_car}
              alt="Car"
              style={{ width: "100%", paddingTop: "100px" }}
            />
          </Grid>
          <Grid item sx={{paddingTop: "30px"}} size={{ xs: 12, sm: 2 }}>
            <Box>
              {/* <Box sx={{marginBottom: "10px"}}>
                <Typography style={acent} sx={{}}>
                  Proizvodjac:{" "}
                </Typography>
                <Typography sx={{paddingLeft:"10px", pt:"6px"}}>OSELLA</Typography>
              </Box >
              <Box sx={{marginBottom: "10px"}}>
                <Typography style={acent} sx={{}}>
                  Model:{" "}
                </Typography>
                <Typography sx={{paddingLeft:"10px", pt:"6px"}}>PA 21/S</Typography>
              </Box> */}
              <Box sx={{ marginBottom: "10px", ml: "-200px" }}>
                <Typography style={acent} sx={{}}>
                  Masa:
                </Typography>
                <Typography
                  sx={{ pt: "6px", fontSize: "1.3rem", color: "#4DA6FF" }}
                >
                  490 kg
                </Typography>
              </Box>
              <Box sx={{ marginBottom: "10px", ml: "-200px" }}>
                <Typography style={acent} sx={{}}>
                  Motor:
                </Typography>
                <Typography
                  sx={{ pt: "6px", fontSize: "1.3rem", color: "#4DA6FF" }}
                >
                  HONDA K24, 2468 ccm, 348 ks
                </Typography>
              </Box>
              <Box sx={{ marginBottom: "10px", ml: "-80px" }}>
                <Typography style={acent} sx={{}}>
                  Menjac:
                </Typography>
                <Typography
                  sx={{ pt: "6px", fontSize: "1.3rem", color: "#4DA6FF" }}
                >
                  SADEV SESTOSTEPENI SEKVENCIJALNI
                </Typography>
              </Box>
              <Box sx={{ marginBottom: "10px" }}>
                <Typography style={acent} sx={{}}>
                  Pogon:
                </Typography>
                <Typography
                  sx={{ pt: "6px", fontSize: "1.3rem", color: "#4DA6FF" }}
                >
                  ZADNJI
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Car;
