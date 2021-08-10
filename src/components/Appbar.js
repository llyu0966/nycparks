import React from 'react';
import { withRouter } from 'react-router';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  Icon,
} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AccountCircle, MoreVert } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  btn: {
    borderRadius: '10px',
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = (e) => {
    if (e.target.id === 'logout') {
      props.history.push('/');
    }
    if (e.target.id === 'profile') {
      props.history.push('/profile');
    }
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleClick = (e) => {
    console.log(e.currentTarget.id);
    props.history.push(e.currentTarget.id);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem id="profile" onClick={handleMenuClose}>
        Profile
      </MenuItem>
      <MenuItem id="logout" onClick={(e) => handleMenuClose(e)}>
        Log out
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          onClick={(e) => handleClick(e)}
          aria-label="search for parks"
          color="inherit"
          id="search"
        >
          <Badge color="secondary">
            <Icon className="fas fa-search" />
          </Badge>
          <Typography style={{ marginLeft: '10px' }} variant="button">
            Search
          </Typography>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          onClick={(e) => handleClick(e)}
          aia-label="show favorites"
          color="inherit"
          id="favorites"
        >
          <Badge color="secondary">
            <Icon className="fas fa-heart" />
          </Badge>
          <Typography style={{ marginLeft: '10px' }} variant="button">
            Favorites
          </Typography>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
          <Typography style={{ marginLeft: '10px' }} variant="button">
            Profile
          </Typography>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            NYC Parks
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              id="search"
              onClick={(e) => handleClick(e)}
              aria-label="search for parks"
              color="inherit"
              className={classes.btn}
            >
              <Badge color="secondary">
                <Icon className="fas fa-search" />
              </Badge>
              <Typography
                style={{ marginLeft: '0.5rem', fontSize: '1rem' }}
                variant="button"
              >
                Search
              </Typography>
            </IconButton>
            <IconButton
              onClick={(e) => handleClick(e)}
              aria-label="show favorites"
              color="inherit"
              id="favorites"
              className={classes.btn}
            >
              <Badge color="secondary">
                <Icon className="fas fa-heart" />
              </Badge>
              <Typography
                style={{ marginLeft: '0.5rem', fontSize: '1rem' }}
                variant="button"
              >
                Favorites
              </Typography>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className={classes.btn}
            >
              <AccountCircle />
              <Typography
                style={{ marginLeft: '0.5rem', fontSize: '1rem' }}
                variant="button"
              >
                Profile
              </Typography>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreVert />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default withRouter(Navbar);
