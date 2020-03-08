import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

export class MapView extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stores: [{latitude: 37.354107, longitude: -121.955238},
                {latitude: 47.6062, longitude: -122.3321},
                {latitude: 37.8715, longitude: -122.2730},
                {latitude: 34.0522, longitude: -118.2437},
                {latitude: 27.6648, longitude: -81.5158},
                {latitude: 47.5524695, longitude: -122.0425407}]
      }
    }
  
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
      
       onClick={() => {return this.props.onToggleeOpen}} />
      })
    }
  
    render() {
      return (
          <Map
            google={this.props.google}
            zoom={4}
            style={this.props.mapStyles}
            initialCenter={{ lat: 37.444, lng: -100.176}}
          >
            {this.displayMarkers()}
            <InfoWindow onCloseClick={this.props.onToggleeOpeen}>
                <div>
                    {" "}
                    Controlled zoom: {this.props.zoom}
                </div>
            </InfoWindow>
          </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBMeo91RWYZS_pZ_bzOCJ3eVCUuAFK0y-Y'
  })(MapView);
