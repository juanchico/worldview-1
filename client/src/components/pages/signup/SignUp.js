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
        if (response.data === true) {
          // clear state/input values
           // Alert the user their first and last name, clear 
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
  }
        // mongoose validation failed
        else {
          alert("Error. Try Again.");
        }
      });
    };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <h1>
          Hello {this.state.name} from {this.state.country}
        </h1>
        <form className="form">
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Name"
          />
           <br />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
           <br />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Password"
          />
           <br />
          <input
            value={this.state.country}
            name="country"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Country"
          />
           <br />
          <input
            value={this.state.age}
            name="age"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Age"
          />
          <h1>We want to get to know your country through your eyes.</h1>
          <h2>What is your favorite local dish?</h2>
          <input
            value={this.state.favFood}
            name="favFood"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Food"
          />
          <h2>What is your favorite band or song?</h2>
          <input
            value={this.state.favSong}
            name="favSong"
            onChange={this.handleInputChange}
            type="link"
            placeholder="Music"
          />
          <h2>What is your favorite place?</h2>
          <input
            value={this.state.favPlace}
            name="favPlace"
            onChange={this.handleInputChange}
            type="link"
            placeholder="Place"
          />
          <h2>What is something about your country few people know?</h2>
          <input
            value={this.state.funFact}
            name="funFact"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Fun Fact"
          />
          <h2>Which other countries have you visited?</h2>
          <input
            value={this.state.countriesVisited}
            name="countriesVisited"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Countries Visited"
          />
          <br />
          <br />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUp;

