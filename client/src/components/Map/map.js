import React, { Component } from "react"
import flags from "./flags.json";
import spin from "./map.css"
// import {Link} from "react-router-dom";

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
  backgroundColor: "#0000"
} 

class BasicMap extends Component {

mapNameClick= (country)=> {
  console.log(country);
// window.location.assign(`/Country/${country.properties.name}`);
// country.preventDefault();
}

//flag shows up over the country on the map when hovered over
// mapNameHover= ()=>{
//   // console.log(flag)
// }
// below where onClick do the hover, hover adds the name and the flag image to the country (that's with css)
// onMouseLeave={() => this.mapNameHover(flag)}

  render() {
    return (
      <div style={wrapperStyles}>
<svg style={{width:"100%", height:"100%"}} >
{Object.keys(flags).map((keyName, i) => (
<pattern id={"pattern_" + keyName.replace(/the /g,'').replace(/ /g,'')} x="100" y="5" width="95" height="67" patternUnits="userSpaceOnUse" key={i}>
<image xlinkHref={flags[keyName].flag} x="0" y="0" width="100" height="100" />
</pattern>
))}
</svg>
      {/* <NavBar></NavBar> */}
        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11,0,0],
          }}
        //   width={980}
        //   height={551}
          style={{
            position: "absolute",
            top: "200px",
            bottom: 0,
            left: 0,
            right: 0,
            width: "900px",
            height: "900px",
            margin: "auto", borderRadius: "50%",
            backgroundSize: "cover",
            backgroundColor: "#160c55",
            boxShadow: "-20px -20px 50px #000 inset, 0 0 20px 2px #000",
            animation: "spin 30s linear alternate infinite",
          }}
          >
          <ZoomableGroup center={[0,20]} disablePanning>
            <Geographies geography="/static/world-50m.json">
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                <Geography onClick={()=> this.mapNameClick(geography)}
                  key={i}
                  geography={geography}
                  projection={projection}
                  style={{
                    default: {
                      fill: "#d0fad8",
                      stroke: "#12be58",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "url(#pattern_" + geography.properties.name.replace(/the /g,'').replace(/ /g,'') + ")",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#FF5722",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                />
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default BasicMap;

