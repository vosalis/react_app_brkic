import "./Footer.css";
import { styled, Sheet, Grid } from "@mui/joy";
import { Box, Paper, Container, Typography } from "@mui/material";
import InstagramIcon from "../../../public/Images/Social/icons8-instagram-50.png";
import YoutubeIcon from "../../../public/Images/Social/icons8-youtube-50.png";
import FacebookIcon from "../../../public/Images/Social/icons8-facebook-48.png";
import TiktokIcon from "../../../public/Images/Social/icons8-tiktok-50.png";
import TwitterIcon from "../../../public/Images/Social/icons8-x-50.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import mata from "../../assets/data/sponsor.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const pages = [
  { link: "cookies", text: "Kolačići" },
  { link: "privacy-policy", text: "Politika privatnosti" },
];

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography["body-sm"],
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.background.level1,
  }),
}));

export default function AutoGrid() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    arrows: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 960, // md
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Paper
      component="footer"
      square
      variant="outlined"
      sx={{
        width: "100%",
        mt: "auto",
        backgroundColor: "rgba(56, 56, 56, 0.8);",
      }}
    >
      <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
        <Slider {...settings}>
          {mata.map((item) => (
            <Box
              key={item.alt}
              component="img"
              src={`${import.meta.env.BASE_URL}${item.image}`}
              alt={item.alt}
              sx={{
                height: "70px",
                objectFit: "contain",

                display: "flex",
                justifyContent: "center",
                margin: "30px 0",
                padding: "0 30px",
              }}
            />
          ))}
        </Slider>
      </Box>
      <Box maxWidth="xl" sx={{ marginLeft: "auto", marginRight: "auto" }}>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            textDecoration: "none",
            paddingTop: "120px",
            paddingBottom: "120px",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          <Grid container spacing={3} sx={{ flexGrow: 1 }} gap={3}>
            <Grid md={5} xs={8}>
              <Typography variant="h6">O UROŠU</Typography>
              <Typography sx={{ textAlign: "justify" }}>
                Profesionalni automobilista čija karijera, započeta još u
                detinjstvu iz trkačke porodice, obuhvata više od dve decenije
                uspeha na domaćim i evropskim stazama – od kartinga do prototipa
                Osella PA21.
              </Typography>
            </Grid>

            <Grid md={3} xs={8} sx={{ position: "relative", minHeight: "150px" }}>
              <Typography sx={{}} variant="h6">
                COOKIE AND PRIVACY POLICY
              </Typography>
              <List sx={{ position: "absolute", bottom: 0, display: "inline-block" }}>
                {pages.map((page) => (
                  <ListItem sx={{ padding: 0 }} key={page.text} disablePadding>
                    <ListItemButton
                      sx={{
                        padding: 0,
                        color: "#c3c6d6",
                        ".MuiListItemText-root": {
                          margin: 0,
                        },
                      }}
                      component={Link}
                      to={`/${page.link}`}
                    >
                      <ListItemText primary={page.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                /*justifyContent: "flex-end",  alignItems: "center",*/ color:
                  "#fffef6",
                paddingTop: "30px",
              }}
              md={3}
              xs={8}
            >
              <a href="#">
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  style={{ width: 35, height: 35, marginRight: "10px" }}
                />
              </a>
              <a href="#">
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  style={{ width: 35, height: 35, marginRight: "10px" }}
                />
              </a>

              <a href="#">
                <img
                  src={TiktokIcon}
                  alt="Tiktok"
                  style={{ width: 37, height: 37, marginRight: "10px" }}
                />
              </a>
              <a href="#">
                <img
                  src={TwitterIcon}
                  alt="X"
                  style={{ width: 37, height: 37, marginRight: "10px" }}
                />
              </a>
              <a href="#">
                <img
                  src={YoutubeIcon}
                  alt="Youtube"
                  style={{ width: 35, height: 35 }}
                />
              </a>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
}
