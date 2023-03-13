import React, { useState } from 'react';
import { GoogleMap, Polygon, Marker } from '@react-google-maps/api';
import { center, mapOptions, mapContainerStyle, polygonPaths, options } from '../../config/MapConfig';

interface Map {
  click: (e: any) => void;
}
var iconBase = 'https://i.ibb.co/QXcSVn8/Regular-on-Move-off-1-1.png';

const MapContainer: React.FC<Map> = () => {
  const [markers, setMarkers] = useState<google.maps.LatLngLiteral[]>([]);

  const handleClick = (event: google.maps.MapMouseEvent) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarkers([...markers, { lat, lng }]);
  };

  return (
   <>
   
   <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={18}
      center={center}
      options={mapOptions}
      onClick={handleClick}
    >
      <Polygon paths={polygonPaths} options={options} />
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker}
          draggable
          icon={iconBase }
        />
      ))}
    </GoogleMap>
   </>
  );
};

export default MapContainer;
