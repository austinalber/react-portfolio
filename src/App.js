import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home.js";
import Contact from "./pages/Contact/Contact.js";
import Portfolio from "./pages/Portfolio/Portfolio.js";

function App() {
  return (
    <Router>
      <div className="outer-layer">
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
