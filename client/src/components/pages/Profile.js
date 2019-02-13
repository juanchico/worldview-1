import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  state = {
    email: "",
    name:""
  };
  componentDidMount() {
    // check if user has already logged in successfully
    axios.get("/users/profile").then((res) => {
      console.log(res);
      this.setState({
        email:res.data.email,
        name:res.data.name
      });
    });
  }
 
  

  render(){
    return (
      <div>
      <ul>
        <li>
         welcome {this.state.name} 
        </li>
      </ul>
      </div>
    );
  }
} 

export default Profile;