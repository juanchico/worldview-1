import React from "react";
// import SignUp fromimport React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class FProfile extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    // after component loads, get all products from db
    //this call needs to get the person's profile we asked about and the users followers below
    // console.log(response.data.followers)
    axios.get("/api/Users").then((response) => {
      this.setState({
        results: response.data.followers
      });
    });
  }

  render() {
    return (
      <ul className="list-group">
      <h1>Hello! t's me</h1>
        {
          this.state.results.map((profile) => {
            // create a route-able link for each product
            return (
              <li className="list-group-item" key={profile.upc}>
                {profile.name}
                {" ... "}
                <Link to={`/profile/${profile.upc}`}>view more</Link>
              </li>
            );
          })
        }
      </ul>
    );
  }
}
export default FProfile;