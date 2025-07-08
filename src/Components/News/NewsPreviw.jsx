import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import data from "../../assets/data/events.json";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
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
    <Container>
      <Grid container spacing={2} justifyContent="center">
        {(loading ? Array.from(new Array(3)) : data.slice(0, 3)).map(
          (item, index) => (
            <Grid
              item
              key={index}
              size={{ xs: 12, sm: 4 }}
              sx={{ justifyItems: "center" }}
            >
              <Card
                sx={{
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
                  margin: "0 auto",
                  maxWidth: 360,
                  minHeight: "340px",
                  position: "relative",
                  backgroundColor: "rgba(56, 56, 56, 0.8)",
                }}
              >
                <Box sx={{height: 200, overflow: "hidden"}}>
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
                      fontSize: {
                        xs: "1rem",
                        sm: "0.9rem",
                        md: "1.1rem",
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
                <CardActions sx={{ position: "absolute", bottom: "5px" }}>
                  <Button
                    onClick={() => {
                      handleOpenEvent(item);
                    }}
                    size="small"
                  >
                    Saznaj više
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        )}
      </Grid>
      {openEvent && (
        <ResponsiveDialog
          open={openEvent ? true : false}
          onClose={handleCloseEvent}
          title={openEvent.title}
          description={openEvent.channel}
          createdAt={openEvent.createdAt}
          img={openEvent.src}
        />
      )}
    </Container>
  );
}
