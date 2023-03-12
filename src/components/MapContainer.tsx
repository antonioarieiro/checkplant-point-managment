import React, { useRef, useEffect, useState } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { center, mapOptions, mapContainerStyle } from '../config/MapConfig';
import { geoJson } from '../geoJson';

const MapContainer: React.FC = () => {
  const mapRef = useRef<google.maps.Map | undefined>(undefined);
  const [loadPolygon, setLoadPolygon] = useState(false);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'YOUR_API_KEY',
  });

  useEffect(() => {
    if (!loadPolygon) {
      setDefaultPolygon();
    }
  });

  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  const setDefaultPolygon = () => {
    if (mapRef.current) {
      const polygon = new window.google.maps.Polygon({
        paths: [geoJson],
        strokeColor: '#FFFF',
        strokeOpacity: 0.2,
        strokeWeight: 2,
        fillColor: '#FFFF',
        fillOpacity: 0.2,
      });

      polygon.setMap(mapRef.current);

      // Ajusta o mapa para exibir o polígono completamente
      const bounds = new window.google.maps.LatLngBounds();
      polygon.getPath().forEach((latLng) => {
        bounds.extend(latLng);
      });
      mapRef.current.fitBounds(bounds);

      setLoadPolygon(true);
    }
  };

  return loadPolygon ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={18}
      center={center}
      options={mapOptions}
      onLoad={onLoad}
    />
  ) : (
    <div>Loading Map...</div>
  );
};

export default MapContainer;
