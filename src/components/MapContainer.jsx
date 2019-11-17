/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends React.Component {
  render() {
    const { google, lat, lng } = this.props;
    console.log(`Latitud y longitud ${lat} y ${lng}`);

    return (
      <Map
        google={google}
        zoom={14}
        initialCenter={{ lat, lng }}

      >

        {/* <Marker
          name="Platzi HQ CDMX"
          position={{ lat: 19.4267261, lng: -99.1718706 }}
          // position={{lat: google[0].venueLat, lng: google[0].venueLon}}
        /> */}
        <Marker
          name="Platzi HQ Bogota"
          position={{ lat: 4.6560716, lng: -74.0595918 }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);