import { Box, Typography, Container, Stack, Divider, Link } from "@mui/material";
import { Email, Phone, Instagram } from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';

export default function Contact() {
  return (
      
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            margin: {
      xs: "200px 5px 130px 30px" , 
      md: "250px 100px 250px 100px"
    }
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "70px", md: "7rem" },
                color: "#4DA6FF",
                mb: 3,
                letterSpacing: 1.2,
                fontFamily: "Bebas Neue,sans-serif",
                mt: { xs:"0", md:"-20px" }

              }}
            >
              KONTAKT
            </Typography>
            <Typography sx={{ color: "#ccc", fontSize: "17px", maxWidth: "500px" }}>
              Ukoliko imate pitanja, predloge ili želite da se povežete sa nama, stojimo vam na raspolaganju. Naše adrese i kontakt informacije su navedene u nastavku.
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: "none", md: "block" },
              backgroundColor: "#4DA6FF",
              width: "1px",
            }}
          />

          <Box sx={{ flex: 1 }}>
            <Stack spacing={4} sx={{justifyContent: "space-between", height: "100%" }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Phone sx={{ color: "#4DA6FF" }} />
               
                  <Link href="tel:+381-63-690-271" target="_blank" underline="none" sx={{ fontFamily: "Ubuntu, sans-serif !important", mt: "5px", ml: "20px", color: "#ccc", fontWeight: 400,  fontSize:"19px"}}>
                    +381-63-690-271
                  </Link>
                
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Email sx={{ color: "#4DA6FF" }} />
                
                  <Link href="mailto:info@urosbrkic.com" target="_blank" underline="none" sx={{ fontFamily: "Ubuntu, sans-serif !important", mt: "5px", ml: "20px", color: "#ccc", fontWeight: 400, fontSize:"19px" }}>
                    info@urosbrkic.com
                  </Link>
                
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Instagram sx={{ color: "#4DA6FF"}} />
            
                  <Link href="https://instagram.com/urosbrkic969" target="_blank" underline="none" sx={{ fontFamily: "Ubuntu, sans-serif !important", mt: "5px", ml: "20px", color: "#ccc", fontWeight: 400, fontSize:"19px" }}>
                    urosbrkic969
                  </Link>
                
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <XIcon sx={{ color: "#4DA6FF"}} />

                  <Link href="https://x.com/@urosbrkic969" target="_blank" underline="none" sx={{ fontFamily: "Ubuntu, sans-serif !important", color: "#ccc", ml: "20px", fontWeight: 400, fontSize:"19px" }}>
                    urosbrkic969
                  </Link>
                
              </Stack>
            </Stack>
          </Box>
        </Box>
  );
}
