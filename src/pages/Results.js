import React from 'react';
import { AppBar, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MyAppBar from '../components/Appbar';
import CardList from '../components/Cardlist';
import Copyright from '../components/Copyright';

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
  cardGrid: {
    paddingTop: theme.spacing(2),
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    padding: theme.spacing(6),
  },
}));

export default function Results() {
  const classes = useStyles();

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
            >
              Results
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <CardList />
          <Typography align="center" variant="h6" color="textPrimary">
            2 parks found.
          </Typography>
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
}
