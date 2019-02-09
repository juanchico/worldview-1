import React, { Component } from "react"
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
  backgroundColor: "#1a3dee"
}

// backgroundColor: "#1a3dee"

class BasicMap extends Component {

mapNameClick= (country)=> {
console.log(country)
// to get a name of a country from the json file it would by country.properties.name

}

//flag shows up over the country on the map when hovered over
// mapNameHover= (flag)=>{
//   console.log(flag)
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
                      fill: "#a9f8c9",
                      stroke: "#12be58",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "pink",
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