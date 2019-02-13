import React, { Component } from "react";
import axios from "axios";
// import "./style.css";

class SignUp extends Component {
  // Setting the component's initial state
  state = {
    name: "",
      email: "",
      password:"",
      country:"",
      age:"",
      favFood:"",
      favSong:"",
      favPlace:"",
      funFact:"",
      countriesVisited:"",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

      // send the entire state object to the back-end
      axios.post("/api/User", this.state).then((response) => {
        if (response.data) {
          // clear state/input values
           // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Hello ${this.state.name} from ${this.state.country}`);
      this.setState({
      name: "",
      email: "",
      password:"",
      country:"",
      age:"",
      favFood:"",
      favSong:"",
      favPlace:"",
      funFact:"",
      countriesVisited:"",
    });
    this.props.setLogin();
    this.props.history.push("/profile");
  } else {
    // mongoose validation failed
          alert("Error. Try Again.");
        }
      });
    };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.name} from {this.state.country}
        </p>
        <form className="form">
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="name"
          />
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
            type="text"
            placeholder="password"
          />
          <input
            value={this.state.country}
            name="country"
            onChange={this.handleInputChange}
            type="text"
            placeholder="country"
          />
          <input
            value={this.state.age}
            name="age"
            onChange={this.handleInputChange}
            type="text"
            placeholder="age"
          />
          <input
            value={this.state.favFood}
            name="favFood"
            onChange={this.handleInputChange}
            type="text"
            placeholder="favFood"
          />
          <input
            value={this.state.favSong}
            name="favSong"
            onChange={this.handleInputChange}
            type="text"
            placeholder="favSong"
          />
          <input
            value={this.state.favPlace}
            name="favPlace"
            onChange={this.handleInputChange}
            type="text"
            placeholder="favPlace"
          />
          <input
            value={this.state.funFact}
            name="funFact"
            onChange={this.handleInputChange}
            type="text"
            placeholder="funFact"
          />
          <input
            value={this.state.countriesVisited}
            name="countriesVisited"
            onChange={this.handleInputChange}
            type="text"
            placeholder="countriesVisited"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUp;

