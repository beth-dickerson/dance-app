import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import { Orange500 } from 'material-ui/styles/colors';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import AutoComplete from 'material-ui/AutoComplete';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ShimmyIndexContainer from './containers/shimmyIndexContainer';
import ShimmyShowContainer from './containers/shimmyShowContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router history={browserHistory}>
          <Route path='/' >
            <IndexRoute component={ShimmyIndexContainer} />
            <Route path="/venues" component={ShimmyIndexContainer}/>
            <Route path="/places" component={ShimmyShowContainer}/>
          </Route>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
