import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import axios from "axios"


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 53.478062,
      lng: -2.244666,
    },
    zoom: 0.5,
  };

  state ={
    locations:[]
  }

  componentDidMount() {
    axios
      .get(`https://country-back.herokuapp.com/api/locations`)
      .then(({ data }) => {
        this.setState({ locations: data });
      });
  }
  render() {
    const {locations} = this.state
    return (
      // how can i put funtion to count marker component?
      <div className="map" style = {{ height: "90vh", width: "100%" }}>
        <p className="mainp"> I have been {locations.length} countries!!!!😎</p>
        <GoogleMapReact
          bootstrapURLKeys = {{ key: "AIzaSyA_uga0gi30JufOft32qIDYAb8HAxcTdAY" }}
          defaultCenter = {this.props.center}
          defaultZoom = {this.props.zoom}
        >
          {locations.map((location) => {
            return (
              <Marker
                key = {location._id}
                lat = {location.lat}
                lng = {location.lng}
                name = {location.description}
                color = {location.color}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
