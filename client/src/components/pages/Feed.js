import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class Feed extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    axios.get(`/Feed/${this.props.current._id}`).then((response) => {
      console.log(response);
        this.setState({
          results: response.data[0].following
        });
      });
      
    }
  
  render() {
    return(
      <div>
        <center><h1>Feed</h1></center>
        <div className="content" 
        style={{paddingLeft: "1rem",
        paddingRight: "1rem", 
        fontSize: "15px",
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
                <p>Country: {User.country} </p>
                <p>Age: {User.age} </p>
                <p>Favorite food: {User.faveFood} </p>
                <p>Favorite song: <a target="_blank" href={User.songLink}>{User.faveSong}</a> </p>
                <p>Favorite Location: {User.favePlace} </p>
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

export default Feed;



// to the left users will have a search bar with the ability to search by country
// all the people they follow would show up when they search
// in the middle they would have the profiles, any updates from their profiles would appear at the top
// another option is to have profiles 