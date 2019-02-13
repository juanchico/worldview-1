import React from "react";
import { Link } from "react-router-dom";
// import logo from './logo.jpeg'; // with import

//box shadow boxShadow: "4px 8px #b2b6cb",
function NavBar(props){
return(
<ul className="nav nav tabs" style={{backgroundColor: "white", padding: "10px", width: "100%"}}>
<li className="nav-item">
    <Link to="/" className={window.location.pathname === "/" ? "nav-link active": "nav-link"}> 
    WorldView:Map
    </Link> 
</li>
<li className="nav-item">
    <Link to="/" className={window.location.pathname === "/map" ? "nav-link active": "nav-link"}> 
   <h3>Map</h3>
    </Link> 
</li>
<li className="nav-item">
    <Link to="/Feed" className={window.location.pathname === "/Feed" ? "nav-link active": "nav-link"}>
    <h3>Feed</h3>
    </Link>
</li>
<li>
    <Link to="/profile" className={window.location.pathname === "/profile" ? "nav-link active": "nav-link"}>
    <h3>Profile</h3>
    </Link>
</li>
<li className="nav-item">
    <Link to="/signup" className={window.location.pathname === "/signup" ? "nav-link active": "nav-link"}> 
    {props.navSignin}
    </Link> 
</li>
<li className="nav-item">
    <Link to="/login" className={window.location.pathname === "/login" ? "nav-link active": "nav-link"}> 
{props.navLogin}
    </Link> 
</li>

<li className="nav-item">
    <Link to="/login"  onClick={props.handleLogOut}> 
         {props.navOut}
    </Link> 
</li>
</ul>

);
}

export default NavBar;