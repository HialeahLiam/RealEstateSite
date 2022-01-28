import React from 'react';
import {
  Grid, Typography, Box, Card, Button, CardMedia,
} from '@mui/material';

export default function Home() {
  return (

    <Grid
      container
      direction="column"
      spacing={10}
    >

      <Grid
        item
        container
        sx={{
          pt: 20,
          // backgroundImage: 'url(/static/images/street.jpg)',
          // backgroundSize: 'cover',
          // backgroundPosition: '0% 70%',
        }}
      >

        {/* <Grid item sm={3}>
          <Card>
            <CardMedia
              component="img"
              image="/static/images/palm1.jpg"
              alt="palm trees"
              sx={{ height: 700 }}
            />

          </Card>
        </Grid> */}

        <Grid
          item
          container
          flexDirection="column"
          alignItems="center"
          my={15}
          // sm={6}
        >
          <Grid item>
            <Typography
              variant="h2"
              textAlign="center"
            >
              This is Angela
            </Typography>
            <Typography
              my={5}
              textAlign="center"
            >
              Something about her.
              {' '}
              <br />
              Something else
            </Typography>
          </Grid>
          <Grid
            item
            sx={{ mt: 5 }}
          >
            <Button variant="outlined" sx={{ mx: 5 }}>Buy</Button>
            <Button variant="outlined" sx={{ mx: 5 }}>Sell</Button>
            <Button variant="outlined" sx={{ mx: 5 }}>Contact</Button>
          </Grid>
        </Grid>

        {/* <Grid item sm={3}>
          <Card>
            <CardMedia
              component="img"
              image="/static/images/florida.jpg"
              alt="palm trees"
              sx={{ height: 700 }}
            />

          </Card>
        </Grid> */}

      </Grid>

      <Grid item container>
        <Box sx={{ py: 10, pr: 20, backgroundColor: 'tertiary.main' }}>
          <Card variant="outline" sx={{ }} />
        </Box>
      </Grid>

      <Grid item>
        <Card sx={{
          backgroundColor: 'primary.light', color: 'white', width: 1, height: 'auto',
        }}
        >

          <Box my={10} ml={10}>
            <Typography variant="h2">
              First Review
              {' '}
              <br />
              Going great
            </Typography>
            <Typography variant="subtitle1">Going good</Typography>
          </Box>

          <Box my={10} mr={10}>
            <Typography variant="h2" align="right">Second Review</Typography>

            <Typography variant="subtitle1" align="right">Going good</Typography>
          </Box>

          <Box my={10} ml={10}>
            <Typography variant="h2">
              Third Review
              {' '}
              <br />
              Going great
            </Typography>
            <Typography variant="subtitle1">Going good</Typography>
          </Box>
        </Card>
      </Grid>

    </Grid>
  );
}
