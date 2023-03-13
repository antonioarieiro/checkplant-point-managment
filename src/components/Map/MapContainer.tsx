import React from 'react';
import { GoogleMap, Polygon } from '@react-google-maps/api';
import { center, mapOptions, mapContainerStyle, polygonPaths, options } from '../../config/MapConfig';


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
        options={options}
      />
    </GoogleMap>
  );
};

export default MapContainer
