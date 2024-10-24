import React from 'react';
import { GoogleMap, Marker, OverlayView, useJsApiLoader } from '@react-google-maps/api';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface StoreLocation {
  id: string;
  latitud: string;
  longitud: string;
  name: string;
  imgUrl: string;
  store_categories: {
    data: Array<{
      id: string;
      attributes: {
        Name: string;
      };
    }>;
  };
}

interface MapComponentProps {
  apiKey: string;
  center: { lat: number; lng: number };
  zoom?: number;
  containerStyle?: any;
  listStore?: StoreLocation[];
  setHoveredMarker: React.Dispatch<React.SetStateAction<StoreLocation | null>>;
  hoveredMarker: StoreLocation | null;
  clickMarker: StoreLocation | null;
  setClickMarker: React.Dispatch<React.SetStateAction<StoreLocation | null>>;
}

const MapComponent: React.FC<MapComponentProps> = ({
  apiKey,
  center,
  zoom = 14,
  containerStyle = { width: '100%', height: '100%' },
  listStore = [],
  setHoveredMarker,
  hoveredMarker,
  clickMarker,
  setClickMarker
}) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const router = useRouter();

  const [map, setMap] = React.useState<google.maps.Map | null>(null);


  const onLoad = React.useCallback(
    (map: google.maps.Map) => {
      if (listStore.length > 0) {
        const bounds = new window.google.maps.LatLngBounds();
        listStore.forEach((location) => {
          const latLng = new window.google.maps.LatLng(
            Number(location.latitud),
            Number(location.longitud)
          );
          bounds.extend(latLng);
        });
        map.fitBounds(bounds);
        let calculatedZoom = 10; // Valor por defecto
        if (listStore.length > 10) {
          calculatedZoom = 5;
        } else if (listStore.length > 5) {
          calculatedZoom = 7;
        }
        // Evitar que fitBounds sobrescriba nuestro zoom calculado
        if (map.getZoom() > calculatedZoom) {
          map.setZoom(calculatedZoom);
        }
      } else {
        map.setCenter(center);
        map.setZoom(zoom);
      }
      setMap(map);
    },
    [center, listStore, zoom]
  );

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_TOP, // Posición opcional de los controles de zoom
        },
        maxZoom: 18, // Establece el zoom máximo permitido
        minZoom: 2,  // Establece el zoom mínimo permitido
      }}
    >
      {listStore.map((location, index) => {
        const position = {
          lat: Number(location.latitud),
          lng: Number(location.longitud),
        };
        return (
          <OverlayView
            key={location.id}
            position={position}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            // Opcional: ajustar el offset según sea necesario
            getPixelPositionOffset={(width, height) => ({
              x: -(width / 2),
              y: -(height / 2),
            })}
          >
            <div
              className={`cursor-pointer transform translate-x-[30%] -translate-y-1/2 relative ${
                location?.id === hoveredMarker?.id ? 'z-[99]' : 'z-[98]'
              }`}
              onMouseOver={() => setHoveredMarker(location)}
              onMouseOut={() => setHoveredMarker(null)}
              onClick={() => { setClickMarker(location); }}
            >
              <img
                src={location.imgUrl}
                alt={location.name}
                className={`transform -translate-x-1/2 ${
                  location?.id === hoveredMarker?.id
                    ? 'border-2 border-[#ffa850] h-20 w-20'
                    : 'h-16 w-16 border-2 border-transparent'
                } rounded-full border-white object-cover`}
              />
            </div>
          </OverlayView>
        );
      })}

      {clickMarker && (
        <OverlayView
          position={{
            lat: Number(clickMarker.latitud),
            lng: Number(clickMarker.longitud),
          }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div className="custom-overlay h-[320px] w-[320px] rounded-md z-[100]">
            <svg
              onClick={() => setClickMarker(null)}
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="black"
              className="absolute top-[5px] right-[5px] size-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <Link href={`/store/${clickMarker.id}`}>
              <img
                src={clickMarker.imgUrl}
                className="h-[210px] w-full rounded-t-md"
                alt={clickMarker.name}
              />
            </Link>
            <Link href={`/store/${clickMarker.id}`}>
              <div className="w-full px-3 pt-2">
                <div className="flex">
                  <h3 className="font-bold text-xl">{clickMarker.name}</h3>
                </div>
                <div className="flex mt-5">
                  {clickMarker?.store_categories?.data?.map((category, index) => (
                    <p key={index} className="text-sm mr-1">
                      #{category.attributes.Name}
                    </p>
                  ))}
                </div>
              </div>
            </Link>

          </div>
        </OverlayView>
      )}
    </GoogleMap>
  ) : (
    <div>Cargando...</div>
  );
};

export default React.memo(MapComponent);
