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
    setClickMarker,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    topPosition,
    grabRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
}) => {

    return (
        <div className="w-screen">
            <div className="w-full">
                <Banner />
            </div>
            <div className="hidden 950:grid grid-cols-12 md:px-5 pt-5 pb-10 relative">
                {/* Lista de Tiendas */}
                <div className="col-span-8 overflow-auto">
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
                <div className="col-span-4 relative">
                    <div className="sticky top-0 h-screen">
                        <MapComponent
                            apiKey="AIzaSyDKamSrVlGgJge4zLs8ET7vF2jPqzkpdPk"
                            center={{ lat: -36.82699, lng: -73.04977 }}
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
            </div>
            <div
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="block 950:hidden flex flex-1 md:px-5 pt-5 relative">
                <MapComponent
                    apiKey="AIzaSyDKamSrVlGgJge4zLs8ET7vF2jPqzkpdPk"
                    center={{ lat: -36.82699, lng: -73.04977 }}
                    listStore={listStore}
                    hoveredMarker={hoveredMarker}
                    setHoveredMarker={setHoveredMarker}
                    clickMarker={clickMarker}
                    setClickMarker={setClickMarker}
                    containerStyle={{
                        width: '100%',
                        height: '300px',
                    }}
                />
                <div
                    ref={grabRef}
                    className="w-full z-[99] h-screen bg-[#fff] border-t-[2px] border-r-[2px] border-l-[2px] px-5 pb-5 rounded-t-2xl absolute"
                    style={{ top: `${topPosition}%` }}
                >
                    <div
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleTouchStart} 
                        className="w-full flex justify-center cursor-grabbing p-3">
                        <div className='border-t-[5px] rounded-full border-[#000] w-[120px]'></div>
                    </div>
                    <p className="w-full text-center mt-5">
                        {listStore?.length || 0} Emprendimientos {city && `en ${city}`}
                    </p>
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
            </div>
        </div>

    )
}

export default ViewEntrepreneurship;