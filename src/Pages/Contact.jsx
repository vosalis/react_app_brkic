import { Box, Typography, Container, Stack, Divider, Link } from "@mui/material";
import { Email, Phone, Instagram } from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';


const TikTokIcon = ({ color = "#4DA6FF" }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="25px"
      height="25px"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};


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
              <Stack direction="row" spacing={2} alignItems="center">
                <TikTokIcon sx={{  color: "#4DA6FF" }} />
               
                  <Link href="tel:+381-63-690-271" target="_blank" underline="none" sx={{ fontFamily: "Ubuntu, sans-serif !important", mt: "5px", ml: "20px", color: "#ccc", fontWeight: 400,  fontSize:"19px"}}>
                    @urosbrkic969
                  </Link>
                
              </Stack>
            </Stack>
          </Box>
        </Box>
  );
}
