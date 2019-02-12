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
      faveFood:"",
      faveSong:"",
      favePlace:"",
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
      faveFood:"",
      faveSong:"",
      favePlace:"",
      funFact:"",
      countriesVisited:"",
      image: ""
    });
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
      <div className="card">
      <div className="card-header"><h1>
          Welcome
        </h1></div>
      <div className="card-body">
        <form className="form">
        <br />
        <h2>Tell us about yourself:</h2>
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
          <br />
          <br />
           <h2>Tell us about your country and culture:</h2>
           <br />
           <h3>What is your favorite regional food?</h3>
          <input
            value={this.state.faveFood}
            name="faveFood"
            onChange={this.handleInputChange}
            type="text"
            placeholder="favorite food"
          />
          <h3>Share a link to your favorite regional music/song/artist?</h3>
          <input
            value={this.state.faveSong}
            name="faveSong"
            onChange={this.handleInputChange}
            type="text"
            placeholder="favorite song"
          />
          <h3>What is your favorite local spot?</h3>
          <input
            value={this.state.favePlace}
            name="favePlace"
            onChange={this.handleInputChange}
            type="text"
            placeholder="favorite place"
          />
          <h3>What is something most people don't know about your country?</h3>
          <input
            value={this.state.funFact}
            name="funFact"
            onChange={this.handleInputChange}
            type="text"
            placeholder="fun fact"
          />
           <h3>Which other countries have you visited?</h3>
          <input
            value={this.state.countriesVisited}
            name="countriesVisited"
            onChange={this.handleInputChange}
            type="text"
            placeholder="countries visited"
          />
          <h3>From your eyes to ours. Share a link to an image of your country you love.</h3>
          <input
            value={this.state.image}
            name="image"
            onChange={this.handleInputChange}
            type="url"
            placeholder="image"
          />
          <br />
          <br />
          <button className="btn btn-outline-primary btn-lg"  onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
      </div>
      </div>
    );
  }
}

export default SignUp;

