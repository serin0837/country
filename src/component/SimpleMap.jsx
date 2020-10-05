import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 53.478062,
      lng: -2.244666,
    },
    zoom: 0.5,
  };

  render() {
    return (
      // how can i put funtion to count marker component?

      <div className="map" style={{ height: "90vh", width: "100%" }}>
        <p>Wow! You have been{}</p>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDP2O3fvdrPTLCE9rie_0Z9kMBdGiE2M1I" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={53.5} lng={-2.2} name="I am here ❤" color="red" />
          <Marker lat={64.9} lng={-19} name="I was here!!" color="blue" />
          <Marker lat={62.0} lng={10.0} name="I was here!!" color="blue" />
          <Marker lat={40.0} lng={-4.0} name="I was here!!" color="blue" />
          <Marker lat={39.5} lng={-8.0} name="I was here!!" color="blue" />
          <Marker lat={46.0} lng={2.0} name="I was here!!" color="blue" />
          <Marker lat={51.0} lng={9.0} name="I was here!!" color="blue" />
          <Marker lat={50.83} lng={4.0} name="I was here!!" color="blue" />
          <Marker lat={52.5} lng={5.75} name="I was here!!" color="blue" />
          <Marker lat={32.0} lng={-5.0} name="I was here!!" color="blue" />
          <Marker lat={27.0} lng={30.0} name="I was here!!" color="blue" />
          <Marker lat={42.83} lng={12.83} name="I was here!!" color="blue" />
          <Marker lat={52.0} lng={20.0} name="I was here!!" color="blue" />
          <Marker lat={47.0} lng={8.0} name="I was here!!" color="blue" />
          <Marker lat={47.3} lng={13.3} name="I was here!!" color="blue" />
          <Marker lat={49.75} lng={15.5} name="I was here!!" color="blue" />
          <Marker lat={35.0} lng={105.0} name="I was here!!" color="blue" />
          <Marker lat={16.16} lng={107.8} name="I was here!!" color="blue" />
          <Marker lat={1.36} lng={103.8} name="I was here!!" color="blue" />
          <Marker lat={15.0} lng={100.0} name="I was here!!" color="blue" />
          <Marker lat={13.0} lng={105.0} name="I was here!!" color="blue" />
          <Marker lat={23.5} lng={121.0} name="I was here!!" color="blue" />
          <Marker lat={13.0} lng={122.0} name="I was here!!" color="blue" />
          <Marker lat={36.0} lng={138.0} name="I was here!!" color="blue" />
          <Marker lat={22.25} lng={114.16} name="I was here!!" color="blue" />
          <Marker
            lat={37.0}
            lng={127.5}
            name="I born in here🐣"
            color="yellow"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
