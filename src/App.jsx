import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./Components/Nav/Navbar";
import GuestFooter from "./Components/Footer/Footer";
import { Box } from "@mui/material";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Biography from "./Pages/Biography/Biography";
import Contact from "./Pages/Contact.jsx";
import "./App.css";
import Team from "./Pages/My_team.jsx";
import Car from "./Pages/Car.jsx";
import Cookies from "./Pages/Cookiespol.jsx";
import Privacy from "./Pages/Privacypolicy.jsx";
import ScrollToTop from "./Components/ScrollToTop";


import Background1 from "../src/Images/dark-grunge-texture1.png";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Box
          sx={{
            backgroundImage: `url(${Background1})`,
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            justifyContent: "space-between",
          }}
        >
          <ResponsiveAppBar />

          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/car" element={<Car />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            
          </Routes>

          <GuestFooter />
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
