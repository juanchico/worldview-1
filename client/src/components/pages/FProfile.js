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
    // axios.get(`/fprofile`).then(response => console.log(response.data))
    axios.get(`/fprofile/${this.props.match.params._id}`).then((response) => {
      console.log(response);
      this.setState({
        results: response.data
      });
  
    }).then(response => console.log(response)).catch(err => console.log(err)) 
   
  }

  // follow = () => {
  //   // make a put request to subtract one from quantity
  //   axios.put(`/api/Users/${this.props.match.params.id}`).then((response) => {
  //     // update state object with newest data
  //     this.setState({
  //       results: response.data
  //     });
  //   });
  // };

  render() {
    return (
      <div className="card">
      <div className="card-header">{this.state.results.name}</div>
      <div className="card-body">
        <p>Name: {this.state.results.name}</p>
        <p>Age: {this.state.results.age}</p>
        <p>Country: {this.state.results.country}</p>
        <p>Music: {this.state.results.faveSong}</p>
        <p>Food: {this.state.results.faveFood}</p>
        <p>Place: {this.state.results.favePlace}</p>
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