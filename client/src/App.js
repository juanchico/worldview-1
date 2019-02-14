import React, { Component } from "react";
import "./App.css";
import BasicMap from "./components/Map/map.js"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar/index";
import Feed from "./components/pages/Feed/index";
import Country from "./components/pages/Country/index";
import Profile from "./components/pages/Profile/index";
import FProfile from "./components/pages/FProfile/index";
import SignUp from "./components/pages/signup/SignUp";
import Login from "./components/pages/Login/index";
import ErrorPage from "./components/pages/Error/index";

class App extends Component {

  divStyle = {
    backgroundColor: "#00000", 
    height: "175%"
  }
  state = {
    loaded: false,
    authenticated: false,
    loggedOut:false
    
  };

  componentDidMount() {
    // check if user has already logged in successfully
    axios.get("/auth").then((res) => {
      
      this.setState({
        loaded: true,
        authenticated: res.data,
        
      });
    });
  }
  handleLogOut = ()=>{
    axios.get("/logout").then((res)=>{
      this.setState({
        authenticated: false
      });
    });
  }
  setLogin = (current) => {
    this.setState({
      authenticated: current
    });
  };
  render() {
  if (!this.state.loaded) {
    return null;
  }
  return (
    <div style={this.divStyle}>
      <div className="container">
        <Router>
          <div>
          <NavBar 
            navLogin={!this.state.authenticated ?"login":null}
            navSignin={!this.state.authenticated ?"SignUp":null}
            navOut = {!this.state.authenticated? null:"Log Out"}
            navP = {!this.state.authenticated? null:"Profile"}
            navF = {!this.state.authenticated? null:"Friends"}
            navM = {!this.state.authenticated? null:"Map"}
            handleLogOut={this.handleLogOut}
            />
            <Switch>
              <Route exact path="/signup" render={(props) => <SignUp {...props}  setLogin={this.setLogin}/>} />
              <Route exact path="/login" render={(props) => <Login {...props}  setLogin={this.setLogin}/>} />
              {!this.state.authenticated ? <Redirect to="/login" /> : null}
        <Route exact path="/" component={BasicMap} />
        <Route exact path="/map" component={BasicMap} />
        <Route exact path="/country/:name" component={Country} />
        <Route exact path="/Feed" render={(props) => <Feed {...props} current={this.state.authenticated}  setLogin={this.setLogin}/>} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/fprofile/:_id" render={(props) => <FProfile {...props} current={this.state.authenticated}  setLogin={this.setLogin}/>} />
        <Route exact path="/signup" component={SignUp} />
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
