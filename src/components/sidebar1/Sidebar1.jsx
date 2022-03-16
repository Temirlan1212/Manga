import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, useSearchParams } from "react-router-dom";
import ScrollToColor01 from "../../ScrollToHide";
import { useAuth } from "../../contexts/AuthContext";
import { ADMIN } from "../../helpers/consts";
import SearchIcon from "@mui/icons-material/Search";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import { useEffect } from "react";
import classes from "../Navbar/Navbar.module.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../../assets/mangLogo.png";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Badge,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  useScrollTrigger,
} from "@mui/material";
import { useProducts } from "../../contexts/ProductContext";
import BgColor from "../BgColor/BgColor";

const pages = [];

const settings = ["Profile", "Account", "Dashboard"];

const manga = ["Manga", "Manhwa", "Comics"];

const Sidebar1 = () => {
  const { getProducts, cart } = useProducts();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElManga, setAnchorElManga] = React.useState(null);

  //! search start
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = React.useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);
  //! search end

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenMangaMenu = (event) => {
    setAnchorElManga(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseMangaMenu = () => {
    setAnchorElManga(null);
  };

  const [filter, setFilter] = React.useState(true);
  const { fetchByParams } = useProducts();

  return (
    <ScrollToColor01>
      <AppBar position="standard" className="sidebar_main">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <Avatar
              alt="logo"
              src="https://readmashle.com/wp-content/uploads/2021/04/LOGO-MASHLE-1-1.png"
              sx={{
                width: "200px",
                height: "100px",
                marginTop: "-20px",
              }}
            /> */}
            <div
              style={{
                color: "white",
                fontWeight: "900",
                fontSize: "30px",
                marginBottom: "5px",
              }}
            >
              {" "}
              aniMode
            </div>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <Link to={page.link}>
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            ></Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link to={page.link}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "black",
                      display: "block",
                      fontFamily: "Space Grotesk",
                      fontSize: { xl: "25px", lg: "20px", md: "20px" },
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
              {/* <Button
                onClick={handleOpenMangaMenu}
                sx={{
                  fontFamily: "Space Grotesk",
                  fontSize: "17px",
                  color: "white",
                  fontWeight: "900",
                }}
              >
                catalog
                <ExpandMoreIcon />
              </Button> */}

              {/* filter start */}
              <Menu
                sx={{
                  mt: "45px",
                  marginLeft: "40px",
                  maxHeight: "600px",
                }}
                id="menu-appbar"
                anchorEl={anchorElManga}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElManga)}
                onClose={handleCloseMangaMenu}
              >
                <Paper
                  sx={{
                    background: "transparent",
                    boxShadow: "none",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                  }}
                >
                  <IconButton
                    value="manga"
                    onClick={(e) => fetchByParams("mainType", e.target.value)}
                    label="manga"
                    sx={{
                      color: "brown",
                      fontFamily: "Space Grotesk",
                      fontSize: "20px",
                    }}
                    variant="standard"
                  >
                    manga
                  </IconButton>
                  <IconButton
                    value="manhwa"
                    onClick={(e) => fetchByParams("mainType", e.target.value)}
                    label="manhwa"
                    sx={{
                      color: "brown",
                      fontFamily: "Space Grotesk",
                      fontSize: "20px",
                    }}
                  >
                    manhwa
                  </IconButton>

                  <IconButton
                    value="manhua"
                    onClick={(e) => fetchByParams("mainType", e.target.value)}
                    label="manhua"
                    sx={{
                      color: "brown",
                      fontFamily: "Space Grotesk",
                      fontSize: "20px",
                    }}
                  >
                    manhua
                  </IconButton>

                  <IconButton
                    value="comics"
                    onClick={(e) => fetchByParams("mainType", e.target.value)}
                    label="comics"
                    sx={{
                      color: "brown",
                      fontFamily: "Space Grotesk",
                      fontSize: "20px",
                    }}
                  >
                    comics
                  </IconButton>

                  <IconButton
                    value="all"
                    onClick={(e) => fetchByParams("mainType", e.target.value)}
                    label="all"
                    sx={{
                      color: "brown",
                      fontFamily: "Space Grotesk",
                      fontSize: "20px",
                    }}
                  >
                    all
                  </IconButton>
                </Paper>
              </Menu>

              {/* filter end */}
            </Box>
            <form action="javascript:" className={classes.searchbar}>
              <input
                type="search"
                pattern=".*\S.*"
                required
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button type="submit">
                <SearchIcon sx={{ color: "white" }} />
              </Button>
            </form>

            {/* ADMIN PANEL */}
            {email == ADMIN ? (
              <Link to="/admin">
                <Button
                  sx={{
                    color: "white",
                    display: "block",
                    fontSize: 15,
                    fontFamily: "Monospace",
                  }}
                >
                  ADMIN PANEL
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/cart">
                  <Button>
                    <IconButton sx={{ color: "white" }}>
                      <Badge
                        color="secondary"
                        badgeContent={cart?.products ? cart.products.length : 0}
                      >
                        <BookmarkBorderIcon />
                      </Badge>
                    </IconButton>
                  </Button>
                </Link>

                {/* <Link to="/favorite">
                  <Button>
                    <IconButton sx={{ color: "white" }}>
                      <Badge
                        color="secondary"
                        badgeContent={cart?.products ? cart.products.length : 0}
                      >
                        <BookmarkBorderIcon />
                      </Badge>
                    </IconButton>
                  </Button>
                </Link> */}
              </>
            )}
            {/* ADMIN PANEL */}

            <BgColor />
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <Box sx={{ display: "flex" }}>
                  <IconButton onClick={handleOpenUserMenu} sx={{}}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvjQCBx7sceK8XE54kOQsJ6jxfy4j4TligSg&usqp=CAU"
                    />
                  </IconButton>
                </Box>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* login/logout */}

                <Box sx={{ flexGrow: 0 }}>
                  {email ? (
                    <MenuItem
                      sx={{
                        display: "block",
                        fontFamily: "Monospace",
                      }}
                      onClick={handleLogout}
                    >
                      Logout
                    </MenuItem>
                  ) : null}

                  {email ? null : (
                    <Link to="/auth">
                      <MenuItem
                        sx={{
                          display: "block",
                          fontFamily: "Monospace",
                        }}
                        onClick={handleLogout}
                      >
                        Login
                      </MenuItem>
                    </Link>
                  )}
                </Box>

                {/* login/logout */}

                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}

                <Divider />
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ScrollToColor01>
  );
};
export default Sidebar1;
