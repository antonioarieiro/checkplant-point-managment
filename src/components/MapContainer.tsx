import React from 'react';
import { GoogleMap, Polygon } from '@react-google-maps/api';
import { center, mapOptions, mapContainerStyle, polygonPaths } from '../config/MapConfig';


const MapContainer: React.FC = () => {

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={18}
      center={center}
      options={mapOptions}
    >
      <Polygon
        paths={polygonPaths}
        options={{
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
        }}
      />
    </GoogleMap>
  );
};

export default MapContainer
