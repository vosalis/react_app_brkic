import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

export default function CountdownTimer({ targetDate }) {
  const timeStyle = {
    fontFamily: "Bebas Neue, sans-serif !important",
    fontSize: { xs: "60px", md: "90px" },
    color: "#fff",
    textAlign: "center",
    width: { xs: "80px", md: "120px" },
  };

  const labelStyle = {
    fontSize: { xs: "15px", md: "25px" },
    letterSpacing: "1px",
    color: "#bfbfbf",
    marginTop: "-8px",
  };
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dana: Math.floor(difference / (1000 * 60 * 60 * 24)),
        sata: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minuta: Math.floor((difference / 1000 / 60) % 60),
        sekunda: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        dana: 0,
        sata: 0,
        minuta: 0,
        sekunda: 0,
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Box display="flex" mt={2} justifyContent="center" gap={2}>
      {["dana", "sata", "minuta", "sekunda"].map((unit) => (
        <Box key={unit}>
          <Typography sx={{ ...timeStyle }}>
            {String(timeLeft[unit]).padStart(2, "0")}
          </Typography>
          <Typography sx={{ ...labelStyle, paddingBottom: "20px" }}>
            {unit.toUpperCase()}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
