import React from "react";
import { Link } from "react-router-dom";
 import "./style.css";
// import logo from './logo.jpeg'; // with import

//box shadow boxShadow: "4px 8px #b2b6cb",
function NavBar(props){
return(
    <div>
<nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
      <Link to="/" className={window.location.pathname === "/" ? "nav-link active": "nav-link"}> 
    World View
    </Link> 
      </li>
      <li className="nav-item">
      <Link to="/" className={window.location.pathname === "/map" ? "nav-link active": "nav-link"}> 
   <h3>{props.navM}</h3>
    </Link> 
      </li>
      <li className="nav-item">
      <Link to="/Feed" className={window.location.pathname === "/Feed" ? "nav-link active": "nav-link"}>
    <h3>{props.navF}</h3>
    </Link>
      </li>
      <li className="nav-item">
      <Link to="/profile" className={window.location.pathname === "/profile" ? "nav-link active": "nav-link"}>
    <h3>{props.navP}</h3>
    </Link>
      </li>
      <li className="nav-item">
      <Link to="/signup" className={window.location.pathname === "/signup" ? "nav-link active": "nav-link"}> 
    <h3>{props.navSignin}</h3>
    
    </Link>
      </li>
      <li className="nav-item">
      <Link to="/login" className={window.location.pathname === "/login" ? "nav-link active": "nav-link"}> 
         <h3>{props.navLogin}</h3>
    </Link>
      </li>
      <li className="nav-item">
      <Link to="/login"  className={window.location.pathname === "/login" ? "nav-link active": "nav-link"}  onClick={props.handleLogOut}> 
        <h3> {props.navOut}</h3>
    
    </Link>
      </li>
    </ul>
</nav>
</div>
);
}

export default NavBar;