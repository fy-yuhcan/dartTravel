'use client';

import React, { useCallback, useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, Polyline } from '@react-google-maps/api';
import { fetchLocations, Location } from '@/components/api/search';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 35.6812362,
  lng: 139.7671248,
};

export default function MapComponent() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "", // 環境変数を使用
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const onLoad = useCallback(function callback(mapInstance: google.maps.Map) {
    if (locations.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      locations.forEach(location => bounds.extend({ lat: location.lat, lng: location.lng }));
      mapInstance.fitBounds(bounds);
    }
    setMap(mapInstance);
  }, [locations]);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  useEffect(() => {
    const getLocations = async () => {
      try {
        const data = await fetchLocations();
        setLocations(data);
      } catch (err) {
        setError('Failed to load locations.');
      } finally {
        setLoading(false);
      }
    };

    getLocations();
  }, []);

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;
  if (!isLoaded || loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tokyo Tour Map</h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            label={(index + 1).toString()}
          />
        ))}
        <Polyline
          path={locations.map(location => ({ lat: location.lat, lng: location.lng }))}
          options={{
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
          }}
        />
      </GoogleMap>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Locations:</h2>
        <ul className="list-disc pl-5">
          {locations.map((location, index) => (
            <li key={index}>
              {index + 1}. {location.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
