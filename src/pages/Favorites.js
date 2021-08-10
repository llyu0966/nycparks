import React, { useEffect } from 'react';
import {
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Container,
  CardHeader,
  IconButton,
  Icon,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import MyAppBar from '../components/Appbar';
import Copyright from '../components/Copyright';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  cardList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: theme.spacing(4),
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
    maxWidth: 400,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '& .textbody': {
      fontSize: '1.5rem',
    },
  },
  media: {
    height: 0,
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
  btn: {
    borderRadius: '10px',
  },
}));

export default function Favorites() {
  const classes = useStyles();

  useEffect(() => {
    document.title = 'NYC Parks - Favorites';
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
              Favorites
            </Typography>
            <div className={classes.cardList}>
              <Card className={classes.card}>
                <CardHeader
                  align="center"
                  title="Sunset Park"
                  subheader="41 St., 44 St., bet. 5 Ave. and 7 Ave."
                />
                <CardMedia
                  className={classes.media}
                  image="https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2019/04/shutterstock_1352970851-1.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Typography variant="body1" color="textPrimary" component="p">
                    With an active recreation center and playground, Sunset Park
                    has visitors even in the colder months of the year. The
                    recreation center has, among other highlights, a media lab a
                    library, a dance room, and a workout room with cardio
                    equipment and free weights.
                  </Typography>
                  <List>
                    <ListItem divider>
                      <ListItemText primary="Facilities:" />
                    </ListItem>
                    <ListItem>
                      <Icon
                        fontSize="small"
                        style={{ marginRight: '0.5rem' }}
                        className="fas fa-basketball-ball"
                      ></Icon>
                      <ListItemText primary="Basketball Courts" />
                    </ListItem>
                    <ListItem>
                      <Icon
                        fontSize="small"
                        style={{ marginRight: '0.5rem' }}
                        className="fas fa-dog"
                      ></Icon>
                      <ListItemText primary="Dog Park" />
                    </ListItem>
                    <ListItem>
                      <Icon
                        fontSize="small"
                        style={{ marginRight: '0.5rem' }}
                        className="fas fa-toilet"
                      ></Icon>
                      <ListItemText primary="Restrooms" />
                    </ListItem>
                    <ListItem>
                      <Icon
                        fontSize="small"
                        style={{ marginRight: '0.5rem' }}
                        className="fas fa-hand-paper"
                      ></Icon>
                      <ListItemText primary="Handball Courts" />
                    </ListItem>
                    <ListItem>
                      <Icon
                        fontSize="small"
                        style={{ marginRight: '0.5rem' }}
                        className="fas fa-futbol"
                      ></Icon>
                      <ListItemText primary="Soccer Field" />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                  <IconButton
                    className={classes.btn}
                    aria-label="remove from favorites"
                  >
                    <FavoriteIcon />
                    <Typography
                      style={{ marginLeft: '0.5rem' }}
                      variant="button"
                    >
                      Unfavorite
                    </Typography>
                  </IconButton>

                  <IconButton className={classes.btn} aria-label="share">
                    <ShareIcon />
                    <Typography
                      style={{ marginLeft: '0.5rem' }}
                      variant="button"
                    >
                      Share
                    </Typography>
                  </IconButton>

                  <IconButton className={classes.btn} aria-label="visit">
                    <Icon className="fas fa-map-marked-alt" />
                    <Typography
                      style={{ marginLeft: '0.5rem' }}
                      variant="button"
                    >
                      Visit
                    </Typography>
                  </IconButton>
                </CardActions>
              </Card>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Typography align="center" variant="h6" color="textPrimary">
            1 park favorited.
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
