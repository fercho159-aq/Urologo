'use client';

import { APIProvider, Map as GoogleMap, AdvancedMarker } from '@vis.gl/react-google-maps';

type MapProps = {
  position: { lat: number; lng: number };
};

export default function Map({ position }: MapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center">
        <p className="text-muted-foreground text-center p-4">
          La clave de API de Google Maps no está configurada.
        </p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <GoogleMap
        style={{ width: '100%', height: '100%' }}
        defaultCenter={position}
        defaultZoom={15}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapId="cirugia-prostata-map"
      >
        <AdvancedMarker position={position} title="Cirugía de Próstata Clínica" />
      </GoogleMap>
    </APIProvider>
  );
}
