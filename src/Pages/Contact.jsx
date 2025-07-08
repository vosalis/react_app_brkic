import React from "react";
import { Box, Typography, Container, Stack, Divider, Link } from "@mui/material";
import { Email, Phone, Instagram } from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';

export default function Contact() {
  return (
    <Box sx={{ py: 10, mt: "50px" }}>
      <Container maxWidth="lg"sx={{padding: "130px 0"}}>
        <Box
          sx={{

            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
          }}
        >
          {/* Left side text */}
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
                mt: { sx:"0", md:"-20px" }

              }}
            >
              KONTAKT
            </Typography>
            <Typography sx={{ color: "#ccc", fontSize: "17px", maxWidth: "500px" }}>
              Ukoliko imate pitanja, predloge ili želite da se povežete sa nama, stojimo vam na raspolaganju. Naše adrese i kontakt informacije su navedene u nastavku.
            </Typography>
          </Box>

          {/* Divider */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: "none", md: "block" },
              backgroundColor: "#4DA6FF",
              width: "1px",
            }}
          />

          {/* Right side contact info */}
          <Box sx={{ flex: 1 }}>
            <Stack spacing={4}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Phone sx={{ color: "#4DA6FF" }} />
                <Typography sx={{ color: "#f5f5f5" }}>
                  
                  <Link href="tel:+381-63-690-271" target="_blank" underline="hover" sx={{ mt: "5px", ml: "20px", color: "#f5f5f5", fontWeight: 400, fontSize:"px" }}>
                    +381-63-690-271
                  </Link>
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Email sx={{ color: "#4DA6FF" }} />
                <Typography sx={{ color: "#f5f5f5" }}>
                  
                  <Link href="mailto:info@urosbrkic.com" target="_blank" underline="hover" sx={{ mt: "5px", ml: "20px", color: "#f5f5f5", fontWeight: 400, fontSize:"18px" }}>
                    info@urosbrkic.com
                  </Link>
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Instagram sx={{ color: "#4DA6FF"}} />
                <Typography sx={{ color: "#f5f5f5" }}>
                  
                  <Link href="https://instagram.com/urosbrkic969" target="_blank" underline="hover" sx={{ mt: "5px", ml: "20px", color: "#f5f5f5", fontWeight: 400, fontSize:"18px" }}>
                    urosbrkic969
                  </Link>
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <XIcon sx={{ color: "#4DA6FF"}} />
                <Typography sx={{ color: "#f5f5f5" }}>
                  <Link href="https://x.com/@urosbrkic969" target="_blank" underline="hover" sx={{ color: "#f5f5f5", ml: "20px", fontWeight: 400, fontSize:"18px" }}>
                    urosbrkic969
                  </Link>
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
