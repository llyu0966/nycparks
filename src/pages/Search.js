import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import {
  AppBar,
  Button,
  Box,
  TextField,
  Container,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MyAppBar from '../components/Appbar';
import Copyright from '../components/Copyright';
import Checkboxes from '../components/Checkboxes';
import Slider from '../components/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    padding: theme.spacing(6),
  },
  search: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexWrap: 'nowrap',
    '& > *': {
      padding: '4px',
    },
  },
  slider: {
    display: 'flex',
    justifyContent: 'center',
    // paddingBotton: theme.spacing(2)
  },
  filterCard: {
    padding: theme.spacing(5),
    margin: theme.spacing(4),
    backgroundColor: theme.palette.grey[100],
    '& .options': {
      marginTop: theme.spacing(5),
      paddingTop: theme.spacing(3),
      color: theme.palette.text.primary,
    },
  },
}));

const Search = (props) => {
  const classes = useStyles();

  const handleSubmit = () => {
    props.history.push('/results');
  };
  const [zipcode, setZipcode] = React.useState({
    loaded: false,
    value: '11220',
  });

  useEffect(() => {
    document.title = 'NYC Parks - Search';
  });

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyC4I368GXOMsIzYvM1eXDcRv3fisYSd6iE`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.results[0]) {
              for (
                var i = 0;
                i < data.results[0].address_components.length;
                i++
              ) {
                var types = data.results[0].address_components[i].types;

                for (var typeIdx = 0; typeIdx < types.length; typeIdx++) {
                  if (types[typeIdx] === 'postal_code') {
                    console.log(
                      data.results[0].address_components[i].short_name ===
                        '11218'
                    );
                    setZipcode({
                      loaded: true,
                      value: data.results[0].address_components[i].short_name,
                    });
                  }
                }
              }
            } else {
              alert('Zipcode unable to be found.');
            }
          });
      });
    } else {
      alert(
        'Geolocation is not supported in your browser. Please input the zipcode manually.'
      );
    }
  }, [zipcode.loaded]);

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <MyAppBar />
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Search for Parks!
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <div className={classes.search}>
            <Typography variant="h6" color="textPrimary">
              Your location:
            </Typography>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField
                type="number"
                id="zipcode"
                label="Zip Code"
                variant="standard"
                required
                value={zipcode.value}
                onChange={(e) =>
                  setZipcode({ ...zipcode, value: e.target.value })
                }
              />
            </form>
          </div>

          <Box borderRadius="10px" className={classes.filterCard}>
            <div className={classes.options}>
              <Typography align="center" variant="h4" color="textPrimary">
                Apply Filters
              </Typography>
              <Checkboxes color="textPrimary" />
            </div>
            <div className={classes.slider}>
              <Slider />
            </div>
          </Box>

          <Box align="center">
            <Button
              style={{ fontSize: '1.3rem' }}
              onClick={handleSubmit}
              variant="contained"
              color="primary"
            >
              Search
            </Button>
          </Box>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          The Parks App for NYC!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </div>
  );
};

export default withRouter(Search);
