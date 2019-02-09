import React from "react";
// import SignUp from "./SignUp";

function Profile() {
  return (
    <div className="hero text-center" style={ { backgroundImage: `url(require("https://i.imgur.com/qkdpN.jpg"))` } }>
      <h1>About You</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
        mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet ryisus ac finibus
        porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
        semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
        rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}

export default Profile;