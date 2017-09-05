import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllArtists from "./components/AllArtists";
import Artist from "./components/Artist";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar"


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={AllArtists}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/artist/:id' component={Artist}/>
        </div>
    
      </Router>
    );
  }
}

export default App;
