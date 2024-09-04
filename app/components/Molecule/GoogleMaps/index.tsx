'use client'
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

interface MapComponentProps {
  apiKey: string;
  center: { lat: number; lng: number };
  zoom?: number;
  containerStyle?: { width: string; height: string };
}

const MapComponent: React.FC<MapComponentProps> = ({
  apiKey,
  center,
  zoom = 10,
  containerStyle = { width: '100%', height: '100%' },
}) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDKamSrVlGgJge4zLs8ET7vF2jPqzkpdPk',
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, [center]);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
};

export default React.memo(MapComponent);
