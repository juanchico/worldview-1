import React, { Component } from "react";
import axios from "axios";
import logo from "./logo2wv.png";
import "./style.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    name:""
  };

  handleInputChange = (event) => {
    // update state values
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
        console.log(this.state);
     });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    let {email, password} = this.state,
        payload = {email, password};
        // send credentials to back-end to check account
    axios.post("/login", payload).then((res) => {
        //console.log(res.data);
      if (res.data) {
        // if successful, set auth value on parent
        this.setState({name:res.data.name});
       this.props.setLogin(res.data);
        this.props.history.push("/");
      }
      else {
        // show error message
        this.setState({
          error: "Failed to log in"
        })
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          </div>
          <div className="col-md-4 text-center">
            <img src={logo} alt=""/>
            <form>
              <input
                className="form-control"
                value={this.state.email}
                name="email"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Email"
              />
              <input
                className="form-control"
                value={this.state.password}
                name="password"
                onChange={this.handleInputChange}
                type="password"
                placeholder="Password"
              />
              <button className="btn btn-lg btn-block" onClick={this.handleFormSubmit}>Submit</button>

              <span>{this.state.error}</span>
            </form>
            <p class="mt-3"><small>Need an account? <a href="/signup">Create your account here.</a></small></p>
            <p class="mt-5 mb-3 text muted"><a href="/">World View</a> &copy; 2019</p>
          </div>
          <div className="col-md-4">
          </div>
        </div>
      </div>
    );
  }
}

export default Login;