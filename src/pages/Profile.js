import React, { useEffect } from 'react';
import { AppBar, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MyAppBar from '../components/Appbar';
import Copyright from '../components/Copyright';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
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
    backgroundColor: theme.palette.background.paper,
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
  filter: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(3),
    color: theme.palette.text.primary,
    '& > *': {
      paddingBottom: theme.spacing(2),
    },
  },
  slider: {
    display: 'flex',
    justifyContent: 'center',
    // paddingBotton: theme.spacing(2)
  },
  filters: {
    paddingBottom: theme.spacing(3),
    marginBottom: theme.spacing(4),
    backgroundColor: theme.palette.grey[100],
  },
}));

export default function Profile() {
  const classes = useStyles();

  useEffect(() => {
    document.title = 'NYC Parks - Profile';
  });

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
              Profile
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Typography variant="h6" color="textPrimary">
            No profile found.
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
