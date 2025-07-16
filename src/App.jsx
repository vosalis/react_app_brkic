import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./Pages/Home";
import News from "./Pages/News.jsx";
import Events from "./Pages/Events.jsx";
import Biography from "./Pages/Biography/Biography";
import Contact from "./Pages/Contact.jsx";
import Team from "./Pages/My_team.jsx";
import Car from "./Pages/Car.jsx";
import Cookies from "./Pages/Cookiespol.jsx";
import Privacy from "./Pages/Privacypolicy.jsx";

import ResponsiveAppBar from "./Components/Nav/Navbar";
import GuestFooter from "./Components/Footer/Footer";

import ScrollToTop from "./Components/ScrollToTop";
import Background1 from "../src/Images/dark-grunge-texture1.png";

export default function App() {
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
          <Box sx={{ maxWidth: "1440px", margin: "auto", width: "100%" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/events" element={<Events />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<Team />} />
              <Route path="/car" element={<Car />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
            </Routes>
          </Box>
          <GuestFooter />
        </Box>
      </BrowserRouter>
    </>
  );
}
