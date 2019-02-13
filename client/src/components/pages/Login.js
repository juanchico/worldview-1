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
      <form>
        <input
          value={this.state.email}
          name="email"
          onChange={this.handleInputChange}
          type="text"
          placeholder="email"
        />
        <input
          value={this.state.password}
          name="password"
          onChange={this.handleInputChange}
          type="password"
          placeholder="Password"
        />
        <button onClick={this.handleFormSubmit}>Submit</button>

        <span>{this.state.error}</span>
      </form>
    );
  }
}

export default Login;