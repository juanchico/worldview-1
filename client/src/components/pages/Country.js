import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
// import "style.css";

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
           <center><h1>{this.props.match.params.name}</h1></center>
        <div className="content" 
        style={{paddingLeft: "1rem",
        paddingRight: "1rem", fontSize: "15px",
        height: "350px",
        width: "325px",
        position: "relative"}}>
      <ul className="list-group" style={{listStyleType: "none", position: "relative", display:"inline", float: "left"}}>
        {
          this.state.results.map((User) => {
            // create a route-able link for each product
            return (
              <li className="list-group-item" key={User._id} style={{ marginTop: "18px", boxShadow: "0 3px 6px #999, 0 3px 6px #999",position: "relative", display:"inline", float: "left"}}>
              <div className="img-container" style={{ height: "60%",
              overflow: "hidden",  textAlign: "center", background:"#6CADDC", boxShadow: "0 3px 6px #999, 0 3px 6px #999"}}>
              <img alt={User.name} src={User.image} style={{width: "100%"}}/>
              </div>
              <br />
                <Link to={`/fprofile/${User._id}`}>Name: {User.name}</Link>
                <p>Age: {User.age} </p>
                <p>Fun Fact: {User.funFact} </p> 
              </li>
            );
          })
        }
      </ul>
      </div>
      </div>
    );
  }
}

export default Country;
