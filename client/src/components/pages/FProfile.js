import React from "react";
// import SignUp fromimport React from "react";
// import {Link} from "react-router-dom";
import axios from "axios";

class FProfile extends React.Component {
  state = {
    results: {}
  };

  componentDidMount() {
    // after component loads, get all products from db
    //this call needs to get the person's profile we asked about and the users followers below
    // console.log(response.data.followers)
    axios.get(`/fprofile/${this.props.match.params._id}`).then((response) => {
      this.setState({
        results: response.data
      });
  
    });
  }

  follow = () => {
    // make a put request to subtract one from quantity
    axios.put(`/api/Users/${this.props.match.params.id}`).then((response) => {
      // update state object with newest data
      this.setState({
        results: response.data
      });
    });
  };

  render() {
    return (
      <div className="card">
      <div className="card-header">{this.state.results.name}</div>
      <div className="card-body">
        <p>Name: {this.state.results.name}</p>
        <p>Age: {this.state.results.age}</p>
        <p>Country: {this.state.results.country}</p>
        <p>Music: {this.state.results.music}</p>
        <p>Food: {this.state.results.food}</p>
        <p>Place: {this.state.results.place}</p>
        <p>Countries Visited: {this.state.results.countriesVisited}</p>
        <p>Did you know?: {this.state.results.funFact}</p>

        <button 
          className="btn btn-outline-primary btn-sm" 
          onClick={this.follow}
          disabled={this.state.results.quantity <= 0}
        >
          Follow
        </button>
      </div>
    </div>
    );
  }
}
export default FProfile;