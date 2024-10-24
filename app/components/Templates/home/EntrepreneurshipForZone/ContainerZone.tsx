'use client'
import React from 'react';
import { useSelector } from "react-redux";
import MapComponent from '@components/Molecule/GoogleMaps/index';

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

const ContainerZone = () => {

    const {
        userCity,
        userIp,
        countryDetected,
        userRegion,
        latitudUser,
        longitudUser
    } = useSelector((state: any) => state.GeoLocation);

    const [hoveredMarker, setHoveredMarker] = React.useState<StoreLocation | null>(null);
    const [clickMarker, setClickMarker] = React.useState<StoreLocation | null>(null);

    return (
        <div className="w-full max-h-[500px] max-w-[1200px] mx-auto mt-10">
            <h2 className="text-center md:text-left text-4xl font-bold">Emprendimientos de tu zona</h2>
            <p className="text-center md:text-left text-2xl mt-2 font-bold">{userCity}</p>
            <div className="mt-5">
                <MapComponent
                    apiKey="AIzaSyDKamSrVlGgJge4zLs8ET7vF2jPqzkpdPk"
                    center={{ lat: latitudUser, lng: longitudUser }}
                    listStore={[]}
                    hoveredMarker={hoveredMarker}
                    setHoveredMarker={setHoveredMarker}
                    clickMarker={clickMarker}
                    setClickMarker={setClickMarker}
                    containerStyle={{
                        width: '100%',
                        height: '500px',
                    }}
                />
            </div>
        </div>
    )

}

export default ContainerZone;