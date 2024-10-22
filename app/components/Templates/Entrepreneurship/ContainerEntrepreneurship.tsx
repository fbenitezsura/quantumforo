'use client'
import ViewEntrepreneurship from '@components/Organisms/Entrepreneurship/ViewEntrepreneurship';
import { useAppDispatch, useAppSelector } from '@clean/application/redux/hook';
import { useEffect, useState } from 'react';
import { getAllStore, searchStore } from '@clean/application/redux/store/store.slice';
import { useSearchParams } from 'next/navigation';
import React from 'react';

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

const ContainerEntrepreneurship = ({
}) => {

    const searchParams = useSearchParams()

    const search = searchParams.get('search');
    const city = searchParams.get('city');

    const dispatch = useAppDispatch();

    const [viewType, setViewType] = useState('list');
    const [hoveredMarker, setHoveredMarker] = React.useState<StoreLocation | null>(null);
    const [clickMarker, setClickMarker] = React.useState<StoreLocation | null>(null);

    const {
        loadingSearchStore,
        listSearchStore,
        categorySelected,
        categories
    } = useAppSelector((state) => state.Store);

    useEffect(() => {
        const searchParams = { name: search, categoryName: search };
        dispatch(searchStore(searchParams));
    }, [search]);


    return (
        <ViewEntrepreneurship
        listStore={listSearchStore}
        loadingStore={loadingSearchStore}
        city={city}
        viewType={viewType}
        setViewType={setViewType}
        hoveredMarker={hoveredMarker}
        setHoveredMarker={setHoveredMarker}
        clickMarker={clickMarker}
        setClickMarker={setClickMarker}
        />
    )
}

export default ContainerEntrepreneurship;