import React, { useReducer, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/home';
import Settings from './components/settings';
import Resources from './components/resources';
import Header from './components/header';
import Navbar from './components/navbar';

const NavbarContext = React.createContext(null);

function navbarReducer(state, action) {
  if (action.hide !== undefined) {
    return !action.hide;
  }
  
  return !state;
}

function App() {
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

  const state = {
    visible: navbarVisible,
    toggleNavbar: toggleNavbarHook,
  }

  return (
    <div className={"App " + (navbarVisible ? '' : 'navbar-hidden')}>
      <Router>
        <NavbarContext.Provider value={state}>
          <div className="wrapper-header">
            <Header />
          </div>
        </NavbarContext.Provider>
        <div className="wrapper-navbar">
          <Navbar />
        </div>
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
      </Router>
    </div>
  );
}

export { App, NavbarContext };
