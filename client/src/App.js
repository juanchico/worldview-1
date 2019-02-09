import React, { Component } from "react";
import "./App.css";
import BasicMap from "./components/Map/map.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Feed from "./components/pages/Feed";
import Country from "./components/pages/Country";
import Profile from "./components/pages/Profile";
import FProfile from "./components/pages/FProfile";
// import Search from "./components/pages/Search";
import ErrorPage from "./components/pages/Error";

class App extends Component {

  divStyle = {
    backgroundColor: "#1a3dee", 
    height: "100%"
  }
  render() {
    return (
      <div style={this.divStyle}>
      <div className="container">
        <Router>
        <div>
        <NavBar />
        <Switch>
        <Route exact path="/" component={BasicMap} />
        <Route exact path="/map" component={BasicMap} />
        <Route exact path="/country/:name" component={Country} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/fprofile/:id" component={FProfile} />
        <Route path="/*"  component={ErrorPage} /> 
        <div>
        <BasicMap /> 
        </div>
        </Switch>     
      </div>
        </Router>
        </div>
      </div>
    );
  }
}
export default App;
