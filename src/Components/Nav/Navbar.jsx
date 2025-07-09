import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./../../Images/Logo.png";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const pages = [
  { link: "home", text: "Home" },
  { link: "about-us", text: "O nama" },
  { link: "car", text: "O kolima" },
  { link: "events", text: "Kalendar" },
];
const mobilePages = [
  { link: "home", text: "Home" },
  { link: "biography", text: "Biografija" },
  { link: "team", text: "O timu" },
  { link: "car", text: "O kolima" },
  { link: "events", text: "Kalendar" },
  { link: "news", text: "Novosti"},
  { link: "contact", text: "Kontakt" },
];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: "180px", paddingTop: "100px", backgroundColor: "#222" }}
      onClick={toggleDrawer(false)}
    >
      <List sx={{ color: "#000" }}>
        {mobilePages.map((page) => (
          <ListItem sx={{ color: "#fff" }} key={page.text} disablePadding>
            <ListItemButton component={Link} to={`/${page.link}`}>
              <ListItemText
                sx={{
                  
                  textAlign: "left",
                  fontSize: "30px",
                  paddingLeft: "40px",
                }}
                primary={page.text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        position: "fixed",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(10px)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{
              height: 75,
              display: { xs: "none", md: "flex" },
              mr: 1,
              paddingLeft: "50px",
            }}
          />

          {/* Mobile menu with Drawer */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={() => setDrawerOpen(!drawerOpen)}
              color="inherit"
            >
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: { backgroundColor: "#222", color: "#fff" },
              }}
            >
              {drawerList}
            </Drawer>
          </Box>

          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{
              height: 75,
              display: { xs: "flex", md: "none" },
              mr: 1,
            }}
          />

          {/* Desktop menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              paddingLeft: "50px",
              gap: "30px",
            }}
          >
            {pages.map((page) => (
              <div key={page.text + "div"}>
                {page.link === "about-us" ? (
                  <>
                    <Button
                      key={page.text}
                      onClick={handleOpenUserMenu}
                      sx={{
                        my: 2,
                        color: "#f4f4f5",
                        display: "block",
                        fontSize: "16px",
                      }}
                    >
                      {page.text}
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorElUser}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                      sx={{
                        
                        color: "#000",
                        ".MuiPaper-root": {
                          backgroundColor: "#222",
                        },
                      }}
                    >
                      <MenuItem
                        component={Link}
                        to={"/biography"}
                        onClick={handleCloseUserMenu}
                        sx={{ color: "#f4f4f5" }}
                      >
                        Biografija
                      </MenuItem>
                      <MenuItem
                        component={Link}
                        to={"/team"}
                        onClick={handleCloseUserMenu}
                        sx={{ color: "#f4f4f5" }}
                      >
                        O timu
                      </MenuItem>
                    </Menu>
                  </>
                ) : (
                  <Button
                    key={page.text}
                    component={Link}
                    to={`/${page.link}`}
                    sx={{
                      my: 2,
                      color: "#f4f4f5",
                      display: "block",
                      fontSize: "16px",
                    }}
                  >
                    {page.text}
                  </Button>
                )}
              </div>
            ))}
          </Box>

          {/* Desktop "Kontakt" button */}
          <Button
            component={Link}
            to={`/contact`}
            sx={{
              my: 2,
              ml: "auto",
              color: "#4DA6FF",
              fontSize: "18px",
              paddingRight: "100px",
              display: { xs: "none", md: "block" },
            }}
          >
            Kontakt
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
