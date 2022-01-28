import React from 'react';
import {
  AppBar, Grid, Link as MuiLink, Toolbar, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const rightNavLinks = [
  {
    text: 'About',
    route: '/about',
  }, {
    text: 'Random',
    route: '/',
  },

];

const leftNavLinks = [{
  text: 'Sellers',
  route: '/seller',
},
{
  text: 'Buyers',
  route: '/buyer',
}];

function Header() {
  return (
    /*
    position='static' means app bar does not move with scrolling
    */
    <AppBar position="static" variant="elevation" sx={{ backgroundColor: 'primary.dark', mb: 10 }}>
      <Toolbar sx={{ justifyContent: 'center' }}>

        <Grid container>

          <Grid item container alignItems="center" justifyContent="center" xs={4}>

            {leftNavLinks.map((link) => (
              <MuiLink
                color="white"
                underline="none"
                component={Link}
                to={link.route}
                sx={{ mx: 3 }}
                key={link.text}

              >
                <Typography variant="button">{link.text}</Typography>
              </MuiLink>
            ))}
          </Grid>

          <Grid item xs={4}>
            <MuiLink
              color="white"
              underline="none"
              component={Link}
              to="/"
              sx={{ mx: 5 }}
            >
              <Typography
                align="center"
                fontSize={25}
                variant="h1"
                color="secondary.main"
              >
                Angela Idrovo

              </Typography>
            </MuiLink>
          </Grid>

          <Grid item container alignItems="center" justifyContent="center" xs={4}>

            {rightNavLinks.map((link) => (
              <MuiLink
                color="white"
                underline="none"
                component={Link}
                to={link.route}
                sx={{ mx: 3 }}
                key={link.text}
              >
                <Typography variant="button">{link.text}</Typography>
              </MuiLink>
            ))}
          </Grid>
        </Grid>

      </Toolbar>
    </AppBar>
  );
}

export default Header;
