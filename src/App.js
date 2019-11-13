import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Settings from './components/settings';
import Resources from './components/resources';
import Header from './components/header';
import Navbar from './components/navbar';
import { finances, resources, flow, indicators } from './data';

const NavbarContext = React.createContext(null);
const DataContext = React.createContext(null);

function shiftReducer(state, action) {
  return !state;
}

function navbarReducer(state, action) {
  if (action.hide !== undefined) {
    return !action.hide;
  }
  
  return !state;
}

function App() {
  const [dayShift, toggleShiftHook] = useReducer(shiftReducer, true);
  const [navbarVisible, toggleNavbarHook] = useReducer(navbarReducer, true);
  
  useEffect(() => {
    window.addEventListener("resize", resize.bind(this, [false]));
    resize(true);
  }, []);

  var lastWidth = window.innerWidth;
  function resize(initial) {
    if (initial) {
      toggleNavbarHook({hide: window.innerWidth <= 576})
    } else if (lastWidth > 576 && window.innerWidth <= 576) {
      toggleNavbarHook({ hide: true });
    } else if (lastWidth < 576 && window.innerWidth >= 576) {
      toggleNavbarHook({hide: false});
    }

    lastWidth = window.innerWidth;
  }

  const dataState = {
    dayShift: dayShift,
    finances: dayShift ? finances.day : finances.night,
    resources: dayShift ? resources.day : resources.night,
    flow: dayShift ? flow.day : flow.night,
    indicators: dayShift ? indicators.day : indicators.night,
    toggleShift: toggleShiftHook
  }

  const navbarState = {
    visible: navbarVisible,
    toggleNavbar: toggleNavbarHook,
  }

  return (
    <div className={"App " + (navbarVisible ? '' : 'navbar-hidden')}>
      <Router>
        <DataContext.Provider value={dataState}>
          <NavbarContext.Provider value={navbarState}>
            <div className="wrapper-header">
              <Header />
            </div>
            <div className="wrapper-navbar">
              <Navbar />
            </div>
          </NavbarContext.Provider>
          <div className="wrapper-main">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/resources">
                <Resources />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
            </Switch>
          </div>
        </DataContext.Provider>
      </Router>
    </div>
  );
}

export { App, NavbarContext, DataContext };
