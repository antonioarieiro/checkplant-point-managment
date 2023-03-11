import React from 'react';
import { Map, GoogleApiWrapper, IMapProps } from 'google-maps-react';

const MapContainer: React.FC<IMapProps> = ({ google }) => {
  return (
    <Map
      google={google}
      zoom={14}
      initialCenter={{ lat: 37.7749, lng: -122.4194 }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDb5Vqin9Bb_uP_SajLa1_574BPthGnw-U',
})(MapContainer);
