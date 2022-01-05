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
import NextLinkComposed from "../Link";
import { Stack } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const pages = [
  { title: "Home", link: "/" },
  { title: "Products", link: "/" },
  { title: "Pricing", link: "/" },
  { title: "Blog", link: "/" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const authButtons = ["Login", "Signup"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElAuth, setAnchorElAuth] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenUserAuth = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAuth(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseUserAuth = () => {
    setAnchorElAuth(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            GyanDaan
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
                <NextLinkComposed href={page.link} noLinkStyle={true}>
                  <MenuItem
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    sx={{ color: "black" }}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </NextLinkComposed>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            GyanDaan
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <NextLinkComposed href={page.link} noLinkStyle={true}>
                <Button
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              </NextLinkComposed>
            ))}
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
          >
            <NextLinkComposed href="/auth/login">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                {authButtons[0]}
              </Button>
            </NextLinkComposed>
            <NextLinkComposed href="/auth/signup">
              <Button
                variant="outlined"
                color="inherit"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {authButtons[1]}
              </Button>
            </NextLinkComposed>
          </Stack>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="auth-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserAuth}
              color="inherit"
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="auth-appbar"
              anchorEl={anchorElAuth}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElAuth)}
              onClose={handleCloseUserAuth}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {authButtons.map((btn) => (
                <NextLinkComposed
                  href={`/auth/${btn.toLowerCase()}`}
                  noLinkStyle={true}
                >
                  <MenuItem key={btn} onClick={handleCloseUserAuth}>
                    <Typography textAlign="center" sx={{ color: "black" }}>
                      {btn}
                    </Typography>
                  </MenuItem>
                </NextLinkComposed>
              ))}
            </Menu>
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
