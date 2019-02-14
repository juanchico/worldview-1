import React from "react";
import errormap from './emap.png';
import "./style.css";

function ErrorPage() {
  return (
    <div>
      <center>
        <br />
      <h1>PAGE NOT FOUND</h1>
      <h2>
        Everything else is Supercalifragilisticexpialidocious! 
      </h2>
        <h3>
        Try saying that backwards and take a deep breath...
        </h3>
      <img src={errormap} alt="" style={{width: "75%", height:"75%"}}/>
      </center>
    </div>
  );
}

export default ErrorPage;
