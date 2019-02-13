import React, { Component } from "react";
import axios from "axios";

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
          <div className="col-md-4">
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
          </div>
          <div className="col-md-4">
          </div>
        </div>
      </div>
    );
  }
}

export default Login;