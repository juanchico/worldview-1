import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
// import "style.css";
// import SignUp from "./SignUp";
// import "../pages/";

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
           <h1>Country Name</h1>
        <div className="card" style={{background: "#fff",
          borderRadius: "2px", height: "325px", margin: "1rem",
          position: "relative", width: "325px", boxShadow: "0 3px 6px #999, 0 3px 6px #999", textAlign: "left"}}>
        <div className="content" style={{paddingLeft: "1rem",
        paddingRight: "1rem", fontSize: "15px"}}>
      <ul className="list-group" style={{listStyleType: "none"}}>
        {
          this.state.results.map((User) => {
            // create a route-able link for each product
            return (
              <li className="list-group-item" key={User._id} style={{ marginTop: "18px"}}>
              <div className="img-container" style={{ height: "60%",
              overflow: "hidden",  textAlign: "center", background:"#6CADDC",}}>
              <img alt={User.name} src={User.image} style={{width: "60%"}}/>
              </div>
                <Link to={`/fprofile/${User._id}`}>Name: {User.name}</Link>
                <br/>
                <p>Age: {User.age} </p>
                <p>Did you know?: {User.funFact} </p> 
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