import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import ava1 from "../../assets/manga.png";
import ava2 from "../../assets/manwa.png";
import ava3 from "../../assets/manhua.png";
import ava4 from "../../assets/comics.png";
import ava5 from "../../assets/all.png";

import logo from "../../assets/uzumaki.png";

import { useAuth } from "../../contexts/AuthContext";
import { ADMIN } from "../../helpers/consts";
import SearchIcon from "@mui/icons-material/Search";

import { useEffect } from "react";
import classes from "../Navbar/Navbar.module.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useProducts } from "../../contexts/ProductContext";
import BgColor from "../BgColor/BgColor";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem, Paper, Tooltip } from "@mui/material";
import MainRoutes from "../../MainRoutes";
import ScrollToColor01 from "../../ScrollToHide";
import Sidebar1 from "../sidebar1/Sidebar1";

import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Footer from "../Footer/Footer";

//!  dont touch
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

//!  dont touch

const pages = [
  { name: "PRODUCTS", link: "/products", id: 1 },
  { name: "ABOUTUS", link: "/aboutus", id: 2 },
  { name: "CONTACTS", link: "/contacts", id: 3 },
  { name: "HOME", link: "/", id: 4 },
];

const settings = ["Profile", "Account", "Dashboard"];

export default function MiniDrawer() {
  const navigate = useNavigate();
  //! lastNav start
  const { getProducts } = useProducts();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElManga, setAnchorElManga] = React.useState(null);

  //* search start
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

  //* search end

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

  //! lastNav ends

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        open={open}
        sx={{ backgroundColor: "#1ABC9C" }}
      >
        {/* <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader> */}
        <Divider />

        <List>
          {["home"].map((text, index) => (
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: "14px",
                  color: "white",
                }}
              >
                <HomeIcon onClick={() => navigate("/")} />
                home
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
        <Divider />

        <List>
          {["read"].map((text, index) => (
            <ListItemButton>
              <ListItemIcon
                sx={{
                  marginTop: "120px",
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: "14px",
                  color: "white",
                }}
              >
                <ReadMoreIcon onClick={() => navigate("/products")} />
                read
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>

        <List>
          {["contacts"].map((text, index) => (
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  marginRight: "2px",
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: "11px",
                  color: "white",
                }}
              >
                <CallIcon onClick={() => navigate("/contacts")} />
                contacts
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>

        {/* <List>
          <Button
          <CallIcon /> : <HomeIcon />  <ReadMoreIcon />
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "12px",
              alignItems: "center",
              color: "white",
              textTransform: "lowercase",
              margin: "25px 0 0 0",
            }}
          >
            <img
              style={{ width: "35px" }}
              src={ava1}
              id="manga"
              onClick={(e) => fetchByParams("mainType", e.target.id)}
            />
            home
          </Button>
        </List> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Sidebar1 />
        <MainRoutes />
        <Footer />
      </Box>
    </Box>
  );
}
