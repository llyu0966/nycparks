import React from 'react';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Icon,
  IconButton,
  Box,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing(3),
    display: 'flex',
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    '& > div': {
      paddingLeft: theme.spacing(1),
    },
  },
  clearSelection: {
    marginRight: theme.spacing(4),
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  label: {
    fontSize: '1.5rem',
  },
  btn: {
    borderRadius: '10px',
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
    playgrounds: false,
    soccer: false,
    baseball: false,
    fitness: false,
    golf: false,
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  const {
    gilad,
    jason,
    antoine,
    playgrounds,
    soccer,
    baseball,
    fitness,
    golf,
  } = state;

  const removeChecks = () => {
    setState({
      gilad: false,
      jason: false,
      antoine: false,
      playgrounds: false,
      soccer: false,
      baseball: false,
      fitness: false,
      golf: false,
    });
  };

  return (
    <div>
      <FormLabel component="legend">
        <Box className={classes.clearSelection} align="right">
          <IconButton
            onClick={removeChecks}
            aria-label="delete"
            color="default"
            className={classes.btn}
          >
            <Icon fontSize="small" className="fas fa-trash" />
            <Typography style={{ marginLeft: '0.5rem' }} variant="button">
              Clear Selection
            </Typography>
          </IconButton>
        </Box>
      </FormLabel>

      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange('gilad')}
                  value="gilad"
                />
              }
              label={
                <div className={classes.icons}>
                  <Icon fontSize="small" className="fas fa-toilet" />
                  <div className={classes.label}>Restrooms</div>
                </div>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={jason}
                  onChange={handleChange('jason')}
                  value="jason"
                />
              }
              label={
                <div className={classes.icons}>
                  <Icon fontSize="small" className="fas fa-dog" />
                  <div className={classes.label}>Dog Parks</div>
                </div>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange('antoine')}
                  value="antoine"
                />
              }
              label={
                <div className={classes.icons}>
                  <Icon fontSize="small" className="fas fa-child" />
                  <div className={classes.label}>Playgrounds</div>
                </div>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={playgrounds}
                  onChange={handleChange('playgrounds')}
                  value="playgrounds"
                />
              }
              label={
                <div className={classes.icons}>
                  <Icon fontSize="small" className="fas fa-basketball-ball" />
                  <div className={classes.label}>Basketball</div>
                </div>
              }
            />
          </FormGroup>
        </FormControl>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={soccer}
                  onChange={handleChange('soccer')}
                  value="soccer"
                />
              }
              label={
                <div className={classes.icons}>
                  <Icon fontSize="small" className="fas fa-futbol" />
                  <div className={classes.label}>Soccer</div>
                </div>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={baseball}
                  onChange={handleChange('baseball')}
                  value="baseball"
                />
              }
              label={
                <div className={classes.icons}>
                  <Icon fontSize="small" className="fas fa-baseball-ball" />
                  <div className={classes.label}>Baseball</div>
                </div>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={fitness}
                  onChange={handleChange('fitness')}
                  value="fitness"
                />
              }
              label={
                <div className={classes.icons}>
                  <Icon fontSize="small" className="fas fa-dumbbell" />
                  <div className={classes.label}>Outdoor fitness</div>
                </div>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={golf}
                  onChange={handleChange('golf')}
                  value="golf"
                />
              }
              label={
                <div className={classes.icons}>
                  <Icon fontSize="small" className="fas fa-golf-ball" />
                  <div className={classes.label}>Golf</div>
                </div>
              }
            />
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
}
