import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import data from "../assets/data/events.json";
import ResponsiveDialog from "../Components/newsModal";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useNavigate, useSearchParams } from "react-router-dom";


export default function Events(props) {
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
    
    <Container sx={{ mt: "100px" }}>
      <Typography variant="h4" sx={{ color: "#4DA6FF", pb: "40px" }}>
        OUR EVENTS
      </Typography>
      <Grid container spacing={4} sx={{ pb: "80px", 
    justifyContent: "center"}}>
        {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
          <Grid item key={index} size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                maxWidth: 345,
                minHeight: "300px",
                position: "relative",
                backgroundColor: "#343434",
                animation: `${appear} linear`,
                animationTimeline: "view()",
                animationRange: "enter 0% cover 40%",
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={item.src}
                title="green iguana"
              />
              <CardContent sx={{ color: "#fff" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.text}
                </Typography>
              </CardContent>
              <CardActions sx={{ position: "absolute", bottom: "5px" }}>
                <Button
                  onClick={() => {
                handleOpenEvent(item)
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
