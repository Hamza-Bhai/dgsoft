import React from "react";
import "./App.css";
import Home from "./pages/home";
import Services from "./pages/services/";
import About from "./pages/about";
import Work from "./pages/work";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navigation from "./components/navigation/";
import Website from "./pages/work/website";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
          <Route exact path="/work/website">
            <Website />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;



