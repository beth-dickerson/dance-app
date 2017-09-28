import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import ShimmyShowContainer from './show/shimmyShowContainer';
import VenuesContainer from './show/VenuesContainer';
// import Home from './views/Home';
// import Users from './views/Users';
// import Venues from './views/Venues';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
// import Colors from 'material-ui/styles/colors';

injectTapEventPlugin();

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleClose = () => this.setState({open: false});

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} style={{
          backgroundColor: '#212121'
        }}>
            <div>
              <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={() => this.setState({open: !this.state.open})}
                style={{
                backgroundColor: '#D500F9'
              }}
              />
              <Drawer
                open={this.state.open}
                docked={false}
                onRequestChange={(open) => this.setState({open})}
              >
                <NavLink activeClassName='active' exact to='/home'>
                  <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
                </NavLink>
                <NavLink activeClassName='active' to='/users'>
                  <MenuItem onTouchTap={this.handleClose}>Users</MenuItem>
                </NavLink>
                <NavLink activeClassName='active' to='/venues'>
                  <MenuItem onTouchTap={this.handleClose}>Venues</MenuItem>
                </NavLink>
              </Drawer>

              <Route exact path='/home' render={() => <h1>Home</h1>} />
              <Route exact path='/users' render={() => <h1>Users</h1>} />
              <Route exact path='/venues' render={() => <h1>Venues</h1>} />

              <h1>Index</h1>
              <VenuesContainer />

              <BottomNavigation selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem
                  label="Recents"
                  icon={recentsIcon}
                  onClick={() => this.select(0)}
                />
                <BottomNavigationItem
                  label="Favorites"
                  icon={favoritesIcon}
                  onClick={() => this.select(1)}
                />
                <BottomNavigationItem
                  label="Nearby"
                  icon={nearbyIcon}
                  onClick={() => this.select(2)}
                />
              </BottomNavigation>
            </div>
          </MuiThemeProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
