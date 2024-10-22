'use client'
import Banner from '@components/Molecule/Banner/index';
import MapComponent from '@components/Molecule/GoogleMaps/index';
import StoreCard from '@components/Molecule/shop/card/index';
import { useState } from 'react';
import ContainerDraggable from '../../Templates/Draggable';
import ChangeView from '@components/Molecule/Entrepreneurship/ChangeView';

const ViewEntrepreneurship = ({
    city,
    loadingStore,
    listStore,
    viewType,
    setViewType,
    hoveredMarker,
    setHoveredMarker,
    clickMarker,
    setClickMarker
}) => {

    return (
        <div className="flex flex-col h-screen">
            <div className="w-full">
                <Banner />
            </div>
            <div className="flex flex-1 md:px-5 pt-5 pb-10 relative">
                {/* Lista de Tiendas */}
                <div className="flex-1 overflow-auto mr-4">
                    <span className="text-md">
                        {listStore?.length || 0} Emprendimientos {city && `en ${city}`}
                    </span>
                    {loadingStore && (
                        <div className="mt-16 text-center">
                            <span>Cargando emprendimientos...</span>
                        </div>
                    )}
                    {listStore?.length === 0 && !loadingStore && (
                        <div className="mt-16 text-center">
                            <span>No se encontraron emprendimientos.</span>
                        </div>
                    )}
                    <ul className="grid grid-cols-12 gap-4 mt-4">
                        {listStore?.map((store) => (
                            <StoreCard
                                className="col-span-12 950:col-span-6 xl:col-span-4"
                                id={store?.id}
                                key={store?.url}
                                name={store?.name}
                                description={store?.description}
                                categories={store?.store_categories}
                                image={store?.imgUrl}
                                color={store?.backgroundColor || 'bg-white'}
                                url={store?.Url}
                                setHoveredMarker={setHoveredMarker}
                            />
                        ))}
                    </ul>
                </div>

                {/* Mapa Fijo */}
                <div className="hidden 950:block xl:w-1/3 relative">
                    <div className="sticky top-0 h-screen">
                        <MapComponent
                            apiKey="AIzaSyDKamSrVlGgJge4zLs8ET7vF2jPqzkpdPk"
                            center={{ lat: 39.8283, lng: -98.5795 }}
                            listStore={listStore}
                            hoveredMarker={hoveredMarker}
                            setHoveredMarker={setHoveredMarker}
                            clickMarker={clickMarker}
                            setClickMarker={setClickMarker}
                            containerStyle={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </div>
                </div>

                {/* Mapa en Pantallas Pequeñas */}
                <div className="md:hidden col-span-12 h-[200px]">
                    <ContainerDraggable />
                </div>
            </div>
        </div>

    )
}

export default ViewEntrepreneurship;