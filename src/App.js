import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Results from './pages/Results';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#689f38',
    },
    secondary: {
      main: '#a5d6a7',
    },
  },
});

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <SignIn />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/results">
              <Results />
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
