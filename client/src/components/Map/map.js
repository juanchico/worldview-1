import React, { Component } from "react"
import flags from "./flags.json";
// import {Link} from "react-router-dom";
// import NavBar from "../NavBar"
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

  // state = {
  //   flags: "https://i.vimeocdn.com/portrait/58832_300x300"
  // };

mapNameClick= (country)=> {
// console.log(country)
window.location.assign(`/Country/${country.properties.name}`);
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
      {/* <NavBar></NavBar> */}
        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11,0,0],
          }}
        //   width={980}
        //   height={551}
          style={{
            width: "100%",
            height: "auto",
            marginLeft: "0px"
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
                      backgroundImage: `url(${flags.Canada.flag})`,
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


/* <svg style={{width:"100%", height:"100%"}} >
<mask maskUnits="userSpaceOnUse" id="fade">
  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="100%">
    <stop offset ="0" style={{stopColor: "#FFFFFF"}} />
    <stop offset ="1" style={{stopColor: "#000000"}} />
  </linearGradient>
  <rect fill="url(#gradient)" width="100%" height="100%" />
</mask>
<pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
  <circle mask="url(#fade)" cx="20" cy="20" r="20" />
</pattern>
</svg> */

/* <div style={wrapperStyles}>
      <svg style={{width:"100%", height:"100%"}} >
  <pattern id="pattern" x="200" y="10" width="100" height="95" patternUnits="userSpaceOnUse">
  <image xlinkHref={flags.Canada.flag} x="0" y="0" width="100" height="100" />
  </pattern>
</svg> */

/* <div style={wrapperStyles}>
<svg style={{width:"100%", height:"100%"}} >
<pattern id="pattern" x="200" y="10" width="100" height="95" patternUnits="userSpaceOnUse">
<image xlinkHref={flags.Canada.flag} x="0" y="0" width="100" height="100" />
</pattern>
</svg> */