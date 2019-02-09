import React from "react";
import errormap from './emap.jpg';

function ErrorPage() {
  return (
    <div>
      <h1>PAGE NOT FOUND</h1>
      <h1>
        Everything else is Supercalifragilisticexpialidocious! 
      </h1>
      <img src={errormap} alt="" style={{width: "100%", height:"100%"}}/>
      <h2>
        Now, try saying that backwards and take a deep breath, everything will be alright. Go back to the homepage and restart from there.
      </h2>
    </div>
  );
}

export default ErrorPage;
