import React from 'react';
import {
  AppBar, Grid, Link as MuiLink, Toolbar, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const navLinkCssProperties = {
  mx: 5,
  fontFamily: 'Sahitya',
  fontSize: '23px',
};

function Header() {
  return (
    /*
    position='static' means app bar does not move with scrolling
    */
    <AppBar
      position="static"
      variant="elevation"
      sx={{
        backgroundColor: 'primary.main',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'center',
          height: '104px',
        }}
      >

        <MuiLink
          component={Link}
          to="/about"
          color="inherit"
          underline="none"
        >
          <Typography
            sx={{
              mx: navLinkCssProperties.mx,
              fontFamily: navLinkCssProperties.fontFamily,
              fontSize: navLinkCssProperties.fontSize,
            }}
          >
            About

          </Typography>
        </MuiLink>

        <MuiLink
          component={Link}
          to="/"
          color="inherit"
          underline="none"
        >
          <Typography
            sx={{
              mx: navLinkCssProperties.mx,
              fontFamily: navLinkCssProperties.fontFamily,
              fontSize: navLinkCssProperties.fontSize,
            }}
          >
            Contact

          </Typography>
        </MuiLink>

        <MuiLink
          component={Link}
          to="/"
          color="secondary.main"
          underline="none"

        >
          <Typography
            fontFamily="Rufina"
            fontSize="30px"
            sx={{
              border: 2,
              borderColor: 'secondary.main',
              px: 3,
              py: 1,
              mx: 20,
            }}
          >
            Angela Idrovo
          </Typography>
        </MuiLink>

        <MuiLink
          component={Link}
          to="/seller"
          color="inherit"
          underline="none"
        >
          <Typography
            sx={{
              mx: navLinkCssProperties.mx,
              fontFamily: navLinkCssProperties.fontFamily,
              fontSize: navLinkCssProperties.fontSize,
            }}
          >
            Seller

          </Typography>
        </MuiLink>

        <MuiLink
          component={Link}
          to="/buyer"
          color="inherit"
          underline="none"
        >
          <Typography
            sx={{
              mx: navLinkCssProperties.mx,
              fontFamily: navLinkCssProperties.fontFamily,
              fontSize: navLinkCssProperties.fontSize,
            }}
          >
            Buyer

          </Typography>
        </MuiLink>

      </Toolbar>
    </AppBar>
  );
}

export default Header;
