import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Icon,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Favorite, Share } from '@material-ui/icons';

import { List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: theme.spacing(4),
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
  btn: {
    borderRadius: '10px',
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
            With an active recreation center and playground, Sunset Park has
            visitors even in the colder months of the year. The recreation
            center has, among other highlights, a media lab a library, a dance
            room, and a workout room with cardio equipment and free weights.
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
          <IconButton className={classes.btn} aria-label="add to favorites">
            <Favorite />
            <Typography style={{ marginLeft: '0.5rem' }} variant="button">
              Favorite
            </Typography>
          </IconButton>

          <IconButton className={classes.btn} aria-label="share">
            <Share />
            <Typography style={{ marginLeft: '0.5rem' }} variant="button">
              Share
            </Typography>
          </IconButton>

          <IconButton className={classes.btn} aria-label="visit">
            <Icon className="fas fa-map-marked-alt" />
            <Typography style={{ marginLeft: '0.5rem' }} variant="button">
              Visit
            </Typography>
          </IconButton>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardHeader
          align="center"
          title="Prospect Park"
          subheader="Prospect Park W, Parkside Ave. bet. Flatbush Ave., Ocean Ave. and Prospect Park SW"
        />
        <CardMedia
          className={classes.media}
          image="https://cdn.vox-cdn.com/thumbor/QKYEz2582c4yM7Oxg7Vj07QLQl0=/0x0:3000x2002/1200x900/filters:focal(1260x761:1740x1241)/cdn.vox-cdn.com/uploads/chorus_image/image/56142315/prospectpark.0.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body1" color="textPrimary" component="p">
            Designed and constructed over a thirty-year period (1865-1895) by
            Frederick Law Olmsted and Calvert Vaux, the masterminds behind
            Central Park, Prospect Park has blossomed into a premiere
            destination for Brooklyn visitors and residents alike.
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
                className="fas fa-baseball-ball"
              ></Icon>
              <ListItemText primary="Baseball Field" />
            </ListItem>
          </List>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <IconButton className={classes.btn} aria-label="add to favorites">
            <Favorite />
            <Typography style={{ marginLeft: '0.5rem' }} variant="button">
              Favorite
            </Typography>
          </IconButton>

          <IconButton className={classes.btn} aria-label="share">
            <Share />
            <Typography style={{ marginLeft: '0.5rem' }} variant="button">
              Share
            </Typography>
          </IconButton>

          <IconButton className={classes.btn} aria-label="visit">
            <Icon className="fas fa-map-marked-alt" />
            <Typography style={{ marginLeft: '0.5rem' }} variant="button">
              Visit
            </Typography>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
