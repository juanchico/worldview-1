import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
// import SignUp from "./SignUp";

// connect json file for country name and flag
// connect all user avatars, name, and fun fact  
// axios call to the database where people from that country

class Country extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    // after component loads, get all products from db
    axios.get(`/Country/${this.props.match.params.name}`).then((response) => {
      this.setState({
        results: response.data
      });
    //   console.log(results)
    });
  }

  
//cards, with youtube link music(favmusic) instead of image, name, age and country
  render() {
    return (
      <div>
      <div className="card">
  <div className="content">
    <h1>Country Name</h1>
  <ul className="list-group">
    {
      this.state.results.map((User) => {
        // create a route-able link for each product
        return (
          <li className="list-group-item" key={User._id}>
          <div className="img-container">
          <img alt={User.name} src={User.image} />
          </div>
            <Link to={`/fprofile/${User._id}`}>Name: {User.name}</Link>
            <br/>
            <p>Age: {User.age} </p>   
          </li>
        );
      })
    }
  </ul>
  </div>
  </div>
  </div>


    );
  }
}

export default Country;