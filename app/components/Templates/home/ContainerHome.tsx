'use client'
import ViewHome from '@components/Organisms/home/index';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import useCheckMobileScreen from '@hooks/useCheckMobile';

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

const ContainerHome = () => {

    const [hoveredMarker, setHoveredMarker] = React.useState<StoreLocation | null>(null);
    const [clickMarker, setClickMarker] = React.useState<StoreLocation | null>(null);
    const isMobile = useCheckMobileScreen();

    const {
        featuredEntrepreneurship,
        newEntrepreneurship,
        featuredCategory,
        showShopPlans,
        showServicePlans
    } = useSelector((state: RootState) => state.Home);

    return (
        <ViewHome 
        hoveredMarker={hoveredMarker}
        setHoveredMarker={setHoveredMarker}
        clickMarker={clickMarker}
        setClickMarker={setClickMarker}
        featuredEntrepreneurship={featuredEntrepreneurship}
        newEntrepreneurship={newEntrepreneurship}
        featuredCategory={featuredCategory}
        showShopPlans={showShopPlans}
        showServicePlans={showServicePlans}
        listStoreInZone={[]}
        isMobile={isMobile}
        />
    );
}

export default ContainerHome;