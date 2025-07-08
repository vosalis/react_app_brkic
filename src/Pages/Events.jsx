import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import data from "../assets/data/events.json";
import ResponsiveDialog from "../Components/newsModal";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function Events(props) {
  const { loading = false } = props;
  const [openEvent, setOpenEvent] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

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
    <Container sx={{ mt: "100px" }}>
      <Typography variant="h4" sx={{ color: "#4DA6FF", pb: "40px" }}>
        NAŠI DOGAĐAJI
      </Typography>
      <Grid container spacing={4} sx={{ pb: "80px" }}>
        {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
          <Grid item key={index} size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                margin: "0 auto",
                maxWidth: 345,
                minHeight: "330px",
                position: "relative",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(10px)",
                backgroundColor: "rgba(56, 56, 56, 0.5)",
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
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.9rem",
                      md: "1.0rem",
                      lg: "1.1rem",
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
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
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
