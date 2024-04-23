import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Nav, Logo, Search } from "./style";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const navItems = ['BoshSahifa', 'Sanoat', 'Aloqa'];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const navigation = (route) => {
    navigate(route);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ width: '100%' }}>
              <Nav>
                <Nav.Column>
                  <Logo />
                  <h3>
                    <span>ECO</span> MONITORING
                  </h3>
                  <Search />
                </Nav.Column>
                <Nav.Column>
                  <List sx={{ display: 'flex' }}>
                    {navItems.map((item) => (
                      <ListItem key={item} disablePadding>
                        {item === 'BoshSahifa' ? (
                          <ListItemButton onClick={() => navigation('/home')} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                          </ListItemButton>
                        ) : item === 'Sanoat' ? (
                          <ListItemButton aria-controls="about-menu" aria-haspopup="true" onClick={handleClick}>
                            <ListItemText primary={item} />
                          </ListItemButton>
                        ) : (
                          <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                          </ListItemButton>
                        )}
                      </ListItem>
                    ))}
                  </List>
                  <Menu
                    id="about-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => navigation('/automobilSanoat')}>Avtomobil Sanoati</MenuItem>
                    <MenuItem onClick={() => navigation('/atmosferaHavosiniKuzatishTizimlari')}>Atmosfera havosini kuzatish tizimlari</MenuItem>
                    <MenuItem onClick={handleClose}>Emissiya monitoringi tizimlari</MenuItem>
                    <MenuItem onClick={handleClose}>Yoqilgi katolizatorlari</MenuItem>
                    <MenuItem onClick={handleClose}>Namlik monitoringi</MenuItem>
                    <MenuItem onClick={handleClose}>Siqilgan havo va gazlarni texnologiyasi</MenuItem>
                  </Menu>
                </Nav.Column>
              </Nav>
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Outlet />
    </React.Fragment>
  );
};

export default Navbar;
