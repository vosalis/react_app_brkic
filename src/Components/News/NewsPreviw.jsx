import data from "../../assets/data/events.json";
import {
  Card,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Box,
  Grid,
  CardContent
} from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ResponsiveDialog from "../newsModal";

export default function Media(props) {
  const { loading = false } = props;

  const [openEvent, setOpenEvent] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get("name")) {
      setOpenEvent(
        data.find((event) => event.title === searchParams.get("name"))
      );
    }
  }, []);

  const handleCloseEvent = () => {
    setOpenEvent(null);
    setSearchParams("");
  };

  const handleOpenEvent = (item) => {
    setOpenEvent(data.find((event) => event.title === item.title));
    setSearchParams(`name=${item.title}`);
  };

  return (
    <Box sx={{}}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ padding: { xs: "0 30px", md: "0 0" } }}
      >
        {(loading ? Array.from(new Array(3)) : data.slice(0, 3)).map(
          (item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 4 }}>
              <Card
                sx={{
                  background:
                    "linear-gradient(100deg, rgba(42, 40, 40, 0.8), rgba(56, 56, 56, 0.8))",
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.4)",
                  borderRadius: "5px",
                  margin: { xs: "0 auto", md: "0 0" },
                  maxWidth: 500,
                  minHeight: "360px",
                  position: "relative",
                }}
              >
                <Box sx={{ height: 200, overflow: "hidden" }}>
                  <CardMedia
                    sx={{
                      height: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "transform 0.4s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                    loading="lazy"
                    image={`${import.meta.env.BASE_URL}${item.src}`}
                    title="green iguana"
                  />
                </Box>
                <CardContent sx={{ color: "#fff" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      color: "#f5f5f5",
                      fontWeight: 300,
                      fontSize: {
                        xs: "1.1rem",
                        sm: "0.9rem",
                        md: "1.2rem",
                      },
                      pb: "15px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.text}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ position: "absolute", bottom: "5px", right: "15px" }}
                >
                  <Button
                    onClick={() => {
                      handleOpenEvent(item);
                    }}
                    sx={{
                      marginLeft: "auto",
                      padding: "5px 15px",
                      marginTop: "30px",
                      float: "right",
                      color: "#4DA6FF",
                      fontSize: "16px",
                      fontWeight: "400",
                      border: "1px solid rgba(77, 166, 255, 0.4)",
                      borderRadius: "5px",
                      background: "transparent",
                      "&:hover": {
                        border: "1px solid rgb(253, 253, 253)",
                        backgroundColor: "rgb(253, 253, 253)",
                        color: "#000",
                      },
                    }}
                  >
                    Saznaj više
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        )}
      </Grid>
      <Button
        variant="contained"
        onClick={() => navigate("/news")}
        sx={{
          height: "60px",
          width: "160px",
          marginTop: "30px",
          marginRight: {xs: "30px", md: "0px"},
          float: "right",
          color: "#4DA6FF",
          fontSize: "19px",
          fontWeight: "400",
          border: "1px solid rgba(77, 166, 255, 0.4)",
          borderRadius: "5px",
          background:
            "linear-gradient(100deg, rgba(42, 40, 40, 0.8), rgba(56, 56, 56, 0.8))",
          "&:hover": {
            border: "1px solid rgb(253, 253, 253)",
            background: "rgb(253, 253, 253)",
            color: "#000",
          },
        }}
      >
        SVE NOVOSTI
      </Button>
      {openEvent && (
        <ResponsiveDialog
          open={openEvent ? true : false}
          onClose={handleCloseEvent}
          title={openEvent.title}
          description={openEvent.channel}
          img={openEvent.src}
        />
      )}
    </Box>
  );
}
